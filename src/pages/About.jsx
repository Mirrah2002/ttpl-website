import React from 'react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout
      title="About Thiman Trading | Chennai"
      description="Learn about Thiman Trading Private Limited, incorporated September 2022 under ROC-Chennai, and our B2B sourcing focus."
    >
      <main className="mx-auto max-w-6xl px-5 py-12 text-slate-900">
        <h1 className="text-3xl font-bold">About Thiman Trading</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          Thiman Trading Private Limited is a Chennai-based B2B sourcing and procurement company, incorporated in September 2022 under ROC-Chennai.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="border-t-4 border-emerald-600 pt-5">
            <h2 className="text-xl font-bold">Our mission</h2>
            <p className="mt-3 text-slate-600">
              To connect business buyers with dependable sourcing and clear procurement coordination.
            </p>
          </section>
          <section className="border-t-4 border-sky-600 pt-5">
            <h2 className="text-xl font-bold">Our vision</h2>
            <p className="mt-3 text-slate-600">
              To be a trusted trade partner for organizations seeking responsive, accountable supply relationships.
            </p>
          </section>
        </div>

        <section className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold">Corporate fact sheet</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-slate-800">Legal name</dt>
              <dd className="text-slate-600">Thiman Trading Private Limited</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Incorporation</dt>
              <dd className="text-slate-600">September 2022</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Registration authority</dt>
              <dd className="text-slate-600">ROC-Chennai</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Registered office</dt>
              <dd className="text-slate-600">Medavakkam, Chennai, Tamil Nadu</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">CIN</dt>
              <dd className="text-slate-600">To be confirmed by the company</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">GSTIN</dt>
              <dd className="text-slate-600">To be confirmed by the company</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Sales</dt>
              <dd>
                <a
                  className="text-blue-700 underline hover:text-blue-900"
                  href="mailto:sales@thimantrading.com"
                >
                  sales@thimantrading.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">General enquiries</dt>
              <dd>
                <a
                  className="text-blue-700 underline hover:text-blue-900"
                  href="mailto:info@thimantrading.com"
                >
                  info@thimantrading.com
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </main>
    </Layout>
  );
}

