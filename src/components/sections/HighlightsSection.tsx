export function HighlightsSection() {
  const highlights = [
    {
      title: "Purpose-built for LLMs",
      description: "Designed from the ground up to leverage the power of large language models for customer support.",
      image: "https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Fhighlights%2Fpurpose-built-for-llms.png&w=1920&q=75"
    },
    {
      title: "Designed for simplicity",
      description: "Easy to set up and use, with a clean interface that makes building AI agents straightforward.",
      image: "https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Fhighlights%2Fdesigned-for-simplicity.png&w=1920&q=75"
    },
    {
      title: "Engineered for security",
      description: "Enterprise-grade security features to keep your data and customer interactions safe.",
      image: "https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Fhighlights%2Fengineered-for-security.png&w=1920&q=75"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-full bg-[oklch(0.552_0.016_285.938)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.141_0.005_285.823)]">
            Highlights
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The complete platform for AI support agents
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            Abby is designed for building AI support agents that solve your customers' hardest problems while improving business outcomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:gap-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="aspect-square w-full object-cover"
                  width={393}
                  height={401}
                />
              </div>
              <h3 className="text-xl font-bold">{highlight.title}</h3>
              <p className="text-center text-gray-500">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}