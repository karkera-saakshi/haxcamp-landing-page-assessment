import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Compass,
  Users,
  SlidersHorizontal,
  CheckCircle2,
  ArrowRight,
  Star,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
} from "lucide-react";

const colors = {
  ink: "#14110D",
  inkSoft: "#211D18",
  amber: "#E8971F",
  amberDark: "#C97812",
  amberLight: "#FAEEDA",
  cream: "#FBF7F0",
  white: "#FFFFFF",
  textMuted: "#786F62",
  line: "#E7E0D4",
  lineDark: "#3A342A",
};

const fontDisplay = "'Fraunces', Georgia, serif";
const fontBody = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const features = [
  {
    icon: Compass,
    title: "Concept & design",
    copy: "We build a creative vision around your goals, then translate it into a room, a run of show, and a mood your guests won't forget.",
  },
  {
    icon: Users,
    title: "Vendor curation",
    copy: "Caterers, florists, AV crews, entertainers. Every partner is hand-picked and managed under one roof, so you make one call, not twelve.",
  },
  {
    icon: SlidersHorizontal,
    title: "Full production",
    copy: "Lighting, staging, sound, and signage, engineered and installed by our in-house production team from load-in to strike.",
  },
  {
    icon: CheckCircle2,
    title: "Day-of execution",
    copy: "A dedicated lead runs the floor on event day, cueing every moment, so you're free to be a guest at your own event.",
  },
];

const logos = ["HALCYON CAPITAL", "RIDGELINE TECH", "NORDVIEW GROUP", "MERIDIAN & CO", "ARBOR PARTNERS"];

const testimonials = [
  {
    quote:
      "Lumen turned our product launch into the thing people still bring up a year later. Every corner of the room had a reason to be there.",
    name: "Priya Anand",
    role: "Head of Marketing, Halcyon Capital",
  },
  {
    quote:
      "They ran twelve moving pieces without a single one showing on our end. That is the whole job, done right.",
    name: "Marcus Webb",
    role: "COO, Ridgeline Tech",
  },
  {
    quote:
      "The most organized planning team we have worked with. We handed them a date and a budget and nothing slipped after that.",
    name: "Elena Kosta",
    role: "Events Lead, Nordview Group",
  },
];

function Beam({ dark }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <div
        style={{
          width: 84,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, transparent, ${colors.amber}, transparent)`,
        }}
      />
    </div>
  );
}

export default function EventPage() {
  const [hoverCta, setHoverCta] = useState(false);
  const [hoverGhost, setHoverGhost] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);
  const [hoverBottomCta, setHoverBottomCta] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: fontBody, color: colors.inkSoft, background: colors.cream, width: "100%", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* NAV */}
      <header
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "26px 64px",
          background: colors.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500, fontSize: 22, color: colors.amber }}>
            Lumen
          </span>
          <span style={{ fontSize: 13, letterSpacing: 3, color: "#C9C2B3", fontWeight: 500 }}>EVENTS</span>
        </div>

        <nav style={{ display: "flex", gap: 40, fontSize: 14, color: "#D9D3C6", fontWeight: 500 }}>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          onClick={() => navigate("/book")}
          onMouseEnter={() => setHoverCta(true)}
          onMouseLeave={() => setHoverCta(false)}
          style={{
            background: hoverCta ? colors.amberDark : colors.amber,
            color: colors.ink,
            border: "none",
            padding: "12px 24px",
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
        >
          Book a consultation
        </button>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          background: `linear-gradient(180deg, rgba(20,17,13,0.72) 0%, rgba(20,17,13,0.86) 65%, ${colors.ink} 100%), url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat`,
          minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 190px",
        }}
      >
        <div style={{ maxWidth: 620 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              letterSpacing: 2.5,
              fontWeight: 600,
              color: colors.amber,
              border: `1px solid ${colors.amber}`,
              borderRadius: 20,
              padding: "6px 14px",
              marginBottom: 28,
            }}
          >
            EVENT PLANNING & PRODUCTION
          </div>

          <h1
            style={{
              fontFamily: fontDisplay,
              fontWeight: 500,
              fontSize: 58,
              lineHeight: 1.08,
              color: colors.white,
              marginBottom: 24,
            }}
          >
            Every detail,{" "}
            <span style={{ fontStyle: "italic", color: colors.amber }}>illuminated.</span>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#D9D3C6", marginBottom: 40, maxWidth: 520 }}>
            Lumen Events designs and produces corporate galas, product launches, and private
            celebrations, handled from the first spark of an idea to the final toast.
          </p>

          <div style={{ display: "flex", gap: 16, marginBottom: 44 }}>
            <button
              onClick={() => navigate("/book")}
              onMouseEnter={() => setHoverCta(true)}
              onMouseLeave={() => setHoverCta(false)}
              style={{
                background: hoverCta ? colors.amberDark : colors.amber,
                color: colors.ink,
                border: "none",
                padding: "16px 30px",
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "background 0.2s ease",
              }}
            >
              Start planning <ArrowRight size={16} />
            </button>
            <button
              onMouseEnter={() => setHoverGhost(true)}
              onMouseLeave={() => setHoverGhost(false)}
              style={{
                background: hoverGhost ? "rgba(255,255,255,0.08)" : "transparent",
                color: colors.white,
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "16px 30px",
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              View our work
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={colors.amber} color={colors.amber} />
              ))}
            </div>
            <span style={{ fontSize: 13, color: "#B8B0A0" }}>
              Trusted by 120+ companies across finance, tech, and hospitality
            </span>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS — overlapping hero */}
      <section
        id="services"
        style={{
          padding: "0 64px",
          marginTop: -130,
          position: "relative",
          zIndex: 5,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            const hovered = hoverCard === i;
            return (
              <div
                key={f.title}
                onMouseEnter={() => setHoverCard(i)}
                onMouseLeave={() => setHoverCard(null)}
                style={{
                  background: colors.white,
                  borderRadius: 8,
                  padding: "32px 26px",
                  boxShadow: hovered
                    ? "0 20px 40px rgba(20,17,13,0.14)"
                    : "0 12px 30px rgba(20,17,13,0.10)",
                  transform: hovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: colors.amberLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={22} color={colors.amberDark} />
                </div>
                <h3 style={{ fontFamily: fontDisplay, fontSize: 19, fontWeight: 600, marginBottom: 10 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: colors.textMuted }}>{f.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOCIAL PROOF — logos */}
      <section style={{ padding: "120px 64px 40px", textAlign: "center" }}>
        <p style={{ fontSize: 12, letterSpacing: 2, fontWeight: 600, color: colors.textMuted, marginBottom: 32 }}>
          TRUSTED BY TEAMS AT
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
            color: "#B6AC99",
            fontFamily: fontDisplay,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 1,
          }}
        >
          {logos.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </section>

      <Beam />

      {/* TESTIMONIALS */}
      <section id="work" style={{ padding: "60px 64px 100px" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
          <h2 style={{ fontFamily: fontDisplay, fontSize: 34, fontWeight: 500 }}>
            Rooms people <span style={{ fontStyle: "italic", color: colors.amberDark }}>remember.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: colors.white,
                border: `1px solid ${colors.line}`,
                borderRadius: 8,
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill={colors.amber} color={colors.amber} />
                  ))}
                </div>
                <p style={{ fontFamily: fontDisplay, fontSize: 16, lineHeight: 1.6, color: colors.inkSoft, marginBottom: 22 }}>
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</p>
                <p style={{ fontSize: 13, color: colors.textMuted }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        id="contact"
        style={{
          background: colors.ink,
          padding: "90px 64px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <p style={{ fontSize: 12, letterSpacing: 2.5, fontWeight: 600, color: colors.amber, marginBottom: 18 }}>
          LET'S BUILD SOMETHING
        </p>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 38, fontWeight: 500, color: colors.white, marginBottom: 16 }}>
          Have a date in mind?
        </h2>
        <p style={{ fontSize: 16, color: "#C9C2B3", marginBottom: 36, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>
          Tell us the vision. We'll handle the rest, from venue to final toast.
        </p>
        <button
          onClick={() => navigate("/book")}
          onMouseEnter={() => setHoverBottomCta(true)}
          onMouseLeave={() => setHoverBottomCta(false)}
          style={{
            background: hoverBottomCta ? colors.amberDark : colors.amber,
            color: colors.ink,
            border: "none",
            padding: "16px 34px",
            borderRadius: 4,
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "background 0.2s ease",
          }}
        >
          Book a consultation <ArrowRight size={16} />
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ background: colors.ink, borderTop: `1px solid ${colors.lineDark}`, padding: "56px 64px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 14 }}>
              <span style={{ fontFamily: fontDisplay, fontStyle: "italic", fontWeight: 500, fontSize: 20, color: colors.amber }}>
                Lumen
              </span>
              <span style={{ fontSize: 12, letterSpacing: 3, color: "#C9C2B3", fontWeight: 500 }}>EVENTS</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#9B927F", maxWidth: 240 }}>
              Full-service event design and production for corporate and private clients.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 20 }}>
              <Globe size={16} color="#C9C2B3" />
              <ExternalLink size={16} color="#C9C2B3" />
              <Mail size={16} color="#C9C2B3" />
            </div>
          </div>

          <div>
            <p style={{ fontSize: 12, letterSpacing: 1.5, color: colors.amber, fontWeight: 600, marginBottom: 16 }}>SERVICES</p>
            {["Corporate events", "Product launches", "Private celebrations", "Production"].map((s) => (
              <p key={s} style={{ fontSize: 14, color: "#C9C2B3", marginBottom: 10 }}>{s}</p>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 12, letterSpacing: 1.5, color: colors.amber, fontWeight: 600, marginBottom: 16 }}>COMPANY</p>
            {["About", "Our work", "Careers", "Contact"].map((s) => (
              <p key={s} style={{ fontSize: 14, color: "#C9C2B3", marginBottom: 10 }}>{s}</p>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 12, letterSpacing: 1.5, color: colors.amber, fontWeight: 600, marginBottom: 16 }}>CONTACT</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Mail size={14} color="#9B927F" />
              <span style={{ fontSize: 14, color: "#C9C2B3" }}>hello@lumenevents.co</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Phone size={14} color="#9B927F" />
              <span style={{ fontSize: 14, color: "#C9C2B3" }}>+1 (415) 555-0199</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MapPin size={14} color="#9B927F" />
              <span style={{ fontSize: 14, color: "#C9C2B3" }}>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${colors.lineDark}`,
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            color: "#786F62",
          }}
        >
          <span>© 2026 Lumen Events. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </footer>
    </div>
  );
}
