## Task Manager Application

The Task Manager application is a **Vue.js** and **Vuex-based application** that helps you track and manage your tasks. To run the application locally, follow the steps below:

### Prerequisites

Before running the application, make sure you have the following software installed on your machine:

- Node.js (version 12 or above)
- npm (Node Package Manager)

### Installation

To install the required dependencies, navigate to the root directory of the Task Manager application in your terminal or command prompt, and run the following command:

`npm install`

This command will read the package.json file and install all the necessary packages and dependencies required by the application.

### Running the Application

To run the Task Manager application, follow these steps:

**Start the development server:**

`npm run serve`

This command will start the server and provide you with a local URL (e.g., `http://localhost:8080`) where you can access the application in your web browser.

### Using the Task Tracker Application

Once the application is running, you can use the Task Tracker to manage your tasks. Here's a brief overview of the application's functionality:

- **Adding a Task**: Use the "Add Task" input field to enter a task and press Enter or click the "Save Task" button to add it to the list.
- **Editing a Task:** Click the pen icon next to a task to enter edit mode. Modify the task text and press Enter or click the "correct" icon to save the changes
- **Deleting a Task**: Click the cross icon next to a task to delete it from the list.
- **Viewing Tasks**: The main section of the application displays all the tasks you've added. Tasks are shown in a list format, and completed tasks are highlighted with a green border.

### Additional Notes

- The Task Tracker application uses the Vue.js framework and Vuex for state management.
- The application loads tasks from local storage when it is created and saves tasks to local storage whenever there is a change.
- The application is styled using CSS and the Poppins font from Google Fonts.
- For task identification, the application uses UUID (Universally Unique Identifier) to generate random numbers, ensuring unique identifiers for each task. This helps in accurately tracking and managing tasks in the application.
- External packages like `vuex` and `vue` are used in the application. Make sure to install these packages and ensure that they compile correctly. If you encounter compilation errors, follow the steps mentioned in the "Compilation" section below.

`npm install vuex`
`npm install vue`
