import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

// ΣΗΜΕΙΩΣΗ: Αντικατέστησε το "your-form-id" με το πραγματικό σου Formspree endpoint.
// Δημιουργείται στο https://formspree.io μετά τη σύνδεση του email σου.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

const CONTACT_DETAILS = [
  { icon: Phone, label: "Τηλέφωνο", value: "+30 210 000 0000", href: "tel:+302100000000" },
  { icon: Mail, label: "Email", value: "info@anthopoleio-ioannis.gr", href: "mailto:info@anthopoleio-ioannis.gr" },
  { icon: MapPin, label: "Κατάστημα", value: "Ερμού 12, Αθήνα", href: "https://maps.google.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="epikoinonia"
      className="bg-botanical-petrol px-6 py-32 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        {/* -- Αριστερά: κείμενο & στοιχεία επικοινωνίας -- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 block font-body text-xs uppercase tracking-[0.35em] text-rose-gold"
          >
            Επικοινωνία
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-medium leading-[1.15] text-white sm:text-4xl md:text-[2.75rem]"
          >
            Ας σχεδιάσουμε μαζί
            <br className="hidden sm:block" /> την επόμενη δημιουργία σας.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md font-body text-base leading-relaxed text-white/70"
          >
            Για γάμους, εκδηλώσεις ή προσωπικές παραγγελίες, γράψτε μας λίγα
            λόγια και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-12 space-y-6">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-4 text-white/85 transition-colors hover:text-white"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-rose-gold">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-body text-xs uppercase tracking-wide text-white/45">
                      {label}
                    </span>
                    <span className="font-body text-[15px]">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* -- Δεξιά: φόρμα -- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="rounded-sm bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-gold/20 text-rose-gold">
                <Check size={26} />
              </span>
              <p className="mt-6 font-display text-xl text-white">
                Το μήνυμά σας στάλθηκε
              </p>
              <p className="mt-2 max-w-xs font-body text-sm text-white/60">
                Ευχαριστούμε — θα επικοινωνήσουμε μαζί σας πολύ σύντομα.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Ονοματεπώνυμο" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Τηλέφωνο" name="phone" type="tel" />
              <Field label="Μήνυμα" name="message" as="textarea" required />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-body text-sm tracking-wide text-botanical-petrol transition-colors duration-300 hover:bg-soft-amber disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Αποστολή..." : "Αποστολή Μηνύματος"}
                {status !== "submitting" && (
                  <Send
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

              {status === "error" && (
                <p className="font-body text-sm text-rose-gold">
                  Κάτι πήγε στραβά. Δοκιμάστε ξανά ή καλέστε μας απευθείας.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", as = "input", required = false }) {
  const baseClasses =
    "peer w-full border-b border-white/25 bg-transparent pb-2 pt-6 font-body text-[15px] text-white outline-none transition-colors focus:border-rose-gold";

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          placeholder=" "
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder=" "
          className={baseClasses}
        />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-6 font-body text-[15px] text-white/45 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[15px] peer-focus:top-0 peer-focus:text-xs peer-focus:text-rose-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
        {required && " *"}
      </label>
    </div>
  );
}
