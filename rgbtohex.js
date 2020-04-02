const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

module.exports.rgbToHex = (r, g, b) => {
  console.log(r, g, b);
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


