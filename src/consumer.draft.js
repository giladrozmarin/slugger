const log = require("@ajar/marker");
const { slug } = require("./index");

const strings = ["cleopatra", "viva la viva   ", "hello from tel aviva"];

log.magenta(strings);
log.magenta(slug(...strings));
