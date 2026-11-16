import React from 'react';
import Layout from '../components/Layout';
import KleapForm from '../components/KleapForm';

export default function Contact() {
  const formFields = [
    { name: 'company', label: 'Company name', type: 'text', required: true },
    { name: 'name', label: 'Contact name', type: 'text', required: true },
    { name: 'email', label: 'Business email', type: 'email', required: true },
    { name: 'category', label: 'Inquiry category', type: 'text', required: true },
    { name: 'quantity', label: 'Estimated quantity or volume', type: 'text', required: false },
    { name: 'requirements', label: 'Product specifications and requirements', type: 'textarea', required: true },
  ];

  return (
    <Layout
      title="Contact & Trade Desk | Thiman Trading"
      description="Contact Thiman Trading's Chennai trade desk for wholesale sourcing, procurement and B2B quote enquiries."
    >
      <main className="mx-auto max-w-6xl px-5 py-12 text-slate-900">
        <h1 className="text-3xl font-bold">Contact the trade desk</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Send your business requirements to Thiman Trading Private Limited. Our team will review the inquiry and follow up.
        </p>

        <div className="mt-8 grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-bold">Request for quote</h2>
            <KleapForm
              formId="lead"
              title="B2B sourcing inquiry"
              fields={formFields}
              submitText="Submit inquiry"
            />
          </section>

          <aside className="border-t-4 border-red-600 bg-slate-50 p-6 rounded-b-lg md:rounded-b-none">
            <h2 className="text-xl font-bold">Corporate contact</h2>
            <p className="mt-5 font-semibold">Sales enquiries</p>
            <a
              className="break-words text-blue-700 underline hover:text-blue-900"
              href="mailto:sales@thimantrading.com"
            >
              sales@thimantrading.com
            </a>
            <p className="mt-5 font-semibold">General enquiries</p>
            <a
              className="break-words text-blue-700 underline hover:text-blue-900"
              href="mailto:info@thimantrading.com"
            >
              info@thimantrading.com
            </a>
            <p className="mt-5 font-semibold">Registered office</p>
            <p className="text-slate-700">Medavakkam, Chennai, Tamil Nadu</p>
            <p className="mt-5 text-sm text-slate-600">
              CIN and GSTIN details are available from the company upon confirmation.
            </p>
          </aside>
        </div>

        <section className="mt-12 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Privacy</h2>
            <p className="mt-3 text-slate-600">
              Information submitted through this form is used to respond to your business inquiry and coordinate sourcing discussions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Terms of trade</h2>
            <p className="mt-3 text-slate-600">
              Product availability, specifications, pricing, logistics and delivery terms are confirmed in writing for each transaction.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

