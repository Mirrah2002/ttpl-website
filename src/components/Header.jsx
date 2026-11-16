import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-emerald-700 font-bold'
      : 'text-slate-700 hover:text-emerald-700 transition-colors';

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/uploads/logo.jpeg"
            alt="Thiman Trading Private Limited"
            className="h-10 w-10 object-contain"
          />
          <span className="text-sm font-bold leading-tight text-slate-900">
            THIMAN TRADING<br />PRIVATE LIMITED
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/products" className={navLinkClass}>Sourcing</NavLink>
          <NavLink to="/supply-chain" className={navLinkClass}>Supply chain</NavLink>
        </nav>
        <Link
          className="shrink-0 rounded bg-red-700 px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm hover:bg-red-800 transition-colors"
          to="/contact"
        >
          Contact Us
        </Link>
      </div>
      <div className="h-1 bg-[linear-gradient(to_right,#14804a_0_25%,#129ed1_25%_50%,#f4d318_50%_75%,#cf2638_75%_100%)]"></div>
      <nav className="flex justify-center gap-5 border-t border-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 md:hidden">
        <NavLink to="/" className={navLinkClass} end>Home</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/products" className={navLinkClass}>Sourcing</NavLink>
        <NavLink to="/supply-chain" className={navLinkClass}>Supply chain</NavLink>
      </nav>
    </header>
  );
}

