import { c as createComponent, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from './astro/server_DFwf-Fe0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_CpTL8HOo.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Abby Assistant - Smart assistant for managing events and reminders"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen bg-[oklch(0.985_0_0)]"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/lupus/work/abby-web/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logo;
  const { className = "", size = "md" } = Astro2.props;
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto"
  };
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": "/assets/logos/abby-logo.png", "alt": "Abby Logo", "class": `${sizeClasses[size]} ${className}`, "width": 200, "height": 50, "loading": "eager" })}`;
}, "/home/lupus/work/abby-web/src/components/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full border-b border-[oklch(0.141_0.005_285.823)]/10 bg-[oklch(0.985_0_0)] backdrop-blur-sm"> <div class="mx-auto container flex h-16 items-center justify-between px-4 md:px-6"> <div class="flex items-center gap-6"> <a href="/" class="flex items-center gap-2 font-semibold"> ${renderComponent($$result, "Logo", $$Logo, { "size": "lg" })} </a> </div> </div> </header>`;
}, "/home/lupus/work/abby-web/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-[oklch(0.141_0.005_285.823)]/10 bg-[oklch(0.141_0.005_285.823)] text-white"> <div class="mx-auto container px-4 py-12 md:px-6"> <div class="grid grid-cols-1 gap-8 md:grid-cols-4"> <div class="space-y-4"> <h3 class="text-lg font-bold">Abby Assistant</h3> <ul class="space-y-2"> <li><a href="/privacy" class="text-sm hover:underline">Privacy</a></li> <li><a href="/terms" class="text-sm hover:underline">Terms</a></li> </ul> </div> </div> <div class="mt-12 border-t border-white/10 pt-8 text-center text-sm"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} We are Double Agent. All rights reserved.</p> </div> </div> </footer>`;
}, "/home/lupus/work/abby-web/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
