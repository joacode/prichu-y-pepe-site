#### This project was born from a necessity to keep track of shared expenses my girlfriend and I had when we first moved in together.

#### We tried a lot of apps but none of them fit our use case since we only wanted to keep track of combined expenses and not split the total.

#### It seemed the only way to solve it was to code it, soooooo

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
