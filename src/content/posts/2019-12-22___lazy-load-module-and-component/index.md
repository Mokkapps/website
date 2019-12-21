---
title: Lazy Load Module And Component
subTitle:
categories: ['development', 'angular']
cover: cover.png
---

In Angular enterprise applications it is often a requirement to load a configuration from a server via HTTP request which contains a UI configuration. Based on this configuration data, multiple modules are lazy loaded and its routes need to be added dynamically to the application.

In this blog post I want to demonstrate how this can be achieved using Angular 9+.

## Lazy Load Module

Since Angular 9 you would define a lazy loaded module in your routing configuration using the new `import(...)` syntax for `loadChildren`;

```ts
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'lazy',
        loadChildren: () =>
          import('./lazy/lazy.module').then(m => m.LazyModule),
      },
    ]),
  ],
})
export class AppModule {}
```

Angular CLI will then automatically create a separate bundle which is only loaded from the server if the selected route path is visited in your browser. 

[[warning]]
| My warning paragraph


<iframe width="100%" height="500" src="https://stackblitz.com/github/mokkapps/angular-manual-lazy-load-demo?embed=1&file=src/app/app.component.ts"></iframe>
