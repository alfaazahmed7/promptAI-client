"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

// Root-level Lenis smooth scrolling for the whole document.
// `root` renders the children directly (no wrapper div), so the existing
// DOM structure and design stay untouched.
//
// The window scrolls on the marketing/`(main)` pages, so this root instance
// smooth-scrolls them. On the dashboard the window never scrolls — the app
// scrolls inside its own nested `overflow-y-auto` <main>, which receives a
// dedicated Lenis instance in `src/app/dashboard/layout.jsx`.
//
// `allowNestedScroll` remains enabled here so any other nested scrollable areas
// (e.g. the `overflow-y-auto` reviews list inside the prompt details page)
// keep scrolling natively instead of being prevented by the root instance.
const SmoothScrollProvider = ({ children }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // scroll easing amount (default, 0 = instant, 1 = endless glide)
                allowNestedScroll: true, // let nested scrollable areas (reviews list, modals) scroll natively
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default SmoothScrollProvider;