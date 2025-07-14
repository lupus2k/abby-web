import { FileText, Shield, Users } from "lucide-react";

export function CustomerServiceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Works like the best customer service agents
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            Our AI agents are designed to provide the same level of service as your best human agents.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <FileText className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="text-xl font-bold">Understands complex queries</h3>
            <p className="text-gray-500">
              Our AI agents can understand and respond to complex customer queries with accurate and helpful information.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Shield className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="text-xl font-bold">Maintains conversation context</h3>
            <p className="text-gray-500">
              Remembers the entire conversation history to provide consistent and contextually relevant responses.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Users className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="text-xl font-bold">Knows when to escalate</h3>
            <p className="text-gray-500">
              Intelligently identifies when a conversation needs human intervention and seamlessly transfers to a human agent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}