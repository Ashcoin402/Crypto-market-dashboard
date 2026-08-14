# Crypto Market Dashboard

> An API-driven cryptocurrency dashboard for exploring market data, price trends and individual crypto assets.

Crypto Market Dashboard is a responsive front-end application built to practice working with real-world asynchronous data and external APIs.

The project integrates the CoinGecko API to provide a structured interface for exploring cryptocurrencies through market data, search, sorting, favorites, infinite loading and detailed price charts.

## Live Demo

**[View Crypto Market Dashboard →](https://crypto-market-dashboard.netlify.app)**

## Source Code

**[GitHub Repository →](https://github.com/Ashcoin402/Crypto-market-dashboard)**

## Project Goal

The main goal of this project was to build a data-driven React application around a real external API rather than static or locally defined data.

The project focuses on practical front-end challenges such as:

- Fetching asynchronous market data
- Managing loading and error states
- Searching and filtering datasets
- Sorting market information
- Loading additional data progressively
- Persisting user preferences
- Visualizing historical price information
- Building reusable UI around changing API data

## Key Features

- Cryptocurrency market overview
- CoinGecko API integration
- Cryptocurrency search
- Market data sorting
- Favorites system
- Persistent favorites with LocalStorage
- Infinite loading / progressive data loading
- Individual cryptocurrency details
- Historical price charts
- Responsive layouts
- Loading and error state handling
- Client-side navigation

## API Integration

The application uses the **CoinGecko API** as its external market data source.

API-driven data is used throughout the application to display cryptocurrency information such as:

- Asset names and symbols
- Current prices
- Market information
- Price changes
- Individual asset details
- Historical price data

The project is designed around asynchronous API communication and handling data that can change between requests.

## Tech Stack

### Core

- React
- TypeScript
- JavaScript
- HTML5
- CSS3

### Data & API

- REST API
- CoinGecko API
- Axios

### Styling

- Tailwind CSS
- Responsive Design

### Routing & Visualization

- React Router
- Recharts

### Persistence

- LocalStorage

## Technical Focus

Crypto Market Dashboard was built with an emphasis on:

- REST API integration
- Asynchronous data handling
- Type-safe React development
- Reusable component architecture
- Client-side routing
- State-driven interfaces
- Search and sorting logic
- Data visualization
- Local persistence
- Responsive UI development

## Search & Sorting

Users can explore the market more efficiently through search and sorting functionality.

The interface allows cryptocurrency data to be narrowed down and reorganized without requiring users to manually navigate through a large market dataset.

This functionality demonstrates working with:

- Controlled user input
- Derived UI state
- Array filtering
- Sorting logic
- Dynamic rendering

## Favorites

Users can mark cryptocurrencies as favorites for easier access.

Favorite selections are stored using **LocalStorage**, allowing them to persist between browser sessions without requiring a backend or user account.

This feature demonstrates client-side persistence and synchronization between application state and browser storage.

## Infinite Loading

Rather than displaying all market data at once, the application supports progressive loading of additional cryptocurrency records.

This improves the browsing experience while demonstrating practical handling of paginated or incrementally loaded API data.

## Cryptocurrency Details

Each cryptocurrency can be explored through a dedicated detail view.

The detail experience presents additional asset information together with historical price visualization, allowing users to inspect an individual cryptocurrency beyond the main market overview.

## Data Visualization

Historical price information is visualized using **Recharts**.

The chart interface transforms raw API responses into a more readable visual representation of price movement over time.

## Responsive Design

The dashboard was designed to remain usable across different screen sizes.

The responsive implementation focuses on maintaining:

- Readable market information
- Accessible controls
- Consistent spacing
- Usable navigation
- Clear chart presentation
- Mobile-friendly interaction

## Why I Built It

I built Crypto Market Dashboard to gain more practical experience with one of the most common requirements in modern front-end development: building an interface around external asynchronous data.

Instead of using static mock data, the application works with a real third-party API and required handling changing responses, navigation, loading states, filtering, persistence and data visualization within the same React application.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Ashcoin402/Crypto-market-dashboard.git
```

### Enter the project directory

```bash
cd Crypto-market-dashboard
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The terminal will display the local development URL after the server starts.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Deployment

The production version is deployed on Netlify.

**Live URL:**  
https://crypto-market-dashboard.netlify.app

## What This Project Demonstrates

Crypto Market Dashboard demonstrates practical experience with:

- React application development
- TypeScript
- REST API integration
- Asynchronous JavaScript
- Axios
- Search and sorting logic
- Client-side routing
- Persistent browser storage
- Infinite data loading
- Chart-based data visualization
- Responsive interface development
- Component-based architecture

## Author

**Ashkan Babaei**  
Front-end Developer

**Portfolio**  
[ashkan-babaei-portfolio.netlify.app](https://ashkan-babaei-portfolio.netlify.app)

**GitHub**  
[github.com/Ashcoin402](https://github.com/Ashcoin402)

**Email**  
[Ashkanbabaee75@gmail.com](mailto:Ashkanbabaee75@gmail.com)

---

Designed and developed by **Ashkan Babaei**.
