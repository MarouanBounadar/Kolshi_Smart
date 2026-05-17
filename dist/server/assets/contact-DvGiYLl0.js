import { Q as reactExports, H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { e as createLucideIcon, b as MessageCircle, P as Phone, M as Mail, a as MapPin } from "./router-BkfEssAs.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full bg-electric/10 border border-electric/30 text-electric text-xs font-medium mb-4", children: "Nous contacter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold", children: "Une question ? On répond vite." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "Notre équipe est disponible 7j/7 pour vous aider avec vos commandes, livraisons et produits." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-3", children: [{
        I: MessageCircle,
        t: "WhatsApp",
        d: "+212 600 000 000",
        a: "https://wa.me/212600000000",
        h: "Réponse sous 5 minutes"
      }, {
        I: Phone,
        t: "Téléphone",
        d: "+212 600 000 000",
        a: "tel:+212600000000",
        h: "Lun-Sam 9h-19h"
      }, {
        I: Mail,
        t: "Email",
        d: "contact@kolchi-smart.ma",
        a: "mailto:contact@kolchi-smart.ma",
        h: "Réponse sous 24h"
      }, {
        I: MapPin,
        t: "Adresse",
        d: "Casablanca, Maroc",
        h: "Livraison partout au royaume"
      }].map(({
        I,
        t,
        d,
        a,
        h
      }) => {
        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-electric/10 text-electric grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: d }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              " ",
              h
            ] })
          ] })
        ] });
        const cls = "flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-electric/50 transition";
        return a ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: a, className: cls, children: inner }, t) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cls, children: inner }, t);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "lg:col-span-3 rounded-2xl bg-card border border-border p-6 sm:p-8", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 mx-auto rounded-full gradient-electric grid place-items-center shadow-glow mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-7 w-7 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: "Message envoyé !" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Nous vous répondrons très rapidement. Merci !" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-1", children: "Envoyez-nous un message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Remplissez le formulaire, on revient vers vous." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom complet", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Téléphone", type: "tel", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", className: "sm:col-span-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sujet", className: "sm:col-span-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, className: "w-full rounded-xl bg-surface border border-border p-3 text-sm focus:outline-none focus:border-electric", placeholder: "Votre message..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full gradient-electric text-white font-semibold shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
          " Envoyer le message"
        ] })
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "w-full h-11 rounded-xl bg-surface border border-border px-3 text-sm focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition" })
  ] });
}
export {
  ContactPage as component
};
