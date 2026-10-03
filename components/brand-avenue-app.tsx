"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { orders, products, stores } from "@/data/mock";
import { StorefrontHeader } from "@/components/storefront-header";
import { StorefrontPage } from "@/components/storefront";
import { AdminPage } from "@/components/admin";

export type CartLine = { id: string; quantity: number; size: string; color: string };
type PersistedDemo = { cart: CartLine[]; wishlist: string[]; recent: string[]; createdOrders: typeof orders; lastOrder: string; lastItems: CartLine[]; coupon: string };
const empty: PersistedDemo = { cart: [], wishlist: [], recent: [], createdOrders: orders, lastOrder: "BA10298423", lastItems: [], coupon: "" };

export default function BrandAvenueApp() {
  const path = usePathname();
  const router = useRouter();
  const [demo, setDemo] = useState<PersistedDemo>(empty);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try { const saved = localStorage.getItem("brand-avenue-demo"); if (saved) setDemo({ ...empty, ...JSON.parse(saved) }); } catch { /* retain clean demo defaults */ }
    setHydrated(true);
  }, []);
  useEffect(() => { if (hydrated) localStorage.setItem("brand-avenue-demo", JSON.stringify(demo)); }, [demo, hydrated]);
  useEffect(() => { if (path.startsWith("/product/")) setDemo(current => ({ ...current, recent: [path.split("/").at(-1)!, ...current.recent.filter(id => id !== path.split("/").at(-1))].slice(0, 8) })); }, [path]);
  useEffect(() => { if (!toast) return; const timer = window.setTimeout(() => setToast(""), 2600); return () => window.clearTimeout(timer); }, [toast]);

  const notify = (message: string) => setToast(message);
  const addToBag = (id: string, size?: string, color?: string) => {
    const item = products.find(product => product.id === id);
    setDemo(current => {
      const selectedSize = size || item?.sizes[0] || "One Size";
      const selectedColor = color || item?.colors[0] || "#232323";
      const existing = current.cart.find(line => line.id === id && line.size === selectedSize && line.color === selectedColor);
      return { ...current, cart: existing ? current.cart.map(line => line === existing ? { ...line, quantity: line.quantity + 1 } : line) : [...current.cart, { id, quantity: 1, size: selectedSize, color: selectedColor }] };
    });
    notify("Added to bag");
  };
  const toggleWish = (id: string) => {
    const saved = demo.wishlist.includes(id);
    setDemo(current => ({ ...current, wishlist: saved ? current.wishlist.filter(productId => productId !== id) : [id, ...current.wishlist] }));
    notify(saved ? "Removed from wishlist" : "Saved to wishlist");
  };
  const updateCart = (cart: CartLine[]) => setDemo(current => ({ ...current, cart }));
  const applyCoupon = (coupon: string) => setDemo(current => ({ ...current, coupon }));
  const placeOrder = () => {
    const id = `BA${10298423 + demo.createdOrders.length}`;
    setDemo(current => {
      const subtotal = current.cart.reduce((sum, line) => sum + (products.find(p => p.id === line.id)?.price || 0) * line.quantity, 0);
      const rate = current.coupon === "FESTIVE20" ? .2 : .1;
      const cap = current.coupon === "FESTIVE20" ? 1200 : 300;
      const total = subtotal - (current.coupon ? Math.min(cap, Math.round(subtotal * rate)) : 0);
      return { ...current, cart: [], lastItems: current.cart, coupon: "", lastOrder: id, createdOrders: [{ ...orders[0], id, status: "Order Confirmed", date: "Today", customer: "Aarav Sharma", amount: total }, ...current.createdOrders] };
    });
    notify("Order confirmed — thank you!"); router.push("/checkout/success");
  };
  const createAdminOrder = (customer: string, productId: string, quantity: number) => {
    const product = products.find(p => p.id === productId) || products[0];
    setDemo(current => {
      const id = `BA${10298423 + current.createdOrders.length}`;
      return { ...current, createdOrders: [{ ...orders[0], id, customer, date: "Today", status: "Order Confirmed", items: quantity, product: product.title, sku: product.sku, productId, amount: product.price * quantity, store: stores[0].name }, ...current.createdOrders] };
    });
    notify("Demo order created");
  };

  const actions = { addToBag, toggleWish, updateCart, placeOrder, notify };
  const shared = { cart: demo.cart, wishlist: demo.wishlist, recent: demo.recent, orders: demo.createdOrders, lastOrder: demo.lastOrder, lastItems: demo.lastItems, coupon: demo.coupon, applyCoupon, ...actions };
  const admin = path.startsWith("/admin");
  return <>
    {admin ? <AdminPage pathname={path} orders={demo.createdOrders} createOrder={createAdminOrder} notify={notify} /> : <>
      <StorefrontHeader cartCount={demo.cart.reduce((n, line) => n + line.quantity, 0)} wishCount={demo.wishlist.length} />
      <StorefrontPage pathname={path} {...shared} />
    </>}
    {!admin && <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {[ ["Home", "/", "⌂"], ["Categories", "/category/women", "▦"], ["Search", "/search", "⌕"], ["Wishlist", "/wishlist", "♡"], ["Account", "/account", "♙"] ].map(([label, href, symbol]) => <a key={label} href={href}><span>{symbol}</span>{label}</a>)}
    </nav>}
    <div className="demo-switcher"><span>DEMO</span><a href="/" className={!admin ? "selected" : ""}>Customer</a><a href="/admin" className={admin ? "selected" : ""}>Admin</a></div>
    {toast && <div className="toast" role="status"><span className="toast-check">✓</span>{toast}</div>}
    {hydrated && <span className="sr-only">Demo state ready</span>}
  </>;
}
