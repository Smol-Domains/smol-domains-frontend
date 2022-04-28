# Smol Domains frontend

Smol Domains - Web3 Domains for the Smolverse

https://smol.domains 

## Quickstart

```bash
npm install
npm run dev
```

## .env

Create a .env file and enter the following in it:

```bash
VITE_ALCHEMY_ARBITRUM_KEY=key-from-alchemy
```

## Branches & deployment

- **Important:** Never commit directly to the `main` branch.
- Development is done on the `develop` branch (or temporary branches which then merge with the `develop` branch).
- Deployment: When you want to make deployment to the production server (smol.domains), merge `develop` into the `main` branch. A CI/CD system on GitHub (GitHub Actions) will automatically build and deploy the new code to GitHub Pages.