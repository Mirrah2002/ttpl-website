import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Products() {
  const verticals = [
    {
      id: 'VERTICAL 01',
      title: 'Industrial & commercial supplies',
      description: 'Sourcing support for business, facility and operational requirements.',
      availability: 'Confirmed on inquiry',
      categoryParam: 'Industrial & Commercial Supplies',
      borderColor: 'border-emerald-600',
      tagColor: 'text-emerald-800',
    },
    {
      id: 'VERTICAL 02',
      title: 'Consumer & general merchandise',
      description: 'Wholesale procurement for general merchandise requirements.',
      availability: 'Confirmed on inquiry',
      categoryParam: 'Consumer & General Merchandise',
      borderColor: 'border-sky-600',
      tagColor: 'text-sky-800',
    },
    {
      id: 'VERTICAL 03',
      title: 'Custom B2B procurement',
      description: 'A trade-desk route for tailored sourcing requirements.',
      availability: 'Scope confirmed on inquiry',
      categoryParam: 'Custom B2B Procurement',
      borderColor: 'border-red-600',
      tagColor: 'text-red-800',
    },
  ];

  return (
    <Layout
      title="Products & Sourcing | Thiman Trading"
      description="Explore B2B industrial supplies, consumer merchandise and custom procurement from Thiman Trading in Chennai."
    >
      <main className="mx-auto max-w-6xl px-5 py-12 text-slate-900">
        <h1 className="text-3xl font-bold">Products &amp; sourcing</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Tell our trade desk what your organization needs. Availability and specifications are confirmed for each inquiry.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {verticals.map((vert) => (
            <article
              key={vert.id}
              className={`border-t-4 ${vert.borderColor} bg-white p-5 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <p className={`text-sm font-semibold ${vert.tagColor}`}>{vert.id}</p>
                <h2 className="mt-2 text-xl font-bold">{vert.title}</h2>
                <p className="mt-3 text-slate-600">{vert.description}</p>
                <p className="mt-4 text-sm text-slate-500">
                  Availability: {vert.availability}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  className="inline-block rounded bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800 transition-colors"
                  to={`/contact?category=${encodeURIComponent(vert.categoryParam)}`}
                >
                  Contact Us  
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Product specifications, SKU references and stock status are provided after requirements are reviewed; no inventory list has been supplied for this site package.
        </p>
      </main>
    </Layout>
  );
}

