# My Logger Package

**My Logger Package** is a powerful and flexible logging tool for Node.js that enhances your development experience with colorized output and customizable log formatting.

## 🚀 Features

- **Colorized Output:** Enjoy vibrant and easy-to-read logs with color-coded levels.
- **Customizable Logging:** Toggle timestamps and log levels to fit your needs.
- **Multiple Log Levels:** Log messages with `error`, `warn`, `info`, `debug`, and `success` levels.

## 📦 Installation

Easily install the package via npm:

```bash
npm i logger-easy

📜 Usage
Integrate the logger into your project with minimal setup:


import createLogger from "logger-easy";

//Default logger with no timestamps or log levels
const logger = createLogger('debug');

// Log messages
logger.info('This is an info message');
logger.debug('This is a debug message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.success('This is a success message');

// Logger with timestamps and log levels
const loggerWithDetails = createLogger('debug', { includeTimestamp: true, includeLevel: true });
loggerWithDetails.info('This message includes timestamp and log level');

⚙️ Configuration
Customize your logging experience:

includeTimestamp: Add timestamps to log messages (default: false).
includeLevel: Include log levels in messages (default: false).

const logger = createLogger('info', { includeTimestamp: true, includeLevel: true });

🚀 Get Started
Whether you're debugging complex applications or simply want a clear and colorful log output, My Logger Package provides the flexibility and ease-of-use to streamline your development workflow.

📄 License
MIT License. See the LICENSE file for details.

🤝 Contributing
We welcome contributions! 

🧑‍💻 Author
Abreham Tilahun 


