import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Star,
  Sparkles,
  Heart,
  MessageCircle,
  Cake,
  Gift,
  Phone,
  ChevronRight,
} from "lucide-react";
import nutellaImg from "@/assets/nutella-jar-cake.jpg";
import pistachioImg from "@/assets/pistachio-jar-cake.jpg";
import palhaImg from "@/assets/palha-italiana.jpg";
import customImg from "@/assets/custom-flavors.jpg";
import aboutImg from "@/assets/about-mary.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_NUMBER = "5500000000000";
const PHONE_DISPLAY = "(555) 000-0000";

const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: { label: string; tone: "featured" | "new" };
  variants?: string[];
  ctaLabel: string;
  waMessage: string;
  consult?: boolean;
};

const products: Product[] = [
  {
    id: "nutella",
    name: "Nutella Jar Cake",
    description:
      "Layers of moist chocolate cake, silky Nutella ganache and a generous swirl on top.",
    price: "$ 20",
    image: nutellaImg,
    badge: { label: "Featured", tone: "featured" },
    ctaLabel: "Order on WhatsApp",
    waMessage: "Hi Mary! I'd love to order a Nutella Jar Cake 🤍",
  },
  {
    id: "pistachio",
    name: "Pistachio Jar Cake",
    description:
      "Delicate vanilla sponge layered with house-made pistachio cream and crushed nuts.",
    price: "$ 20",
    image: pistachioImg,
    badge: { label: "New", tone: "new" },
    ctaLabel: "Order on WhatsApp",
    waMessage: "Hi Mary! I'd love to order a Pistachio Jar Cake 🤍",
  },
  {
    id: "palha",
    name: "Palha Italiana",
    description:
      "Classic chocolate fudge pressed with buttery biscuit pieces. A timeless treat.",
    price: "$ 6",
    image: palhaImg,
    variants: ["1 for $ 6", "2 for $ 7"],
    badge: { label: "New", tone: "new" },
    ctaLabel: "Order on WhatsApp",
    waMessage: "Hi Mary! I'd love to order Palha Italiana 🤍",
  },
  {
    id: "custom",
    name: "Custom Flavors",
    description:
      "Dreaming of a specific flavor or a themed dessert for your event? Let's create it together.",
    price: "Price on request",
    image: customImg,
    consult: true,
    ctaLabel: "Consult Mary",
    waMessage:
      "Hi Mary! I'd like to chat about a custom flavor or themed order. Could you help me?",
  },
];

const trustItems = [
  { icon: Star, title: "Loved by 200+", subtitle: "5-star reviews from happy customers" },
  { icon: Cake, title: "Made fresh", subtitle: "Every order baked just for you" },
  { icon: Gift, title: "Special moments", subtitle: "Weddings, birthdays & baby showers" },
  { icon: MessageCircle, title: "Easy ordering", subtitle: "Place your order via WhatsApp" },
];

const steps = [
  { n: "01", title: "Choose your sweet", text: "Browse the menu and pick what makes you smile." },
  { n: "02", title: "Message Mary", text: "Send your order on WhatsApp — quick and personal." },
  { n: "03", title: "Enjoy!", text: "Handcrafted with love and delivered to your moment." },
];

const aboutFeatures = [
  { title: "Handcrafted", text: "Every sweet is made by Mary's own hands." },
  { title: "Premium ingredients", text: "Chocolate, fruits and creams of the finest quality." },
  { title: "Custom orders", text: "Flavors and designs shaped around your story." },
  { title: "Easy ordering", text: "A short message on WhatsApp is all it takes." },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`font-serif text-2xl tracking-tight ${className}`}>
      Mary's <span className="italic text-[color:var(--rose)]">Bakery</span>
    </a>
  );
}

function WhatsAppButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost" | "white" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";
  const variants = {
    primary:
      "bg-[color:var(--rose)] text-white hover:bg-[color:var(--rose-deep)] shadow-[0_10px_30px_-10px_rgba(232,86,122,0.6)] hover:shadow-[0_14px_36px_-10px_rgba(196,48,96,0.7)]",
    ghost:
      "bg-transparent text-[color:var(--chocolate)] hover:bg-[color:var(--rose-pale)] border border-[color:var(--border)]",
    white:
      "bg-white text-[color:var(--chocolate)] hover:bg-[color:var(--rose-pale)]",
    outline:
      "bg-transparent text-white border border-white/40 hover:bg-white/10",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--warm-white)]/90 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(45,26,20,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-[color:var(--chocolate)]/80">
          <a href="#menu" className="hover:text-[color:var(--rose-deep)] transition-colors">Menu</a>
          <a href="#about" className="hover:text-[color:var(--rose-deep)] transition-colors">About</a>
          <a href="#how" className="hover:text-[color:var(--rose-deep)] transition-colors">How it works</a>
        </nav>
        <WhatsAppButton
          href={waLink("Hi Mary! I'd like to place an order 🤍")}
          className="hidden sm:inline-flex"
        >
          Order via WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 0%, var(--rose-pale) 0%, transparent 60%), radial-gradient(60% 50% at 100% 20%, #fde6ec 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-[color:var(--rose-deep)] border border-[color:var(--border)]">
            <Sparkles className="w-3.5 h-3.5" /> Handcrafted with love · Est. 2024
          </span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[color:var(--chocolate)]">
            Sweets made
            <br />
            with <em className="italic text-[color:var(--rose-deep)]">soul</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[color:var(--chocolate)]/70 leading-relaxed">
            Tiny batches, generous flavor. Every jar cake and treat is baked
            to order by Mary — never from a shelf, always from the heart.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton href={waLink("Hi Mary! I'd love to place an order 🤍")}>
              Place your order <ChevronRight className="w-4 h-4" />
            </WhatsAppButton>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-[color:var(--border)] text-[color:var(--chocolate)] hover:bg-[color:var(--rose-pale)] transition-colors"
            >
              Browse menu
            </a>
          </div>
        </div>

        <div className="relative fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[color:var(--rose-pale)] to-white blur-2xl opacity-80" />
            <div className="relative rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(196,48,96,0.4)] border border-[color:var(--border)]">
              <img
                src={nutellaImg}
                alt="Nutella Jar Cake"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-2xl mb-5 object-cover"
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[color:var(--rose-deep)]">Featured</p>
                  <h3 className="font-serif text-2xl mt-1">Nutella Jar Cake</h3>
                </div>
                <span className="font-serif text-2xl text-[color:var(--chocolate)]">$ 20</span>
              </div>
              <WhatsAppButton
                href={waLink("Hi Mary! I'd love to order the Nutella Jar Cake 🤍")}
                className="w-full mt-5"
              >
                Order this one
              </WhatsAppButton>
            </div>
            <div className="absolute -top-4 -left-6 rotate-[-8deg] bg-[color:var(--chocolate)] text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
              100% Handcrafted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-[color:var(--border)] bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 rounded-full bg-[color:var(--rose-pale)] flex items-center justify-center text-[color:var(--rose-deep)]">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-[color:var(--chocolate)]">{item.title}</p>
              <p className="text-xs text-[color:var(--chocolate)]/60 mt-0.5">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [variant, setVariant] = useState(product.variants?.[0]);
  return (
    <div className="hover-lift group rounded-3xl bg-white border border-[color:var(--border)] p-6 flex flex-col">
      <div className="relative aspect-[4/3] rounded-2xl mb-5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full ${
              product.badge.tone === "featured"
                ? "bg-[color:var(--chocolate)] text-white"
                : "bg-white text-[color:var(--rose-deep)] border border-[color:var(--border)]"
            }`}
          >
            {product.badge.label}
          </span>
        )}
      </div>

      <h3 className="font-serif text-2xl text-[color:var(--chocolate)]">{product.name}</h3>
      <p className="mt-2 text-sm text-[color:var(--chocolate)]/65 leading-relaxed flex-1">
        {product.description}
      </p>

      {product.variants && (
        <div className="flex gap-2 mt-4">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                variant === v
                  ? "bg-[color:var(--rose-pale)] border-[color:var(--rose)] text-[color:var(--rose-deep)]"
                  : "border-[color:var(--border)] text-[color:var(--chocolate)]/70 hover:border-[color:var(--rose)]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <span className="font-serif text-xl text-[color:var(--chocolate)]">{product.price}</span>
        <WhatsAppButton
          href={waLink(product.waMessage)}
          variant={product.consult ? "ghost" : "primary"}
          className="!px-4 !py-2 text-xs"
        >
          {product.ctaLabel}
        </WhatsAppButton>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose-deep)]">The Menu</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[color:var(--chocolate)]">
            A small, <em className="italic">thoughtful</em> selection
          </h2>
          <p className="mt-4 text-[color:var(--chocolate)]/65">
            Each sweet is made fresh to order. No shelves, no shortcuts — just the
            flavors Mary believes in.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  return (
    <section id="how" className="py-24 bg-[color:var(--rose-pale)]/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose-deep)]">How it works</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[color:var(--chocolate)]">
            Ordering is <em className="italic">simple</em>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[color:var(--rose)]/40 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative mx-auto w-16 h-16 rounded-full bg-white border border-[color:var(--border)] flex items-center justify-center shadow-[0_10px_30px_-15px_rgba(196,48,96,0.4)]">
                <span className="font-serif text-xl text-[color:var(--rose-deep)]">{s.n}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[color:var(--chocolate)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--chocolate)]/65 max-w-xs mx-auto">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--rose-pale)] -rotate-2" />
          <img
            src={aboutImg}
            alt="Mary preparing a jar cake in her kitchen"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
          <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl px-5 py-4 shadow-lg border border-[color:var(--border)]">
            <p className="font-serif italic text-[color:var(--rose-deep)] text-lg">Hi, I'm Mary</p>
            <p className="text-xs text-[color:var(--chocolate)]/60 mt-0.5">Baker</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose-deep)]">Our Story</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[color:var(--chocolate)] leading-tight">
            A passion for <em className="italic">confectionery</em>, one jar at a time
          </h2>
          <p className="mt-6 text-[color:var(--chocolate)]/70 leading-relaxed">
            Mary's Bakery began at home, with a small oven and an even bigger
            dream: to bring the warmth of homemade confectionery to every
            special moment. Each recipe is tested, refined and made with care —
            the way real desserts should be.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {aboutFeatures.map((f) => (
              <div key={f.title} className="flex gap-3">
                <Heart className="w-5 h-5 mt-1 text-[color:var(--rose)] shrink-0" />
                <div>
                  <p className="font-medium text-[color:var(--chocolate)]">{f.title}</p>
                  <p className="text-sm text-[color:var(--chocolate)]/60 mt-0.5">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <WhatsAppButton
            href={waLink("Hi Mary! I just visited your site and wanted to say hello 🌸")}
            className="mt-10"
          >
            Say hello to Mary
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-24 bg-[color:var(--rose-pale)]/30">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose-deep)]">Reviews</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[color:var(--chocolate)]">
          Kind words from <em className="italic">customers</em>
        </h2>

        <div className="mt-12 rounded-3xl border-2 border-dashed border-[color:var(--rose)]/40 bg-white/60 p-12">
          <div className="text-5xl mb-4">🌸</div>
          <h3 className="font-serif text-2xl text-[color:var(--chocolate)]">No reviews yet</h3>
          <p className="mt-3 text-[color:var(--chocolate)]/65 max-w-md mx-auto">
            We're just getting started. If you've tasted Mary's sweets, your
            words would mean the world.
          </p>
          <WhatsAppButton
            href={waLink("Hi Mary! I'd love to leave a review about your sweets 🌸")}
            variant="ghost"
            className="mt-7"
          >
            Leave a review
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative rounded-[2rem] overflow-hidden px-8 md:px-16 py-20 text-center text-white"
          style={{
            background:
              "radial-gradient(70% 100% at 50% 0%, #4a2a20 0%, #2d1a14 70%)",
          }}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            background: "radial-gradient(circle at 20% 30%, var(--rose) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--rose-deep) 0%, transparent 40%)"
          }} />
          <p className="relative text-xs uppercase tracking-[0.3em] text-[color:var(--rose-pale)]">For your special day</p>
          <h2 className="relative mt-4 font-serif text-4xl md:text-6xl leading-tight">
            Let's make your moment <em className="italic text-[color:var(--rose-pale)]">sweeter</em>
          </h2>
          <div className="relative mt-10 flex flex-wrap gap-3 justify-center">
            <WhatsAppButton
              href={waLink("Hi Mary! I'd like to place an order for a special moment 🤍")}
              variant="white"
            >
              Order on WhatsApp
            </WhatsAppButton>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              See full menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--chocolate)] text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-6 items-center text-sm">
        <Logo className="text-white" />
        <p className="text-center text-white/60">
          © 2026 Mary's Bakery. All rights reserved. Made with <span className="text-[color:var(--rose)]">🩷</span> by Mary.
        </p>
        <div className="flex md:justify-end items-center gap-4">
          <span className="inline-flex items-center gap-2 text-white/70">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </span>
          <a
            href={waLink("Hi Mary! 🤍")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[color:var(--rose-pale)] hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--warm-white)]">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Menu />
        <HowToOrder />
        <About />
        <Reviews />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
