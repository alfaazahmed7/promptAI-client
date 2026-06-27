import { redirect } from 'next/navigation';
import Link from 'next/link';
import { FaCircleCheck, FaEnvelope, FaHouse, FaArrowRight } from 'react-icons/fa6';
import { stripe } from '@/lib/stripe';
import { createSubscription } from '@/lib/actions/subscription';

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error('Please provide a valid session_id (`cs_test_...`)');
    }

    // Retrieve checkout details from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    });

    const { status, customer_details, metadata } = session;
    const customerEmail = customer_details?.email || '';

    // If payment is pending or incomplete, return to landing page
    if (status === 'open') {
        return redirect('/');
    }

    if (status === 'complete') {
        const subsInfo = {
            email: customerEmail,
            planId: metadata?.priceId
        };

        try {
            await createSubscription(subsInfo);
        }
        catch (dbError) {
            console.error("Database upgrade error:", dbError);
        }

        return (
            <main className="min-h-screen w-full bg-[#011627] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">

                {/* Ambient Background Glows matching core design system */}
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none hidden md:block" />
                <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative max-w-xl w-full bg-slate-900/40 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-emerald-950/10 z-10">

                    {/* Glowing Success Icon Indicator */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-400 mb-8 border border-emerald-500/20 shadow-[0_0_40px_-5px_rgba(16,185,129,0.2)]">
                        <FaCircleCheck className="text-4xl animate-pulse" />
                    </div>

                    {/* Brand Branding Layer */}
                    <div className="text-center mb-2">
                        <span className="text-sm font-bold text-slate-400 tracking-wide uppercase">
                            Prompt<span className="text-[#dc2f02] font-extrabold">AI</span> Network
                        </span>
                    </div>

                    {/* Header Announcement */}
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
                        Payment <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Successful!</span>
                    </h1>

                    <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-sm mx-auto">
                        Thank you for your order. Your account has been upgraded to <span className="text-indigo-400 font-semibold">Premium Access</span> immediately.
                    </p>

                    {/* Details Box */}
                    <div className="bg-slate-950/40 border border-slate-800/60 rounded-2xl p-5 text-left mb-8 space-y-4">
                        <div className="flex items-start gap-3">
                            <FaEnvelope className="text-emerald-400 mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-slate-200">Confirmation Dispatched</p>
                                <p className="text-xs text-slate-400 mt-0.5 break-all leading-relaxed">
                                    A secure digital receipt has been sent by Stripe to <span className="text-emerald-400 font-medium">{customerEmail}</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Assistance Info */}
                    <p className="text-xs text-slate-500 mb-8">
                        Encountering setup problems? Contact support directly at{' '}
                        <a href="mailto:support@promptai.com" className="text-slate-400 hover:text-indigo-400 underline transition-colors duration-150">
                            support@promptai.com
                        </a>.
                    </p>

                    {/* Call to Actions Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link
                            href="/dashboard"
                            className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:opacity-95 shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]"
                        >
                            Go to Dashboard
                            <FaArrowRight className="text-xs" />
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm tracking-wide bg-white/5 text-slate-200 hover:bg-white/10 border border-slate-700/40 transition-all active:scale-[0.98]"
                        >
                            <FaHouse className="text-xs" />
                            Return Home
                        </Link>
                    </div>
                </div>
            </main>
        );
    }
}