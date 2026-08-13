import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, Filter } from "lucide-react";

// Κατηγορίες Φίλτρων
const CATEGORIES = [
  { id: "all", label: "Όλες οι Συλλογές" },
  { id: "bouquets", label: "Luxury Ανθοδέσμες" },
  { id: "events", label: "Γάμος & Εκδηλώσεις" },
  { id: "botanical", label: "Botanical Objects" },
  { id: "seasonal", label: "Εποχιακές Δημιουργίες" },
];

// Δείγματα Προϊόντων/Συλλογών
const COLLECTIONS_DATA = [
  {
    id: 1,
    title: "Symphony of White Roses",
    category: "bouquets",
    price: "85€",
    description: "Σύνθεση από λευκά τριαντάφυλλα Ecuador, ευκάλυπτο και διακριτικές πινελιές άγριας ορχιδέας.",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1000&auto=format&fit=crop",
    isPopular: true,
  },
  {
    id: 2,
    title: "Botanical Sanctuary Vessel",
    category: "botanical",
    price: "120€",
    description: "Χειροποίητο πήλινο βάζο με σπάνια αποξηραμένα φυτά και botanical στοιχεία μακράς διάρκειας.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000&auto=format&fit=crop",
    isPopular: false,
  },
  {
    id: 3,
    title: "Eternal Romance Bridal Arch",
    category: "events",
    price: "Κατόπιν Συνεννόησης",
    description: "Πολυτελής ανθοστολισμός για γαμήλιες τελετές με ορτανσίες, παιώνιες και φρέσκα φυλλώματα.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
    isPopular: true,
  },
  {
    id: 4,
    title: "Autumn Velvet Peonies",
    category: "seasonal",
    price: "95€",
    description: "Εποχιακή σύνθεση σε θερμούς βελούδινους τόνους με φρέσκιες παιώνιες και καρπούς.",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000&auto=format&fit=crop",
    isPopular: false,
  },
  {
    id: 5,
    title: "Minimalist Cypress & Lily",
    category: "bouquets",
    price: "70€",
    description: "Minimalist σχεδιασμός με κρίνους Casablanca και κλαδιά κυπαρισσιού σε γυάλινο γεωμετρικό βάζο.",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1000&auto=format&fit=crop",
    isPopular: false,
  },
  {
    id: 6,
    title: "Golden Hour Gala Centerpiece",
    category: "events",
    price: "150€",
    description: "Κεντρική σύνθεση τραπεζιού με χρυσές λεπτομέρειες, τριαντάφυλλα David Austin και κεριά.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop",
    isPopular: true,
  },
];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // Φιλτράρισμα προϊόντων
  const filteredItems = activeCategory === "all"
    ? COLLECTIONS_DATA
    : COLLECTIONS_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="sylloges" className="bg-[#FAF8F5] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
            Fine Floral Design
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-wide text-botanical-petrol">
            Οι Συλλογές μας
          </h2>
          <div className="mt-4 h-px w-16 bg-rose-gold/60" />
          <p className="mt-6 max-w-2xl font-body text-base text-botanical-petrol/80">
            Ανακαλύψτε μοναδικές ανθοδετικές δημιουργίες, σχεδιασμένες με σπάνια άνθη, 
            αρχιτεκτονική δομή και διαχρονική κομψότητα.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-full px-5 py-2.5 font-body text-xs md:text-sm tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-botanical-petrol text-white shadow-md"
                    : "bg-white text-botanical-petrol/70 hover:bg-white/80 hover:text-botanical-petrol"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Collections Grid */}
        <motion.div 
          layout
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-warm-sand/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.isPopular && (
                    <span className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 font-body text-[11px] font-medium tracking-wider text-botanical-petrol shadow-sm">
                      <Sparkles size={12} className="text-rose-gold" /> Popular Choice
                    </span>
                  )}
                  {/* Quick View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-botanical-petrol/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="rounded-full bg-white px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-botanical-petrol shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                      Προεπισκόπηση
                    </button>
                  </div>
                </div>

                {/* Info Container */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl text-botanical-petrol transition-colors group-hover:text-rose-gold">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-body text-sm text-botanical-petrol/70">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-warm-sand/50 pt-4">
                    <span className="font-display text-lg font-medium text-botanical-petrol">
                      {item.price}
                    </span>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center gap-1 font-body text-xs font-semibold tracking-wider text-rose-gold transition-all hover:gap-2"
                    >
                      ΛΕΠΤΟΜΕΡΕΙΕΣ <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Box */}
        <div className="mt-20 rounded-3xl bg-botanical-petrol p-8 text-center text-white md:p-14">
          <h3 className="font-display text-2xl md:text-4xl">
            Επιθυμείτε κάτι εντελώς μοναδικό;
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm md:text-base text-white/80">
            Δημιουργούμε custom συνθέσεις κατά παραγγελία για γάμους, βαπτίσεις, δεξιώσεις ή προσωπικές στιγμές.
          </p>
          <a
            href="#epikoinonia"
            className="mt-8 inline-block rounded-full bg-rose-gold px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-white transition-all hover:bg-white hover:text-botanical-petrol shadow-lg"
          >
            Σχεδιάστε τη Δική σας Σύνθεση
          </a>
        </div>

      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-botanical-petrol/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 rounded-full bg-white/80 p-2 text-botanical-petrol backdrop-blur-md transition-all hover:bg-botanical-petrol hover:text-white"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Modal Info */}
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-rose-gold">
                    {CATEGORIES.find(c => c.id === selectedItem.category)?.label}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-botanical-petrol">
                    {selectedItem.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-botanical-petrol/80">
                    {selectedItem.description}
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold text-botanical-petrol">
                    {selectedItem.price}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="#epikoinonia"
                    onClick={() => setSelectedItem(null)}
                    className="block rounded-full bg-botanical-petrol px-6 py-3 text-center font-body text-sm font-semibold tracking-wider text-white transition-all hover:bg-botanical-petrol/90"
                  >
                    Παραγγελία / Κράτηση
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="block rounded-full border border-warm-sand px-6 py-3 text-center font-body text-sm text-botanical-petrol transition-all hover:bg-warm-sand/30"
                  >
                    Επιστροφή στις Συλλογές
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}