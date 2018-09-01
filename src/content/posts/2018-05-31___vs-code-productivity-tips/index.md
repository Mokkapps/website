---
title: How I Increased My Productivity With Visual Studio Code
subTitle: Learn how to become a more productive developer
categories: ["productivity", "development"]
cover: https://i.imgflip.com/2beoio.jpg
---

In this post I will describe how I increased my productivity by learning how to use [Visual Studio Code](https://code.visualstudio.com/) in a more efficient way.

But in general, always consider this advice as it is really important:

> Learn your IDE/Editor so that you are able to use it in the most efficient way

## Why Is This Important

Looking back at me as a programmer in the beginning of my professional software developer career I would definitely give myself the same advice mentioned above. In my first days as a developer I did most of my code interactions with the mouse and did not optimize my IDE or text editor.

Today I think I can navigate more efficient through my code and therefore have more time for more important stuff.

<a href="https://imgflip.com/i/2beoio"><img src="https://i.imgflip.com/2beoio.jpg" title="made at imgflip.com"/></a>

## My Productivity Tips

### Learn The Most Important Keyboard Shortcuts

In my opinion, this is the most important step you can take as a developer. Take the time and learn the most often used shortcuts you need throughout the day.

Here some of my most used [OS X shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf):

> If you are a Windows or Linux user, please check the appropriate shortcuts: [Windows Shortcuts](https://go.microsoft.com/fwlink/?linkid=832145),
> [Linux Shortcuts](https://go.microsoft.com/fwlink/?linkid=832144).

* `CMD + P`: Opens the command palette and you can search for any file. Example: Enter _cdcts_ to search for `customer-details.component.ts` which is in my opinion the fastest way to jump to a certain file. You should definitely change to this approach instead of navigating in the _Explorer_ by mouse.
    ![Quick Open](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/QuickOpen.gif)
* `CMD + D`: Finds and selects the next match for the currently selected word.
    ![Multicursor word](https://code.visualstudio.com/assets/docs/editor/codebasics/multicursor-word.gif)
* `CMD + arrow down/up`: Move cursor to end/beginning of the current file
* `CMD + arrow right/left`: Move cursor to end/beginning of current line
* `Option + arrow right/left`: Move cursor by word
* `Option + Shift + arrow right/left`: Make selection by word
* `Option + arrow up/down`: Move current line up or down
* `Option + Shift + arrow up/down`: Duplicate current line one line above or below
* `CMD + Shift + K`: Delete current line
* `CMD + B`: Toggle Sidebar visibility
* `CMD + Shift + F`: Search across files
* `CMD + .`: Provides quick fixes. For example, I use this mostly to automatically rearrange my imports by the given linting rules.
* `CMD + Option + arrow left/right`:
* [Multi-cursor](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor): Multi-cursor are very helpful to edit code on multiple lines.
    ![Multi-cursor](https://code.visualstudio.com/assets/docs/editor/codebasics/multicursor.gif)

See [Basic Editing](https://code.visualstudio.com/docs/editor/codebasics) for further basic shortcuts and details.

#### Command Palette

With `CMD + Shift + P` you can open the _Command Palette_ which is a powerful tool in Visual Studio Code.

Just start typing any command you want to execute and you will find it (if it is available). Additionally, you can see the corresponding shortcut next to the command. This is also an elegant way to start learning the keyboard shortcuts for your most used commands.

![Command Palette](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/OpenCommandPalatte.gif)

### Emmet

I must admit, I was blown away as I recognized that Emmet is supported by VS Code by default and how powerful it is. Emmet is a markup expansion tool that makes writing HTML much easier. It is easy to learn and has a simple syntax. Checkout the [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/) to learn more about the Emmet syntax.

And here you can see Emmet in action:

<iframe width="700" height="400" src="https://www.youtube.com/embed/e1zhJjM4p0k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Use Workspaces

One thing I started to use recently are [multi-root workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces) in VS Code. They can be very helpful when you are working on several related projects at one time. For example, I have created a workspace for all of my private projects.

Using workspaces I do not have to handle multiple VS Code editor windows but always work with one window which includes my current workspace.

<iframe width="700" height="400" src="https://www.youtube.com/embed/xYyPAUukFfg?start=30" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Use Plugins

Subsequent are some of my most used VS Code plugins:

* [Auto Close Tag](https://github.com/formulahendry/vscode-auto-close-tag): Automatically add HTML/XML close tag
* [Auto Rename Tag](https://github.com/formulahendry/vscode-auto-rename-tag): Auto rename paired HTML/XML tag
* [Better Comments](https://github.com/aaron-bond/better-comments): Improve your code commenting by annotating with alert, informational, TODOs, and more
* [Bracket Pair Colorizer](https://github.com/CoenraadS/BracketPair): A customizable extension for colorizing matching brackets
* [Code Spell Checker](https://github.com/Jason-Rev/vscode-spell-checker): Spelling checker for source code
* [Git History](https://github.com/DonJayamanne/gitHistoryVSCode): View git log, file history, compare branches or commits
* [Mark Jump](https://github.com/spywhere/vscode-mark-jump): Jump to the marked section in the code
* [Markdown All In One](https://github.com/neilsustc/vscode-markdown): All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)
* [npm](https://github.com/Microsoft/vscode-npm-scripts): npm support for VS Code
* [npm Intellisense](https://github.com/ChristianKohler/NpmIntellisense): Visual Studio Code plugin that autocomplete npm modules in import statements
* [Prettier](https://github.com/prettier/prettier-vscode): VS Code plugin for prettier/prettier (code formatting)
* [Quick and Simple Text Selection](https://github.com/dbankier/vscode-quick-select): Jump to select between quote, brackets, tags, etc

What I did not mention here are all the framework specific plugins. So of course, I recommend to install available plugins for your framework/technology/programming language you are using. They can also save you a ton of time.

## Conclusion

These are just some productivity tips which I can give you. Of course, VS Code provides many more features which can assist you in all kind of matter (see links below). For example, VS Code releases each month a major update with many new features and improvements. Read the release notes of these releases as they often contain new features which further can increase your productivity.

And please take the time to learn your IDE/editor (if you haven't done it yet). This will definitely make you a better programmer.

### Links

* [VS Code Documentation](https://code.visualstudio.com/docs/)
* [VS Code Updates](https://code.visualstudio.com/updates/)
* [VS Code can do that?!](https://vscodecandothat.com/)
