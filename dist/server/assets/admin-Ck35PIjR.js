import { Q as reactExports, H as jsxRuntimeExports } from "./server-DFTSIrVC.js";
import { e as createLucideIcon, s as supabase } from "./router-BkfEssAs.js";
import { T as Trash2 } from "./trash-2-Ditz0uza.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = createLucideIcon("circle-plus", __iconNode$2);
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const SITE_CATEGORIES = [
  { name: "Phone Accessories", slug: "phone-accessories" },
  { name: "Smart Home", slug: "smart-home" },
  { name: "Gaming", slug: "gaming" },
  { name: "Bluetooth", slug: "bluetooth" },
  { name: "LED & RGB", slug: "led-rgb" },
  { name: "Mini Gadgets", slug: "mini-gadgets" }
];
function AdminDashboard() {
  const [products, setProducts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [uploadingImage, setUploadingImage] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [price, setPrice] = reactExports.useState("");
  const [oldPrice, setOldPrice] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("Phone Accessories");
  const [imageUrl, setImageUrl] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (data && !error) {
      const formatted = data.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        oldPrice: p.old_price,
        category: p.category,
        image: p.image
      }));
      setProducts(formatted);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    fetchProducts();
  }, []);
  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploadingImage(true);
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage.from("products").upload(filePath, file);
      if (uploadError) {
        throw uploadError;
      }
      const { data } = supabase.storage.from("products").getPublicUrl(filePath);
      if (data?.publicUrl) {
        setImageUrl(data.publicUrl);
      }
    } catch (error) {
      alert("Erreur lors du téléchargement de l'image: " + error.message);
    } finally {
      setUploadingImage(false);
    }
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!name || !price || !imageUrl) {
      alert("Veuillez remplir les champs obligatoires (Nom, Prix, Image)");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("products").insert([
      {
        name,
        price: Number(price),
        old_price: oldPrice ? Number(oldPrice) : null,
        category,
        image: imageUrl,
        description: description || ""
      }
    ]);
    if (error) {
      alert("Erreur lors de l'ajout: " + error.message);
    } else {
      alert("Produit ajouté avec succès ! 🎉");
      setName("");
      setPrice("");
      setOldPrice("");
      setImageUrl("");
      setDescription("");
      fetchProducts();
    }
    setSubmitting(false);
  };
  const handleDelete = async (id) => {
    if (confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (!error) {
        fetchProducts();
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-10 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold mb-8 text-center text-electric", children: "Tableau de Bord Admin — Kolchi-Smart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddProduct, className: "bg-surface border border-border p-6 rounded-2xl mb-12 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "h-5 w-5 text-electric" }),
        " Ajouter un nouveau produit"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Nom du produit *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), className: "w-full bg-background border border-border rounded-xl p-3 text-sm text-white focus:outline-none focus:border-electric", placeholder: "Ex: Smart Watch Ultra" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Catégorie *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "w-full bg-background border border-border rounded-xl p-3 text-sm text-white focus:outline-none focus:border-electric", style: { backgroundColor: "#141414" }, children: SITE_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat.name, children: cat.name }, cat.slug)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Prix Actuel (DH) *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: price, onChange: (e) => setPrice(e.target.value), className: "w-full bg-background border border-border rounded-xl p-3 text-sm text-white focus:outline-none focus:border-electric", placeholder: "45" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Ancien Prix (DH)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: oldPrice, onChange: (e) => setOldPrice(e.target.value), className: "w-full bg-background border border-border rounded-xl p-3 text-sm text-white focus:outline-none focus:border-electric", placeholder: "66" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Image du produit *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex-1 flex items-center justify-center gap-2 border border-dashed border-border hover:border-electric/60 rounded-xl p-4 cursor-pointer bg-background transition", children: [
            uploadingImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-electric" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Téléchargement..." })
            ] }) : imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-electric font-semibold text-sm truncate", children: "✓ Image prête à l'envoi" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5 text-muted-foreground" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Choisir une image depuis l'appareil" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", onChange: handleImageChange, disabled: uploadingImage, className: "hidden" })
          ] }),
          imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: "Aperçu", className: "h-14 w-14 object-cover rounded-xl border border-border bg-card" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-muted-foreground mb-1", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), className: "w-full bg-background border border-border rounded-xl p-3 text-sm text-white focus:outline-none focus:border-electric h-24", placeholder: "Détails du produit..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting || uploadingImage, className: "w-full gradient-electric text-white font-semibold p-3 rounded-xl shadow-glow hover:scale-[1.01] transition flex items-center justify-center gap-2 disabled:opacity-50", children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : "إضافة المنتج للموقع" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface border border-border rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border bg-card/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold", children: [
        "المنتجات الحالية بالموقع (",
        products.length,
        ")"
      ] }) }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-10 text-muted-foreground animate-pulse", children: "Chargement..." }) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-10 text-muted-foreground", children: "Aucun produit en ligne." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-right text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-background text-xs text-muted-foreground uppercase border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-left", children: "التحكم" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "السعر القديم" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "السعر الحالي" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "القسم" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-center", children: "صورة" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "اسم المنتج" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border hover:bg-card/30 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-left flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(product.id), className: "p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition", title: "حذف", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-muted-foreground line-through", children: product.oldPrice ? `${product.oldPrice} DH` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-electric font-bold", children: [
            product.price,
            " DH"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-card border border-border rounded-md text-xs", children: product.category }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: "", className: "h-10 w-10 object-cover rounded-lg border border-border" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-semibold", children: product.name })
        ] }, product.id)) })
      ] }) })
    ] })
  ] });
}
function AdminPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {});
}
export {
  AdminPage as component
};
