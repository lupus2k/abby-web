import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DFwf-Fe0.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CrVZdEeJ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function CTASection() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", children: "Discover Abby Assistant" }),
    /* @__PURE__ */ jsx("p", { className: "max-w-[800px] text-gray-500 md:text-xl", children: "Abby is a smart assistant that helps you manage events and reminders. It keeps track of your schedule, sends timely alerts, and makes sure you stay on top of what matters." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 min-[400px]:flex-row pt-4", children: /* @__PURE__ */ jsx(Button, { className: "bg-[oklch(0.141_0.005_285.823)] hover:bg-[oklch(0.141_0.005_285.823)]/90", children: /* @__PURE__ */ jsx("a", { href: "https://t.me/Abby_Assistant_Bot", className: "text-white", target: "_blank", children: "Start now" }) }) })
  ] }) }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Abby Assistant" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="flex-grow"> <div class="container mx-auto px-4 py-16"> ${renderComponent($$result2, "CTASection", CTASection, {})} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/lupus/work/abby-web/src/pages/index.astro", void 0);

const $$file = "/home/lupus/work/abby-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
