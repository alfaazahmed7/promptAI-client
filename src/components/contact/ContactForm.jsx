'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiAlertCircle, FiCheckCircle, FiSend } from 'react-icons/fi';
import { sendContactMessage } from '@/lib/actions/contact';

const EMPTY_FORM = {
    name: '',
    email: '',
    company: '',
    topic: '',
    message: '',
};

const ContactForm = ({ topics = [] }) => {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear the field error as soon as the visitor starts correcting it.
        setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Please tell us your name';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.topic) {
            newErrors.topic = 'Please choose a topic';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please write your message';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Please add a little more detail (20 characters minimum)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return toast.error('Please fix the highlighted fields before sending.');
        }

        setIsSubmitting(true);

        try {
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                company: formData.company.trim(),
                topic: formData.topic,
                message: formData.message.trim(),
            };

            const result = await sendContactMessage(payload);

            // `serverMutation` returns the parsed body; a backend that answers
            // with `{ success: false }` must not be reported as a success here.
            if (result?.success === false) {
                throw new Error(result.message || 'The message could not be delivered.');
            }

            toast.success('Message sent. A member of the team will reply shortly.');
            setFormData(EMPTY_FORM);
            setErrors({});
            setIsSent(true);
        } catch (err) {
            toast.error('We could not send your message. Please email support@promptai.com.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = (hasError) =>
        `w-full rounded-xl border bg-[#0d131f] px-4 py-2.5 text-sm text-white outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/10 ${
            hasError ? 'border-red-500/60' : 'border-slate-800'
        }`;

    const labelClasses = 'mb-1.5 block text-xs font-semibold text-slate-300 sm:text-sm';

    return (
        <section
            id="contact-form"
            className="contact-form-section bg-[#0B1220] px-4 py-20 text-gray-100 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-4xl">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="contact-badge mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        <FiSend className="text-sm" />
                        Send A Message
                    </div>
                    <h2 className="contact-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Tell us what you need{' '}
                        <span className="contact-highlight bg-gradient-to-r from-indigo-400 via-purple-400 to-[#dc2f02] bg-clip-text text-transparent">
                            and we will route it correctly
                        </span>
                    </h2>
                    <p className="contact-description mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                        Include as much context as you can. If your question is about an account or
                        order, mention the reference so we can look it up before replying.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45 }}
                    className="contact-form-card relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0d131f] p-6 shadow-lg sm:p-8"
                >
                    <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-gradient-to-br from-white/5 to-transparent" />

                    {isSent && (
                        <div className="relative mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-300 sm:text-sm">
                            <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
                            <span>
                                Thanks for reaching out. Your message is in the queue and a member of
                                the team will reply to the address you provided.
                            </span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>

                        {/* Company + Topic */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="contact-company" className={labelClasses}>
                                    Company{' '}
                                    <span className="font-normal text-slate-500">(optional)</span>
                                </label>
                                <input
                                    id="contact-company"
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Where you build"
                                    className={inputClasses(false)}
                                    autoComplete="organization"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-topic" className={labelClasses}>
                                    Topic <span className="text-[#dc2f02]">*</span>
                                </label>
                                <select
                                    id="contact-topic"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                    className={inputClasses(errors.topic)}
                                >
                                    <option value="" className="bg-[#0d131f] text-slate-500">
                                        Select a topic
                                    </option>
                                    {topics.map((topic) => (
                                        <option
                                            key={topic.value}
                                            value={topic.value}
                                            className="bg-[#0d131f] text-white"
                                        >
                                            {topic.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.topic && (
                                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] text-red-400">
                                        <FiAlertCircle className="h-3.5 w-3.5 shrink-0" />
                                        {errors.topic}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between gap-3">
                                <label htmlFor="contact-message" className={`${labelClasses} mb-0`}>
                                    Message <span className="text-[#dc2f02]">*</span>
                                </label>
                                <span className="text-[11px] text-slate-500">
                                    {formData.message.length}/1500
                                </span>
                            </div>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe what you need, what you have already tried and anything we should know..."
                                maxLength={1500}
                                className={`${inputClasses(errors.message)} min-h-36 resize-y leading-relaxed`}
                            />
                            {errors.message && (
                                <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] text-red-400">
                                    <FiAlertCircle className="h-3.5 w-3.5 shrink-0" />
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <p className="text-[11px] leading-relaxed text-slate-500">
                            Never include passwords, card numbers or API keys in this form. We will
                            ask for verification through a secure channel if we need account access.
                        </p>

                        <div className="flex flex-col items-stretch gap-4 border-t border-slate-800/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="contact-primary-cta group inline-flex w-full items-center justify-center gap-2 rounded-xl border-none bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-200 hover:scale-[1.02] hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
                            >
                                {isSubmitting ? 'Sending...' : 'Send message'}
                                <FiSend className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                            <p className="text-[11px] text-slate-500 sm:text-right">
                                Required fields are marked with{' '}
                                <span className="text-[#dc2f02]">*</span>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
