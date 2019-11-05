---
title: How I Write Marble Tests For RxJS Observables In Angular
subTitle: Because testing observables can be hard
categories: ['development', 'angular']
cover: cover.jpg
---

I am a really passionate [Reactive Extensions](http://reactivex.io/) user and mostly use them in [RxJS](https://github.com/Reactive-Extensions/RxJS) which is integrated into the [Angular framework](https://angular.io).

In Angular, I often use observables in my services and need therefore to write tests for these asynchronous data streams.

Unfortunately, testing observables is hard and to be honest I often need more time to write unit tests for my streams than implementing them in the production code itself. But luckily there exists an integrated solution for RxJS which helps writing this kind of tests: the so-called marble tests.

Marble testing is not difficult if you are already familiar with the representation of asynchronous data streams as marble diagrams. In this blog post, I want to introduce you to the concept of marble diagrams, the basics of marble testing and examples of how I use them in my projects.

> I will not provide a general introduction to RxJS in this post but I can highly recommend [this article](https://dev.to/sagar/reactive-programming-in-javascript-with-rxjs-4jom) to refresh the basics.

## Marble Testing

There exists an [official documentation](https://github.com/ReactiveX/rxjs/blob/master/doc/marble-testing.md) about marble testing for RxJS users but it can be very hard to get started since there were a lot of changes from v5 to v6. Therefore I want to start explaining the basics, show an exemplary Angular test implementation and in the end talk about some of the new RxJS 6 features.

## Marble Diagrams

For an easier visualization of RxJS observables a new domain-specific language called "marble diagram" was introduced.

> Marble Diagrams are visual representations of how operators work and include the input Observable(s), the operator and its parameters, and the output Observable.

The following image from the [official documentation](http://reactivex.io/rxjs/manual/overview.html#marble-diagrams) describes the anatomy of a marble diagram:

![Marble Diagram Anatomy](./marble-diagram-anatomy.svg)

> In a marble diagram, time flows to the right, and the diagram describes how values (“marbles”) are emitted on the Observable execution.

### Marble Syntax

In RxJS marble tests, the marble diagrams are represented as a string which contains a special syntax that represents events happening over virtual time. The start of time (also called the zero frame) in any marble string is always represented by the first character in the string.

- `-` time: 10 "frames" of time passage.
- `|` complete: The successful completion of an observable. This is the observable producer signaling complete().
- `#` error: An error terminating the observable. This is the observable producer signaling error().
- `"a" any character`: All other characters represent a value being emitted by the producer signaling next().
- `()` sync groupings: When multiple events need to be in the same frame synchronously, parentheses are used to group those events. You can group nested values, a completion or an error in this manner. The position of the initial ( determines the time at which its values are emitted.
- `^` subscription point: (hot observables only) shows the point at which the tested observables will be subscribed to the hot observable. This is the "zero frame" for that observable, every frame before the ^ will be negative.

#### Examples

`-` or `------`: Equivalent to Observable.never(), or an observable that never emits or completes

`|`: Equivalent to Observable.empty()

`#`: Equivalent to Observable.throw()

`--a--`: An observable that waits for 20 "frames", emits value a and then never completes.

`--a--b--|`: On frame 20 emit a, on frame 50 emit b, and on frame 80, complete

`--a--b--#`: On frame 20 emit a, on frame 50 emit b, and on frame 80, error

`-a-^-b--|`: In a hot observable, on frame -20 emit a, then on frame 20 emit b, and on frame 50, complete.

`--(abc)-|`: on frame 20, emit a, b, and c, then on frame 80 complete

`-----(a|)`: on frame 50, emit a and complete.

### A Practical Angular Example

As you now know the theoretical basis, I want to show you a real-world Angular example.

In this [GitHub repository](https://github.com/Mokkapps/rxjs-marble-testing-demo) I have implemented a basic test setup which I will now explain in detail. The Angular CLI project consists of these components and services:

#### UserService

This service provides a public getter `getUsers()` which returns an Observable that emits a new username each second.

> _user.service.ts_
>
> ```typescript
> import { Injectable } from '@angular/core';
> import { Observable, interval } from 'rxjs';
> import { take, map } from 'rxjs/operators';
>
> @Injectable({
>   providedIn: 'root',
> })
> export class UserService {
>   private readonly testData = ['Anna', 'Bert', 'Chris'];
>
>   get getUsers(): Observable<string> {
>     return interval(1000).pipe(
>       take(this.testData.length),
>       map(i => this.testData[i])
>     );
>   }
> }
> ```

#### AllMightyService

This service injects the above introduced `UserService` and provides the public getter `getModifiedUsers`. This getter returns also an Observable and maps the emitted usernames from `userService.getUsers` to make them more "mighty".

> _all-mighty.service.ts_
>
> ```typescript
> import { Injectable } from '@angular/core';
> import { map } from 'rxjs/operators';
> import { Observable } from 'rxjs';
>
> import { UserService } from './user.service';
>
> @Injectable({
>   providedIn: 'root',
> })
> export class AllMightyService {
>   get getModifiedUsers(): Observable<string> {
>     return this.userService.getUsers.pipe(map(user => `Mighty ${user}`));
>   }
>
>   constructor(private userService: UserService) {}
> }
> ```

#### AppComponent

In our `app.component.ts`, we inject the `UserService` and update a list each time a new username is emitted from the `getUsers` Observable.

> _app.component.ts_
>
> ```typescript
> import { Component, OnDestroy, OnInit } from '@angular/core';
> import { Subscription } from 'rxjs';
>
> import { UserService } from './services/user.service';
>
> @Component({
>   selector: 'app-root',
>   templateUrl: './app.component.html',
>   styleUrls: ['./app.component.scss'],
> })
> export class AppComponent implements OnInit, OnDestroy {
>   title = 'MarbleDemo';
>
>   users: string[] = [];
>
>   private subscription: Subscription | undefined;
>
>   constructor(private userService: UserService) {}
>
>   ngOnInit() {
>     this.subscription = this.userService.getUsers.subscribe(user => {
>       this.users.push(user);
>     });
>   }
>
>   ngOnDestroy() {
>     if (this.subscription) {
>       this.subscription.unsubscribe();
>     }
>   }
> }
> ```

> _app.component.html_
>
> ```html
> <div style="text-align:center"><h1>Welcome to {{ title }}!</h1></div>
> <h2>Here will users pop in asynchronously:</h2>
> <ul>
>   <li class="user" *ngFor="let user of users"><h2>{{user}}</h2></li>
> </ul>
> ```

Now we can write different unit tests for this projects:

- Test that the AppComponent shows the correct list of usernames
- Test that the AllMightyService correctly maps and emits the usernames

Let us start with the unit test for the AppComponent.

In these tests, I am using the npm package [jasmine-marbles](https://www.npmjs.com/search?q=jasmine%2Dmarbles) which is a helper library that provides a neat API for marble tests if you are using jasmine (which is used per default in Angular).

**Basic idea is to mock the public observables from the provided services and test our asynchronous data streams in a synchronous way.**

Basically, we mock the UserService and the `getUsers` observable. In the test case we flush all observables by calling `getTestScheduler().flush()`. This means that after this line has been executed our mocked observable has emitted all of its events and we can run our test assertions. I will talk more about the TestScheduler after this example.

> _app.component.spec.ts_
>
> ```typescript
> import { TestBed, async } from '@angular/core/testing';
> import { getTestScheduler, cold } from 'jasmine-marbles';
>
> import { AppComponent } from './app.component';
> import { UserService } from './services/user.service';
> import { By } from '@angular/platform-browser';
>
> describe('AppComponent', () => {
>   let userService: any;
>
>   beforeEach(async(() => {
>     // Here we mock the UserService to a cold Observable emitting three names
>     userService = jasmine.createSpy('UserService');
>     userService.getUsers = cold('a-b-c', { a: 'Mike', b: 'Flo', c: 'Rolf' });
>
>     TestBed.configureTestingModule({
>       declarations: [AppComponent],
>       providers: [{ provide: UserService, useValue: userService }],
>     }).compileComponents();
>   }));
>
>   it('should correctly show all user names', async () => {
>     const fixture = TestBed.createComponent(AppComponent);
>     fixture.detectChanges(); // trigger change detection
>
>     getTestScheduler().flush(); // flush the observable
>     fixture.detectChanges(); // trigger change detection again
>
>     const liElements = fixture.debugElement.queryAll(By.css('.user'));
>     expect(liElements.length).toBe(3);
>
>     expect(liElements[0].nativeElement.innerText).toBe('Mike');
>     expect(liElements[1].nativeElement.innerText).toBe('Flo');
>     expect(liElements[2].nativeElement.innerText).toBe('Rolf');
>   });
> });
> ```

In the next step, let us analyze a service test, in this case for the AllMightyService.

> _all-mighty.service.spec.ts_
>
> ```typescript
> import { hot, cold } from 'jasmine-marbles';
> import { TestScheduler } from 'rxjs/testing';
>
> import { AllMightyService } from './all-mighty.service';
> import { fakeAsync } from '@angular/core/testing';
>
> describe('AllMightyService', () => {
>   let sut: AllMightyService;
>   let userService: any;
>
>   beforeEach(() => {
>     // we mock the getUsers Observable of the UserService
>     userService = jasmine.createSpy('UserService');
>     userService.getUsers = hot('^-a-b-c', {
>       a: 'Hans',
>       b: 'Martin',
>       c: 'Julia',
>     });
>
>     sut = new AllMightyService(userService);
>   });
>
>   it('should be created', () => {
>     expect(sut).toBeTruthy();
>   });
>
>   it('should correctly return mighty users (using jasmine-marbles)', () => {
>     // Here we define the Observable we expect to be returned by "getModifiedUsers"
>     const expectedObservable = cold('--a-b-c', {
>       a: 'Mighty Hans',
>       b: 'Mighty Martin',
>       c: 'Mighty Julia',
>     });
>     expect(sut.getModifiedUsers).toBeObservable(expectedObservable);
>   });
> });
> ```

### The TestScheduler

As we already saw in the first AppComponent test, RxJS provides a TestScheduler for "time manipulation".

The emission order of events in RxJS is controlled by the internal schedulers. Most of the time we do not have to care about the schedulers as they are mostly handled by RxJS internally. But we can provide a scheduler to operators as we can see in the signature of the ["delay" operator](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-delay):

```javascript
delay(delay: number | Date, scheduler: Scheduler): Observable
```

The last parameter is optional and defaults to the async Scheduler. RxJS includes the following Schedulers:

- AsyncScheduler
- AnimationFrameScheduler
- AsapScheduler
- QueueScheduler
- TestScheduler
- VirtualTimeScheduler

To avoid using real time in our test we can, therefore, pass the `TestScheduler` (who derives from the `VirtualTimeScheduler`) to our operator. The `TestScheduler` allows us to manipulate the time in our test cases and enables us writing asynchronous tests in a synchronous way.

## New RxJS 6 marble test features

In RxJS v5 there was nearly no documentation for the `TestScheduler` as it was mainly used internally by the library authors. Since RxJS 6 this has changed and we can now use the TestScheduler to write marble tests.

#### testScheduler.run(callback)

In previous RxJS versions, we had to pass the Scheduler to our operators in production code to be able to test them with virtual time manipulation.

```javascript
getUsers(scheduler) {
    const dummyData = Observable.from(['Anna', 'Bert', 'Chris']);
    return dummyData.delay(1000, scheduler); // each user is emitted after 1 second
}
```

As you can see we are now mixing our productive code with logic we only need for tests. The scheduler parameter is only added and used for the tests.

This issue is solved by the new run method. Every RxJS operator which uses the AsyncScheduler (for example "timer" or "debounce") will automatically use the TestScheduler when it is executed inside the run method and therefore uses virtual instead of real time.

This way the same method above can be rewritten without the scheduler parameter and has no more test code inside the production code:

```javascript
getUsers() {
    const dummyData = Observable.from(['Anna', 'Bert', 'Chris');
    return dummyData.delay(1000); // each user is emitted after 1 second
}
```

A unit test for our the AllMightyService's getModifiedUsers method using the new run method can look this way:

```typescript
it('should correctly return mighty users (using RxJS 6 tools)', () => {
  const scheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal
    expect(actual).toEqual(expected);
  });

  scheduler.run(helpers => {
    const { expectObservable } = helpers;

    const coldObservable = scheduler.createHotObservable('^-a-b-c', {
      a: 'Hans',
      b: 'Martin',
      c: 'Julia',
    });
    userService.getUsers = coldObservable;
    sut = new AllMightyService(userService);

    const expectedMarble = '--a-b-c';
    const expectedVales = {
      a: 'Mighty Hans',
      b: 'Mighty Martin',
      c: 'Mighty Julia',
    };
    expectObservable(sut.getModifiedUsers).toBe(expectedMarble, expectedVales);
  });
});
```

It looks pretty much the same as in our `jasmine-marble` test above but the new run method provides some interesting new features like the [Time progression syntax](https://github.com/ReactiveX/rxjs/blob/master/doc/marble-testing.md#time-progression-syntax).

> At this time the TestScheduler can only be used to test code that uses timers, like delay/debounceTime/etc (i.e. it uses AsyncScheduler
> with delays > 1). If the code consumes a Promise or does scheduling with AsapScheduler/AnimationFrameScheduler/etc it cannot be reliably
> tested with TestScheduler, but instead should be tested more traditionally. See the Known Issues section for more details.

### Conclusion

Marble diagrams are an established concept to visualize asynchronous data as we can see on the popular website [RxMarbles](http://rxmarbles.com/). Using marble strings we now can also use this clean way to test our observables.

I would recommend to get started by using helper libraries like `jasmine-marbles` as they are more beginner-friendly. You can combine your jasmine-marble tests with the new RxJS 6 features in the same project as I demonstrate in [my example project](https://github.com/Mokkapps/rxjs-marble-testing-demo/blob/master/src/app/services/all-mighty.service.spec.ts).

From my experience, I can tell you that it is worth to learn marble testing as you then are able to test very complex observable streams in an understandable manner.

I hope that you now are able to start using marble tests in your project and that you start enjoying writing unit tests for observables.
