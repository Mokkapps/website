---
title: 'Property Based Testing With Typescript'
categories:
  - 'development'
  - 'testing'
cover: 'images/cover.jpg'
---

In my current project my colleague [Michael Seifert](https://www.digitalernachschub.de) introduced property based testing in our Python codebase. It was the first time I heard about it and it sounded fascinating, so I wanted to also
implement it in our frontend code based on [Vue.js](https://vuejs.org/) with [Jest](https://jestjs.io/) as testing framework and [TypeScript](https://www.typescriptlang.org/) as programming language.

In this article I want to give you an introduction to property based testing and show you how you can use it in the most used TypeScript-based testing frameworks like [Jest](https://jestjs.io/), [Karma](https://karma-runner.github.io/4.0/index.html), and [Mocha](http://mochajs.org/).

## Example Based Testing

> TL;DR: A single concrete example of expected behavior of the system under test.

Let me first describe how most of us developers usually write their unit tests.

Let's assume we want to test this simple TypeScript function:

```ts
/**
 * Returns the position of the first occurrence of `pattern` in `text`
 */
export const indexOf = (text: string, pattern: string): number => {
  return text.indexOf(pattern);
};
```

Typical unit tests for this method using [Jest](https://jestjs.io/) or [Mocha](http://mochajs.org/) would be:

```ts
describe('Example based tests', () => {
  it('should return -1 if text does not contain the given pattern', () => {
    expect(indexOf('abc123', 'zzz')).toBe(-1);
  });

  it('should return 0 if text contains the given pattern', () => {
    expect(indexOf('123abc', '123')).toBe(0);
  });

  it('should return 0 if empty strings are compared', () => {
    expect(indexOf('', '')).toBe(0);
  });
});
```

So basically we define a set of certain inputs, and the expected result of our function under test if it executes with this given input. If the set of examples is well-chosen the tests can provide high confidence that the function behaves as expected.

As you can imagine, there can be many permutations and mutations of possible inputs and that's exactly the use case where property based testing might be useful for your application.

## What is Property Based Testing?

> TL;DR: Another way to test programs with generated random (but constrained) inputs instead of relying on hard-coded inputs and outputs.

Property based testing has been introduced by the [QuickCheck](https://hackage.haskell.org/package/QuickCheck) framework in [Haskell](https://www.haskell.org/) and since then it has become quite famous especially in functional programming.

It provides another approach to example based testing and can cover tests as unit, integration and even E2E (end-to-end) tests (which I will cover later in this article).

As the name suggests, property based testing relies on properties. You can think of a property as a trait you expect to see in your output by your given inputs. The expected result does not have to be itself and most of the time it will not be.

An exemplary property :

> for all (x, y, ...)
>
> such as precondition(x, y, ...) holds
>
> property(x, y, ...) is true

Using properties, we could state that:

> for any strings a, b and c
>
> b is a substring of a + b + c

The testing framework will take this information, generate multiple random entries and runs checks on them. If the test fails, it will provide the used seed and a counterexample. The suggested counterexample is the minimal failing counterexample.

For this substring example: whenever the tested string contains a `.` in itself, the above check fails and the minimal counterexample would be `{a: '.', b: '', c: ''}` and not something like `{a: 'y837dD!d.', b: 'acxSAD4', c: '!y,wqe2"'}`.

As a result, our code is tested more thoroughly and we might find unexpected bugs while running our tests.

### Benefits

- **Coverage**: Theoretically, all possible inputs are generated without any restrictions which can cover the whole range of integers, string or whatever type you need for your test. This can help to discover unexplored code paths in your program.
- **Reproducible**: A seed is produced each time a property test runs. Using this seed it is possible to re-run a test with the same set of data. If the test run fails, the seed and the failing test will be printed to the command line so that it is fully reproducible.
- **Shrink**: After a failing test, the framework tries to reduce the input to a smaller input. An example: If your test fails due to a certain character in a string the framework will run the test again with a string that only contains this certain character.

It is also important to note that it does not — by any means — replace unit testing. It only provides an additional layer of tests that might prove very efficient to reduce some boilerplate tests.

## Property based testing with TypeScript

### Available Libraries

There exist two popular libraries for property based testing with [TypeScript](https://www.typescriptlang.org/) (and JavaScript): [JSVerify](https://github.com/jsverify/jsverify) and [fast-check](https://github.com/dubzzz/fast-check)

I prefer [fast-check](https://github.com/dubzzz/fast-check) for the following reasons:

- It is more actively maintained.
- It has strong and up-to-date built-in types thanks to TypeScript (the library itself is also written in TypeScript).

### Writing a first fast-check test

To install [fast-check](https://github.com/dubzzz/fast-check) you need to run this command in your terminal:

```bash
npm i fast-check -D
```

Then you are already ready to use the library in your existing test framework, like in [Jest](https://jestjs.io/) or [Mocha](http://mochajs.org/) as shown in the following example:

```ts
import * as fc from 'fast-check';

describe('Property based tests', () => {
  it('should always contain itself', () => {
    fc.assert(fc.property(fc.string(), text => indexOf(text, text) !== -1));
  });

  it('should always contain its substrings', () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
        // Alternatively: no return statement and direct usage of expect or assert
        return indexOf(b, a + b + c) !== -1;
      })
    );
  });
});
```

Let's take a quick look at the anatomy of our fast-check tests:

- `fc.assert` runs the property
- `fc.property` defines the property
- `fc.string()` defines the inputs the framework has to generate
- `text => { ... }` checks the output against the generated value

If we run this tests, we can see that we receive an error:

```
Error: Property failed after 1 tests
{ seed: -481667763, path: "0:0:0:1", endOnFailure: true }
Counterexample: ["",""," "]
Shrunk 3 time(s)
Got error: Property failed by returning false
```

The error message is correct, and we found an edge-case for our `indexOf` method under test which we most probably would not have discovered with example based testing.

With these simple steps you can easily introduce property based testing to projects which use [Jest](https://jestjs.io/) or [Mocha](http://mochajs.org/) as test framework independent of the web framework you are using.

## Angular & Karma Demo

In the following demo, I want to show you how you can integrate property based testing in an Angular application (which per default uses [Karma](https://karma-runner.github.io/4.0/index.html))
as test runner. Additionally, I also want to demonstrate the usage of property based testing for end-to-end (E2E) tests using [Protractor](https://www.protractortest.org/).

### First Karma property based unit test

As a base we use an Angular project created with the [Angular CLI](https://cli.angular.io/).

Next step is to install [fast-check](https://github.com/dubzzz/fast-check) we, therefore, need to run this command in the terminal:

```bash
npm i fast-check -D
```

For a first test, we add our `indexOf` test method to `app.component.ts`:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-demo';

  /**
   * Returns the position of the first occurrence of `pattern` in `text`
   */
  indexOf(text: string, pattern: string): number {
    return text.indexOf(pattern);
  }
}
```

Now we can modify the CLI-generated test `app.component.spec.ts` and add property based tests as we did it for the Typescript-Jest-Mocha demo before:

```ts
import * as fc from 'fast-check';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  describe('indexOf Property based tests', () => {
    it('should always contain itself', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      fc.assert(
        fc.property(fc.string(), text => app.indexOf(text, text) !== -1)
      );
    });

    it('should always contain its substrings', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      fc.assert(
        fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
          // Alternatively: no return statement and direct usage of expect or assert
          return app.indexOf(b, a + b + c) !== -1;
        })
      );
    });
  });
});
```

If we now run the tests, we get the same result:

```
Error: Property failed after 1 tests
	{ seed: -1006000007, path: "0:0:1:0:0:0", endOnFailure: true }
	Counterexample: ["",""," "]
	Shrunk 5 time(s)
	Got error: Property failed by returning false
```

### More realistic example

Since now we just used very simple data for our tests but the reality is usually way more complex and we need to work
with more complex data structures. For this purpose, a new service needs to be created using the Angular CLI via `ng generate service user`
which simulates a more realistic scenario:

**user.service.ts**

```ts
export interface Adress {
  street: string;
  postalCode: number;
  city: string;
}

export interface User {
  name: string;
  age: number;
  addresses: Adress[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isValidUser(user: User): boolean {
    const { name, age, addresses } = user;

    if (!name.trim()) {
      console.error('Name must be defined');
      return false;
    }

    if (age < 0 || age > 150) {
      console.error('Age must be greater than 0 and below 150');
      return false;
    }

    for (const address of addresses) {
      const { street, postalCode, city } = address;
      if (!street.trim()) {
        console.error('Address must contain a street');
        return false;
      }

      if (postalCode === undefined) {
        console.error('Address must contain a postal code');
        return false;
      }

      if (!city.trim()) {
        console.error('Address must contain a city');
        return false;
      }
    }
  }
}
```

This demo service simulates a `User` object validation and its `isValidUser` method should be tested:

**user.service.spec.ts**

```ts
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import * as fc from 'fast-check';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isValidUser property based tests', () => {
    it('should be valid user', () => {
      const UserArbitrary = fc.record({
        name: fc.string(6, 1000),
        age: fc.integer(),
        addresses: fc.array(
          fc.record({
            street: fc.string(6, 500),
            postalCode: fc.integer(),
            city: fc.string(6, 500),
          })
        ),
      });

      fc.assert(
        fc.property(UserArbitrary, user => {
          return service.isValidUser(user);
        }),
        { verbose: true } // have the list of all failing values encountered during the run
      );
    });
  });
});
```

The test looks similar to the our first TypeScript test but we now have a more complex JavaScript object which we want to generate using `fc.record:

```ts
const UserArbitrary = fc.record({
  name: fc.string(6, 1000),
  age: fc.integer(),
  addresses: fc.array(
    fc.record({
      street: fc.string(6, 500),
      postalCode: fc.integer(),
      city: fc.string(6, 500),
    })
  ),
});
```

Running the tests leads to a failed test run:

```
	Error: Property failed after 1 tests
	{ seed: -91394804, path: "0:0:0:1:0:0:0:0:0", endOnFailure: true }
	Counterexample: [{"name":" 0!f>A","age":-1,"addresses":[]}]
	Shrunk 8 time(s)
	Got error: Property failed by returning false
```

According to our `isValidUser` method, a user cannot have an age smaller 1 or greater 150, so we need to adjust our record:

```ts
const UserArbitrary = fc.record({
  name: fc.string(6, 1000),
  age: fc.integer(1, 150), // now it is valid
  addresses: fc.array(
    fc.record({
      street: fc.string(6, 500),
      postalCode: fc.integer(),
      city: fc.string(6, 500),
    })
  ),
});
```

As demonstrated, using property based testing in Angular applications is also very easy.

### E2E test with Protractor

Another interesting use case of property based testing can be seen in end-to-end (E2E) test which I want to demonstrate using [Protractor](https://www.protractortest.org/).

For this purpose I modified the HTML to have a simple form with two inputs and a submit button:

**app.component.html**

```html
<h1>Property Based Testing Protractor Demo</h1>

<div class="container">
  <h2>Demo Form</h2>
  <p id="submitted-object">Submitted object: {{ submitted | json }}</p>
  <form #demoForm="ngForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="demo-name-input">Name</label>
      <input
        type="text"
        [(ngModel)]="anyName"
        name="demo-name"
        class="form-control"
        id="demo-name-input"
        required
      />
    </div>

    <div class="form-group">
      <label for="demo-description-input">Description</label>
      <input
        type="text"
        [(ngModel)]="description"
        name="demo-description"
        class="form-control"
        id="demo-description-input"
      />
    </div>

    <button type="submit" class="btn btn-success" id="demo-submit-button">
      Submit
    </button>
  </form>
</div>
```

The corresponding TypeScript code:

**app.component.ts**

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-demo';
  anyName = 'A user';
  description = '';
  submitted?: { name: string; description: string };

  /**
   * Returns the position of the first occurrence of `pattern` in `text`
   */
  indexOf(text: string, pattern: string): number {
    return text.indexOf(pattern);
  }

  onSubmit() {
    this.submitted = { name: this.anyName, description: this.description };
  }
}
```

Based on this template I modified the page object to be able to interact with this page in a clean way:

**app.po.ts**

```ts
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getSubmittedText(): Promise<string> {
    return element(by.id('submitted-object')).getText() as Promise<string>;
  }

  enterName(name: string): Promise<void> {
    const nameInput = element(by.id('demo-name-input'));
    return nameInput.sendKeys(name) as Promise<void>;
  }

  enterDescription(name: string): Promise<void> {
    const descriptionInput = element(by.id('demo-description-input'));
    return descriptionInput.sendKeys(name) as Promise<void>;
  }

  submit(): Promise<void> {
    const submitButton = element(by.id('demo-submit-button'));
    return submitButton.click() as Promise<void>;
  }

  clear() {
    this.enterDescription('');
    return this.enterName('');
  }
}
```

The final step is to write the actual E2E test:

**app.e2e-spec.ts**

```ts
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

import * as fc from 'fast-check';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should correctly submit', () => {
    page.navigateTo();

    fc.assert(
      fc.property(fc.string(), fc.lorem(), (name, description) => {
        page.enterName(name);
        page.enterDescription(description);
        page.submit();
        expect(page.getSubmittedText()).toBe(
          `Submitted object: ${JSON.stringify({ name, description })}`
        );
        page.navigateTo();
      })
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
```

Running the tests using `npm run e2e` should result in something similar to this animated image:

![Protractor Property Based Test](/images/protractor-property-based-test.gif)

My demo application does not represent a real business case, but I think you can imagine how you could, for instance, use that approach to write automated stress tests for inputs in your UI.

## Conclusion

As already mentioned, it is important to note that property based testing does not — by any means — replace unit testing. Instead, it can help to detect issues in your program that traditional example-based tests probably would not have discovered. Additionally, it can help to explore the business logic of a legacy application without having to write many example-based tests.

But you should consider that setting up the tests by creating the different custom generators and constraining the input values takes some time and effort. 
