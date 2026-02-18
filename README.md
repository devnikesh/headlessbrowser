# Headless Browser Service

A simple headless browser service that renders web pages and returns their HTML content using Puppeteer.

## Features

- Renders any web page and returns HTML
- CORS enabled for cross-origin requests
- Runs on port 3001 by default
- Easy start/stop scripts for both Mac and Windows

## Quick Start

## Requirements

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

The start scripts will automatically install dependencies if they're not already installed. However, you can install them manually:

```bash
npm install
```

## Usage

Once the service is running, you can access it at:

- **Service URL:** `http://localhost:3001`
- **API Endpoint:** `http://localhost:3001/render/:url`

### Example Usage

Render a website:

```
GET http://localhost:3001/render/https://example.com
```

## Files Description

- `headless-server.js` - Main server file

## Service Details

- **Port:** 3001 (can be changed with PORT environment variable)

## Troubleshooting

### Service won't start

1. Check if Node.js is installed: `node --version`
2. Check if port 3001 is already in use



### Dependencies issues

Run `npm install` to reinstall all dependencies

## API Reference

### GET /render/:url

Renders the specified URL and returns the HTML content.

**Parameters:**

- `url` (required): The URL to render (must be URL-encoded)

**Response:**

- `200`: HTML content of the rendered page
- `400`: Invalid URL
- `500`: Render error

**Example:**

```bash
curl "http://localhost:3001/render/https%3A%2F%2Fexample.com"
```

## Development

To run the service in development mode:

```bash
npm run headless
```

## Security Notes

- The service allows rendering any URL that starts with http/https
- CORS is enabled for all origins
- Consider adding authentication for production use
