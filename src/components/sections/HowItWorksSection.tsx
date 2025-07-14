export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-full bg-[oklch(0.552_0.016_285.938)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.141_0.005_285.823)]">
            How it works
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            An end-to-end solution for conversational AI
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            With Abby, your customers can effortlessly find answers, resolve issues, and take meaningful actions through seamless and engaging AI-driven conversations.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-medium">Connect your data sources</h3>
              <p className="text-gray-500">Easily integrate with your existing knowledge base, documentation, and customer data.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-medium">Train your AI agent</h3>
              <p className="text-gray-500">Customize your agent's responses and capabilities to match your brand voice and support needs.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-medium">Deploy across channels</h3>
              <p className="text-gray-500">Make your AI agent available on your website, mobile app, or messaging platforms.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <img
                src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Ffeatures%2Fsync-with-realtime-data.png&w=3840&q=75"
                alt="Sync with real-time data"
                className="w-full h-auto"
                width={566}
                height={324}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}