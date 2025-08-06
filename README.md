# 🌈 twc – Tailwind Colors for Figma

**twc** is a Figma plugin that adds the complete default [Tailwind CSS](https://tailwindcss.com/docs/colors) color palette as document color variables.

No setup, no copy-pasting — just one click to get a beautifully organized palette inside your Figma file, fully powered by Figma variables.

![Screenshot](twc-cover.png)

---

## 🎨 What You Get

- ✅ 22 color families:
  `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`

- ✅ 11 steps per color: `50` → `950`

- ✅ Color variables for each swatch (e.g. `tw-red/500`)

- ✅ Labeled swatches laid out in a clear grid

- ✅ Auto-detects your current page background and adjusts text contrast for label visibility

---

## 🚀 Usage

1. Run the plugin in your Figma file.
2. All Tailwind colors will be added as **document variables**.
3. A swatch grid will be generated, organized by color group and step.
4. Use the variables in fills, strokes, styles, or components as needed.

---

## 🛠 Dev Info

Built with:
- `colorjs.io` for OKLCH → sRGB conversion
- Figma Plugin API
- TypeScript
- esbuild

---

## 📄 License

MIT