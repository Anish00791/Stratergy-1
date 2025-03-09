# Strategy AI Platform

An AI-powered platform that helps startup founders navigate market strategy, customer discovery, and product development.

## 🚀 Features

- **Market Analysis**: Tools for analyzing market growth, competition, and opportunities
- **Customer Discovery**: Features for user interviews and persona development
- **Competitive Intelligence**: Analysis of competitors' market share and pricing
- **Product Evolution**: Feedback analysis, feature prioritization, and roadmap planning
- **Market Expansion**: Geographic analysis and cultural fit assessment for new markets
- **AI-Powered Recommendations**: Predictive analytics and automated competitive analysis
- **Dark/Light Mode**: Customizable theme for better user experience

## 📋 Prerequisites

- Node.js (v16 or later)
- npm or yarn

## ⚙️ Configuration

Create a `.env` file in the root directory with the following API keys:

```env
# Market Intelligence
YAHOO_FINANCE_API_KEY=your_api_key
YAHOO_FINANCE_API_HOST=yh-finance.p.rapidapi.com

# Economic Data
WORLD_BANK_API_KEY=your_api_key

# Industry Data
STATISTA_API_KEY=your_api_key
STATISTA_ACCESS_TOKEN=your_access_token

# Geographic Data
OPENSTREETMAP_API_KEY=your_api_key

# Optional: Set environment
NODE_ENV=development
PORT=3001
```

## 🚀 Getting Started

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

4. Start the backend server:
```bash
npm run server
```

5. Visit http://localhost:5173 in your browser

## 📜 Available Scripts

- `npm run dev`: Start the frontend development server
- `npm run server`: Start the backend server
- `npm run build`: Build the production application
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the production build locally

## 🧩 Project Structure

```
strategy-ai-platform/
├── src/
│   ├── api/          # API client and endpoints
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── server/       # Backend server code
│   ├── stores/       # State management
│   ├── types/        # TypeScript type definitions
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
├── public/           # Static assets
└── ...config files
```

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Tremor](https://www.tremor.so/) - UI components
- [Express](https://expressjs.com/) - Backend server

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is licensed under the MIT License.
