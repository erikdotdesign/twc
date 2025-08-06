export type Gradient = {
  name: string;
  colors: string[];
  direction: string;
};

const bluePurpleGradients: Gradient[] = [
  { name: "ocean wave", colors: ["tw-blue/500", "tw-purple/600"], direction: "to-r" },
  { name: "cosmic flow", colors: ["tw-blue/400", "tw-purple/500", "tw-indigo/600"], direction: "to-br" },
  { name: "deep ocean", colors: ["tw-indigo/900", "tw-blue/500"], direction: "to-t" },
  { name: "royal purple", colors: ["tw-violet/500", "tw-purple/900"], direction: "to-bl" },
  { name: "midnight mystery", colors: ["tw-slate/900", "tw-purple/900", "tw-slate/800"], direction: "to-tr" },
  { name: "purple spectrum", colors: ["tw-indigo/500", "tw-purple/500", "tw-pink/500"], direction: "to-l" }
];

const warmGradients: Gradient[] = [
  { name: "sunset glow", colors: ["tw-orange/400", "tw-red/500"], direction: "to-r" },
  { name: "fire burst", colors: ["tw-yellow/400", "tw-orange/500", "tw-red/600"], direction: "to-br" },
  { name: "rose bloom", colors: ["tw-red/500", "tw-pink/500"], direction: "to-t" },
  { name: "golden hour", colors: ["tw-amber/400", "tw-orange/600"], direction: "to-bl" },
  { name: "passionate", colors: ["tw-red/600", "tw-pink/600", "tw-purple/600"], direction: "to-tr" },
  { name: "warm sunset", colors: ["tw-yellow/300", "tw-red/500", "tw-pink/600"], direction: "to-l" }
];

const coolGradients: Gradient[] = [
  { name: "fresh mint", colors: ["tw-green/400", "tw-blue/500"], direction: "to-r" },
  { name: "tropical water", colors: ["tw-cyan/400", "tw-teal/500", "tw-green/600"], direction: "to-br" },
  { name: "spring fresh", colors: ["tw-emerald/500", "tw-lime/400"], direction: "to-t" },
  { name: "clear sky", colors: ["tw-sky/400", "tw-cyan/600"], direction: "to-bl" },
  { name: "ocean breeze", colors: ["tw-teal/400", "tw-cyan/500", "tw-blue/600"], direction: "to-tr" },
  { name: "cool spectrum", colors: ["tw-green/300", "tw-blue/500", "tw-purple/600"], direction: "to-l" }
];

const pastelGradients: Gradient[] = [
  { name: "soft lavender", colors: ["tw-pink/200", "tw-purple/200"], direction: "to-r" },
  { name: "dreamy clouds", colors: ["tw-blue/100", "tw-purple/100", "tw-pink/100"], direction: "to-br" },
  { name: "mint breeze", colors: ["tw-green/100", "tw-blue/100"], direction: "to-t" },
  { name: "cotton candy", colors: ["tw-yellow/100", "tw-pink/100"], direction: "to-bl" },
  { name: "peaceful morning", colors: ["tw-indigo/100", "tw-cyan/100", "tw-teal/100"], direction: "to-tr" },
  { name: "gentle sunrise", colors: ["tw-rose/100", "tw-orange/100", "tw-amber/100"], direction: "to-l" }
];

const neutralGradients: Gradient[] = [
  { name: "storm clouds", colors: ["tw-gray/400", "tw-gray/800"], direction: "to-r" },
  { name: "slate flow", colors: ["tw-slate/200", "tw-slate/400", "tw-slate/700"], direction: "to-br" },
  { name: "modern steel", colors: ["tw-zinc/800", "tw-zinc/200"], direction: "to-t" },
  { name: "natural stone", colors: ["tw-stone/300", "tw-stone/600"], direction: "to-bl" },
  { name: "charcoal fade", colors: ["tw-neutral/900", "tw-neutral/600", "tw-neutral/300"], direction: "to-tr" },
  { name: "silver gradient", colors: ["tw-gray/100", "tw-gray/300", "tw-gray/600"], direction: "to-l" }
];

const natureGradients: Gradient[] = [
  { name: "forest sunlight", colors: ["tw-green/600", "tw-yellow/400"], direction: "to-r" },
  { name: "earth elements", colors: ["tw-blue/600", "tw-green/500", "tw-yellow/400"], direction: "to-br" },
  { name: "autumn leaves", colors: ["tw-amber/600", "tw-yellow/300"], direction: "to-t" },
  { name: "forest canopy", colors: ["tw-emerald/800", "tw-lime/300"], direction: "to-bl" },
  { name: "desert sunset", colors: ["tw-orange/500", "tw-red/500", "tw-yellow/400"], direction: "to-tr" },
  { name: "ocean depths", colors: ["tw-sky/600", "tw-blue/500", "tw-cyan/400"], direction: "to-l" }
];

const darkGradients: Gradient[] = [
  { name: "midnight", colors: ["tw-black", "tw-gray/800"], direction: "to-r" },
  { name: "dark nebula", colors: ["tw-gray/900", "tw-purple/900", "tw-violet/900"], direction: "to-br" },
  { name: "dark fire", colors: ["tw-slate/900", "tw-red/900"], direction: "to-t" },
  { name: "deep space", colors: ["tw-indigo/900", "tw-black"], direction: "to-bl" },
  { name: "dark forest", colors: ["tw-emerald/900", "tw-slate/900", "tw-gray/900"], direction: "to-tr" },
  { name: "gothic", colors: ["tw-red/900", "tw-black", "tw-purple/900"], direction: "to-l" }
];

const multiGradients: Gradient[] = [
  { name: "rainbow linear", colors: ["tw-rose/400", "tw-fuchsia/500", "tw-indigo/500", "tw-teal/400", "tw-yellow/400"], direction: "to-r" },
  { name: "sunset burst", colors: ["tw-purple/500", "tw-pink/500", "tw-red/500", "tw-orange/500"], direction: "to-br" },
  { name: "blue spectrum", colors: ["tw-cyan/500", "tw-blue/500", "tw-indigo/500", "tw-purple/500"], direction: "to-t" },
  { name: "fire gradient", colors: ["tw-green/400", "tw-yellow/400", "tw-orange/400", "tw-red/500"], direction: "to-bl" },
  { name: "prism effect", colors: ["tw-violet/600", "tw-purple/600", "tw-blue/600", "tw-green/500", "tw-yellow/400"], direction: "to-tr" },
  { name: "full spectrum", colors: ["tw-pink/400", "tw-red/400", "tw-yellow/400", "tw-green/400", "tw-blue/400"], direction: "to-l" }
];

const gradients = {
  bluePurple: bluePurpleGradients,
  warm: warmGradients,
  cool: coolGradients,
  pastel: pastelGradients,
  neutral: neutralGradients,
  nature: natureGradients,
  dark: darkGradients,
  multi: multiGradients
};

export default gradients;