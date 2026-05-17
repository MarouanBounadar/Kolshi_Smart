import { H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { e as createLucideIcon, u as useCart, S as ShoppingBag, L as Link, f as formatDH, d as cart } from "./router-BkfEssAs.js";
import { M as Minus, P as Plus } from "./plus-CXmC9D88.js";
import { T as Trash2 } from "./trash-2-Ditz0uza.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
function CartPage() {
  const {
    items,
    total,
    count
  } = useCart();
  const shipping = total > 300 || total === 0 ? 0 : 30;
  const grand = total + shipping;
  if (count === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 mx-auto rounded-full bg-surface grid place-items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-9 w-9 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold", children: "Votre panier est vide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Découvrez nos produits et trouvez votre coup de cœur." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full gradient-electric text-white font-semibold shadow-glow", children: [
        "Commencer mes achats ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-4xl font-bold mb-8", children: [
      "Mon panier (",
      count,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 space-y-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 rounded-2xl bg-card border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$id", params: {
          id: it.product.id
        }, className: "h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-xl overflow-hidden bg-surface-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.product.image, alt: it.product.name, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$id", params: {
            id: it.product.id
          }, className: "font-medium hover:text-electric line-clamp-2", children: it.product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-electric font-display font-bold mt-1", children: formatDH(it.product.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-surface rounded-full border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => cart.setQty(it.product.id, it.qty - 1), className: "h-8 w-8 grid place-items-center", "aria-label": "Moins", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm font-semibold tabular-nums", children: it.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => cart.setQty(it.product.id, it.qty + 1), className: "h-8 w-8 grid place-items-center", "aria-label": "Plus", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => cart.remove(it.product.id), className: "text-muted-foreground hover:text-destructive p-2", "aria-label": "Supprimer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }, it.product.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-2xl bg-card border border-border p-6 h-fit lg:sticky lg:top-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold mb-5", children: "Résumé" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Sous-total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: formatDH(total) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Livraison" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: shipping === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-electric", children: "Gratuite" }) : formatDH(shipping) })
          ] }),
          total < 300 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground bg-surface rounded-lg p-3", children: [
            "Ajoutez encore ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-electric font-semibold", children: formatDH(300 - total) }),
            " pour la livraison gratuite 🚚"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold", children: formatDH(grand) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/checkout", className: "mt-6 w-full inline-flex items-center justify-center gap-2 h-12 rounded-full gradient-electric text-white font-semibold shadow-glow", children: [
          "Passer la commande ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "mt-3 w-full inline-flex items-center justify-center h-11 rounded-full border border-border text-sm hover:border-electric/60", children: "Continuer mes achats" })
      ] })
    ] })
  ] });
}
export {
  CartPage as component
};
