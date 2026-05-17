import { Q as reactExports, H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { e as createLucideIcon, L as Link, f as formatDH, S as ShoppingBag, d as cart } from "./router-BkfEssAs.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function ProductCard({ product }) {
  const [fav, setFav] = reactExports.useState(false);
  const discount = Math.round((product.oldPrice - product.price) / product.oldPrice * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:border-electric/50 transition-all hover:-translate-y-1 hover:shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$id", params: { id: product.id }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square bg-surface-2 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          loading: "lazy",
          className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 left-3 px-2 py-1 rounded-md bg-electric text-electric-foreground text-[11px] font-bold", children: [
        "-",
        discount,
        "%"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: (e) => {
          e.preventDefault();
          setFav((f) => !f);
        },
        className: "absolute top-3 right-3 h-9 w-9 rounded-full glass grid place-items-center hover:bg-electric/20 transition",
        "aria-label": "Favoris",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-4 w-4 ${fav ? "fill-electric text-electric" : ""}` })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$id", params: { id: product.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-sm leading-snug line-clamp-2 min-h-[2.5rem] hover:text-electric transition", children: product.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-electric text-electric" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: product.rating }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "(",
          product.reviews,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-end justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg leading-none", children: formatDH(product.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground line-through", children: formatDH(product.oldPrice) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.preventDefault();
              cart.add(product);
            },
            className: "h-10 w-10 rounded-full gradient-electric text-white grid place-items-center hover:scale-110 transition shadow-glow",
            "aria-label": "Ajouter au panier",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
export {
  Heart as H,
  ProductCard as P,
  Star as S
};
