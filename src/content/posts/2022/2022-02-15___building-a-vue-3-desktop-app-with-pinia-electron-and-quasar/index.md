---
title: 'Building a Vue 3 Desktop App With Pinia, Electron and Quasar'
categories:
  - 'development'
  - 'tools'
  - 'frontend'
  - 'vue-js'
  - 'electron'
  - 'pinia'
cover: 'images/cover.jpg'
---

Recently, I planned to rewrite my ["Scrum Daily Standup Picker" Electron application](https://github.com/Mokkapps/scrum-daily-standup-picker/) in Vue 3. The initial release was written in Angular but I wanted to refactor the code base and rewrite it in Vue 3. Why? Because I love Vue and want to have a public showcase that I can reference to potential customers.

## Why Quasar?

[Quasar](https://quasar.dev/) is an MIT licensed open-source Vue.js based framework that allows you to target SPA, SSR, PWA, mobile app, desktop app, and browser extension all using one codebase. It not only handles the build setup, but also provides a full collection of Material Design compliant UI components.

Quasar's motto is:

> write code once and simultaneously deploy it as a website, a Mobile App and/or an Electron App.

Using Quasar drastically saves development time due to these reasons:

- It' based on Vue.js
- It provides many UI components that follows Material Design guidelines
- It has a regular release cycle inclusive of new features
- It provides support for each build mode (SPA, SSR, PWA, Mobile app, Desktop app & Browser Extension)
- It has it own CLI that provides a nice developer experience. For example, we can build our application as SPA, mobile or desktop app within the same project folder.

[Read more](https://quasar.dev/introduction-to-quasar) about why Quasar might be a good choice for your next project.

## Install Quasar CLI

```bash
# Node.js >=12.22.1 is required.

$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```

Next, we create a new project using the Quasar CLI:

```bash
▶ quasar create vue3-electron-demo

  ___
 / _ \ _   _  __ _ ___  __ _ _ __
| | | | | | |/ _` / __|/ _` | '__|
| |_| | |_| | (_| \__ \ (_| | |
 \__\_\\__,_|\__,_|___/\__,_|_|



? Project name (internal usage for dev) vue3-electron-demo
? Project product name (must start with letter if building mobile apps) Quasar App
? Project description A Quasar Framework app
? Author Michael Hoffmann <michael.hoffmann@mokkapps.de>
? Pick your CSS preprocessor: SCSS
? Check the features needed for your project: ESLint (recommended), TypeScript
? Pick a component style: Composition
? Pick an ESLint preset: Prettier
? Continue to install project dependencies after the project has been created? (recommended) NPM
```

We chose SCSS as our CSS preprocessor, ESLint & Typescript as additional features, we want to use [Vue 3's Composition API](https://vuejs.org/guide/introduction.html#api-styles) and use Prettier for code formatting.

[[warning]]
| Do not choose Vuex as we will add another state library in the next chapter. If you accidently added Vuex, remove it manually from your `package.json`.

[Read the official docs](https://quasar.dev/quasar-cli/installation) for additional information about the Quasar CLI.

## Add Pinia as Vue store library

We'll use [Pinia](https://pinia.vuejs.org/) which is now the recommended state library for Vue.

First, we need to install Pinia:

```bash
yarn add pinia
# or with npm
npm install pinia
```

Next, we need to create `pinia.ts` in `src/boot`:

```ts
import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

export default boot(({ app }) => {
  app.use(createPinia());
});
```

We also need to add this new file to `quasar.conf.js`:

```js
module.exports = configure(function (ctx) {
  return {
    ...
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/boot-files
    // highlight-next-line
    boot: ['pinia'],
    ...
  }
}
```

Now, we can create a new folder called `pinia` in `src`.

[[warning]]
| We cannot name this folder `store` as this named is reserved for the official Vuex integration.

A basic store could look like this:

```js
import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
      lastName: 'Michael',
      firstName: 'Michael',
    };
  },
  getters: {
    fullName: state => `${state.firstName} ${state.lastName}`,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
```

We can use this store in any Vue component:

```vue
<template>Counter: {{ store.counter }}</template>

<script setup lang="ts">
import { useStore } from '@/stores/counter';

const store = useStore();
</script>
```

## Setup Electron

[[info]]
| Read this [introduction](https://quasar.dev/quasar-cli/developing-electron-apps/introduction) if you are new to Electron.

In order to develop/build a Quasar Electron app, we need to add the Electron mode to our Quasar project:

```bash
$ quasar mode add electron
```

Every Electron app has two threads: the main thread (deals with the window and initialization code – from the newly created folder `/src-electron`) and the renderer thread (which deals with the actual content of your app from `/src`).

The new folder has the following structure:

```
.
└── src-electron/
├── icons/                # Icons of your app for all platforms
|   ├── icon.icns         # Icon file for Darwin (MacOS) platform
|   ├── icon.ico          # Icon file for win32 (Windows) platform
|   └── icon.png          # Tray icon file for all platforms
├── electron-preload.js   # (or .ts) Electron preload script (injects Node.js stuff into renderer thread)
└── electron-main.js      # (or .ts) Main thread code
```

Now we are ready to start our Electron application:

```bash
$ quasar dev -m electron
```

This command will open up an Electron window which will render your app along with Developer Tools opened side by side.

[Read the official docs](https://quasar.dev/quasar-cli/developing-electron-apps/) for additional and detailed information about developing Electron apps with Quasar.

## Control Electron from Vue code

If we want to use Electron features like opening a file dialog, we need to implement some code to do that.

For example, if we want to show a dialog to open files, Electron provides the [dialog API](https://www.electronjs.org/docs/latest/api/dialog/) to display native system dialogs for opening and saving files, alerting, etc.

First we need to install

```bash
npm install -D @electron/remote
```

If we want to use that from our Vue code we need to add some code to `src-electron/electron-preload.js`:

```js
import { contextBridge } from 'electron';
// highlight-next-line
import { dialog, app, shell } from '@electron/remote';

contextBridge.exposeInMainWorld('electronApi', {
  openFileDialog: async (title, folder, filters) => {
    const response = await dialog.showOpenDialog({
      title,
      filters,
      properties: ['openFile', 'multiSelections'],
    });
    return response.filePaths;
  }
}
```

Next we create an `electron-api.ts` file to access this code from within our Vue application: 

```ts
export interface ElectronFileFilter {
  name: string;
  extensions: string[];
}

export interface ElectronApi {
  openFileDialog: (
    title: string,
    folder: string,
    filters: ElectronFileFilter
  ) => Promise<string[]>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const electronApi: ElectronApi = (window as { electronApi: ElectronApi })
  .electronApi;
```

Now we can use this API anywhere in our Vue component: 

```js

```

## Conclusion

If you liked this article, follow me on [Twitter](https://twitter.com/mokkapps) to get notified about new blog posts and more content from me.

Alternatively (or additionally), you can also [subscribe to my newsletter](https://mokkapps.de/newsletter).
