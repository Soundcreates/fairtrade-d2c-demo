"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, UserRound, Heart, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared";

const navItems = [
  ["Men", "men"], ["Women", "women"], ["Kids", "kids"], ["Footwear", "footwear"], ["Beauty", "beauty"], ["Accessories", "accessories"], ["Home & Living", "home"], ["Brands", "brands"], ["New Arrivals", "new-arrivals"], ["Sale", "sale"],
];
const suggestions = ["Nike Shoes", "Women's Kurtas", "Oversized T-Shirts", "Handbags", "Running Shoes", "Watches"];

export function StorefrontHeader({ cartCount, wishCount }: { cartCount: number; wishCount: number }) {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const [menu, setMenu] = useState(false);
  const [city, setCity] = useState("Mumbai 400001");
  const matches = suggestions.filter(s => query && s.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
  const search = (value = query) => { if (value.trim()) window.location.href = `/search?q=${encodeURIComponent(value.trim())}`; };

  return <header className="store-header">
    <div className="announcement"><span>Free delivery on orders above ₹999</span><span className="announcement-dot">•</span><span>Easy 7-day returns</span><span className="announcement-right">Store pickup available at 20+ locations</span></div>
    <div className="main-nav-wrap">
      <div className="main-nav">
        <button className="mobile-menu-button" aria-label={menu ? "Close menu" : "Open menu"} onClick={() => setMenu(!menu)}>{menu ? <X size={22} /> : <Menu size={22} />}</button>
        <Logo />
        <div className="header-search-wrap">
          <form className="header-search" onSubmit={e => { e.preventDefault(); search(); }}>
            <Search size={19} /><input aria-label="Search for products, brands and categories" placeholder="Search for products, brands and categories" value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false), 180)} /><button aria-label="Search"><Search size={17} /><span>Search</span></button>
          </form>
          {focus && (query ? matches : suggestions.slice(0, 4)).length > 0 && <div className="search-suggest"><small>{query ? "SUGGESTED SEARCHES" : "TRENDING SEARCHES"}</small>{(query ? matches : suggestions.slice(0, 4)).map(s => <button key={s} onMouseDown={() => search(s)}><Search size={15} />{s}<span>↗</span></button>)}</div>}
        </div>
        <div className="header-actions">
          <button className="location-action" onClick={() => setCity(city === "Mumbai 400001" ? "Thane 400601" : "Mumbai 400001")}><MapPin size={19} /><span><small>Deliver to</small><b>{city}<ChevronDown size={12} /></b></span></button>
          <Link href="/account" className="header-action"><UserRound size={19} /><span><small>Profile</small><b>Account</b></span></Link>
          <Link href="/wishlist" className="header-action header-heart"><span className="nav-icon-wrap"><Heart size={20} />{wishCount > 0 && <i>{wishCount}</i>}</span><span><small>Saved</small><b>Wishlist</b></span></Link>
          <Link href="/cart" className="header-action"><span className="nav-icon-wrap"><ShoppingBag size={20} />{cartCount > 0 && <i>{cartCount}</i>}</span><span><small>My</small><b>Bag</b></span></Link>
        </div>
      </div>
    </div>
    <nav className={`category-nav${menu ? " mobile-open" : ""}`} aria-label="Shop categories">
      {navItems.map(([label, slug]) => <div className={`category-nav-item${slug === "sale" ? " sale-nav" : ""}`} key={slug}><Link href={slug === "brands" ? "/category/brands" : `/category/${slug}`} onClick={() => setMenu(false)}>{label}</Link><div className="mega-menu"><div><b>Shop {label}</b>{["New arrivals", "Best sellers", "Trending now", "Under ₹999", "Festive edit"].map(item => <Link href={`/category/${slug}`} key={item}>{item}</Link>)}</div><div><b>Popular categories</b>{["Clothing", "Footwear", "Accessories", "Bags & wallets", "View all"].map(item => <Link href={`/category/${slug}`} key={item}>{item}</Link>)}</div><Link href={`/category/${slug}`} className="mega-image"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=520&q=80" alt="Discover the latest styles" /><span>Find your next favourite</span></Link></div></div>)}
    </nav>
  </header>;
}

