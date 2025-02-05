# Getting started:
Fork and clone this repository, and run

    npm install

Inside the repository.

Start editing the **src/app.js** file for the react part, and **src/server/server.ts** for the express.js server part.

Run:

    npm run dev

This will start the react app and the server app at the same time, with hot reload enabled for both of them.

React app will run on **localhost:3000** and the express server needs to be created, to run on **localhost:3001**.

You should use:

    import cors from "cors";
    app.use(cors());

to enable CORS for the express.js server, so that it accepts http requests from the react app.

For the backend:

Create a variable that stores a list of items, that look like:
[
  {
    id: 0,
    content: "Hello"
  },
  {
    id: 1,
    content: "World"
  }
]

Implement CRUD operations for this list, using "/api/items" as the base API url.

For the frontend:

Update the ItemComponent by adding a button called "Sort by Recent" and another button "Sort by Oldest" which will sort the items in the array from most recent to oldest, and from oldest to most recent.
use .sort() to sort your items.

For the Backend:

Update the items in the items array to also contain the timestamp of the moment they were created:

[
  {
    id: 0,
    content: "Hello",
    timestamp: 138234877654
  },
  {
    id: 1,
    content: "World",
    timestamp: 138234877657
  }
]
