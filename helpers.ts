import Color from 'colorjs.io';

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
}