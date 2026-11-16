import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import KleapForm from '../components/KleapForm';

export default function Home() {
  const formFields = [
    { name: 'company', label: 'Company name', type: 'text', required: true },
    { name: 'name', label: 'Contact name', type: 'text', required: true },
    { name: 'email', label: 'Business email', type: 'email', required: true },
    { name: 'category', label: 'Inquiry category', type: 'text', required: true },
    { name: 'requirements', label: 'Requirements and volume', type: 'textarea', required: true },
  ];

  return (
    <Layout
      title="Thiman Trading | Wholesale Sourcing in Chennai"
      description="B2B wholesale sourcing and procurement from Chennai, India. Connect with Thiman Trading for industrial, commercial and general merchandise requirements."
    >
      <main className="mx-auto max-w-6xl px-5 py-12 text-slate-900">
        <section className="grid items-center gap-8 rounded-lg border border-slate-200 bg-slate-50 p-8 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wide text-emerald-700">
              Thiman Trading Private Limited · Chennai, India
            </p>
            <h1 className="mt-3 text-4xl font-bold">Strategic wholesale solutions</h1>
            <p className="mt-4 text-lg text-slate-600">
              Connecting global supply with local reliability through institutional sourcing and procurement.
            </p>
            <Link
              className="mt-6 inline-block rounded bg-red-700 px-5 py-3 font-semibold text-white hover:bg-red-800 transition-colors"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
          <img
            className="mx-auto max-h-64 w-64 object-contain"
            src="/uploads/logo.jpeg"
            alt="Thiman Trading Private Limited logo"
          />
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Source with confidence</h2>
            <p className="mt-3 text-slate-600">
              From industrial and commercial supplies to consumer merchandise and custom procurement, our trade desk helps businesses shape clear sourcing requirements.
            </p>
            <Link
              className="mt-4 inline-block font-semibold text-emerald-800 underline hover:text-emerald-950"
              to="/products"
            >
              Explore sourcing verticals
            </Link>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-bold">Start a sourcing inquiry</h2>
            <p className="mt-2 text-slate-600">
              Share your category and requirements. Our team will follow up with you.
            </p>
            <KleapForm
              formId="lead"
              title="Request a quote"
              fields={formFields}
              submitText="Send inquiry"
            />
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold">A Chennai-based trade desk</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Thiman Trading Private Limited was incorporated in September 2022 under ROC-Chennai. Learn about our company, sourcing categories and supply-chain approach.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 font-semibold">
            <Link className="text-blue-700 underline hover:text-blue-900" to="/about">
              About us
            </Link>
            <Link className="text-blue-700 underline hover:text-blue-900" to="/supply-chain">
              Supply chain &amp; logistics
            </Link>
            <Link className="text-blue-700 underline hover:text-blue-900" to="/contact">
              Contact trade desk
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

