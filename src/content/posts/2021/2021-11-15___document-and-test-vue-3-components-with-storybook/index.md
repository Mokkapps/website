---
title: "Document & Test Vue 3 Components With Storybook"
categories:
  - "development"
  - "tools"
  - "frontend"
  - "vue-js"
cover: "images/cover.jpg"
---

[Storybook](https://storybook.js.org/) is my tool of choice for UI component documentation. Vue is very well supported in the Storybook ecosystem and has first-class integrations with [Vuetify](https://github.com/vuetifyjs/vue-cli-plugins/tree/master/packages/vue-cli-plugin-vuetify-storybook) and [NuxtJS](https://storybook.nuxtjs.org/). It also has official support for [Vue 3](https://v3.vuejs.org/), the latest major installment of Vue.js.

In this article I will demonstrate how you can setup Storybook with zero-config and built-in TypeScript support, auto-generate controls and documentation for your Vue components and how to perform automated snapshot and visual testing.

## Why Storybook? 

We have components which can have many props, states, slots etc. which influences its visual representation and more.

This causes some typical problems for any frontend developer:
  - How can I get an overview of all different state and kinds of the component? 
  - How can I guarantee that my changes don't influence other state and kinds?
  - How can I show the current implementation to non-developer team members? 

This is where Storybook will help you.

For each component we'll write a `<COMPONENT_NAME>.stories.ts` file that lists all the different states and kinds of our component.

## Storybook Setup

First, we need to create a Vue 3 application. I'm using [Vite](https://vitejs.dev/), a new build tool from Evan You, the creator of Vue.js:

```bash
npm install vite@latest
```

Setting up Storybook in an existing Vue 3 project can be done with zero configuration: 

```bash
npx sb init
```

This command install Storybook with its dependencies, configures the Storybook instance and generates some demo components and stories which are located at `src/stories`: 

![Storybook Vue 3 Generated Files](https://blog.logrocket.com/wp-content/uploads/2021/10/Storybook-stories-folder.png)

You can now run the following command which starts a local development server for Storybook and automatically opens it in a new browser tab: 

```bash
npm run storybook
```

![Storybook Vue 3 Demo]()

>When you navigate to Storybook locally, you’ll see examples of how to write Vue 3 stories, links to common configurations, as well as the “essential” addons that ship with Storybook. TypeScript (TS) support is built-in. Learn more in the official documentation.
> 
> 

## Our Demo

>Now that we have a working app and a running Storybook instance, We’ll create a simple app with some basic buttons, cards and text, then we’ll create their stories, tweak their states and setup basic automated visual testing.

For this article we'll use our own `Counter.vue` component to demonstrate the Storybook integration. The source code is available at [GitHub](https://github.com/Mokkapps/vue-3-storybook-demo).

Let's first take a look at `Counter.vue`: 

```vue
<template>
  <p>{{ label }}</p>
  <div class="container" :class="variant">
    <button @click="increment()">+</button>
    <p class="value">{{ count }}</p>
    <button @click="decrement()">-</button>
  </div>
</template>

<script lang="ts">
import { ref, watch, PropType } from 'vue';
import {Variant} from "./types";

/**
 * This is my amazing counter component
 *
 * It can increment and decrement!
 */
export default {
  props: {
    initialValue: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: 'Counter'
    },
    allowNegativeValues: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String as PropType<Variant>,
      default: Variant.Default
    }
  },
  emits: ['counter-update'],
  setup(props, context) {
    const count = ref(props.initialValue);

    const increment = () => {
      count.value += 1;
    };
    const decrement = () => {
      const newValue = count.value - 1;
      if (newValue < 0 && !props.allowNegativeValues) {
        count.value = 0;
      } else {
        count.value -= 1;
      }
    };

    watch(count, (value) => {
      context.emit('counter-update', value);
    });

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
<style scoped></style>
```

The component 


## Auto-generated controls and documentation

## Test

[TEST](https://morioh.com/p/1bb54b5a8cd4)

## Conclusion

If you liked this article, follow me on [Twitter](https://twitter.com/mokkapps) to get notified about new blog posts and more content from me.

Alternatively (or additionally), you can also [subscribe to my newsletter](https://mokkapps.de/newsletter).

LINKS:

- [1](https://storybook.js.org/blog/storybook-vue3/)
- [2](https://scalingo.com/blog/guide-storybook-vue-js)
- [3](https://blog.logrocket.com/getting-started-storybook-vue-3/)
