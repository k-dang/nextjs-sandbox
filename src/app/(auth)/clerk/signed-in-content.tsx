"use client";

import "./signed-in.css";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Cormorant_Garamond } from "next/font/google";
import { UserData } from "@/components/user-data-client";
import { UserDataButton } from "@/components/user-data-button";
import { useState } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

interface SignedInContentProps {
  fullName: string | null;
  email: string;
  signUpDate: string;
  token: string | null;
  imageUrl: string;
}

export function SignedInContent({
  fullName,
  email,
  signUpDate,
  token,
  imageUrl,
}: SignedInContentProps) {
  const [copied, setCopied] = useState(false);
  const firstName = fullName?.split(" ")[0] ?? "Member";

  const copyToken = () => {
    if (token) {
      navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={cormorant.variable}>
      <div className="lounge-bg relative min-h-[calc(100svh-9rem)] -m-4 px-6 py-12 md:px-12 md:py-16">
        <div className="relative z-10 max-w-[720px] mx-auto">

          {/* ── Welcome Header ── */}
          <div className="si-anim-1 opacity-0 flex flex-col items-center text-center mb-14">
            <span className="font-mono text-[0.58rem] tracking-[0.35em] uppercase text-[#C9955C] border border-[rgba(201,149,92,0.35)] px-4 py-1.5 mb-10">
              Authenticated Session
            </span>

            {/* Avatar with rotating ring */}
            <div className="relative mb-8">
              <div className="avatar-ring absolute -inset-[3px] rounded-full" />
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#0a0a0a]">
                <img
                  src={imageUrl}
                  alt={fullName ?? "User"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="status-dot absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0a0a]" />
            </div>

            <h1 className="[font-family:var(--font-cormorant),serif] text-[clamp(2.4rem,5.5vw,3.8rem)] font-light tracking-[-0.01em] text-[#F2EDE4] leading-none mb-2">
              Welcome back, <em className="italic font-normal text-[#C9955C]">{firstName}</em>
            </h1>

            <p className="font-sans text-sm text-[#65594F] leading-relaxed mt-3 max-w-[360px]">
              Your identity has been verified. All systems and exclusive content are now accessible.
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="si-anim-2 opacity-0 flex items-center gap-3.5 w-full mb-12">
            <div className="divider-l flex-1 h-px" />
            <div className="w-[5px] h-[5px] bg-[#C9955C] rotate-45 shrink-0" />
            <div className="divider-r flex-1 h-px" />
          </div>

          {/* ── Info Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

            {/* Identity Card */}
            <div className="si-anim-3 opacity-0 lounge-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded flex items-center justify-center border border-[rgba(201,149,92,0.2)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="5" r="3" stroke="#C9955C" strokeWidth="1.2" />
                    <path d="M2 14.5c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#C9955C" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[#C9955C]">
                  Identity
                </span>
              </div>
              <div className="space-y-3.5">
                <div>
                  <p className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#4A4038] mb-1">Full Name</p>
                  <p className="text-[#F2EDE4] text-sm font-light">{fullName}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#4A4038] mb-1">Email Address</p>
                  <p className="text-[#F2EDE4] text-sm font-light">{email}</p>
                </div>
              </div>
            </div>

            {/* Session Card */}
            <div className="si-anim-4 opacity-0 lounge-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded flex items-center justify-center border border-[rgba(201,149,92,0.2)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="12" height="12" rx="2" stroke="#C9955C" strokeWidth="1.2" />
                    <path d="M5 6h6M5 8.5h4" stroke="#C9955C" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[#C9955C]">
                  Session
                </span>
              </div>
              <div className="space-y-3.5">
                <div>
                  <p className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#4A4038] mb-1">Member Since</p>
                  <p className="text-[#F2EDE4] text-sm font-light">{signUpDate}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#4A4038] mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <p className="text-[#F2EDE4] text-sm font-light">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Token Card ── */}
          <div className="si-anim-5 opacity-0 lounge-card rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded flex items-center justify-center border border-[rgba(201,149,92,0.2)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M4 6l4-4 4 4" stroke="#C9955C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[#C9955C]">
                  Session Token
                </span>
              </div>
              <button
                onClick={copyToken}
                className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-[#65594F] hover:text-[#C9955C] transition-colors duration-300 cursor-pointer"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="token-text rounded p-3.5 overflow-x-auto">
              <code className="text-[0.68rem] text-[#65594F] break-all leading-relaxed font-mono">
                {token}
              </code>
            </div>
          </div>

          {/* ── Client Data Section ── */}
          <div className="si-anim-6 opacity-0 lounge-card rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded flex items-center justify-center border border-[rgba(201,149,92,0.2)]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4l6 4 6-4" stroke="#C9955C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#C9955C" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[#C9955C]">
                Client-Side Data
              </span>
            </div>
            <p className="text-sm text-[#65594F] leading-relaxed mb-4">
              Data returned from the <code className="text-[#C9955C] text-xs font-mono bg-[rgba(201,149,92,0.08)] px-1.5 py-0.5 rounded">useUser</code> hook on the client.
            </p>
            <UserData />
          </div>

          {/* ── API Section ── */}
          <div className="si-anim-7 opacity-0 lounge-card rounded-lg p-6 mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded flex items-center justify-center border border-[rgba(201,149,92,0.2)]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4.5 5.5L7 8l-2.5 2.5M9 10.5h3" stroke="#C9955C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="#C9955C" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[#C9955C]">
                API Route
              </span>
            </div>
            <p className="text-sm text-[#65594F] leading-relaxed mb-5">
              Fetch user data from the protected <code className="text-[#C9955C] text-xs font-mono bg-[rgba(201,149,92,0.08)] px-1.5 py-0.5 rounded">/api/user</code> endpoint.
            </p>
            <UserDataButton />
          </div>

          {/* ── Footer ── */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-7 h-7",
                  },
                }}
              />
            </SignedIn>
            <div className="h-4 w-px bg-[rgba(201,149,92,0.2)]" />
            <p className="font-mono text-[0.55rem] tracking-[0.22em] text-[#2C2520] uppercase">
              Protected by Clerk Authentication
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
