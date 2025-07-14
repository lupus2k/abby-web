export function AIFeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock the power of AI-driven Agents
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            Transform your customer support with intelligent, conversational AI agents.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div className="rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
            <div className="rounded-lg bg-white p-6 h-full">
              <h3 className="mb-4 text-xl font-bold">Natural Conversations</h3>
              <p className="text-gray-500">
                Our AI agents engage in natural, human-like conversations that make customers feel understood and valued.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-red-500 to-orange-600 p-1">
            <div className="rounded-lg bg-white p-6 h-full">
              <h3 className="mb-4 text-xl font-bold">Instant Responses</h3>
              <p className="text-gray-500">
                Provide immediate answers to customer queries 24/7, eliminating wait times and improving satisfaction.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 p-1">
            <div className="rounded-lg bg-white p-6 h-full">
              <h3 className="mb-4 text-xl font-bold">Continuous Learning</h3>
              <p className="text-gray-500">
                Our AI agents learn from every interaction, constantly improving their knowledge and response quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}