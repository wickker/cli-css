let rgbToHex = require("./rgbtohex");

function hexToRgb(hex) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

if (process.argv.length === 3) {
  let output = hexToRgb(process.argv[2]);
  console.log("rgb( " + output.r + ", " + output.g + ", " + output.b + ")");
}
else {
  console.log(process.argv);
  let args = process.argv;
  console.log(rgbToHex.rgbToHex(parseInt(args[2]), parseInt(args[3]), parseInt(args[4])));
}



