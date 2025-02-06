# Next.js getServerSideProps - Failed to Fetch Bug

This repository demonstrates a common issue encountered when using `getServerSideProps` in Next.js applications to fetch data from external APIs.  The problem occurs because `node-fetch` isn't automatically available in the server-side environment, leading to a `TypeError: Failed to fetch` error during the build or runtime.

## Bug Description

The `about.js` file attempts to fetch data from the Rick and Morty API using `node-fetch` within `getServerSideProps`.  However, this results in a failure to retrieve the data because `node-fetch` is not properly configured or included.

## Solution

The solution involves correctly installing and importing `node-fetch`.

1. **Install node-fetch:**
   ```bash
   npm install node-fetch
   ```

2. **Import correctly:** Ensure the correct import path is used in your `getServerSideProps` function.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev` (or similar).  Notice the error on the About page.
4. Compare the `about.js` and `aboutSolution.js` files to see the solution.