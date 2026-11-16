import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found | Thiman Trading"
      description="The page you are looking for does not exist. Return to Thiman Trading home page."
    >
      <main className="mx-auto max-w-6xl px-5 py-24 text-center text-slate-900">
        <h1 className="text-6xl font-extrabold text-slate-300">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
        <p className="mt-2 text-slate-600">
          The requested page could not be found. Please check the URL or head back to our home page.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block rounded bg-red-700 px-5 py-2.5 font-semibold text-white hover:bg-red-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </Layout>
  );
}

