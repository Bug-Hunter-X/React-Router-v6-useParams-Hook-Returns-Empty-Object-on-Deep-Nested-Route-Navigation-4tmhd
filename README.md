# React Router v6 useParams Bug: Deep Nested Route Issue

This repository demonstrates a bug in React Router v6 where the `useParams` hook returns an empty object when navigating directly to a deeply nested route, bypassing intermediate routes. This issue is particularly noticeable with server-side rendering or lazy-loaded routes.

The `NestedRouteBug.js` file contains the problematic code, while `NestedRouteSolution.js` shows how to resolve the problem using the `useLocation` hook to ensure that the parameters are correctly obtained even if the routes are skipped.

## How to reproduce:

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the behavior by navigating directly to a nested route.  You'll see the incorrect behavior in the `NestedRouteBug.js` example, and the corrected behavior in the `NestedRouteSolution.js` example.