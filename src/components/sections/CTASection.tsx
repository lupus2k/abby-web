import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Abby Assistant
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            Abby is a smart assistant that helps you manage events and reminders. It keeps track of your schedule, sends timely alerts, and makes sure you stay on top of what matters.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Button asChild className="bg-[oklch(0.141_0.005_285.823)] hover:bg-[oklch(0.141_0.005_285.823)]/90">
              <a href="https://t.me/Abby_Assistant_Bot" target="_blank">Start now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}