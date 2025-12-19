/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", "class"],
  theme: {
  	screens: {
  		sm: '700px',
  		md: '1100px',
  		lg: '1440px'
  	},
  	fontFamily: {
  		display: [
  			'Open Sans',
  			'sans-serif'
  		],
  		body: [
  			'Open Sans',
  			'sans-serif'
  		]
  	},
  	extend: {
  		fontSize: {
  			'14': '14px'
  		},
  		letterSpacing: {
  			tightest: '-.075em',
  			tighter: '-.05em',
  			tight: '-.015em',
  			normal: '0',
  			wide: '.025em',
  			wider: '.04em',
  			widest: '.25em'
  		},
  		backgroundColor: {
  			'main-bg': '#F6F6F6',
  			'main-dark-bg': '#20232A',
  			'secondary-dark-bg': '#33373E',
  			'light-gray': '#F7F7F7',
  			'half-transparent': 'rgba(0, 0, 0, 0.5)'
  		},
  		borderWidth: {
  			'1': '1px'
  		},
  		borderColor: {
  			color: 'rgba(0, 0, 0, 0.1)'
  		},
  		width: {
  			'400': '400px',
  			'760': '760px',
  			'780': '780px',
  			'800': '800px',
  			'1000': '1000px',
  			'1200': '1200px',
  			'1400': '1400px'
  		},
  		height: {
  			'80': '80px'
  		},
  		minHeight: {
  			'590': '590px'
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};