import { Q as reactExports, H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { c as Route, L as Link, f as formatDH, S as ShoppingBag, s as supabase, d as cart } from "./router-BkfEssAs.js";
import { S as Star, H as Heart, P as ProductCard } from "./product-card-motFcOSU.js";
import { M as Minus, P as Plus } from "./plus-CXmC9D88.js";
import { C as Check } from "./check-Cf9UZvsr.js";
import { T as Truck, S as ShieldCheck, R as RefreshCw } from "./truck-DAUxfbgz.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProductDetail() {
  const {
    product
  } = Route.useLoaderData();
  const [qty, setQty] = reactExports.useState(1);
  const [added, setAdded] = reactExports.useState(false);
  const [related, setRelated] = reactExports.useState([]);
  const discount = product.oldPrice && product.oldPrice > product.price ? Math.round((product.oldPrice - product.price) / product.oldPrice * 100) : 0;
  reactExports.useEffect(() => {
    const fetchRelatedProducts = async () => {
      const {
        data,
        error
      } = await supabase.from("products").select("*").eq("category", product.category).not("id", "eq", product.id).slice(0, 4);
      if (data && !error) {
        const formatted = data.map((p) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          oldPrice: p.old_price,
          category: p.category,
          image: p.image,
          rating: p.rating || 5,
          reviews: p.reviews || 1
        }));
        setRelated(formatted);
      }
    };
    fetchRelatedProducts();
  }, [product.category, product.id]);
  const handleAdd = () => {
    cart.add(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8 pb-32 md:pb-10 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-xs text-muted-foreground mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-electric", children: "Accueil" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-electric", children: "Produits" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden bg-surface-2 border border-border aspect-square", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover", width: 768, height: 768 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block px-2 py-1 rounded-md bg-electric text-electric-foreground text-xs font-bold", children: [
          "-",
          discount,
          "% AUJOURD'HUI"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold mt-3", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-4 w-4 ${i < Math.round(product.rating) ? "fill-electric text-electric" : "text-muted-foreground"}` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: product.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            product.reviews,
            " avis"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-bold", children: formatDH(product.price) }),
          product.oldPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg text-muted-foreground line-through pb-1", children: formatDH(product.oldPrice) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-surface rounded-full border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "h-11 w-11 grid place-items-center hover:text-electric", "aria-label": "Moins", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center font-semibold tabular-nums", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "h-11 w-11 grid place-items-center hover:text-electric", "aria-label": "Plus", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAdd, className: "hidden md:inline-flex flex-1 items-center justify-center gap-2 h-12 px-6 rounded-full gradient-electric text-white font-semibold shadow-glow hover:scale-[1.01] transition", children: added ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5" }),
            " Ajouté !"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
            " Ajouter au panier"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden md:grid h-12 w-12 place-items-center rounded-full border border-border hover:border-electric/60", "aria-label": "Favoris", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-3 text-xs", children: [{
          I: Truck,
          t: "Livraison rapide"
        }, {
          I: ShieldCheck,
          t: "Paiement sécurisé"
        }, {
          I: RefreshCw,
          t: "Retour 14 jours"
        }].map(({
          I,
          t
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-1.5 p-3 rounded-xl bg-surface border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-5 w-5 text-electric" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t })
        ] }, t)) })
      ] })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold mb-6", children: "Vous pourriez aimer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-background/95 backdrop-blur border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAdd, className: "w-full inline-flex items-center justify-center gap-2 h-12 rounded-full gradient-electric text-white font-semibold shadow-glow", children: added ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5" }),
      " Ajouté"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
      " Ajouter • ",
      formatDH(product.price * qty)
    ] }) }) })
  ] });
}
export {
  ProductDetail as component
};
