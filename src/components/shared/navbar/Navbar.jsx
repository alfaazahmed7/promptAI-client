"use client";
import logoIcon from '@/assets/logo.png';
import { authClient } from '@/lib/auth-client';
import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown, FiChevronUp, FiGrid, FiLogOut, FiMoon, FiSun, FiUser } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import NavLink from "./NavLink";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const profileRef = useRef(null);
    const pathname = usePathname();
    const router = useRouter();
    const { resolvedTheme, setTheme } = useTheme();
    const isHome = pathname === '/';

    // Track scroll position to toggle the background color dynamically
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isProfileOpen) return;

        const handleOutsideClick = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isProfileOpen]);

    // Determine the true background state
    const useTransparentNavbar = isHome && !isScrolled;

    const userData = authClient.useSession();
    const user = userData.data?.user;
    const isPending = userData.isPending;

    const dashboardLinks = {
        user: '/dashboard/user/overview',
        creator: '/dashboard/creator/analytics',
        admin: '/dashboard/admin/all-users'
    };

    const brand = { name: "Prompt", highlight: "AI", href: "/" };

    const centerLinks = [
        { name: "Home", href: "/" },
        { name: "All Prompts", href: "/all-prompts" },
        { name: "Pricing", href: "/pricing" }
    ];

    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success('You have successfully sign out');
    }

    const isDark = resolvedTheme === "dark";
    const isThemeReady = resolvedTheme !== undefined;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${useTransparentNavbar
                ? "bg-transparent shadow-none"
                : "bg-[#1A2536] backdrop-blur-md shadow-lg"
                }`}
        >
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* 1. Left Side: Logo & Brand Name */}
                    <Link href={brand.href} className="flex items-center flex-shrink-0">
                        <Image
                            src={logoIcon}
                            alt="logo"
                            width={60}
                            height={60}
                            className="bg-transparent"
                        />
                        <div className="text-2xl ml-2">
                            <p className="theme-nav-primary font-semibold">
                                {brand.name}<span className="text-[#dc2f02] font-extrabold">{brand.highlight}</span>
                            </p>
                        </div>
                    </Link>

                    {/* 2. Middle: Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {centerLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* 3. Right Side: Unique Standalone Login Link */}
                    <div className="hidden md:flex w-52 items-center justify-end gap-2">
                        <ThemeToggle
                            isDark={isDark}
                            isReady={isThemeReady}
                            onToggle={() => setTheme(isDark ? "light" : "dark")}
                        />
                        {isPending ? (
                            <AccountSkeleton />
                        ) : user ? (
                            <div ref={profileRef} className="relative w-44">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    aria-expanded={isProfileOpen}
                                    aria-label="Open account menu"
                                    className="theme-nav-primary flex w-full items-center gap-2 py-1.5 pl-1.5 pr-3 cursor-pointer"
                                >
                                    <UserAvatar user={user} size={36} />
                                    <span className="max-w-24 truncate text-sm font-bold">{user.name || "Account"}</span>
                                    {isProfileOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                                </button>
                                {isProfileOpen && (
                                    <ProfileMenu
                                        user={user}
                                        dashboardHref={dashboardLinks[user.role] || "/dashboard/user"}
                                        onSignOut={handleSignOut}
                                        onNavigate={() => {
                                            setIsProfileOpen(false);
                                            setIsOpen(false);
                                        }}
                                    />
                                )}
                            </div>
                        ) : (
                            <Link
                                href="/sign-in"
                                className="relative overflow-hidden rounded-md border border-b-4 border-[#3a86ff] bg-slate-950 px-4 py-2 font-semibold text-[#3a86ff] outline-none duration-300 group hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75"
                            >
                                <span className="absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md bg-[#3a86ff] opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] shadow-[#3a86ff] duration-500 group-hover:top-[150%]"></span>
                                Login
                            </Link>
                        )}
                    </div>

                    {/* 4. Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-1">
                        <ThemeToggle
                            isDark={isDark}
                            isReady={isThemeReady}
                            onToggle={() => setTheme(isDark ? "light" : "dark")}
                        />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                <div className="px-4 pt-2 pb-4 space-y-3 bg-slate-900 flex flex-col">
                    {centerLinks.map((link) => (
                        <div key={link.href} onClick={() => setIsOpen(false)}>
                            <NavLink href={link.href}>{link.name}</NavLink>
                        </div>
                    ))}

                    <div className="pt-2">
                        {isPending ? (
                            <AccountSkeleton mobile />
                        ) : user ? (
                            <ProfileMenu
                                user={user}
                                dashboardHref={dashboardLinks[user.role] || "/dashboard/user"}
                                onSignOut={() => {
                                    setIsOpen(false);
                                    handleSignOut();
                                }}
                                onNavigate={() => setIsOpen(false)}
                                mobile
                            />
                        ) : (
                            <div onClick={() => setIsOpen(false)}>
                                <Link
                                    href="/sign-in"
                                    className="relative overflow-hidden rounded-md border border-b-4 border-[#3a86ff] bg-slate-950 px-4 py-2 font-semibold text-[#3a86ff] outline-none duration-300 group hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75 inline-block w-full text-center"
                                >
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

const ThemeToggle = ({ isDark, isReady, onToggle }) => (
    <button
        type="button"
        onClick={onToggle}
        disabled={!isReady}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="theme-nav-muted inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-800 hover:text-white disabled:cursor-wait"
    >
        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
);

const UserAvatar = ({ user, size = 36 }) => (
    <span
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-700 text-sm font-semibold text-white"
        style={{ width: size, height: size }}
    >
        {user.image ? (
            <Image
                src={user.image}
                alt={user.name ?? "User avatar"}
                width={size}
                height={size}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
            />
        ) : (
            user.name?.charAt(0)?.toUpperCase() ?? "U"
        )}
    </span>
);

const AccountSkeleton = ({ mobile = false }) => (
    <div
        aria-label="Loading account"
        className={`flex animate-pulse items-center gap-2 rounded-full border border-slate-700/80 bg-[#152238] p-1.5 ${mobile ? "h-11 w-full rounded-xl" : "h-11 w-full"}`}
    >
        <span className="h-8 w-8 shrink-0 rounded-full bg-slate-600/80" />
        <span className={`h-3 rounded-full bg-slate-600/80 ${mobile ? "w-32" : "w-16"}`} />
        {!mobile && <span className="ml-auto h-3 w-3 rounded-full bg-slate-600/80" />}
    </div>
);

const ProfileMenu = ({ user, dashboardHref, onSignOut, onNavigate, mobile = false }) => (
    <div className={`rounded-2xl border border-slate-700 bg-[#101722] p-3 shadow-2xl ${mobile ? "mt-3 w-full" : "absolute right-0 top-[calc(100%+12px)] w-64"}`}>
        <div className="flex items-center gap-3 rounded-xl border border-slate-700/80 bg-slate-900/70 p-3">
            <UserAvatar user={user} size={40} />
            <div className="min-w-0">
                <p className="theme-nav-primary truncate text-sm font-bold">{user.name || "PromptAI user"}</p>
                <p className="truncate text-xs text-slate-400">{user.email}</p>
            </div>
        </div>
        <div className="mt-2 space-y-1">
            <Link href="/profile" onClick={onNavigate} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
                <FiUser size={17} />
                My Profile
            </Link>
            <Link href={dashboardHref} onClick={onNavigate} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
                <FiGrid size={17} />
                Dashboard
            </Link>
            <button onClick={onSignOut} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300">
                <FiLogOut size={17} />
                Sign Out
            </button>
        </div>
    </div>
);

export default Navbar;
