import chalk from "chalk";

const LEVELS = { error: 0, warn: 1, info: 2, debug: 3 };
const TEXT_COLORS = {
  error: chalk.red.bold,
  warn: chalk.yellow.bold,
  info: chalk.blue.bold,
  debug: chalk.green.bold,
  success: chalk.greenBright.bold,
};

const formatTimestamp = (colorFn) => colorFn(`[${new Date().toISOString()}]`);
const formatLevel = (level, colorFn) => colorFn(`[${level.toUpperCase()}]`);
const formatMessage = (message, colorFn) => colorFn(message);

const log = (message, level, currentLevel, options) => {
  if (LEVELS[level] <= LEVELS[currentLevel]) {
    const colorFn = TEXT_COLORS[level] || chalk.white;
    const timestamp = options.includeTimestamp ? formatTimestamp(colorFn) : "";
    const levelText = options.includeLevel ? formatLevel(level, colorFn) : "";
    const formattedMessage = formatMessage(message, colorFn);

    console.log(`${timestamp} ${levelText} ${formattedMessage}`.trim());
  }
};

const createLogger = (
  level = "info",
  options = { includeTimestamp: false, includeLevel: false }
) => {
  return {
    error: (message) => log(message, "error", level, options),
    warn: (message) => log(message, "warn", level, options),
    info: (message) => log(message, "info", level, options),
    debug: (message) => log(message, "debug", level, options),
    success: (message) => log(message, "success", level, options),
  };
};

export default createLogger;
