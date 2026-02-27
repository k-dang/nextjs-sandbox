import "./clerk-gate.css";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export function ClerkGate() {
  return (
    <div className={cormorant.variable}>
      <div className="gate-grid relative flex items-center justify-center min-h-[calc(100svh-9rem)] px-6 py-16">
        <div className="relative z-10 flex flex-col items-center text-center max-w-[440px] w-full">

          <span className="anim-badge opacity-0 font-mono text-[0.6rem] tracking-[0.35em] uppercase text-[#C9955C] border border-[rgba(201,149,92,0.45)] px-[1.1rem] py-[0.3rem] mb-11">
            Restricted Access
          </span>

          <div className="anim-lock opacity-0 mb-8">
            <svg
              className="filter-[drop-shadow(0_0_14px_rgba(201,149,92,0.28))]"
              width="54"
              height="66"
              viewBox="0 0 54 66"
              fill="none"
            >
              <path d="M14 31 V18 A13 13 0 0 1 40 18 V31" stroke="#C9955C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <rect x="3" y="29" width="48" height="34" rx="3" stroke="#C9955C" strokeWidth="1.5" fill="none" />
              <circle className="anim-keyhole" cx="27" cy="43" r="5" stroke="#C9955C" strokeWidth="1.5" fill="none" />
              <line x1="27" y1="48" x2="27" y2="55" stroke="#C9955C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <h1 className="gate-heading anim-heading opacity-0 [font-family:var(--font-cormorant),serif] text-[clamp(3rem,7vw,4.5rem)] font-light tracking-[-0.01em] text-[#F2EDE4] leading-none mb-2">
            Members <em>Only</em>
          </h1>

          <div className="anim-divider opacity-0 flex items-center gap-3.5 w-full my-7">
            <div className="gate-line-l flex-1 h-px" />
            <div className="w-[5px] h-[5px] bg-[#C9955C] rotate-45 shrink-0" />
            <div className="gate-line-r flex-1 h-px" />
          </div>

          <p className="anim-body opacity-0 font-sans text-sm text-[#65594F] leading-[1.85] mb-10 max-w-[320px]">
            This area is reserved for authenticated members.
            Sign in to access your exclusive content and features.
          </p>

          <Link
            href="/clerk/sign-in"
            className="gate-cta anim-cta opacity-0 relative inline-block overflow-hidden font-mono text-[0.68rem] tracking-[0.25em] uppercase text-[#C9955C] border border-[rgba(201,149,92,0.55)] px-11 py-[0.9rem] transition-[color,border-color] duration-300 ease-in-out hover:text-[#0a0a0a] hover:border-[#C9955C]"
          >
            <span className="relative z-10">Sign In to Continue</span>
          </Link>

          <p className="anim-footnote opacity-0 font-mono text-[0.58rem] tracking-[0.22em] text-[#2C2520] uppercase mt-12">
            Protected by Clerk Authentication
          </p>
        </div>
      </div>
    </div>
  );
}
