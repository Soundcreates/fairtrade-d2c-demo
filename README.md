# Brand Avenue

A polished frontend-only demo for an Indian fashion and lifestyle marketplace, with customer shopping and commerce operations in one mock platform.

## Tech stack

- Next.js 16, React 19 and TypeScript
- Tailwind CSS 4 with a small Brand Avenue CSS design system
- Lucide React icons and Recharts analytics
- Unsplash catalogue photography with a local image fallback
- React state and `localStorage` for demo interactions

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is busy, Next.js prints the alternate local URL.

## Demo roles

The app opens directly on the customer storefront. Use the fixed **Demo: Customer | Admin** switcher at the bottom-right to move between the storefront and `/admin`. There is no login or authentication flow.

## Customer routes

`/`, `/search`, `/category/[slug]`, `/product/[id]`, `/wishlist`, `/cart`, `/checkout`, `/checkout/success`, `/account`, `/account/orders`, `/account/orders/[id]`, `/account/addresses`, `/account/profile`, `/offers`, `/stores`, and `/help`.

## Admin routes

`/admin`, `/admin/orders`, `/admin/orders/[id]`, `/admin/products`, `/admin/products/new`, `/admin/inventory`, `/admin/stores`, `/admin/stores/[code]`, `/admin/sellers`, `/admin/sellers/approvals`, `/admin/approvals/listings`, `/admin/approvals/images`, `/admin/customers`, `/admin/marketing/promotions`, `/admin/marketing/coupons`, `/admin/marketing/homepage`, `/admin/operations/returns`, `/admin/operations/shipments`, `/admin/operations/pos-sync`, `/admin/operations/exceptions`, `/admin/finance/payments`, `/admin/finance/settlements`, `/admin/finance/payouts`, `/admin/reports`, `/admin/fulfilment`, `/admin/audit`, `/admin/team`, and `/admin/settings`.

## Mock data and interactions

Catalogue, orders, reviews, stores, sellers, customers and promotions live in `data/mock.ts`. The storefront and admin share product SKUs and store/order records. Wishlist, cart, recently viewed items, coupons and demo orders persist in local storage; admin edits and approval actions are simulated in browser state.

**Frontend demonstration only. All data and integrations are mocked.** No payment, POS, logistics, seller or other backend integrations are connected.
