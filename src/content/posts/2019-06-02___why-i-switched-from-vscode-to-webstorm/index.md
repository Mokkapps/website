---
title: Why I Switched From Visual Studio Code to JetBrains WebStorm
subTitle: An IDE is often the better choice for developing large business application
categories: ['development', 'tools']
cover: cover.png
---

As I started my first JavaScript project in 2015 I used [JetBrains WebStorm](https://www.jetbrains.com/webstorm/) which is an IDE (integrated development environment) for JavaScript development. I was already used to JetBrains IDEs as I worked before with Android Studio which is based on [IntelliJ IDEA](https://www.jetbrains.com/idea/). Additionally, I got a WebStorm license from my company and could, therefore, use it without any restrictions.

As [Visual Studio Code](https://code.visualstudio.com/) got more and more popular I used it for my further web projects. I really liked it because it was much faster, highly customizable and free so that I could also use it for my private projects. 

In my current project, I met a developer who was really confused that I was using an editor and not an IDE for the development of large business applications. First, I did not really consider his concerns but meanwhile, I understand him.

In this blog post, I want to tell you why I now mainly use WebStorm instead of VS Code for development.

## Preamble

This is a very hot topic and I know this will cause some controversy. In the following article, I talk about my experience using WebStorm in a large Angular application which was mainly developed in VS Code.  

## Code Inspection

WebStorm provides a robust, fast, and flexible static code analysis. This analysis detects language and runtime errors, suggests corrections and improvements. It also indexes your whole project and can, for example, detect all unused methods, variables and more.

You can also detect unused methods in JavaScript methods using VS Code and ESLint with the rules [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars) and [no-unreachable](https://eslint.org/docs/rules/no-unreachable#disallow-unreachable-code-after-return-throw-continue-and-break-statements-no-unreachable). But if you are, for example, using a TypeScript project (like Angular) VS Code does not detect unused public methods. See this simple example:

**VS Code**
![VS Code Unused Angular Methods](https://res.cloudinary.com/dvw7amyb4/image/upload/v1549824726/vscode-unused-methods.gif)

**WebStorm**
![WebStorm Unused Angular Methods](https://res.cloudinary.com/dvw7amyb4/image/upload/v1549824809/webstorm-unused-methods.gif)

This can have a huge impact on the code quality of a large Angular code base which was mainly developed using VS Code.

To see the difference open your project which was developed in VS Code with WebStorm and run the [code inspection](https://www.jetbrains.com/help/webstorm/code-inspection.html). This was basically what convinced me that using WebStorm results in a cleaner code base.

## Integrated Karma Tests

WebStorm has an integrated test runner which I really like. This way you can run your tests directly from the IDE and even debug them there. 

Running my [jasmine](https://jasmine.github.io/) & [Karma](https://karma-runner.github.io/3.0/index.html) tests in WebStorm I can easily jump to the failed test code and rerun only this specific test. The following image shows such a test run:

![WebStorm Karma Tests](https://res.cloudinary.com/dvw7amyb4/image/upload/v1549824460/webstorm-karma-tests.gif)

My Angular unit test workflow in VS Code is normally to mark a `describe` or `it` test block with a `f` (e.g. `fdescribe`) which tells Karma to only run this certain test block. Alternatively, I use the [karma-jasmine-html-reporter](https://www.npmjs.com/package/karma-jasmine-html-reporter) where you can also define to run only certain tests by clicking on them in the HTML page.

There is currently also a [VS Code Karma Test Adapter](https://github.com/hbenl/vscode-example-test-adapter/issues/1#issuecomment-459022876) in development which should provide a similar integrated Karma test functionality for VS Code.

## Unused Promises

Not waiting for promises can be really tricky if you expect the subsequent code to run only after the promise has been resolved. WebStorm shows if there are unresolved promises (in this case for a TypeScript application):

**WebStorm**
![VS Code Unresolved Promise](https://res.cloudinary.com/dvw7amyb4/image/upload/c_fit,w_800/v1549824897/webstorm-unresolved-promise.png)

VS Code has currently no possibility to show this information:

**VS Code**
![WebStorm Unresolved Promise](https://res.cloudinary.com/dvw7amyb4/image/upload/c_fit,w_800/v1549824892/vscode-unresolved-promise.png)

## Source Control / Git Integration

VS Code has per default a pretty basic git integration. You can either use extensions like [GitLens](https://gitlens.amod.io/) or use additional tools like [Sourcetree](https://www.sourcetreeapp.com/) if you like to use a GUI for complex git work.

WebStorm provides all the functionality for complex git work out of the box. You can commit files, review changes, and resolve conflicts with a visual diff/merge tool right in the IDE. 

## Local History

VS Code does not save a local history of your changes but you can use extensions like [Local History](https://github.com/zabel-xyz/local-history.git).

WebStorm automatically tracks all the changes you made to your files and therefore protects you from accidentally losing these changes. You can inspect the history of files and directories and do rollbacks. This can be useful if you, for example, did a git push force by accident and overwrite your files even on the remote branch.

## Debugging

VS Code can only debug web application on Chrome by using the [Debugger For Chrome](https://github.com/Microsoft/vscode-chrome-debug) extension which you then need to configure for your application.

Using WebStorm you already have everything available per-default and, for example, for Angular just need to click "Debug Application" and you can set breakpoints in the editor and watch variables etc.

## Code Refactoring

In my opinion, refactoring code is much better using WebStorm. You can rename a component and it updates all file names and usages both in the HTML as well as in the TypeScript files. In general, all the JetBrains IDEs are well known for their refactoring features:

![WebStorm Refactoring](https://res.cloudinary.com/dvw7amyb4/image/upload/c_fit,w_800/v1549911785/webstorm-refactoring.png)

A well-known feature of the JetBrain IDEs is [Safe Delete](https://www.jetbrains.com/help/webstorm/2017.1/safe-delete.html). Using this functionality you can safely remove files from your source code during refactoring. The IDE will first search for usages of the files and if they are found, you can check them and make necessary  before the files are deleted.

Unfortunately, VS Code is not that powerful at the moment.

## Angular CLI Integration

WebStorm provides a good Angular CLI integration by the so-called Angular Schematics:

![WebStorm Angular Schematics](https://res.cloudinary.com/dvw7amyb4/image/upload/v1549921565/webstorm-angular-schematics.gif)

In total, WebStorm has great Angular support as it assists in editing Angular templates, provides code completion for variables, pipes, and template reference variables.

## Speed

VS Code is based on Electron and is powered by HTML & JavaScript. 

WebStorm is developed in Java and it feels in general slower than VS Code. I would not say that it is critically slower but the speed difference is noticeable. 

VS Code has a faster startup time but if you are working on a project your IDE or editor is always open and startup time does not play a crucial role.

## Accessibility Inspections For HTML

WebStorm provides inspections which are based on recommendations from [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) which help you to write more accessible HTML code.

![WebStorm HTML Accessibility Inspection](https://res.cloudinary.com/dvw7amyb4/image/upload/c_fit,w_800/v1549921331/webstorm-html-accessibility.png)

## Price

VS Code is open source and free to use.

You need to pay for a WebStorm license unless you choose one of the free licenses available for open source projects, students, teachers, classroom assistance or training courses, coding schools and boot camps. 

Another option is to use the [EAP (Early Access Program)](https://www.jetbrains.com/webstorm/eap/). These pre-release versions include features which will be added to the next release. These versions are temporarily available before a new version of the software will be released.

This is the official disclaimer for the EAP:

> This is an early access version of the product. You expressly acknowledge that this version of the product may not be reliable, may not work as intended and may contain errors. Any use of the EAP product is at your own risk.

## Conclusion

VS Code is more of an editor than an IDE like WebStorm is categorized as. WebStorm has in its standard installation more features than VS Code has in its default installation without any additionally installed extensions.

Microsoft has created an amazing product with VS Code which you can of course use for larger business applications. Generally, I would prefer and recommend using WebStorm due to these reasons:

* Better code analysis functionalities
* All-in-one IDE with good basic functionality without the need to install many additional plugins
* Much better code refactoring possibilities

If you prioritize speed, prefer using open source software or just want to quickly edit some configuration files then you should go for VS Code. 

What are your experiences using VS Code and WebStorm? Let me know in the comments what you use to develop your application!

### My VS Code & WebStorm Setup

The screenshots in this article show VS Code using the [Material Dark Theme](https://github.com/equinusocio/vsc-material-theme.git) and WebStorm using the [Material UI with Material Darker theme](https://plugins.jetbrains.com/plugin/8006-material-theme-ui).