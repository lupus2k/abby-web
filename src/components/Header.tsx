import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[oklch(0.141_0.005_285.823)]/10 bg-[oklch(0.985_0_0)] backdrop-blur-sm">
      <div className="mx-auto container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Logo size="lg" />
            <span className="text-lg font-bold">Abby Assistant</span>
          </Link>
        </div>
      </div>
    </header>
  );
}