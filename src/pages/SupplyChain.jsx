import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function SupplyChain() {
  const steps = [
    {
      n: '01',
      title: 'Sourcing',
      text: 'Clarify requirements and identify suitable supply options.',
      border: 'border-emerald-600',
    },
    {
      n: '02',
      title: 'Documentation',
      text: 'Coordinate the trade and product documentation required for the order.',
      border: 'border-sky-600',
    },
    {
      n: '03',
      title: 'Logistics',
      text: "Plan shipment and movement with the buyer's delivery requirements in view.",
      border: 'border-yellow-400',
    },
    {
      n: '04',
      title: 'Delivery',
      text: 'Coordinate handover and delivery updates with the customer.',
      border: 'border-red-600',
    },
  ];

  return (
    <Layout
      title="Supply Chain & Logistics | Thiman Trading"
      description="Explore Thiman Trading's four-step sourcing, documentation, logistics and delivery framework from Chennai, India."
    >
      <main className="mx-auto max-w-6xl px-5 py-12 text-slate-900">
        <h1 className="text-3xl font-bold">Supply chain &amp; logistics</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          A clear four-step framework keeps procurement requirements and fulfillment coordination connected.
        </p>

        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className={`border-t-4 ${step.border} bg-white p-5 shadow-sm`}
            >
              <p className="text-sm font-bold text-slate-500">{step.n}</p>
              <h2 className="mt-2 text-xl font-bold">{step.title}</h2>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>

        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold">Chennai trading hub</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Chennai offers access to port infrastructure and major highway connections. Routing, transit arrangements and delivery schedules are confirmed against each order's origin, destination and requirements.
          </p>
          <Link
            className="mt-5 inline-block font-semibold text-blue-700 underline hover:text-blue-900"
            to="/contact"
          >
            Discuss a shipment
          </Link>
        </section>
      </main>
    </Layout>
  );
}

