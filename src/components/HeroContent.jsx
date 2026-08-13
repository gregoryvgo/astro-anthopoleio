import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
    >
      <motion.span
        variants={item}
        className="mb-6 font-body text-xs uppercase tracking-[0.35em] text-warm-sand"
      >
        Ανθοπωλείο «Ιωάννης» · Από το 19XX
      </motion.span>

      <motion.h1
        variants={item}
        className="font-display text-hero font-medium leading-[1.05] text-white"
      >
        Η Τέχνη της Ανθοδετικής &amp;
        <br className="hidden sm:block" /> της Υψηλής Αισθητικής
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/80 sm:text-lg"
      >
        Χειροποίητες συνθέσεις που συνδυάζουν σπάνια άνθη με διαχρονικό
        σχεδιασμό — για γάμους, εκδηλώσεις και στιγμές που αξίζουν
        ξεχωριστή φροντίδα.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#syllogesa"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-body text-sm tracking-wide text-botanical-petrol transition-colors duration-300 hover:bg-soft-amber"
        >
          Ανακαλύψτε τις Συλλογές
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
        <a
          href="#epikoinonia"
          className="inline-flex items-center gap-2 rounded-full border border-white/60 px-8 py-3.5 font-body text-sm tracking-wide text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
        >
          Επικοινωνία
        </a>
      </motion.div>
    </motion.div>
  );
}
