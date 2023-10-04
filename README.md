# learn-router
test behaviours of next.js using some examples

```
└── app
    ├── @retailer
    │   └── (header)
    │       ├── about
    │       │   └── page.tsx
    │       └── layout.tsx
    ├── @visitor
    │   └── about
    │       └── page.tsx
    ├── layout.tsx
    └── page.tsx
```

The root layout will always render `@visitor` parallel route and discard `@retailer`.
However, when you navigate to `/about`, you can see that `/@retailer/(header)/layout.tsx` and
`/@retailer/(header)/about/page.tsx` is executed by looking at the `console.log`s.

![CleanShot 2023-10-04 at 12 52 33@2x](https://github.com/gaojude/learn-router/assets/32973745/fa087eec-dae3-4229-9437-fef0e43ee952)
