# Bug: 301 Moved Permanently from middleware ended up 307 Temporary Redirect

This repo will help you reproduce the bug

## How to set it up

```sh
git clone https://github.com/strofimo/cf-middleware-move-permanently.git
cd cf-middleware-move-permanently
npm i
```

### Run NextJS Dev to see what are the expected redirect result
```sh
npm run dev
# accessing http://localhost:3000 lead to 301 Moved Permanently
# ▲ Next.js 14.1.0
# - Local:        http://localhost:3000
```

This is the expected behave for a next js app.

### Run Cloudflare pages preview using wrangler
```sh
npm run preview
# accessing http://localhost:8788 lead to 307 Temporary Redirect
# [wrangler:inf] Ready on http://localhost:8788
```