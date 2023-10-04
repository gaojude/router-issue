## Setup

Suppose root layout renders parallel routes back to back, where one route
matches a dynamic route from parallel route `@a` and the other matches a
catch-all route from parallel route `@b`.

```
└── app
    ├── @a
    │   ├── [dynamic]
    │   │   └── page.tsx
    │   └── page.tsx
    ├── @b
    │   ├── [...catchAll]
    │   │   └── page.tsx
    │   └── page.tsx
    ├── layout.tsx
    └── page.tsx
```

## Problem

When you have a parallel routes where one route matches a dynamic route and
the other matches a catch-all route, the dynamic route will be executed, but
neither will be rendered.

## Steps

Run this example using `npm run dev` and navigate to `/abc` and `/abc/def`, and
you will see that the dynamic route is executed (by checking the console),
but neither is rendered.