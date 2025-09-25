# React Movie App

This is a simple movie web application built with React and Vite. It allows users to search for movies, view popular movies, and add movies to their favorites list. The app uses React Router for navigation and React Context for managing favorite movies globally.

## Features

- **Home Page**: Search for movies or browse popular movies.
- **Favorites Page**: View your list of favorite movies.
- **Add/Remove Favorites**: Click the heart icon on a movie card to add or remove it from your favorites. The icon turns red when a movie is a favorite.
- **Responsive UI**: Clean and modern interface for browsing movies.

## Project Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── MovieCard.jsx         # Displays individual movie info and favorite button
│   ├── contexts/
│   │   └── MovieContext.js       # Provides global favorites state and actions
│   ├── pages/
│   │   ├── Favorites.jsx         # Shows favorite movies
│   │   └── Home.jsx              # Main page for searching and browsing movies
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # Entry point, wraps App with BrowserRouter
│   ├── App.css                   # App-wide styles
│   ├── index.css                 # Global styles
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## How It Works

1. **Home Page**: Users can search for movies or see a list of popular movies. Each movie is displayed as a card with a heart icon.
2. **Adding to Favorites**: Clicking the heart icon adds the movie to the favorites list (stored in React Context). The heart turns red if the movie is a favorite.
3. **Favorites Page**: Shows all movies the user has marked as favorites. Users can remove movies from favorites by clicking the heart icon again.
4. **Navigation**: Use the navigation bar to switch between Home and Favorites pages.

## Getting Started

1. Install dependencies:
	```sh
	cd frontend
	npm install
	```
2. Start the development server:
	```sh
	npm run dev
	```
3. Open your browser at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Requirements
- Node.js
- npm

## Notes
- You need an internet connection to fetch movie data if using a real API.
- The app is designed for learning and demonstration purposes.

---
Feel free to customize and extend the app as you like!
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
