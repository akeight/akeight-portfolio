import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans Variable"', "system-ui", "sans-serif"],
        serif: ['"Lora Variable"', "Georgia", "serif"],
        /* A true monospace, reserved for the annotation layer:
           figure numbers, metadata, captions, technical labels.
           Never paragraphs, never headings. */
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-sm": ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        display: ["clamp(3.25rem, 9vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(3.5rem, 12vw, 10rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        thesis: ["clamp(1.5rem, 3.2vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
        },
        plum: "hsl(var(--plum))",
        oxblood: "hsl(var(--oxblood))",
        sage: "hsl(var(--sage))",
        dusty: "hsl(var(--dusty))",
        ochre: "hsl(var(--ochre))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
