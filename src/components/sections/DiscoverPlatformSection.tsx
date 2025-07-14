export function DiscoverPlatformSection() {
  return (
    <section className="py-20 bg-[oklch(0.141_0.005_285.823)]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Discover Abby Assistant
          </h2>
          <p className="max-w-[800px] text-gray-300 md:text-xl">
            Abby is a smart assistant that helps you manage events and reminders. It keeps track of your schedule, sends timely alerts, and makes sure you stay on top of what matters.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg">
            <img
              src="https://www.chatbase.co/_next/image?url=https%3A%2F%2Fbackend.chatbase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fchatbase%2Flanding%2Ffeatures%2Fsync-with-realtime-data.png&w=3840&q=75"
              alt="Abby Platform Dashboard"
              className="w-full h-auto"
              width={800}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}