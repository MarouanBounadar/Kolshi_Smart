import { Q as reactExports, H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { e as createLucideIcon, C as CATEGORIES, L as Link, s as supabase } from "./router-BkfEssAs.js";
import { P as ProductCard } from "./product-card-motFcOSU.js";
import { T as Truck, S as ShieldCheck, R as RefreshCw } from "./truck-DAUxfbgz.js";
import { B as Banknote } from "./banknote-BGVCPAgT.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$6 = [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }]];
const Bluetooth = createLucideIcon("bluetooth", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
];
const Cpu = createLucideIcon("cpu", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$4);
const __iconNode$3 = [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }
  ]
];
const Gamepad2 = createLucideIcon("gamepad-2", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const heroImg = "/assets/hero-I-Dxfoys.jpg";
const ICONS = {
  Smartphone,
  Home: House,
  Gamepad2,
  Bluetooth,
  Lightbulb,
  Cpu
};
function HomePage() {
  const [products, setProducts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const fetchLiveProducts = async () => {
      setLoading(true);
      const {
        data,
        error
      } = await supabase.from("products").select("*").order("created_at", {
        ascending: false
      });
      if (error) {
        console.error("Error fetching live products:", error);
      } else if (data) {
        const formattedProducts = data.map((p) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          oldPrice: p.old_price,
          category: p.category,
          image: p.image,
          rating: p.rating || 5,
          reviews: p.reviews || 1
        }));
        setProducts(formattedProducts);
      }
      setLoading(false);
    };
    fetchLiveProducts();
  }, []);
  products.filter((p) => p.rating >= 4.5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-hidden text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", className: "w-full h-full object-cover opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-20 md:py-32 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/30 text-electric text-xs font-medium mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5" }),
          " Nouvelle collection 2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]", children: [
          "Smart Gadgets & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-electric", children: "Electronic" }),
          " Accessories"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Les meilleurs prix au Maroc. Livraison rapide partout, paiement à la livraison disponible." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm", children: [{
      I: Truck,
      t: "Livraison gratuite",
      d: "Dès 300 DH partout au Maroc"
    }, {
      I: Banknote,
      t: "Paiement à la livraison",
      d: "Payez à la réception"
    }, {
      I: ShieldCheck,
      t: "Garantie product",
      d: "Tous nos produits sont garantis"
    }, {
      I: RefreshCw,
      t: "Retour facile",
      d: "14 jours pour changer d'avis"
    }].map(({
      I,
      t,
      d
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-7 w-7 text-electric shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: d })
      ] })
    ] }, t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4", children: CATEGORIES.map((c) => {
      const Icon = ICONS[c.icon];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", search: {
        cat: c.slug
      }, className: "group aspect-square rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-2 p-2 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-surface-2 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm font-medium text-center", children: c.name })
      ] }, c.slug);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "trending", className: "max-w-7xl mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-8", children: "Produits vedettes" }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-10 text-muted-foreground", children: "Chargement..." }) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-10 text-muted-foreground", children: "Aucun produit trouvé." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] });
}
export {
  HomePage as component
};
