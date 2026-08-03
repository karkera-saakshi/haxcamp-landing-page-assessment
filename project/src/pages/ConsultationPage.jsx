import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import axios from "axios";

const colors = {
  ink: "#14110D",
  amber: "#E8971F",
  amberDark: "#C97812",
  cream: "#FBF7F0",
  white: "#FFFFFF",
  textMuted: "#786F62",
  lineDark: "#3A342A",
};

const fontDisplay = "'Fraunces', Georgia, serif";
const fontBody = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Corporate Gala",
    date: "",
    details: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/create", formData)
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        alert("Failed to submit ticket. Please try again.");
      });
    };

  return (
    <div style={{ fontFamily: fontBody, background: colors.ink, color: "#D9D3C6", minHeight: "100vh", padding: "40px 6vw" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: colors.amber, fontSize: 14, textDecoration: "none", marginBottom: 40 }}>
        <ArrowLeft size={16} /> Back to main page
      </Link>

      <div style={{ maxWidth: 600, margin: "0 auto", background: "#1C1814", border: `1px solid ${colors.lineDark}`, borderRadius: 8, padding: 40 }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 0" }}>
            <CheckCircle2 size={48} color={colors.amber} style={{ marginBottom: 16 }} />
            <h2 style={{ fontFamily: fontDisplay, fontSize: 32, color: colors.white, marginBottom: 12 }}>Consultation Requested!</h2>
            <p style={{ color: "#9B927F", fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
              Thank you, {formData.name}. Our event production team will review your details and contact you within 24 hours.
            </p>
            <Link to="/" style={{ background: colors.amber, color: colors.ink, padding: "12px 24px", borderRadius: 4, fontWeight: 600, textDecoration: "none" }}>
              Return Home
            </Link>
          </div>
        ) : (
          <>
            <h1 style={{ fontFamily: fontDisplay, fontSize: 36, color: colors.white, marginBottom: 8 }}>Book a Consultation</h1>
            <p style={{ color: "#9B927F", fontSize: 14, marginBottom: 32 }}>
              Let's discuss your vision, budget, and key event requirements.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 6, fontWeight: 500 }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  style={{ width: "100%", padding: 12, background: "#14110D", border: `1px solid ${colors.lineDark}`, borderRadius: 4, color: "#FFF", fontSize: 14, outline: "none" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 6, fontWeight: 500 }}>Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  style={{ width: "100%", padding: 12, background: "#14110D", border: `1px solid ${colors.lineDark}`, borderRadius: 4, color: "#FFF", fontSize: 14, outline: "none" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, marginBottom: 6, fontWeight: 500 }}>Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    style={{ width: "100%", padding: 12, background: "#14110D", border: `1px solid ${colors.lineDark}`, borderRadius: 4, color: "#FFF", fontSize: 14, outline: "none" }}
                  >
                    <option>Corporate Gala</option>
                    <option>Product Launch</option>
                    <option>Private Celebration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, marginBottom: 6, fontWeight: 500 }}>Target Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{ width: "100%", padding: 12, background: "#14110D", border: `1px solid ${colors.lineDark}`, borderRadius: 4, color: "#FFF", fontSize: 14, outline: "none" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, marginBottom: 6, fontWeight: 500 }}>Project Details</label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Estimated guest count, venue preferences, or key goals..."
                  style={{ width: "100%", padding: 12, background: "#14110D", border: `1px solid ${colors.lineDark}`, borderRadius: 4, color: "#FFF", fontSize: 14, outline: "none", resize: "none" }}
                />
              </div>

              <button
                type="submit"
                style={{ background: colors.amber, color: colors.ink, border: "none", padding: "14px 24px", borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", marginTop: 10 }}
              >
                Submit Consultation Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}