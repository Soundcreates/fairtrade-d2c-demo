"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/data/mock";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand-logo${light ? " brand-logo-light" : ""}`} aria-label="Brand Avenue home">
    <span className="brand-mark">BA</span><span className="brand-wordmark"><b>BRAND</b><b>AVENUE</b></span>
  </Link>;
}

export function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return <img className={className} src={failed ? "/product-fallback.svg" : src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

export function Price({ price, mrp, compact = false }: { price: number; mrp?: number; compact?: boolean }) {
  const off = mrp ? Math.round((1 - price / mrp) * 100) : 0;
  return <span className="price-line"><b>₹{price.toLocaleString("en-IN")}</b>{mrp && <><del>₹{mrp.toLocaleString("en-IN")}</del>{!compact && <em>{off}% OFF</em>}</>}</span>;
}

export function Rating({ value, count }: { value: number; count?: number }) {
  return <span className="rating"><Star size={12} fill="currentColor" /> {value.toFixed(1)}{count !== undefined && <i> | {count > 999 ? `${(count / 1000).toFixed(1)}k` : count}</i>}</span>;
}

export function ProductCard({ product, wishlisted, onWish, onAdd }: {
  product: Product; wishlisted: boolean; onWish: (id: string) => void; onAdd: (id: string) => void;
}) {
  return <article className="product-card">
    <div className="product-photo-wrap">
      <Link href={`/product/${product.id}`} className="product-photo-link" aria-label={`View ${product.brand} ${product.title}`}>
        <ProductImage src={product.image} alt={`${product.brand} ${product.title}`} className="product-photo" />
      </Link>
      {product.badge && <span className={`product-tag ${product.badge === "NEW" ? "tag-new" : ""}`}>{product.badge}</span>}
      <button className={`wish-button${wishlisted ? " active" : ""}`} aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"} onClick={() => onWish(product.id)}><Heart size={17} fill={wishlisted ? "currentColor" : "none"} /></button>
      <button className="quick-add" onClick={() => onAdd(product.id)}><ShoppingBag size={15} /> Quick add</button>
    </div>
    <div className="product-copy">
      <div className="product-brand">{product.brand}</div>
      <Link href={`/product/${product.id}`} className="product-title">{product.title}</Link>
      <Rating value={product.rating} count={product.reviews} />
      <Price price={product.price} mrp={product.mrp} compact />
      {product.stock < 5 ? <small className="stock-hint">Only {product.stock} left</small> : <span className="product-spacer" />}
    </div>
  </article>;
}

export function ProductRail({ title, products, wishlist, onWish, onAdd, href = "/category/new-arrivals", subtitle }: {
  title: string; products: Product[]; wishlist: string[]; onWish: (id: string) => void; onAdd: (id: string) => void; href?: string; subtitle?: string;
}) {
  return <section className="section-block">
    <div className="section-heading"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div><Link href={href} className="text-link">View all <span>→</span></Link></div>
    <div className="product-rail">{products.map(p => <ProductCard key={p.id} product={p} wishlisted={wishlist.includes(p.id)} onWish={onWish} onAdd={onAdd} />)}</div>
  </section>;
}

export function EmptyState({ title, description, action, href = "/", icon }: { title: string; description: string; action?: string; href?: string; icon?: React.ReactNode }) {
  return <div className="empty-state"><div className="empty-icon">{icon ?? <ShoppingBag size={26} />}</div><h2>{title}</h2><p>{description}</p>{action && <Link href={href} className="button button-primary">{action}</Link>}</div>;
}

export function StatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase().replaceAll(" ", "-");
  return <span className={`status-badge status-${key}`}>{status}</span>;
}

export function Button({ children, variant = "primary", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" | "danger" }) {
  return <button className={`button button-${variant} ${className}`} {...props}>{children}</button>;
}

