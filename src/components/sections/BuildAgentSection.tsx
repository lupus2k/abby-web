import { MessageCircle, Shield, Settings, Layout, TrendingUp, Users } from "lucide-react";

export function BuildAgentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Build the perfect customer-facing AI agent
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            Create AI agents that understand your business and deliver exceptional customer experiences.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <MessageCircle className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Knowledge Base Integration</h3>
            <p className="text-gray-500">
              Connect your existing documentation, FAQs, and support articles to power your AI agent with accurate information.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Shield className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Advanced Security</h3>
            <p className="text-gray-500">
              Enterprise-grade security features to protect sensitive customer data and ensure compliance with regulations.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Settings className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Customizable Workflows</h3>
            <p className="text-gray-500">
              Design conversation flows that guide customers to solutions efficiently and can trigger actions in your systems.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Layout className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Multi-channel Deployment</h3>
            <p className="text-gray-500">
              Deploy your AI agent on your website, mobile app, and messaging platforms to meet customers where they are.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <TrendingUp className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Analytics & Insights</h3>
            <p className="text-gray-500">
              Gain valuable insights into customer interactions, common questions, and agent performance to continuously improve.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Users className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Human Handoff</h3>
            <p className="text-gray-500">
              Seamlessly transfer complex conversations to human agents when needed, with full context preservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}