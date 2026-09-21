"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// `next-themes@0.4.6` renders its no-flash bootstrap <script> through
// `React.createElement("script", …)` on EVERY render, including client-side
// re-renders. React 19.2's `completeWork` now logs
//
//   "Encountered a script tag while rendering React component. Scripts inside
//    React components are never executed when rendering on the client."
//
// for any client-rendered <script> that isn't a data block. The element is
// inert (its job — applying the theme class before first paint — already ran
// from the SSR HTML) and theming keeps working, so this is a dev-only DX
// warning. See pacocoursey/next-themes#385, #386 and #397.
//
// The upstream fix is not released yet, so we patch it locally with
// `patch-package` (see `patches/next-themes+0.4.6.patch`, applied on
// `postinstall`). Our provider stays untouched: it still gets `attribute`,
// `defaultTheme`, `enableSystem` and `enableColorScheme`.
//
// Once `next-themes` ships a release containing PR #386, delete the patch file,
// drop the `patch-package` devDependency/postinstall script and this comment.
export default function ThemeProvider({ children }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme
            disableTransitionOnChange
        >
            {children}
        </NextThemesProvider>
    );
}