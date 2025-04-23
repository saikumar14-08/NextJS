This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# What is NextJS and why do we use NextJS?

A. NextJS is Javascript library built on the top of the react which handles the disadvantages of using react.
-> In react, for routing we have to install external library but NextJs handles it by default.
-> React uses client side rendering which means HTML is loaded first and then JS loads which effects SEO of the application. But nectJs uses Server side rendering for better SEO.

# NextJs project run?

A. When we type npm run dev in console. The command from package.json executes and flow comes to layout.jsx i.e., RootLayout component in layout.jsx loads and it is entry point for the application running.

# React Server Components(RSC)

A. RSC is a new architecture introduced by react and adopted by nextJS.
-> This architecture introduces a new approach in creating react components by dividing them into two distinct types:

1. Server Components
2. Client Components
   By default, NextJs treats all components as Server components. These components can perform server-side tasks like reading files or fetching data directly from a database.
   -> The disadvantage is it can't use react hooks or handle user interactions.
   Client components: To create a Client component, you'll need to add the "use client" directive at the top of your component file.
   -> Client components can't perform server-side tasks(reading files), but they can use hooks and handle user interactions.
   -> Client components are traditional react components.

Routing:
-> Next.js has a file-system based routing system that means your file structure determines your routes.
Routing conventions or rules:
-> All routed must be inside the app folder.
-> Route files must be named either page.js or page.tsx
-> Each folder represents a segment of url path.
If you all the above, the file automatically will be available as a route.

Creating routes:
-> In src folder, create an app folder which is the entry folder to our routing.
-> In app folder, create page.tsx which is the home route.
-> To create a route, create a folder->page.tsx. Ex: Create about folder in app folder and add page.tsx file.
-> Make sure your components are defualt exports. named exports creates errors.
-> You might also face an hydration issue. This can be caused by our browser extensions, theme changes etc., try to test in incognito and this doesn't matter in production but safe to check production build.
-> If you remove extensions and themes you might still see the error because of the build. So delete .next folder.
-> Routes are directly typed to their folder names in the directory.

Nested routes:
-> Just create a folder in your app folder. Ex: blog
-> In blog folder create a folder called as first and create page.tsx in that folder.
-> Now your route will be /blog/first

Dynamic routes:
-> To dynamic routes you have to create a folder name inside [] which tells next that it is a dynamic router.
->

Nested Dynamic Routes:
-> Just like nested routes with dynamic features.

Catch-all segments:
-> Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].
-> For example, docs/[...slug]/page.tsx will match /docs/reviews, but also /docs/reviews/1, /docs/reviews/one/1/t-shirts, and so on.

Optional Catch-all segments:
-> Catch-all Segments can be made optional by including the parameter in double square brackets: [[...segmentName]].
-> The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched.(/docs)
