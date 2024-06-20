# SPA Server with History API Fallback

This project sets up a simple Express server designed to serve a Single Page Application (SPA). It includes the use of `connect-history-api-fallback` middleware to handle routing for SPAs, ensuring that navigation to different parts of the application does not result in 404 errors when the user refreshes the page or enters a URL directly in the browser.

## Features

- **Static File Serving**: Serves static files from the root directory of the project.
- **SPA Routing**: Utilizes `connect-history-api-fallback` middleware to support SPA routing, allowing for clean URLs and direct navigation to specific routes without server-side routing.
- **Custom Rewrites**: Implements custom rewrite rules for specific paths, directing them to appropriate HTML files within the project structure.

## Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your system to run the server. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/wwwacedo/SPA-Express.git
cd SPA-Express
```

2. Install the necessary dependencies:
```bash
npm i
```

3. Start the server:
```bash
cd server
npm run start
```

## Configuration
- The server is configured to serve files from the root directory of the project. It includes specific rewrite rules for handling SPA routing:

- The root path (/) is rewritten to `/routes/inicio.html`.
Paths starting with `/sobre` are rewritten to `/routes/sobre.html`.
You can modify these rewrites or add new ones in the `server.js` file to suit your application's routing requirements.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License
This project is open source and available under the MIT License.

