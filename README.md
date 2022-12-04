# meet-up-app

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objective 
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

# Features and Requirements
## Key Features:
- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city

## Technical Requirements:
- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service worker.
- Users may be able to install the app on desktop and add the app to their home screen on mobile.
- The app must be deployed on GitHub Pages.
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to the user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online monitoring tool.

## Available Scripts

Clone the project. In the project root directory, you can run npm install and then:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. A mock data has been set up to show events from different cities.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


