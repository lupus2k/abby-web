export function Privacy() {
  return (
    <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              Privacy Policy
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              This Privacy Policy explains how <strong>Abby</strong>, your smart assistant for managing events and reminders, collects, uses, and protects your information.
            </p>
            
            <hr className="border-gray-300 mb-8" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-lg text-gray-600 mb-4">
                Abby may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li><strong>User-provided data:</strong> Events, reminders, time zone, language preferences, or other information you submit to the assistant.</li>
                <li><strong>Device data (optional):</strong> Platform or app metadata for performance monitoring and improvement.</li>
              </ul>
            </section>
            
            <hr className="border-gray-300 mb-8" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-lg text-gray-600 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>Manage and deliver reminders and event notifications.</li>
                <li>Personalize the assistant's responses based on your preferences.</li>
                <li>Improve the functionality and performance of the service.</li>
              </ul>
            </section>
            
            <hr className="border-gray-300 mb-8" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>We <strong>do not sell</strong> your information.</li>
                <li>Your data is <strong>not shared</strong> with third parties unless required by law or explicitly authorized by you.</li>
              </ul>
            </section>
            
            <hr className="border-gray-300 mb-8" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>Your data is stored securely and only retained for as long as necessary to provide the service.</li>
                <li>We implement reasonable security measures to protect your information from unauthorized access or disclosure.</li>
              </ul>
            </section>
            
            <hr className="border-gray-300 mb-8" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-lg text-gray-600 mb-4">
                You may request to:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>Access the data stored about you.</li>
                <li>Correct or update inaccurate data.</li>
                <li>Delete your data from our system.</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                Please contact us at <strong><a href="#" className="text-blue-600 hover:text-blue-800">abby-privacy@weareda.com</a></strong> for any such requests.
              </p>
            </section>
            
            <hr className="border-gray-300 mb-8" />
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Policy</h2>
              <p className="text-lg text-gray-600">
                We may update this Privacy Policy from time to time. You will be notified of significant changes, and continued use of the service implies acceptance of the updated policy.
              </p>
            </section>
            
            <hr className="border-gray-300 mb-8" />
            
            <p className="text-lg text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at <strong><a href="#" className="text-blue-600 hover:text-blue-800">abby-privacy@weareda.com</a></strong>.
            </p>
          </div>
        </div>
    </main>
  );
}