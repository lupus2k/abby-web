export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What people say
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            Hear from our customers who have transformed their customer support with Abby.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="text-sm font-medium">Alex Morgan</p>
                <p className="text-xs text-gray-500">CTO, TechCorp</p>
              </div>
            </div>
            <p className="mt-4 text-gray-500">
              "Abby has transformed our customer support operations. Our AI agent handles over 80% of inquiries automatically, freeing our team to focus on complex issues."
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Head of Support, E-commerce Plus</p>
              </div>
            </div>
            <p className="mt-4 text-gray-500">
              "The ease of setup was impressive. We had our AI agent up and running in days, not weeks, and our customers love the instant responses."
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="text-sm font-medium">David Chen</p>
                <p className="text-xs text-gray-500">CEO, StartupX</p>
              </div>
            </div>
            <p className="mt-4 text-gray-500">
              "As a small team, we couldn't provide 24/7 support until we implemented Abby. Now our customers get help anytime, and our satisfaction scores have increased by 40%."
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-[oklch(0.141_0.005_285.823)]">9000+</h3>
              <p className="mt-2 text-gray-500">Active AI agents deployed</p>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-[oklch(0.141_0.005_285.823)]">140+</h3>
              <p className="mt-2 text-gray-500">Countries with active users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}