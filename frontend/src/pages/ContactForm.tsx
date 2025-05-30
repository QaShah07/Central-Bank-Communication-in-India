// src/pages/ContactForm.tsx

import React, { useState } from 'react';
import api from '../services/api'; // your typed Axios instance
import { useNavigate } from 'react-router-dom';

interface ContactFormData {
  name: string;
  institute_name: string;
  email: string;
  purpose_of_contact: string;
}

const PURPOSE_OPTIONS = [
  { label: 'Select an option', value: '' },
  { label: 'General Inquiry', value: 'general_inquiry' },
  { label: 'Collaboration', value: 'collaboration' },
  { label: 'Job Opportunity', value: 'job_opportunity' },
  { label: 'Other', value: 'other' },
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    institute_name: '',
    email: '',
    purpose_of_contact: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    // Basic client-side validation
    if (
      !formData.name.trim() ||
      !formData.institute_name.trim() ||
      !formData.email.trim() ||
      !formData.purpose_of_contact
    ) {
      setError('Please fill out all fields.');
      return;
    }

    setSubmitting(true);
    try {
      // POST to Django backend
      await api.post('/contact/', {
        name: formData.name,
        institute_name: formData.institute_name,
        email: formData.email,
        purpose_of_contact: formData.purpose_of_contact,
      } as ContactFormData);

      setSuccessMsg('Thank you! Your information has been submitted.');
      // Optionally redirect or clear the form
      setFormData({
        name: '',
        institute_name: '',
        email: '',
        purpose_of_contact: '',
      });
      // e.g. navigate('/thank-you'); // if you have a thank-you page
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.detail ||
          'Something went wrong. Please try again later.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen py-12">
      <div className="w-full max-w-lg px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        {error && (
          <div className="mb-4 text-red-600 bg-red-100 p-3 rounded">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 text-green-700 bg-green-100 p-3 rounded">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-blue-100 placeholder-blue-400 rounded-xl focus:outline-none"
            />
          </div>

          {/* Institute Name Field */}
          <div>
            <label
              htmlFor="institute_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Institute Name
            </label>
            <input
              type="text"
              id="institute_name"
              name="institute_name"
              value={formData.institute_name}
              onChange={handleChange}
              placeholder="Enter your institute name"
              className="w-full px-4 py-3 bg-blue-100 placeholder-blue-400 rounded-xl focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-blue-100 placeholder-blue-400 rounded-xl focus:outline-none"
            />
          </div>

          {/* Purpose of Contact (Select) */}
          <div>
            <label
              htmlFor="purpose_of_contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Purpose of contact
            </label>
            <select
              id="purpose_of_contact"
              name="purpose_of_contact"
              value={formData.purpose_of_contact}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-blue-100 rounded-xl focus:outline-none appearance-none"
            >
              {PURPOSE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={!opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className={`
              w-full py-3 text-white font-medium rounded-full 
              ${submitting ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'}
              focus:outline-none
            `}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
