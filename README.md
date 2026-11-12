# Simple React Full Stack

Boilerplate to build a full stack web application using **React 19**, **Node.js**, **Express 5** and **Webpack 5** (Babel, ESLint 9 flat config, Nodemon, Concurrently). Modernized from the Hackernoon tutorial:
https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708

Requires **Node.js 20+**.

## Folder structure

All source code lives in `src/`:
- `src/client/` – frontend React code (JS, CSS, assets)
- `src/server/` – backend Node.js/Express code
- `public/index.html` – HTML template used by html-webpack-plugin

## Modernizations vs. the 2018 tutorial

| Old (2018) | Current |
|---|---|
| React 16 / `ReactDOM.render` | React 19 / `createRoot` |
| Webpack 4 | Webpack 5 (`output.clean`, asset modules) |
| `babel-polyfill` | `@babel/preset-env` + `core-js` `useBuiltIns: 'usage'` |
| `url-loader` | webpack 5 asset modules |
| `clean-webpack-plugin` | `output.clean: true` |
| `plugin-proposal-class-properties` | included in `@babel/preset-env` (ES2022 class fields) |
| ESLint 8 `.eslintrc.json` + `babel-eslint` + Airbnb | ESLint 9 `eslint.config.mjs` (flat config; Airbnb has no v9 support) |
| Express 4 | Express 5 |

## How it works

**Development** (`npm run dev`) – two servers run concurrently:
- `webpack-dev-server` serves the client on port 3000 (hot/live reloading) and proxies `/api` calls to the backend.
- `nodemon` runs the Express server on port 8080 and restarts it when server code changes.

**Production** (`npm start`) – one server only:
- Webpack bundles the client into `dist/` and Express serves the static files.

## Quick Start

```bash
cd simple-react-full-stack
npm install        # (or yarn)

# Development: client on http://localhost:3000, API on :8080
npm run dev

# Production: builds dist/ and serves everything on :8080
npm start
```
