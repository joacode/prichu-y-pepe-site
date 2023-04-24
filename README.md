#### My girlfriend and I were going to get married and we needed a website with all the events data and the RSVP form.

#### We tried a lot of website templates/apps but none of them fit our necessities, either because we didn't like the design or because it wasn't customizable.

#### Almost two months before the wedding we decided to code it. In a bit of a rush, a week later we were deploying and testing the website.

```bash
  const welcomeMessage = () => {
       return 'Here it is... Enjoy!'
   }
```

Welcome to my [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)!

## Getting Started

First, create a `.env` file with the content of the `.env.example` file to allow the connection to a local database.

Then, you can install the dependencies with:

```bash
npm install
# or
yarn install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The endpoints for the api are in the `/pages/api` directory. This folder is mapped to `/api/*`. Files in this directory
are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deployed on Vercel

There is a live version of the app in [Expense Tracker - Vercel](https://https://joacode-expense-tracker.vercel.app/).
For the database the app is using [MongoDB](https://www.mongodb.com/).
