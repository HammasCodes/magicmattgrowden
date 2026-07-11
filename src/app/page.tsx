"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  Phone,
  Menu,
  X,
  Calendar,
  Sparkles,
  Award,
  MapPin,
  Users,
  Heart,
  Building,
  Utensils,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";

// Custom Instagram SVG icon since Lucide v1.0+ excludes brand icons
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  // Mobile menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Testimonials active index state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Booking Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "corporate",
    details: ""
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const testimonials = [
    {
      quote: "Matt completely blew our guests away! Months later, people are still asking, 'How did he do that card trick?' Best decision we made for our cocktail hour.",
      author: "Sarah & David L.",
      role: "Bride & Groom",
      location: "Huntsville, AL"
    },
    {
      quote: "We hired Matt for our annual corporate banquet. He broke the ice instantly, worked the room perfectly, and brought an incredible energy. Absolutely brilliant.",
      author: "Greg W.",
      role: "VP of Operations at AeroTech",
      location: "Huntsville, AL"
    },
    {
      quote: "If you want your guests to laugh, smile, and be absolutely dumbfounded, hire Matt. His sleight of hand is completely flawless and highly professional.",
      author: "Marcus T.",
      role: "Private Birthday Host",
      location: "Madison, AL"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-gold-400 selection:text-zinc-950">
      
      {/* BACKGROUND GRADIENTS */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-gradient-to-b from-burgundy-950/20 via-zinc-950 to-zinc-950 pointer-events-none z-0" />
      <div className="absolute top-[120vh] right-0 w-[400px] h-[400px] bg-gold-950/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[240vh] left-0 w-[400px] h-[400px] bg-burgundy-950/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-serif text-xl font-bold tracking-widest text-gold-400 transition-colors duration-300 group-hover:text-gold-300">
              MATT GROWDEN
            </span>
            <span className="hidden sm:inline font-sans text-xs tracking-[0.25em] text-zinc-500 uppercase mt-0.5">
              • MAGIC
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-zinc-300">
            <a href="#services" className="transition-colors hover:text-gold-400">Services</a>
            <a href="#about" className="transition-colors hover:text-gold-400">About</a>
            <a href="#pricing" className="transition-colors hover:text-gold-400">Pricing</a>
            <a href="#testimonials" className="transition-colors hover:text-gold-400">Reviews</a>
            <a href="#contact" className="transition-colors hover:text-gold-400">Contact</a>
          </nav>

          {/* Header CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:256-808-5587" 
              className="flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-gold-400 transition-colors"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              <span>256-808-5587</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-2 text-sm font-bold text-zinc-950 transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-gold-500/10 active:scale-95"
            >
              Book Matt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-900 bg-zinc-950 px-6 py-6 transition-all duration-300">
            <nav className="flex flex-col gap-5 text-base font-semibold tracking-wide uppercase">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-gold-400"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-gold-400"
              >
                About
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-gold-400"
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-gold-400"
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-gold-400"
              >
                Contact
              </a>
              <div className="h-px bg-zinc-900 my-2" />
              <a 
                href="tel:256-808-5587" 
                className="flex items-center gap-3 text-zinc-300 hover:text-gold-400"
              >
                <Phone className="h-5 w-5 text-gold-400" />
                <span>256-808-5587</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-sm bg-gradient-to-r from-gold-500 to-gold-400 py-3 text-center text-sm font-bold text-zinc-950 transition-colors"
              >
                Book Matt for Your Event
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-20 px-6 z-10">
        {/* Background Image with Dark & Burgundy Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_magic.png"
            alt="Intriguing sleight of hand magic closeup"
            fill
            priority
            className="object-cover opacity-35 filter brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-burgundy-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-zinc-950/90" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center z-10">
          {/* Subtle rating badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-950/10 px-4 py-1.5 backdrop-blur-md">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-400">
              5.0 Star Rated Strolling Magician
            </span>
          </div>

          <h1 className="font-serif text-5xl font-extrabold tracking-tight sm:text-7xl">
            <span className="block text-zinc-100">Sophisticated Sleight of Hand.</span>
            <span className="block mt-2 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent gold-text-glow">
              Unforgettable Events.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300 leading-relaxed sm:text-xl">
            No stages. No smoke and mirrors. Matt Growden performs mind-boggling, strolling close-up magic designed specifically for adults—inches from your guests&apos; eyes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 px-8 py-4 text-base font-bold text-zinc-950 transition-all hover:scale-[1.04] hover:shadow-xl hover:shadow-gold-500/20 active:scale-95 animate-pulse-subtle"
            >
              <span>Book Matt for Your Event</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-sm border border-zinc-800 bg-zinc-900/40 px-8 py-4 text-base font-semibold text-zinc-200 transition-all hover:bg-zinc-900 hover:border-zinc-700 active:scale-95"
            >
              Explore Services
            </a>
          </div>

          {/* Brief Huntsville Mention */}
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-zinc-400">
            <MapPin className="h-4 w-4 text-gold-500" />
            <span>Exclusively serving Huntsville, Alabama & the Tennessee Valley</span>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / STATS STRIP */}
      <section className="relative z-20 border-y border-zinc-900 bg-zinc-950 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-x-12 text-center">
            <div>
              <p className="font-serif text-4xl font-bold text-gold-400">5.0</p>
              <div className="mt-1 flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">Perfect Rating</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-zinc-100">100%</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">Adult Focused</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-zinc-100">1,000s</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">Of Guests Amazed</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-gold-400">Local</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">Huntsville Based</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative py-24 px-6 z-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-base font-bold tracking-[0.25em] text-gold-400 uppercase">
              What Matt Does
            </h2>
            <p className="mt-4 font-serif text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
              Interactive Magic Tailored for Upscale Events
            </p>
            <p className="mt-4 text-lg text-zinc-400">
              Strolling magic is the ultimate icebreaker. Matt moves through the crowd, engaging small groups with elite sleight-of-hand that builds buzz and fills the room with laughter and applause.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Service 1: Weddings */}
            <div className="group relative rounded-sm border border-zinc-900 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-gold-500/30 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-gold-500/5">
              <div className="inline-flex rounded-sm bg-burgundy-950/40 p-3 text-gold-400 border border-burgundy-900/30 group-hover:border-gold-500/30 transition-all">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-zinc-100 group-hover:text-gold-300 transition-colors">
                Wedding Receptions
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Keep the momentum alive. Matt performs strolling magic during the cocktail hour, photos, and reception downtime, uniting families and keeping guests thoroughly entertained.
              </p>
            </div>

            {/* Service 2: Corporate Events */}
            <div className="group relative rounded-sm border border-zinc-900 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-gold-500/30 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-gold-500/5">
              <div className="inline-flex rounded-sm bg-burgundy-950/40 p-3 text-gold-400 border border-burgundy-900/30 group-hover:border-gold-500/30 transition-all">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-zinc-100 group-hover:text-gold-300 transition-colors">
                Corporate Banquets
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Break the ice and foster networking. Matt delivers sophisticated magic that helps clients feel welcome, breaks the ice, and creates a highly memorable company culture experience.
              </p>
            </div>

            {/* Service 3: Private Parties */}
            <div className="group relative rounded-sm border border-zinc-900 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-gold-500/30 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-gold-500/5">
              <div className="inline-flex rounded-sm bg-burgundy-950/40 p-3 text-gold-400 border border-burgundy-900/30 group-hover:border-gold-500/30 transition-all">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-zinc-100 group-hover:text-gold-300 transition-colors">
                Private Adult Parties
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Host an unforgettable gathering. Whether a milestone birthday, an anniversary, or an intimate dinner party, Matt delivers premium close-up magic tailored to adult groups.
              </p>
            </div>

            {/* Service 4: Restaurant Promotions */}
            <div className="group relative rounded-sm border border-zinc-900 bg-zinc-900/30 p-8 transition-all duration-300 hover:border-gold-500/30 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-gold-500/5">
              <div className="inline-flex rounded-sm bg-burgundy-950/40 p-3 text-gold-400 border border-burgundy-900/30 group-hover:border-gold-500/30 transition-all">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-zinc-100 group-hover:text-gold-300 transition-colors">
                Restaurant Promos
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Build major buzz and repeat clients. Matt provides upscale table-to-table magic that shortens perceived wait times and gives diners a unique reason to return.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-24 px-6 z-10 bg-zinc-950/60 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* About Text */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-base font-bold tracking-[0.25em] text-gold-400 uppercase">
                Meet the Magician
              </h2>
              <h3 className="mt-4 font-serif text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
                Huntsville&apos;s Strolling Close-Up Magic Specialist
              </h3>
              
              <div className="mt-6 space-y-6 text-base text-zinc-300 leading-relaxed">
                <p>
                  Matt Growden is proud to be the <strong className="text-gold-400 font-semibold">only professional magician in the Tennessee Valley</strong> exclusively specializing in strolling close-up magic for adults. 
                </p>
                <p>
                  Unlike stage magicians who rely on elaborate props, special lighting, and physical distance, Matt operates directly in the hands of the audience. Playing cards, coins, and everyday objects transform, disappear, and reappear in the most impossible ways, just inches from your eyes.
                </p>
                <p>
                  With a style that is engaging, mysterious, and sophisticated (never cheesy or childish), Matt blends flawless sleight-of-hand with lighthearted humor. The result is a shared event experience that keeps guests talking, laughing, and remembering your event for months to come.
                </p>
              </div>

              {/* Unique selling points checklist */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-950/30 text-gold-400 border border-gold-500/20">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>100% Adult Focus (No Kids Parties)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-950/30 text-gold-400 border border-gold-500/20">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>Fully Insured & Professional</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-950/30 text-gold-400 border border-gold-500/20">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>Flexible Mix-and-Mingle Style</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-950/30 text-gold-400 border border-gold-500/20">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>5-Star Google Rated Experience</span>
                </div>
              </div>
            </div>

            {/* About Image / Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-sm border border-gold-500/20 bg-zinc-900 burgundy-glow">
                <Image
                  src="/images/about_magic.png"
                  alt="Matt Growden performing close up strolling card magic"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 md:right-4 bg-zinc-900 border border-zinc-800 p-4 rounded-sm shadow-2xl flex items-center gap-3 max-w-xs">
                <Award className="h-10 w-10 text-gold-400 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Specialist</p>
                  <p className="text-sm font-serif font-bold text-zinc-100">Adult Strolling Sleight-of-Hand</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING NOTE / PACKAGES */}
      <section id="pricing" className="relative py-24 px-6 z-10 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-base font-bold tracking-[0.25em] text-gold-400 uppercase">
              Rates & Packages
            </h2>
            <p className="mt-4 font-serif text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
              Straightforward, Premium Pricing
            </p>
            <p className="mt-4 text-lg text-zinc-400">
              Matt delivers premium entertainment with transparent, competitive packages. Whether you require a single hour of strolling magic or custom wedding reception hosting, we make booking simple.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            
            {/* Package 1 */}
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-8 flex flex-col justify-between transition-all hover:border-zinc-800">
              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-100">Hourly Strolling</h3>
                <p className="mt-2 text-sm text-zinc-400">Perfect for private cocktail parties, business mixers, or restaurants looking to test the waters.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-zinc-400">Standard Hourly Rates</span>
                </div>
                <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Intimate tableside & standing groups</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Cards, coins, and mental miracles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Highly flexible scheduling</span>
                  </li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 block w-full py-3 rounded-sm border border-zinc-800 text-center text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-900">
                Inquire for Rates
              </a>
            </div>

            {/* Package 2 - Highlighted */}
            <div className="relative rounded-sm border border-gold-500/30 bg-zinc-900/40 p-8 flex flex-col justify-between shadow-xl shadow-gold-500/5 gold-border-glow">
              <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gold-400 px-3 py-1 text-2xs font-extrabold uppercase tracking-widest text-zinc-950">
                Most Popular
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-gold-400">The Wedding Package</h3>
                <p className="mt-2 text-sm text-zinc-400">Full coverage of your reception cocktail hour and transitioning periods to keep energy sky-high.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-gold-400">Premium Bespoke Package</span>
                </div>
                <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Up to 2 hours of strolling magic</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Custom bride & groom keepsake trick</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Perfect icebreaker for new families</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Includes travel within local zone</span>
                  </li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 block w-full py-3 rounded-sm bg-gradient-to-r from-gold-500 to-gold-400 text-center text-sm font-bold text-zinc-950 transition-all hover:scale-[1.02]">
                Book Wedding Package
              </a>
            </div>

            {/* Package 3 */}
            <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-8 flex flex-col justify-between transition-all hover:border-zinc-800">
              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-100">Corporate & Banquet</h3>
                <p className="mt-2 text-sm text-zinc-400">For larger organizations, dinners, networking events, or custom residency bookings.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-zinc-400">Tailored Corporate Rates</span>
                </div>
                <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Adapts to large venues & cocktail halls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>Professional invoicing & planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-gold-400 shrink-0" />
                    <span>VIP tableside attention</span>
                  </li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 block w-full py-3 rounded-sm border border-zinc-800 text-center text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-900">
                Get Corporate Quote
              </a>
            </div>

          </div>

          {/* Pricing Fine Print */}
          <div className="mt-12 max-w-2xl mx-auto rounded-sm border border-zinc-900 bg-zinc-950 p-6 flex flex-col sm:flex-row items-start gap-4">
            <MapPin className="h-8 w-8 text-gold-500 shrink-0" />
            <div className="text-sm text-zinc-400 leading-relaxed">
              <strong className="text-zinc-200 block mb-1">Travel Policy:</strong>
              No travel fee applies for bookings within a 30-mile radius of Huntsville, Alabama. For events located outside of this Huntsville service radius, a minor mileage fee will be calculated and added transparently to your booking agreement.
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="relative py-24 px-6 z-10 bg-zinc-900/20 border-t border-zinc-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-base font-bold tracking-[0.25em] text-gold-400 uppercase">
              Rave Reviews
            </h2>
            <h3 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-zinc-100">
              Loved by Huntsville Clients
            </h3>
          </div>

          {/* Testimonial Box */}
          <div className="relative rounded-sm border border-zinc-800 bg-zinc-900/40 p-8 md:p-12 burgundy-glow">
            {/* Large gold quotes icon */}
            <span className="absolute top-4 left-6 font-serif text-8xl text-gold-500/10 select-none">“</span>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-zinc-200 italic leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
                <div>
                  <p className="font-bold text-zinc-100">{testimonials[activeTestimonial].author}</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">
                    {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                  </p>
                </div>
                
                {/* Dots Navigation */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none ${
                        index === activeTestimonial ? "bg-gold-400" : "bg-zinc-700 hover:bg-zinc-600"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING FORM */}
      <section id="contact" className="relative py-24 px-6 z-10 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Contact Details (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-base font-bold tracking-[0.25em] text-gold-400 uppercase">
                  Book Matt
                </h2>
                <h3 className="mt-4 font-serif text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
                  Ready to Make Your Event Legendary?
                </h3>
                <p className="mt-6 text-zinc-300 leading-relaxed">
                  Provide details about your wedding, corporate event, or private party. Matt responds to booking inquiries within 24 hours. Let&apos;s create something your guests will talk about forever.
                </p>

                <div className="mt-10 space-y-6">
                  {/* Call Direct */}
                  <a 
                    href="tel:256-808-5587" 
                    className="flex items-center gap-4 rounded-sm border border-zinc-900 bg-zinc-900/20 p-4 transition-colors hover:border-gold-500/20 hover:bg-zinc-900/40 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold-950/30 text-gold-400 border border-gold-500/20 group-hover:border-gold-500/40">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400">Call or Text Direct</p>
                      <p className="text-lg font-bold text-zinc-100 group-hover:text-gold-400 transition-colors">256-808-5587</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/magicmattgrowden" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-sm border border-zinc-900 bg-zinc-900/20 p-4 transition-colors hover:border-gold-500/20 hover:bg-zinc-900/40 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold-950/30 text-gold-400 border border-gold-500/20 group-hover:border-gold-500/40">
                      <InstagramIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-400">Direct Message</p>
                      <p className="text-lg font-bold text-zinc-100 group-hover:text-gold-400 transition-colors">@magicmattgrowden</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Local Huntsville Notice */}
              <div className="mt-12 pt-6 border-t border-zinc-900 text-xs text-zinc-500 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-600" />
                <span>Licensed, insured, and verified Huntsville, Alabama small business.</span>
              </div>
            </div>

            {/* Inquiry Form (Right) */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-zinc-900 bg-zinc-900/20 p-8 backdrop-blur-md">
                
                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-950/50 text-gold-400 border border-gold-500/30 mb-6">
                      <Calendar className="h-8 w-8" />
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-zinc-100">Inquiry Received!</h4>
                    <p className="mt-3 text-zinc-400 max-w-md mx-auto">
                      Thank you for reaching out. Matt is reviewing your event details and will contact you directly within 24 hours to discuss availability and packages.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-8 text-sm font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-4"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="mt-2 block w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="name@example.com"
                          className="mt-2 block w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="(256) 555-0199"
                          className="mt-2 block w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                          Event Date (Preferred)
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={handleFormChange}
                          className="mt-2 block w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        id="eventType"
                        value={formData.eventType}
                        onChange={handleFormChange}
                        className="mt-2 block w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      >
                        <option value="wedding">Wedding Reception</option>
                        <option value="corporate">Corporate Banquet/Event</option>
                        <option value="private">Private Adult Gathering</option>
                        <option value="restaurant">Restaurant Promotion</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        Event Details & Guest Count
                      </label>
                      <textarea
                        name="details"
                        id="details"
                        rows={4}
                        required
                        value={formData.details}
                        onChange={handleFormChange}
                        placeholder="Tell Matt about your event (expected guest size, approximate timeframe, and location details)..."
                        className="mt-2 block w-full rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-gold-500 to-gold-400 py-4 text-center text-base font-bold text-zinc-950 transition-all hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
                    >
                      Submit Booking Inquiry
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-bold text-gold-400 tracking-widest">MATT GROWDEN MAGIC</p>
            <p className="text-xs text-zinc-500 mt-1">© 2026 Matt Growden Magic. All rights reserved.</p>
          </div>

          <div className="flex gap-6 text-xs text-zinc-400 font-medium tracking-wide uppercase">
            <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
            <a href="#pricing" className="hover:text-gold-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right text-xs text-zinc-600">
            <p>Huntsville, AL • Madison, AL • Tennessee Valley Area</p>
            <p className="mt-1">Designed for elegant adult event entertainment.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
