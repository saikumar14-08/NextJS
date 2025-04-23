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
