"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon, FeatureIcon } from "@/components/icons";
import { company } from "@/lib/data";

const links = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/#tours", label: "Tours" },
  { href: "/#experiences", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center gap-4">
        <Link href="/#top" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 text-base font-extrabold text-white shadow-md shadow-brand-500/40 ring-1 ring-inset ring-white/30">
            L
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Lato Tours
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group/nav relative text-base font-semibold text-gray-700 transition-colors hover:text-brand-600"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover/nav:w-full" />
            </Link>
          ))}
          <Link
            href="/partners"
            className="group/nav relative text-base font-semibold text-gray-700 transition-colors hover:text-brand-600"
          >
            For partners
            <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover/nav:w-full" />
          </Link>

          <div className="ml-1 flex items-center gap-2">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="Chat on WhatsApp"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <Link
              href="/#book"
              aria-label="Book now"
              title="Book now"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-95"
            >
              <FeatureIcon name="calendar" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-md text-gray-700 md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partners"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              For partners
            </Link>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[#1da851] hover:bg-gray-50"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp support
            </a>
            <Link
              href="/#book"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
