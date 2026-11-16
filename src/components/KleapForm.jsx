import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function KleapForm({
  fields = [],
  title = '',
  submitText = 'Submit',
  formId = 'form',
}) {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form fields and pick up URL query parameters (e.g. ?category=...)
  useEffect(() => {
    const initialData = {};
    fields.forEach((field) => {
      const paramVal = searchParams.get(field.name);
      initialData[field.name] = paramVal || '';
    });
    setFormData(initialData);
  }, [fields, searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    const resetData = {};
    fields.forEach((field) => {
      resetData[field.name] = '';
    });
    setFormData(resetData);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-6 text-emerald-950">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm">
            ✓
          </span>
          <h3 className="text-lg font-bold">Inquiry Received</h3>
        </div>
        <p className="mt-3 text-sm text-emerald-900 leading-relaxed">
          Thank you for contacting Thiman Trading Private Limited. Your details have been received and assigned to our trade desk. We will review your requirements and respond promptly.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-5 inline-block rounded bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4" data-form-id={formId}>
      {title && <h3 className="sr-only">{title}</h3>}
      {fields.map((field) => {
        const inputId = `${formId}-${field.name}`;
        return (
          <div key={field.name}>
            <label
              htmlFor={inputId}
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={inputId}
                name={field.name}
                required={field.required}
                rows={4}
                value={formData[field.name] || ''}
                onChange={handleChange}
                placeholder={`Enter your ${field.label.toLowerCase()}...`}
                className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
            ) : (
              <input
                id={inputId}
                type={field.type || 'text'}
                name={field.name}
                required={field.required}
                value={formData[field.name] || ''}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}...`}
                className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto rounded bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : submitText}
      </button>
    </form>
  );
}

