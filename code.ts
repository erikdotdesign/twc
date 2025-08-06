import Color from 'colorjs.io';
import colors from './colors';
import { capitalize, getLabelColor, hexToRgb } from './helpers';

const main = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  const collectionName = "twc";
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  let collection = collections.find(c => c.name === collectionName);
  if (collection) collection.remove();
  collection = figma.variables.createVariableCollection(collectionName);

  const steps = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
  const swatchSize = 72;
  const swatchSpacing = 16;
  const labelFontSize = 16;
  const labelFontName = { family: "Inter", style: "Bold" };
  const labelColor = getLabelColor();
  const swatchLabelWidth = swatchSize * 2;

  // Main container
  const container = figma.createFrame();
  container.name = "twc-swatches";
  container.fills = [];
  container.layoutMode = "VERTICAL";
  container.counterAxisSizingMode = "AUTO";
  container.primaryAxisSizingMode = "AUTO";
  container.itemSpacing = swatchSpacing;
  container.x = figma.viewport.center.x - 1112 / 2;
  container.y = figma.viewport.center.y - 2008 / 2;
  figma.currentPage.appendChild(container);

  // Top step labels row
  const stepLabelRow = figma.createFrame();
  stepLabelRow.name = "step labels";
  stepLabelRow.fills = [];
  stepLabelRow.layoutMode = "HORIZONTAL";
  stepLabelRow.counterAxisSizingMode = "AUTO";
  stepLabelRow.primaryAxisSizingMode = "AUTO";
  stepLabelRow.itemSpacing = swatchSpacing;
  stepLabelRow.paddingLeft = swatchLabelWidth + swatchSpacing; // pad to align with swatch rows

  for (const step of steps) {
    const label = figma.createText();
    label.fontName = labelFontName;
    label.characters = step;
    label.fontSize = labelFontSize;
    label.resize(swatchSize, swatchSize);
    label.textAlignHorizontal = "CENTER";
    label.textAlignVertical = "CENTER";
    label.fills = [{type: "SOLID", color: labelColor}];
    stepLabelRow.appendChild(label);
  }

  container.appendChild(stepLabelRow);

  // Color groups
  for (const [color, group] of Object.entries(colors)) {
    // HORIZONTAL: one label + one swatch row
    const colorGroupRow = figma.createFrame();
    colorGroupRow.fills = [];
    colorGroupRow.layoutMode = "HORIZONTAL";
    colorGroupRow.counterAxisSizingMode = "AUTO";
    colorGroupRow.primaryAxisSizingMode = "AUTO";
    colorGroupRow.itemSpacing = swatchSpacing;
    colorGroupRow.name = `${color}`;

    // TEXT label (e.g., "red")
    const label = figma.createText();
    label.name = "label";
    label.fontName = labelFontName;
    label.characters = capitalize(color);
    label.fontSize = labelFontSize;
    label.resize(swatchLabelWidth, swatchSize);
    label.textAlignHorizontal = "LEFT";
    label.textAlignVertical = "CENTER";
    label.fills = [{type: "SOLID", color: labelColor}];
    colorGroupRow.appendChild(label);

    // Swatch row
    const swatchRow = figma.createFrame();
    swatchRow.fills = [];
    swatchRow.name = "steps";
    swatchRow.layoutMode = "HORIZONTAL";
    swatchRow.counterAxisSizingMode = "AUTO";
    swatchRow.primaryAxisSizingMode = "AUTO";
    swatchRow.itemSpacing = swatchSpacing;

    for (const step of steps) {
      const oklch = group[step];
      const colorObj = new Color(oklch);
      const hex = colorObj.to("srgb").toString({ format: "hex", collapse: false });
      const rgb = hexToRgb(hex);

      const variableName = `tw-${color}/${step}`;
      const variable = figma.variables.createVariable(variableName, collection, "COLOR");
      variable.setValueForMode(collection.modes[0].modeId, rgb);

      const rect = figma.createRectangle();
      rect.name = variableName;
      rect.cornerRadius = 12;
      rect.resize(swatchSize, swatchSize);
      rect.fills = [
        figma.variables.setBoundVariableForPaint(rect.fills[0], "color", variable)
      ];

      swatchRow.appendChild(rect);
    }

    colorGroupRow.appendChild(swatchRow);
    container.appendChild(colorGroupRow);
  }

  figma.currentPage.selection = [container];
  figma.closePlugin("✅ twc variables added.");
};

main();