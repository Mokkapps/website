---
title: How I Built My Website With Hugo And Netlify
subTitle: Learn how I built my static portfolio website
categories: ["development", "frontend"]
cover: cover.png
---

End of last year I started working on my [private portfolio website](https://www.mokkapps.de) and started to research how to easily build and deploy such static websites.

## The Tools

### Hugo

I discovered [Hugo](https://gohugo.io/) which is a very popular open-source static site generator. It is amazingly fast, very flexible and it makes fun to build websites with this generator.

Just follow the [official "Quick Start"](https://gohugo.io/getting-started/quick-start/) and you are running a beautiful static website locally on your machine in less than five minutes.

There are many [themes](http://themes.gohugo.io/) available which are often highly customizable.

The basic workflow looks this way:

- Serve your website locally using `hugo serve`
- If you are done you generate the static website content running `hugo`
- Publish the generated website content (see next chapter)

### Netlify

[Netlify](https://www.netlify.com/) provides a platform to automate code to create high-performant sites and web-apps. Basically you just have to push your code and Netlify takes care of the rest.

Setting up Netlify is quite easy if your code is already on GitHub, GitLab or Bitbucket. You just need to select your Git provider, define which build commands should be executed and in which folder the final content is located.

For more details check the [official "Getting Started" guide](https://www.netlify.com/docs/#getting-started).

Netlify provides a free subscription model which I am currently using. Additionally there are many additional features which you have to pay. Check [the official Pricing page](https://www.netlify.com/docs/#getting-started) for more details.

## My Setup

I started using a [simple static website](https://github.com/Mokkapps/mokkapps-website) which I hosted manually on a web-server without using a service like Netlify. The custom domain I used is `www.mokkapps.de`.

Some month ago I decided to start my own tech blog about software development topics and I wanted to continue using Hugo. Therefore I had to choose another Hugo theme as [the current theme](https://github.com/sethmacleod/prologue) was not capable of content management which is necessary for a blog.

After a short research I found [KISS](https://github.com/ribice/kiss) which had the style and the functionality I was looking for. Blog posts are written in [Markdown](https://en.wikipedia.org/wiki/Markdown) which I really like for writing articles and other text-based stuff.

I wanted the blog to be accessible via `www.mokkapps.de/blog` so I had to generate the blog page using Hugo and drop it on the web-server in a `blog` folder. This was a manual process which I wanted to automate.

Luckily, platforms like Netlify can help at automating such tasks. I have integrated both websites in Netlify but still had to made the connection from one Hugo website to another.

Netlify provides [Redirects](https://www.netlify.com/docs/redirects/) for such cases. So I added a static `_redirects` file to my main page and now it correctly links to the second page hosted on Netlify:

`/blog/* https://mokkapps-blog.netlify.com/:splat 200`

Now all I have to do this is write my blog posts or make any other changes on my websites and push them to my Git provider. Netlify then automatically builds and deploy the pages.

## Conclusion

It makes really fun to build and deploy websites using services like Hugo and Netlify. I can highly recommend to take a look at them, maybe you can need them for your current or future projects.

## Links

- [Source Code Website](https://github.com/Mokkapps/mokkapps-website)
- [Source Code Blog Website](https://github.com/Mokkapps/mokkapps-blog)
- [Hugo](https://gohugo.io/)
- [Netlify](https://www.netlify.com/)
