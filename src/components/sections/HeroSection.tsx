import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI agents for magical customer experiences
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Abby is the complete platform for building & deploying AI support agents for your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-[oklch(0.141_0.005_285.823)] hover:bg-[oklch(0.141_0.005_285.823)]/90">
                <a href="/auth/signup">Build your agent</a>
              </Button>
              <div className="flex items-center gap-1 text-sm font-medium">
                <CreditCard className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto"
                src="https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/hero/hero.webm"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}