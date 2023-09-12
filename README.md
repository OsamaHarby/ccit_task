# Overview
The GitHub Popular Repositories Explorer is a React Native application that allows users to discover popular GitHub repositories. This README provides information on how to run and use the application.

# Features
- View a list of popular GitHub repositories, sorted by the number of stars.
- Choose to view the top 10, 50, or 100 repositories.
- Filter repositories by programming language.
- Discover the most popular repositories created from a specific date onwards.

# Installation
To run the GitHub Popular Repositories Explorer locally, follow these steps:

1. Clone the repository to your local machine:
   git clone https://github.com/OsamaHarby/ccit_task.git

2. Navigate to the project directory:
   cd ccit_task

3. Install the project dependencies:
   npm install

4. Running the App
   Before running the app, make sure you have set up the development environment for React Native. You can follow the official React Native documentation for instructions.
   Once your development environment is set up, you can run the app using the following command:

   npx react-native run-android
   # or
   npx react-native run-ios
   
   This will launch the app on an Android or iOS emulator, depending on your configuration.

# Usage

1. Home Screen:
   - When you open the app, you'll land on the Home screen.
   - Here, you can view a list of popular GitHub repositories.
   - Use the filter options to select the programming language and date range for repositories.
   - Choose the number of repositories to display (e.g., top 10, top 50, top 100).

# Scalability and Performance

   The app is designed to be scalable and performant. Key strategies for achieving this include:
   - Pagination for fetching a large number of repositories efficiently.
   - Optimized Redux state management.

# Contact
If you have any questions or need assistance, please feel free to contact us at osamaharby95@example.com.