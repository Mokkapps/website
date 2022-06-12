---
title: 'How to Create a Custom Code Block With Nuxt Content v2'
categories:
  - 'development'
  - 'vue-js'
  - 'nuxt-js'
cover: 'images/cover.jpg'
---

Code blocks are essential for blogs about software development. In this article, I want to show you how can define a custom code block component in [Nuxt Content v2](https://content.nuxtjs.org/) with the following features:

- Custom styling for code blocks inside Markdown files
- Show language name (if available)
- Show file name (if available)
- Show a "Copy Code" button

## Nuxt Content v2

[Nuxt Content v2](https://content.nuxtjs.org/) is a [Nuxt 3](https://v3.nuxtjs.org/) module that reads local files from the `/content` directory in your project. It supports `.md`, `.yml`, `.csv` and `.json` files. Additionally, it's possible to use Vue components in Markdown with the [MDC Syntax](https://content.nuxtjs.org/guide/writing/mdc).

## Setup Nuxt App

First, let's start a new Nuxt Content project with:

```bash
npx nuxi init nuxt-custom-code-blocks -t content
```

Then we need to install the dependencies in the `nuxt-custom-code-blocks` folder:

```bash
yarn install
```

Now we can start the Nuxt content app in development mode:

```bash
yarn dev
```

A browser window should automatically open for `http://localhost:3000`. Alternatively, you can start playing with Nuxt Content in your browser using [StackBlitz](https://stackblitz.com/github/nuxt/starter/tree/content) or [CodeSandbox](https://codesandbox.io/s/github/nuxt/starter/tree/content).

The following [StackBlitz sandbox](https://stackblitz.com/edit/nuxt-content-v2-custom-code-blocks) demonstrates the application we create in this article:

<iframe width="100%" height="500" src="https://stackblitz.com/edit/nuxt-content-v2-custom-code-blocks?embed=1&"></iframe>

## Custom Prose Component

[Prose](https://content.nuxtjs.org/guide/writing/markdown#prose) represents the HTML tags output from the Markdown syntax in Nuxt Content. Nuxt Content provides a Vue component for each HTML tag like links, title levels and more. 

It's possible to override these Vue components and this is exactly what we'll do to create a custom code block component.

To customize a Prose component we have to perform these steps:

- Checkout the original component sources.
- Use the exact same props.
- Name it the same in your components/content/ directory.

In our example, we want to override [ProseCode](https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/ProseCode.vue) which is Nuxt Content's default Vue component to render code blocks in Markdown files.

To override the component, we create `ProseCode.vue` in the `components/content` directory and use the exact same props that are defined in the default component:

```vue
<template>
  <slot />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
);
</script>
```

Now we can customize this component however we want. 

## Show Language

First, we want to show the name of the language on the top right, if it is available. 

```vue
<template>
  <div class="container">
    // highlight-start
    <span
      v-if="languageText"
      :style="{ background: languageBackground, color: languageColor }"
      class="language-text"
    >
      {{ languageText }}
    </span>
    // highlight-end
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
);

const languageMap: Record<
  string,
  { text: string; color: string; background: string }
> = {
  vue: {
    text: 'vue',
    background: '#42b883',
    color: 'white',
  },
  js: {
    text: 'js',
    background: '#f7df1e',
    color: 'black',
  },
};

const languageText = computed(() =>
  props.language ? languageMap[props.language]?.text : null
);
const languageBackground = computed(() =>
  props.language ? languageMap[props.language]?.background : null
);
const languageColor = computed(() =>
  props.language ? languageMap[props.language]?.color : null
);
</script>

<style scoped>
.container {
  background: #1e1e1e;
  padding-top: 1em;
}

.language-text  {
  position: absolute;
  top: 0;
  right: 1em;
  padding: 0.25em 0.5em;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom-right-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
}
</style>
```

We define a map called `languageMap` that defines the displayed text, the CSS background and text color for each programming language. 
Based on this map we style the language inside our template.

## Conclusion

It's effortless to create a Markdown file-based blog using [Nuxt Content v2](https://content.nuxtjs.org/). This article demonstrates the basic steps to set up such a blog.

You can expect more [Nuxt 3](https://v3.nuxtjs.org/) posts in the following months as I plan to blog about interesting topics that I discover while rewriting my portfolio website.

If you liked this article, follow me on [Twitter](https://twitter.com/mokkapps) to get notified about new blog posts and more content from me.

Alternatively (or additionally), you can also [subscribe to my newsletter](https://mokkapps.de/newsletter).
