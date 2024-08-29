# ChatBot in Local

A local implementation of a ChatBot application using Web Workers and MLC AI. This project demonstrates a basic chat interface that interacts with a machine learning model for generating responses.

## Features

- Interactive chat interface
- Real-time responses from a machine learning model
- Option to reset chat history

## Getting Started

### Prerequisites

- Node.js
- npm/yarn/bun

### Installation
1. Clone the repository
2. Navigate to project directory
3. Install dependencies (e.g. using bun)

 ```bash
 git clone https://github.com/yourusername/chatgpt-clone-local.git
 cd chatgpt-clone-local/src
 bun install
```

### Runnning https server

Start server without listener to changes:

 ```bash
   bun run start
```

Start server that reads file changes:

 ```bash
   bun run dev
```

## Project Structure

- **`index.html`**: Main HTML file for the chat interface.
- **`style.css`**: Styles for the chat interface and scrollbar.
- **`module.js`**: Handles chat interactions and integrates with the machine learning engine.
- **`worker.js`**: Web Worker for managing the machine learning model.
- **`server.js`**: HTTPS server that holds the express application.

## Acknowledgments

- MLC AI for the machine learning model.
- Marked for markdown parsing.
- mkcert for generating https certificates
- express for creating the server
