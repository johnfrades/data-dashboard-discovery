# Data Discovery Dashboard

This is a data discovery dashboard application built with Next.js, React, TypeScript, Tailwind CSS, and Shadcn UI.

## Getting Started

To run the project locally, follow these steps:

1. Make sure you have Node.js version 20 or above installed on your machine. You can check your Node.js version by running the following command:

   ```
   node -v
   ```

   If you don't have Node.js installed or have an older version, you can download and install the latest version from the official Node.js website: [https://nodejs.org](https://nodejs.org)

2. Clone the repository:

   ```
   git clone https://github.com/your-username/data-discovery-dashboard.git
   ```

3. Navigate to the project directory:

   ```
   cd data-discovery-dashboard
   ```

4. Install the dependencies:

   ```
   npm install
   ```

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to see the application.

## Functionality

The data discovery dashboard provides the following functionality:

- **Company List**: The main page displays a list of companies fetched from the backend API. Each company is represented by a card component (`company-list.tsx`) that shows relevant information about the company. The list is implemented using `react-window-infinite-loader` for efficient rendering of a large number of items.

- **Infinite Scrolling**: By default, the dashboard displays 20 companies per page. This limit can be adjusted by adding a `limit` query parameter to the URL. For example, to display 50 companies per load, use: `http://localhost:3000/?limit=50`.

- **Company Selection**: Users can select one or more companies from the list by clicking on the checkbox in each company card. The selected companies are highlighted and their state is managed using the `company` store.

- **Company Deletion**: Users can delete the selected companies by clicking on the "Delete Selected" button in the footer. This action removes the selected companies from the list and updates the state accordingly.

- **API Integration**: The application interacts with a backend API to fetch and manipulate company data. The API routes are defined in the `app/api/companies` directory, and they handle requests for fetching and updating company information.

- **State Management**: The application uses Zustand (`company.ts`) for managing the state of company data. The store provides actions to fetch companies from the API, update the selection state of companies, and remove selected companies from the list.

- **Testing**: The project includes unit tests using Jest and React Testing Library. The tests are located in the `__tests__` directory and cover various components and functionality. To run the tests, use the command `npm test`.

## Code Structure

The project follows a modular and component-based structure. Here's an overview of the main directories and files:

- `app/`: Contains the Next.js application files.
  - `components/`: Contains reusable React components.
  - `api/`: Contains API route handlers.
- `store/`: Contains Zustand store definitions for managing application state.
- `mock/`: Contains mock data for testing and development purposes.
- `__tests__/`: Contains unit tests for components and functionality.
- `styles/`: Contains global styles and Tailwind CSS configuration.
- `public/`: Contains static assets such as images and fonts.

## Error Simulation

To simulate an error scenario and test the error handling functionality of the application, follow these steps:

1. Start the development server if it's not already running:

   ```
   npm run dev
   ```

2. Open your browser and navigate to the application's main page (usually `http://localhost:3000`).

3. To simulate an error, add the `?error=true` query parameter to the URL. For example:

   ```
   http://localhost:3000/?error=true
   ```

4. Refresh the page or navigate to this URL.

5. Observe how the application handles the simulated error scenario:

   - It should display an error message component (`error-message.tsx`) indicating that an error occurred while fetching the companies.
   - Verify that the error is logged in the console for debugging purposes.

6. To resolve the simulated error and return to normal functionality, simply remove the `?error=true` query parameter from the URL and refresh the page.

## Dark Mode

The application includes a dark mode feature for enhanced user experience:

1. **Toggling Dark Mode**:

   - Look for the sun/moon icon in the header of the application.
   - Click on this icon to switch between light and dark modes.

2. **Persistence**:

   - Your dark mode preference is saved locally, so it will be remembered across sessions.

3. **System Preference**:

   - By default, the application respects your system's color scheme preference.
   - If your system is set to dark mode, the application will initially load in dark mode, and vice versa.

4. **Accessibility**:

   - The dark mode is designed with accessibility in mind, ensuring proper contrast ratios for text and interactive elements.

5. **Implementation**:
   - Dark mode is implemented using Tailwind CSS and a custom `ThemeProvider` component (`components/theme-provider.tsx`).
   - The `DarkModeToggle` component (`components/dark-mode-toggle.tsx`) handles the user interaction for switching themes.

To experience the dark mode:

1. Navigate to the application in your browser (usually `http://localhost:3000`).
2. Click on the sun/moon icon in the header to toggle between light and dark modes.
3. Observe how the application's color scheme changes to suit your preference.
