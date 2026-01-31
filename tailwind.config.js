/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			heading: ["Cormorant Garamond", "serif"],
			body: ["DM Sans", "sans-serif"],
		},
		fontSize: {
			"display-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
			"display": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
			"display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
			"heading-lg": ["2rem", { lineHeight: "1.25" }],
			"heading": ["1.5rem", { lineHeight: "1.3" }],
			"heading-sm": ["1.25rem", { lineHeight: "1.4" }],
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			terracotta: {
  				DEFAULT: 'hsl(var(--terracotta))',
  				dark: 'hsl(var(--terracotta-dark))',
  				light: 'hsl(var(--terracotta-light))'
  			},
  			sage: {
  				DEFAULT: 'hsl(var(--sage))',
  				dark: 'hsl(var(--sage-dark))',
  				light: 'hsl(var(--sage-light))'
  			},
  			golden: {
  				DEFAULT: 'hsl(var(--golden))',
  				dark: 'hsl(var(--golden-dark))',
  				light: 'hsl(var(--golden-light))'
  			},
  			linen: {
  				DEFAULT: 'hsl(var(--linen))',
  				dark: 'hsl(var(--linen-dark))'
  			},
  			charcoal: {
  				DEFAULT: 'hsl(var(--charcoal))',
  				light: 'hsl(var(--charcoal-light))'
  			},
  			cream: 'hsl(var(--cream))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}