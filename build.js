require("esbuild").build({
  entryPoints: ["code.ts"],
  bundle: true,
  outfile: "dist/code.js",
  format: "iife",
  platform: "browser",
  target: ["es2017"],
  loader: { ".mjs": "js" }
}).catch(() => process.exit(1));