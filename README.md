# Delivery-App

## Prerequisites

Make sure you have the following software installed on your computer:

- Node.js - version 12 or higher
- npm - usually installed with Node.js

## Installation

1. Clone the repository to your computer
2. Install dependencies for both the client and server parts:

  cd client/
  
  npm install

  cd ../server/
  
  npm install

3. To ensure proper functionality of the server part, replace the link to the client in the `index.js` file from `https://chernetskyi-delivery-app.netlify.app` to `http://localhost:5173`, and update the client link in the `config/corsOptions` file as well. Also, create a `.env` file to store your variables and set up the corresponding MongoDB database:

PORT=5000

DB_URL='YOUR DATABASE LINK'

4. To ensure proper functionality of the client part, replace the `baseUrl` for the API in `app/api/apiSlice` from `https://delivery-api-kappa.vercel.app/api` to `http://localhost:5000/api`.

5. Start the client and server separately:

cd client/

npm run dev

cd ../server/

npm run dev
