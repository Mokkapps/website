---
title: 'How To Generate Angular & Spring Code From OpenAPI Specification'
categories:
  - 'angular'
  - 'development'
  - 'spring'
  - 'fullstack'
  - 'frontend'
  - 'backend'
cover: 'images/cover.png'
---

If you are developing the backend and frontend part of an application you know that it can be tricky to keep the data models between the backend & frontend code in sync. Luckily, we can use generators that generate server stubs, models, configuration and more based on a [OpenAPI specification](https://swagger.io/specification/).

In this article, I want to demonstrate how you can implement such an OpenAPI generator in a demo application with an [Angular](https://angular.io) frontend and a [Spring Boot](https://spring.io/projects/spring-boot) backend.

## The Demo Application

For this article, I have created a simple demo application that provides a backend REST endpoint based on Spring Boot that returns a list of gaming news. The frontend based on Angular requests this list from the backend and renders the list of news.

The [source code is available on GitHub](https://github.com/Mokkapps/openapi-angular-spring-demo).

The Angular frontend was generated with the [Angular CLI](https://cli.angular.io/) and the Spring Boot backend with [Spring Initializr](https://start.spring.io/).

## OpenAPI

[The OpenAPI specification](<[https://swagger.io/specification/](https://swagger.io/specification/)>) is defined as

> a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection

Such an OpenAPI definition can be used by tools for testing, to generate documentation, server and client code in various programming languages, and many other use cases.

The specification has undergone three revisions since its initial creation in 2010. The latest version is 3.0.2 (as of 02.03.2020).

## OpenAPI Generator

In this article, I want to focus on code generators, especially on the [openapi-generator](https://github.com/OpenAPITools/openapi-generator) from [OpenAPI Tools](https://openapitools.org/).

This picture taken from the project's [GitHub repository](https://github.com/OpenAPITools/openapi-generator) shows the impressive list of supported languages and frameworks:

![OpenAPI Supported Languages & Frameworks](/images/openapi-languages-frameworks.png)

For this article's demo project the [@openapitools/openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli) package is used to generate the Angular code via npm and [openapi-generator-gradle-plugin](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-gradle-plugin) to generate the Spring code using Gradle.

## OpenAPI Schema Definition

The OpenAPI code generator needs a `yaml` schema definition file which includes all relevant information about the API code that should be generated. 

Based on the [official petstore.yaml example](https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml) I created a simple `schema.yaml` file for the demo news application:

```yaml
openapi: '3.0.0'
servers:
  - url: http://localhost:8080/api
info:
  version: 1.0.0
  title: Gaming News API
paths:
  /news:
    summary: Get list of latest gaming news
    get:
      tags:
        - News
      summary: Get list of latest gaming news
      operationId: getNews
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ArticleList'

components:
  schemas:
    ArticleList:
      type: array
      items:
        $ref: '#/components/schema/Article'
    Article:
      required:
        - id
        - title
        - date
        - description
        - imageUrl
      properties:
        id:
          type: string
          format: uuid
        title:
          type: string
        date:
          type: string
          format: date
        description:
          type: string
        imageUrl:
          type: string
```

Let's take a look at the most important parts of this file:

- `openapi`: The version of the OpenAPI specification
- `servers -> url`: The backend URL
- `info`: General API information
- `paths`: This section defines the API endpoints. In our case, we have one GET endpoint at `/news` which returns a list of articles.
- `components`: Describes the structure of the payload

For more information about the schema definition, you can take a look at the [basic structure](https://swagger.io/docs/specification/basic-structure/) or at the [full specification (in this case for v3)](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md).

### Generate backend code based on this schema

In this section, I will demonstrate how the backend code for Spring Boot can be generated based on our schema definition.

The first step is to modify the `build.gradle` file:

```groovy
plugins {
    id "org.openapi.generator" version "4.2.3"
}

compileJava.dependsOn('openApiGenerate')

sourceSets {
    main {
        java {
            srcDir "${rootDir}/backend/openapi/src/main/java"
        }
    }
}

openApiValidate {
    inputSpec = "${rootDir}/openapi/schema.yaml".toString()
}

openApiGenerate {
    generatorName = "spring"
    library = "spring-boot"
    inputSpec = "${rootDir}/openapi/schema.yaml".toString()
    outputDir = "${rootDir}/backend/openapi".toString()
    systemProperties = [
            modelDocs      : "false",
            models         : "",
            apis           : "",
            supportingFiles: "false"
    ]
    configOptions = [
            useOptional          : "true",
            swaggerDocketConfig  : "false",
            performBeanValidation: "false",
            useBeanValidation    : "false",
            useTags              : "true",
            singleContentTypes   : "true",
            basePackage          : "de.mokkapps.gamenews.api",
            configPackage        : "de.mokkapps.gamenews.api",
            title                : rootProject.name,
            java8                : "false",
            dateLibrary          : "java8",
            serializableModel    : "true",
            artifactId           : rootProject.name,
            apiPackage           : "de.mokkapps.gamenews.api",
            modelPackage         : "de.mokkapps.gamenews.api.model",
            invokerPackage       : "de.mokkapps.gamenews.api",
            interfaceOnly        : "true"
    ]
}
```

As you can see, two new Gradle tasks are defined: `openApiValidate` and `openApiGenerate`. The first task can be used to validate the schema definition, and the second task generates the code.

To be able to reference the generated code in the Spring Boot application it needs to be configured as `sourceSet`. Additionally, it is recommended to define `compileJava.dependsOn('openApiGenerate')` to ensure that the code is generated each time the Java code is compiled.

For the backend code, we just want to generate models and interfaces, which is done in `configOptions` by setting `interfaceOnly: "true"`.

Detailed documentation about all possible configuration options can be found at the [official GitHub repository](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-gradle-plugin).

Running `./gradlew openApiGenerate` produces this code:

![Generated Backend Code](/images/generated-backend-code.png)

Make sure to add this folder with generated code to your `.gitignore` file and exclude it from code coverage & analysis tools.

At this point, we can use the generated code in our Spring Boot backend. The first step is to create a `Controller` which implements the generated OpenAPI interface:

```java
import de.mokkapps.gamenews.api.NewsApi;

@RequestMapping("/api")
@Controller
public class NewsController implements NewsApi {
    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @Override
    @GetMapping("/news")
    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation("Returns list of latest news")
    public ResponseEntity<List<Article>> getNews() {
        return new ResponseEntity<>(this.newsService.getNews(), HttpStatus.OK);
    }
}
```

This `GET` endpoint is available at `/api/news` and returns a list of news that is provided by `NewsService` which just returns a dummy news article:

```java
@Service
public class NewsService {
    public List<Article> getNews() {
        List<Article> articles = new ArrayList<>();
        Article article = new Article();
        article.setDate(LocalDate.now());
        article.setDescription("An article description");
        article.setId(UUID.randomUUID());
        article.setImageUrl("https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80");
        article.setTitle("A title");
        articles.add(article);
        return articles;
    }
}
```

`@CrossOrigin(origins = "http://localhost:4200")` allows requests from our frontend during local development and `@ApiOperation("Returns list of latest news")` is used for Swagger UI which is configured in [SpringConfig.jav](https://github.com/Mokkapps/openapi-angular-spring-demo/blob/master/backend/src/main/java/de/mokkapps/openapidemobackend/config/SwaggerConfig.java).

Finally, we can run the backend using `./gradlew bootRun` and trigger the news endpoint

```bash                                                                             
curl -v http://localhost:8080/api/news
```

which returns this JSON payload:

```json
[
  {
    "id": "75f71b92-d1e5-43dd-862f-739b69cdf3aa",
    "title": "A title",
    "date": "2020-02-26",
    "description": "An article description",
    "imageUrl": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
  }
]
```

### Generate frontend code based on this schema

In this section, I want to describe how Angular code can be generated based on our schema definition.

First, the OpenAPI generator CLI needs to be added as npm dependency:

```bash
npm add @openapitools/openapi-generator-cli
```

Next step is to create a new npm script in `package.json` that generates the code based on the OpenAPI schema:

```json
{
  "scripts": {
    "generate:api": "openapi-generator generate -g typescript-angular -i ../openapi/schema.yaml -o ./build/openapi"
  }
}
```

This script generates the code inside the `frontend/build/openapi` folder:

![Generated Frontend Code](/images/generated-frontend-code.png)

Make sure to add this folder with generated code to your `.gitignore` file and exclude it from code coverage & analysis tools.

It is also important to run this code generation script each time you run, test or build your application. I would, therefore, recommend using the `pre` syntax for npm scripts:

```json
{
  "scripts": {
    "generate:api": "openapi-generator generate -g typescript-angular -i ../openapi/schema.yaml -o ./build/openapi",
    "prestart": "npm run generate:api",
    "start": "ng serve",
    "prebuild": "npm run generate:api",
    "build": "ng build"
  }
}
```

Finally, we can import the generated module in our Angular application in `app.module.ts`:

```typescript
import { ApiModule } from 'build/openapi/api.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ApiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Now we are ready and can use the generated code in the frontend part of the demo application. This is done in `app.component.ts`:

```typescript
import { NewsService } from 'build/openapi/api/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  $articles = this.newsService.getNews();

  constructor(private readonly newsService: NewsService) {}
}
```

Last step is to use the `AsyncPipe` in the HTML to render the articles:

```html
<h1>News</h1>

<div *ngFor="let article of $articles | async">
  <p>Title: {{article.title}}</p>
  <img [src]="article.imageUrl" width="400" alt="Article image" />
  <p>Date: {{article.date}}</p>
  <p>Description: {{article.description}}</p>
  <p>ID: {{article.id}}</p>
</div>
```

If your backend is running locally, you can now serve the frontend by calling `npm start` and open a browser on `http://localhost:4200` and you should see the dummy article:

![Running Demo](./images/running-example.jpg)

## Alternative

Of course, it is also possible to generate the frontend code if you have no control over the backend code but is supports OpenAPI.
 
It is then necessary to adjust the npm script to use the backend URL instead of referencing the local schema file:

```json
{
  "scripts": {
    "generate:api": "openapi-generator generate -g typescript-angular -i http://my.backend.example/swagger/v1/swagger.json -o ./build/openapi"
  }
}
```

## Conclusion

Having one file to define your API is helpful and can save you a lot of development time and prevent possible bugs caused by different models or API implementations in your frontend and backend code.

OpenAPI provides a good specification with helpful documentation. Additionally, many existing backends use Swagger for their API documentation, therefore it should also be possible to use this code generation for frontend applications where you cannot to modify the corresponding backend.

Due to the many supported languages and frameworks, it can be used in nearly every project, and the initial setup is not very hard. 

In my current project, we use OpenAPI code generation for every new project and are very happy with it. 

Let me know in the comments what you think about this approach and if you also have some OpenAPI experiences to share.
