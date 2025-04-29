This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### TODO
1. `signup/page.tsx` backend, force at least one interest chosen.
2. `block-button.tsx`, `follow-button.tsx`, `like-button.tsx` backend functionality.
    - If following, display `Following`, if not, `Follow`.
    - `LikeButton` updates database rows.
3. `PostCard` content should be fetched from database.
4. User auth logic should be implemented.
5. `Header` should display user info if auth.
6. Type `postCard` has data `username`, `name`, etc. Removed `id`.
7. Comments should be fetched from database and functionality to be implemented.
8. `postCard` info should be fetched from database using id from unique username.

