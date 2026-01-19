# Lost Ark Auction Tracker

This is a web application built with Next.js to track and visualize auction house data for the game Lost Ark. It provides up-to-date pricing information for various in-game items like gems, upgrade materials, and crafting recipes.

## ✨ Features

-   **Real-time Data:** Fetches and displays current auction house prices.
-   **Data Visualization:** Interactive charts to visualize price trends over time.
-   **Categorized Items:** Browse items by categories: Gems, Upgrade Materials, and Recipes.
-   **Responsive Design:** Fully responsive layout for both desktop and mobile devices.
-   **Dark Mode:** Switch between light and dark themes.
-   **Component Library:** Uses Storybook for isolated component development and testing.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
-   **Data Fetching:** [TanStack Query](https://tanstack.com/query)
-   **State Management:** [Jotai](https://jotai.org/)
-   **Tables:** [TanStack Table](https://tanstack.com/table)
-   **Charts:** [Recharts](https://recharts.org/)
-   **Linting:** [ESLint](https://eslint.org/)
-   **Testing:** [Vitest](https://vitest.dev/)
-   **Component Development:** [Storybook](https://storybook.js.org/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v20.x or higher recommended)
-   npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/lostark-auction.git
    cd lostark-auction
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📜 Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Creates a production-ready build.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs the ESLint linter to check for code quality issues.
-   `npm run storybook`: Starts the Storybook server for component development.
-   `npm run build-storybook`: Builds Storybook for deployment.

## 📁 Project Structure

```
.
├── app/                  # Next.js App Router pages
│   ├── gem/              # Gem-related pages
│   ├── recipe/           # Recipe-related pages
│   └── upgrade/          # Upgrade material-related pages
├── components/           # Shared UI components (via Shadcn/UI)
├── features/             # Feature-specific components and logic
│   ├── data-chart/       # Reusable chart component
│   ├── data-table/       # Reusable table component
│   └── sidebar/          # Sidebar layout and components
├── lib/                  # Utility functions and API client
├── public/               # Static assets
├── store/                # Global state management (Jotai)
├── stories/              # Storybook stories
└── ...
```