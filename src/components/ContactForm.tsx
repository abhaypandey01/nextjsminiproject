'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // You can call your backend or EmailJS here
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-black text-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 text-sm text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 text-sm text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
