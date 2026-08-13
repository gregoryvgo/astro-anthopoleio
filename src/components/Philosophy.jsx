import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Hand, Clock, Sparkles, Award } from "lucide-react";

const PILLARS = [
  {
    id: "nature",
    icon: Leaf,
    title: "Αρμονία με τη Φύση",
    fullText: "Δεν εξαναγκάζουμε τη φύση — ακολουθούμε τον ρυθμό της. Συνεργαζόμαστε αποκλειστικά με πιστοποιημένους τοπικούς καλλιεργητές και διεθνείς οίκους που σέβονται τη βιοποικιλότητα, επιλέγοντας άνθη στην απόλυτη ακμή της φρεσκάδας τους.",
    tag: "100% Organic & Seasonal"
  },
  {
    id: "craft",
    icon: Hand,
    title: "Υψηλή Χειροτεχνία",
    fullText: "Κάθε ανθοδέσμη αντιμετωπίζεται ως ένα μοναδικό γλυπτό. Συνδυάζουμε την κλασική γαλλική ανθοδετική παιδεία με σύγχρονες botanical τάσεις, συνθέτοντας υφές, χρώματα και αρώματα που διεγείρουν τις αισθήσεις.",
    tag: "Custom Botanical Sculptures"
  },
  {
    id: "time",
    icon: Clock,
    title: "Διαχρονική Κληρονομιά",
    fullText: "Η εμπειρία δύο γενεών μας δίδαξε ότι τα άνθη δεν είναι απλά διακοσμητικά στοιχεία, αλλά ο πιο αληθινός φορέας συναισθημάτων. Αφιερώνουμε τον χρόνο που απαιτείται για να μετατρέψουμε κάθε σημαντική σας στιγμή σε μια αξέχαστη ανάμνηση.",
    tag: "20+ Years Heritage"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Philosophy({ imageSrc, imageSrcSet, imageAlt }) {
  const [activePillar, setActivePillar] = useState(PILLARS[0].id);
  const selectedPillar = PILLARS.find((p) => p.id === activePillar);

  return (
    <section
      id="filosofia"
      className="relative overflow-hidden bg-[#FAF8F5] py-28 md:py-36"
    >
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-rose-gold/5 blur-3xl pointer-events-none" 
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-16">
          
          {/* =================-- ΕΙΚΟΝΑ (5 cols) --================= */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-warm-sand shadow-2xl">
              <img
                src={imageSrc}
                srcSet={imageSrcSet}
                sizes="(min-width: 1024px) 40vw, 90vw"
                alt={imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-petrol/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 z-10 flex items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-xl border border-warm-sand/50 backdrop-blur-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-botanical-petrol text-rose-gold">
                <Award size={22} />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-botanical-petrol">20+ Χρόνια</p>
                <p className="font-body text-[10px] tracking-wider text-botanical-petrol/70 uppercase">Αυθεντικής Τέχνης</p>
              </div>
            </motion.div>

            {/* Frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 -z-10 hidden aspect-[4/5] w-full rounded-2xl border-2 border-rose-gold/40 sm:block"
            />
          </motion.div>

          {/* =================-- ΚΕΙΜΕΝΟ & TABS (7 cols) --================= */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="lg:col-span-7 lg:pl-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <Sparkles size={14} className="text-rose-gold" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-rose-gold">
                Η Φιλοσοφία μας
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-medium leading-[1.2] text-botanical-petrol sm:text-4xl md:text-5xl"
            >
              Η ανθοδετική ως υψηλή τέχνη, <br />
              <span className="italic font-normal text-rose-gold">όχι απλή διακόσμηση.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-6 space-y-4 font-body text-base leading-relaxed text-botanical-petrol/80">
              <p>
                Το Ανθοπωλείο «Ιωάννης» γεννήθηκε από μια βαθιά πεποίθηση: ότι τα άνθη είναι ο πιο άμεσος, ατόφιος τρόπος για να επικοινωνήσουμε συναισθήματα που οι λέξεις αδυνατούν να περιγράψουν.
              </p>
              <p className="text-sm md:text-base text-botanical-petrol/70">
                Δεν δημιουργούμε απλώς ανθοδέσμες — συνθέτουμε ατμόσφαιρες. Κάθε μας δημιουργία είναι μια προσωπική αφήγηση, σχεδιασμένη με αρχιτεκτονική ισορροπία και απόλυτη προσήλωση στην ποιότητα των υλικών.
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div variants={fadeUp} className="mt-10">
              <div className="flex flex-wrap gap-2 border-b border-warm-sand pb-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  const isActive = activePillar === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar.id)}
                      className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-xs md:text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-botanical-petrol text-white shadow-md"
                          : "bg-white text-botanical-petrol/70 hover:bg-white/80 hover:text-botanical-petrol"
                      }`}
                    >
                      <Icon size={16} className={isActive ? "text-rose-gold" : "text-botanical-petrol/50"} />
                      {pillar.title}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Content */}
              <div className="mt-6 min-h-[130px] rounded-2xl bg-white p-6 shadow-sm border border-warm-sand/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPillar.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-body text-[11px] font-semibold uppercase tracking-wider text-rose-gold">
                      {selectedPillar.tag}
                    </span>
                    <p className="mt-2 font-body text-sm md:text-base leading-relaxed text-botanical-petrol/85">
                      {selectedPillar.fullText}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}