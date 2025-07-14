import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[oklch(0.141_0.005_285.823)]/10 bg-[oklch(0.141_0.005_285.823)] text-white">
      <div className="mx-auto container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Abby Assistant</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm hover:underline">Privacy</a></li>
              <li><a href="/terms" className="text-sm hover:underline">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} We are Double Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}