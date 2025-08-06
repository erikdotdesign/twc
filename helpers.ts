import Color from 'colorjs.io';
import { Gradient } from './gradients';

export const hexToRgb = (hex: string): RGB => {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: ((bigint >> 16) & 255) / 255,
    g: ((bigint >> 8) & 255) / 255,
    b: (bigint & 255) / 255,
  };
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getLabelColor = () => {
  const bgPaint = figma.currentPage.backgrounds?.[0];
  const bgColor = bgPaint
    ? new Color("srgb", [
        bgPaint.color.r,
        bgPaint.color.g,
        bgPaint.color.b
      ])
    : new Color("white");

  const black = new Color("srgb", [0, 0, 0]);
  const white = new Color("srgb", [1, 1, 1]);

  const contrastWithBlack = bgColor.contrast(black, "APCA");
  const contrastWithWhite = bgColor.contrast(white, "APCA");

  return Math.abs(contrastWithBlack) > Math.abs(contrastWithWhite) 
    ? { r: 0, g: 0, b: 0 } 
    : { r: 1, g: 1, b: 1 };
};

export const getVariableByName = (name: string, allVars: Variable[]) => {
  return allVars.find(v => v.name === name);
};

export const directionToTransform: Record<string, [[number, number, number], [number, number, number]]> = {
  "to-r": [[1, 0, 0], [0, 1, 0]],
  "to-l": [[-1, 0, 1], [0, 1, 0]],
  "to-t": [[1, 0, 0], [0, -1, 1]],
  "to-b": [[1, 0, 0], [0, 1, 0]],
  "to-tr": [[0.707, 0.707, 0], [-0.707, 0.707, 1]],
  "to-tl": [[-0.707, 0.707, 1], [-0.707, -0.707, 1]],
  "to-br": [[0.707, 0.707, 0], [0.707, -0.707, 0]],
  "to-bl": [[-0.707, 0.707, 1], [0.707, 0.707, 0]],
};

export const flattenGradientMap = (gradientMap: Record<string, Gradient[]>): { category: string, gradient: Gradient }[] => {
  return Object.entries(gradientMap).flatMap(([category, gradients]) =>
    gradients.map(gradient => ({ category, gradient }))
  );
};

export const camelCaseToSentenceLower = (str: string): string => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase();
};