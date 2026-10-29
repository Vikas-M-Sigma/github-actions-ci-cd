# GitHub Actions CI/CD Demo

A small static website for learning a continuous integration and delivery workflow without Docker.

## What the workflow does

- Runs checks when code is pushed to `main` or a pull request targets `main`.
- Builds the website into the `dist/` folder.
- On a push to `main`, publishes the built website to GitHub Pages.

## Run it locally

Requires Node.js 22 or later. From this folder, run:

```powershell
npm test
npm run build
```

The built site will be in `dist/`. Open `dist/index.html` in a browser to view it.

## Enable GitHub Pages

In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. The workflow deploys after a successful push to `main`.

GitHub Pages publishes a public website. On GitHub Free, the repository must also be public to use Pages.
