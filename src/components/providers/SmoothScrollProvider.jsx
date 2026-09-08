"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

// Root-level Lenis smooth scrolling for the whole document.
// `root` renders the children directly (no wrapper div), so the existing
// DOM structure and design stay untouched.
//
// `allowNestedScroll` is REQUIRED here: the dashboard scrolls inside its own
// `overflow-y-auto` <main> (the window itself never scrolls on those pages),
// and modals/tables contain nested scrollable areas. Without this option
// Lenis preventDefaults every wheel event and tries to scroll the window,
// which makes dashboard scrolling completely unresponsive.
const SmoothScrollProvider = ({ children }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // scroll easing amount (default, 0 = instant, 1 = endless glide)
                allowNestedScroll: true, // let nested scrollable areas (dashboard panel, modals, tables) scroll natively
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default SmoothScrollProvider;