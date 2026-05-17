import { Q as reactExports, H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { e as createLucideIcon, u as useCart, g as useNavigate, L as Link, f as formatDH, d as cart } from "./router-BkfEssAs.js";
import { C as Check } from "./check-Cf9UZvsr.js";
import { B as Banknote } from "./banknote-BGVCPAgT.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
function CheckoutPage() {
  const {
    items,
    total
  } = useCart();
  const [done, setDone] = reactExports.useState(false);
  const navigate = useNavigate();
  const shipping = total > 300 || total === 0 ? 0 : 30;
  const grand = total + shipping;
  const onSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      cart.clear();
    }, 200);
  };
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 mx-auto rounded-full gradient-electric grid place-items-center shadow-glow mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold", children: "Commande confirmée !" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "Merci pour votre commande. Notre équipe vous contactera sur WhatsApp pour confirmer la livraison. Vous payerez à la réception." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
        to: "/"
      }), className: "mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-electric text-white font-semibold shadow-glow", children: "Retour à l'accueil" })
    ] });
  }
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "Votre panier est vide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "inline-block mt-6 px-6 py-3 rounded-full gradient-electric text-white", children: "Voir les produits" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cart", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-electric mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Retour au panier"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold mb-8", children: "Finaliser la commande" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom complet", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Téléphone", name: "phone", type: "tel", required: true, placeholder: "06 00 00 00 00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email (optionnel)", name: "email", type: "email", className: "sm:col-span-2" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Adresse de livraison", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Adresse", name: "addr", required: true, className: "sm:col-span-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Ville", name: "city", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Code postal", name: "zip" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-1.5", children: "Notes (optionnel)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "w-full rounded-xl bg-surface border border-border p-3 text-sm focus:outline-none focus:border-electric min-h-[80px]", placeholder: "Étage, point de repère..." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Mode de paiement", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-4 p-4 rounded-xl border-2 border-electric bg-electric/5 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-electric grid place-items-center mt-0.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-electric-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-4 w-4 text-electric" }),
              " Paiement à la livraison (COD)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Payez en espèces lors de la réception de votre colis. Disponible partout au Maroc." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-2xl bg-card border border-border p-6 h-fit lg:sticky lg:top-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold mb-5", children: "Votre commande" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-5 max-h-80 overflow-auto", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-14 w-14 rounded-lg overflow-hidden bg-surface-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.product.image, alt: it.product.name, className: "w-full h-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-5 w-5 rounded-full bg-electric text-electric-foreground text-[10px] font-bold grid place-items-center", children: it.qty })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm line-clamp-1", children: it.product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: formatDH(it.product.price) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: formatDH(it.product.price * it.qty) })
        ] }, it.product.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Sous-total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDH(total) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Livraison" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shipping === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-electric", children: "Gratuite" }) : formatDH(shipping) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base pt-2 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold", children: formatDH(grand) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 w-full inline-flex items-center justify-center gap-2 h-12 rounded-full gradient-electric text-white font-semibold shadow-glow hover:scale-[1.01] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
          " Confirmer la commande"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center mt-3", children: "En confirmant, vous acceptez nos conditions de vente." })
      ] })
    ] })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold mb-4", children: title }),
    children
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
  CheckoutPage as component
};
