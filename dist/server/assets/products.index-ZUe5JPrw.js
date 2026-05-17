import { Q as reactExports, H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { e as createLucideIcon, R as Route, L as Link, C as CATEGORIES, s as supabase } from "./router-BkfEssAs.js";
import { P as ProductCard } from "./product-card-motFcOSU.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function ProductsPage() {
  const {
    cat
  } = Route.useSearch();
  const [sort, setSort] = reactExports.useState("featured");
  const [dbProducts, setDbProducts] = reactExports.useState([]);
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
        setDbProducts(formatted);
      }
      setLoading(false);
    };
    fetchLiveProducts();
  }, []);
  let list = dbProducts.filter((p) => {
    if (!cat) return true;
    if (!p.category) return false;
    const cleanCat = cat.toLowerCase().trim().replace(/[-_\s]+/g, "");
    const cleanProductCat = p.category.toLowerCase().trim().replace(/[-_\s]+/g, "");
    return cleanProductCat.includes(cleanCat) || cleanCat.includes(cleanProductCat) || cleanProductCat.substring(0, 4) === cleanCat.substring(0, 4);
  });
  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-10 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold", children: "Tous les produits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
        list.length,
        " produits trouvés"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: `px-4 py-2 rounded-full text-sm border transition ${!cat ? "bg-electric text-electric-foreground border-electric" : "border-border hover:border-electric/60"}`, children: "Tous" }),
      CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", search: {
        cat: c.slug
      }, className: `px-4 py-2 rounded-full text-sm border transition ${cat === c.slug ? "bg-electric text-electric-foreground border-electric" : "border-border hover:border-electric/60"}`, children: c.name }, c.slug)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "bg-surface border border-border rounded-full px-3 py-2 text-sm focus:outline-none focus:border-electric text-white", style: {
          backgroundColor: "#1e1e1e"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "featured", children: "Idées cadeaux" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "Prix croissant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "Prix décroissant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", children: "Mieux notés" })
        ] })
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20 text-muted-foreground animate-pulse", children: "Chargement des produits depuis Supabase..." }) : list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20 text-muted-foreground", children: "Aucun produit trouvé." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
  ] });
}
export {
  ProductsPage as component
};
