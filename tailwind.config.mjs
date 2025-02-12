/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		// .container設定
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		// 當使用font-primary，使用我在layout.jsx裏定義的變數(也就是我要的字體)
		//tailwind的規則就是fontFamily下的key會變成font-key
		fontFamily: {
			primary: ['var(--font-jetbrainsMono)'],
		},
		// 擴展預設的配置
		extend: {
			colors: {
				primary: '#1c1c22',
				accent: {
					DEFAULT: '#00ff99',   //green-ish
					hover: '#00e187',     //green-ish
				},
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},

		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default tailwindConfig;
