---
title: The Mistakes I Made In My First Software Project
subTitle: 
categories: ['development', 'career'] 
cover: cover.jpg
---

Before I started my professional career as a  developer I mainly developed Android apps using Java as the programming language. I got hired by a software service company and in my first project, we had to develop JavaScript-based applications for cars. So the first time in my life I had to work with JavaScript and I made a lot of mistakes during this time which I now want to share with you.

> The only man who never makes a mistake is the man who never does anything. 
>
> <cite>Theodore Roosevelt</cite>

## Project setup

As I joined the project there was one project manager and a senior developer. Both left the project after some weeks and I combined the role of a developer and project manager. In my office room, there were two other senior developers which also worked on similar JavaScript projects. There were about 10 quite small JavaScript apps developed by the team and my goal was to fix bugs and implement new features until the release. The release went well and I got the opportunity to work on a larger app based on the same tech stack.

The tech stack of the project consisted of JavaScript (ECMAScript 3), Apache Maven for building the application and Karma + jasmine as the test runner. There was no HTML and CSS involved as the JavaScript code talked to a proprietary UI which was developed internally by the automotive company.

## Learn the basics

One of my biggest mistakes was that I did not learn JavaScript properly. I just took a short online tutorial and it looked easy to me. But after this short tutorial I had no idea about:

* Closures
* Scopes
* `this` references
* `==` vs `===`
* why to use `"strict mode"`
* `undefined is not a function`
* and all the other interesting aspects of JavaScript

If you are in a larger team with a code review process this might not be a big problem because during the review process you will learn and bad code should not find its way into the repository. But I was alone and no one reviewed my code.  I thought my basic JavaScript knowledge would be enough to do the job but today I know that it was a very bad code and I would do it today in a different way.

## Technical mistakes

I want to talk about some of the biggest technical mistakes I made in this project.

> A failure is not always a mistake, it may simply be the best one can do under the circumstances. The real mistake is to stop trying.
>
> <cite>B. F. Skinner</cite>

### Did not separate view from business code

I created a separate JavaScript file for each of the views of the application. The problem was, that I did not separate the view from the business logic. So this files contained nearly all the logic necessary to fill the screen with life. 

It would have been a much better approach to use the MVC (Model-View-Controller) or some similar pattern to avoid the tight coupling of logic and view.

### Documented all methods

I added JSDoc to __every__ method in the application even if the method already had a declarative name. 

Reading recommendation: [Don’t comment your code!](http://apdevblog.com/comments-in-code/)

### Used window object as global state

This was probably my biggest mistake: I used the window object for global state and stored dozens of properties there. A summary of possible problem using the window object for global state:

* anyone can change the state at any time (it is mutable)
* bad readability of the code
* testing can be tricky
* many more...

Reading recommendation: [Why is global state so evil](https://softwareengineering.stackexchange.com/questions/148108/why-is-global-state-so-evil)

### Generic backend handler

To avoid code duplication in every file I created a generic class which was used in every view to make HTTP requests. This was a very, very, very stupid decision and led to a large and unmaintainable hell of code. 

Each method in this backend handler class consisted of a large switch-case statement to be able to determine which view class made the call. As multiple views could trigger a request at the same time we also implemented a simple queue mechanism which made it more complex and unmaintainable. 

It would have been a much better approach to handle the request in each of the views (ideally in each controller but as mentioned above I did not implement such an abstraction).

### Bad unit tests

I wrote a lot of unit tests for the application but in the end, they did not catch major bugs which occurred. I also did not write regression bugs after I fixed a bug so that sometimes I had to fix the same issue again. Additionally, coupling the view and business logic together in one class made it very hard to test as a lot of dependencies had to be mocked. 

Reading recommendation: [How to know what to test](https://kentcdodds.com/blog/how-to-know-what-to-test/)

### Result of the app

I finished the app in time and budget but the problems raised after I left the project. Of course, there were bugs but the customer did only provide a little budget to fix them. So my company assigned the tasks to working students or apprentices who just used quick dirty hacks to fix the bug. As you can image, this did not improve the already bad code base I left there.

Additionally, the app had to be rolled out in more regions which all had special business requirements. As the app was not scalable and flexible at all, this became quite a problem for the next developers of the project.

## Conclusion

As you can maybe imagine it is not easy for me as a developer (or in general as a person) to talk publicly about my mistakes. But I think it is important for my personal development and I also want to take you the fear to talk about the mistakes you made. Also, you should not be afraid of making mistakes in your first software project, this can happen and you will learn a lot from them. 

Asking questions is one of the most important things you can do if you are new to a programming language or project. If you don’t ask questions when you need to, you may get into troubles as it happened to me. Especially, if it is about defining a software architecture for a business application you should ask a senior developer for advice. Get help from experienced developers as early and often as you can. If you are the only developer in the team, try to establish a code review process with a more experienced developer. 

<small>Cover Image by <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3085712">mohamed Hassan</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3085712">Pixabay</a></small>
