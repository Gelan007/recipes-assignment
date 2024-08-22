# Recipe Application

## Overview

This is a test assignment related to recipes. The application offers several functionalities, including displaying all available recipes, viewing detailed information about a single recipe, filtering recipes by category, and selecting multiple recipes to aggregate their ingredients. The selected recipes are stored using `sessionStorage`, ensuring that the selection persists even after the page is reloaded.

## Features

- **Display of Recipes**: View all available recipes with basic information including a photo, name, category, and place of origin. The recipes are presented in a card format for easy browsing.
  
- **Single Recipe View**: Access detailed information about a specific recipe. This includes all the data retrieved from TheMealDB API, such as ingredients, measurements, and cooking instructions.

- **Recipe Filtering by Category**: Filter the list of recipes based on their category, allowing users to quickly find the type of recipe they are interested in.

- **Pagination**: The application implements pagination for navigating through the list of recipes. The pagination setup displays pages `1` to `7`, followed by an ellipsis (`...`) if there are more than `10` pages, with navigation arrows to change pages.

- **Debounced Search**: Users can search for recipes using a search input with a debounce mechanism to reduce unnecessary API calls and improve performance.

- **Recipe Selection and Ingredient Aggregation**: Users can select multiple recipes, and the application will aggregate and display a combined list of ingredients needed to prepare them. This feature also shows basic information about the selected recipes, such as their names and categories.

- **Persistent Selection with `sessionStorage`**: The selected recipes are stored in `sessionStorage`, ensuring that the selection remains intact even after the page is reloaded.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, used to manage the UI components of the application.
  
- **TypeScript**: A typed superset of JavaScript that adds static types, enhancing code quality and maintainability.

- **Redux Toolkit**: A toolset for efficient Redux development, used to manage the application's global state.

- **SCSS**: A preprocessor scripting language that is interpreted or compiled into CSS, used for styling the components.

- **React Paginate**: A library used to implement pagination in the application.

- **TheMealDB API**: An API that provides meal recipes, used as the data source for the application.

## Pages

1. **All Recipes Page**: Displays a list of all available recipes in a card format, including a photo, name, category, and place of origin.

2. **Single Recipe Page**: Shows detailed information for a selected recipe, including ingredients, measurements, and instructions.

3. **Ingredients Page**: Displays cards for selected recipes along with a combined list of their ingredients and the instructions for cooking.
