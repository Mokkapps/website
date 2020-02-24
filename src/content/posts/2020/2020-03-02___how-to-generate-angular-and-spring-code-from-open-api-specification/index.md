---
title: "How To Generate Angular & Spring Code From OpenAPI Specification"
categories:
  - "angular"
  - "development"
  - "spring"
cover: "images/cover.png"
---

If you are developing the backend and frontend part of an application you know that it can be tricky to keep the data models between the backend & frontend code in sync. Luckily, we can use generators that generate server stubs, models, configuration and more based on a [OpenAPI specification (v2 or v3)](https://swagger.io/specification/).

In this article, I want to demonstrate how you can implement such an OpenAPI generator in a demo application with an Angular frontend and a Spring Boot backend. 

## The Demo Application

For this article, I have created a simple demo application which provides a backend REST endpoint that returns a list of gaming news. The frontend requests this list from the backend and renders them.

The [source code is available on GitHub](https://github.com/Mokkapps/openapi-angular-spring-demo).

The Angular frontend was generated using [AngularCLI](https://cli.angular.io/) and the Spring Boot backend using [Spring Initializr](https://start.spring.io/).

## OpenAPI

[The OpenAPI specification]([https://swagger.io/specification/](https://swagger.io/specification/)) is defined as

> a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection

Such an OpenAPI definition can be used to by tools for testing, to generate documentation, server and client code in various programming languages and many other use cases. 

The specification has undergone tree revisions since its initial creation in 2010. The latest version is 3.0.2 (as of 02.03.2020)

## The OpenAPI Generator

We want to focus on code generators especially on [openapi-generator](https://github.com/OpenAPITools/openapi-generator) from [OpenAPI Tools](https://openapitools.org/).

This picture from the GitHub repo shows the impressive list of supported languages and frameworks:

![OpenAPI Supported Languages & Frameworks](/images/openapi-languages-frameworks.png)

For our demo project we use [@openapitools/openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli) to generate the frontend code via npm and [openapi-generator-gradle-plugin](https://mvnrepository.com/artifact/org.openapitools/openapi-generator-gradle-plugin) to generate the Java code using Gradle.

## The OpenAPI Schema Definition

Foundation for the code generation is a schema definition:

### Create a schema.yaml based on OpenAPI spec

Based on the [offical petstore.yaml example](https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml) we create our own `schema.yaml` file
 
```yaml
openapi: "3.0.0"
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
        "200":
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ArticleList"

components:
  schemas:
    ArticleList:
      type: array
      items:
        $ref: "#/components/schema/Article"
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

The [basic structure](https://swagger.io/docs/specification/basic-structure/), [full spec](https://swagger.io/docs/specification/basic-structure/)

### Generate frontend code based on this schema

Install OpenAPI generator CLI via npm

```bash
npm add @openapitools/openapi-generator-cli
```

Create a new npm script in `package.json` to generate the code:

````json
{
    "scripts": {
        "generate:api": "openapi-generator generate -g typescript-angular -i ../openapi/schema.yaml -o ./build/openapi",
    }
}
````

This script generates the code in a `frontend/build/openapi` folder:

![Generated Frontend Code](/images/generated-frontend-code.png)

Make sure to add this folder with generated code to your `.gitignore` file and exclude it from code coverage & analysis tools. 

Add it to prebuild, preserve and so on

Path mapping

Import ApiModule

proxy.conf.json → [https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)

### Generate backend code based on this schema

First step is to add the gradle plugin to `build.gradle`

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

We only generate models and API, see screenshot

![Generated Backend Code](/images/generated-backend-code.png)

Swagger UI

NewsService

## Alternatives

You can also generate your frontend code if you have no control over the backend code if it uses OpenAPI: 

You would then modify your npm script to use the backend URL instead of referencing the local schema file:

````json
{
    "scripts": {
        "generate:api": "openapi-generator generate -g typescript-angular -i http://any-backend/swagger/v1/swagger.json -o ./build/openapi",
    }
}
````

## Conclusion
