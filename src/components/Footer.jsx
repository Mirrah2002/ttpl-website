import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-900 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-9 sm:grid-cols-3">
        <div>
          <p className="font-bold">
            THIMAN TRADING<br />PRIVATE LIMITED
          </p>
          <p className="mt-3 text-sm text-slate-300">
            B2B sourcing and procurement<br />Chennai, Tamil Nadu, India
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick links</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link to="/about" className="hover:text-white transition-colors">About us</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products &amp; sourcing</Link>
            <Link to="/supply-chain" className="hover:text-white transition-colors">Supply chain</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact trade desk</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Corporate enquiries</p>
          <a
            className="mt-3 block break-words text-sm text-slate-300 hover:text-white transition-colors"
            href="mailto:sales@thimantrading.com"
          >
            sales@thimantrading.com
          </a>
          <a
            className="mt-2 block break-words text-sm text-slate-300 hover:text-white transition-colors"
            href="mailto:info@thimantrading.com"
          >
            info@thimantrading.com
          </a>
        </div>
      </div>
      <div className="h-1 bg-[linear-gradient(to_right,#14804a_0_25%,#129ed1_25%_50%,#f4d318_50%_75%,#cf2638_75%_100%)]"></div>
    </footer>
  );
}

