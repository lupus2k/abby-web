import { Lock, Shield, ShieldCheck } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Enterprise-grade security & privacy
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-xl">
            Your data security is our top priority. Abby is built with enterprise-grade security features.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Lock className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="text-xl font-bold">Data encryption</h3>
            <p className="text-gray-500">
              All data is encrypted in transit and at rest using industry-standard encryption protocols.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <Shield className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="text-xl font-bold">GDPR compliance</h3>
            <p className="text-gray-500">
              Our platform is fully compliant with GDPR and other global data protection regulations.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.141_0.005_285.823)]/10">
              <ShieldCheck className="h-5 w-5 text-[oklch(0.141_0.005_285.823)]" />
            </div>
            <h3 className="text-xl font-bold">SOC 2 certification</h3>
            <p className="text-gray-500">
              Abby has achieved SOC 2 Type II certification, demonstrating our commitment to security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}