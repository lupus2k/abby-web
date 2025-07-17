import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFwf-Fe0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CrVZdEeJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms and Conditions - Abby Assistant" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="flex-grow"> <div class="container mx-auto px-4 py-16"> <div class="max-w-4xl mx-auto"> <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
Terms and Conditions
</h1> <p class="text-lg text-gray-600 mb-8">
By using <strong>Abby</strong>, the smart assistant for managing events and reminders, you agree to the following terms and conditions:
</p> <hr class="border-gray-300 mb-8"> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Service Description</h2> <p class="text-lg text-gray-600">
Abby provides automated assistance to help you manage your events, reminders, and schedule. The service is offered <em>"as is"</em> and may be updated or modified at any time.
</p> </section> <hr class="border-gray-300 mb-8"> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">2. User Responsibility</h2> <p class="text-lg text-gray-600">
You are responsible for the accuracy of the information you provide. Abby is not liable for missed events or incorrect reminders due to incorrect input or changes not communicated to the assistant.
</p> </section> <hr class="border-gray-300 mb-8"> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Data Usage</h2> <p class="text-lg text-gray-600">
Abby may store and process the information you provide to deliver personalized reminders and scheduling features. No personal data will be shared with third parties without your explicit consent.
</p> </section> <hr class="border-gray-300 mb-8"> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Limitations of Liability</h2> <p class="text-lg text-gray-600">
Abby is a virtual assistant and does not guarantee the delivery or timing of notifications. We are not liable for any direct or indirect damages arising from the use or failure of the service.
</p> </section> <hr class="border-gray-300 mb-8"> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Modifications</h2> <p class="text-lg text-gray-600">
We reserve the right to change or update these terms at any time. Continued use of the service after changes are made constitutes acceptance of the new terms.
</p> </section> <hr class="border-gray-300 mb-8"> <section class="mb-8"> <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2> <p class="text-lg text-gray-600">
You may stop using Abby at any time. We also reserve the right to suspend or terminate access if the service is misused or abused.
</p> </section> <hr class="border-gray-300 mb-8"> <p class="text-lg text-gray-600">
If you have any questions about these terms, please contact us at <strong><a href="#" class="text-blue-600 hover:text-blue-800">abby-terms@weareda.com</a></strong> </p> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/lupus/work/abby-web/src/pages/terms.astro", void 0);

const $$file = "/home/lupus/work/abby-web/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
