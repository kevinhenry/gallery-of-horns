# Number and name of feature

## Lab 4

## Feature 1: Filter by Numbers of Horns

Estimate of time needed to complete: _2 hours____

Start time: _9:55 pm____

Finish time: _____

Actual time needed to complete: _____

Why are we implementing this feature?
As a user, I want to be able to view the beasts by the number of horns
What are we going to implement?
Given that a user is presented with filtering options
When the user clicks on one option
Then the images should be filtered accordingly

How are we implementing it?
Using the `Form` component of `react-bootstrap`, build a drop down menu so that the user can choose to filter by number of horns.
When the user chooses one of the options, the correct images should be displayed.

## Lab 3

## Feature 1: Display a Modal

Estimate of time needed to complete: _4 hours____

Start time: _1 pm____

Finish time: __3/31/ at 9:30 pm___

Actual time needed to complete: __too much. Syntex error kicked my butt for more than a day___

Why are we implementing this feature?
As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

What are we going to implement?
Given that a user wants to view the details of the image

When the user clicks on an individual image
Then the image should render larger on the screen with the description displayed

## Lab 2

## Feature 1: Display images

Estimate of time needed to complete: _3 hours____

Start time: _8 pm____

Finish time: _12 am____

Actual time needed to complete: _4 hours____

Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.

What are we going to implement?
Given that a user opens the application in the browser

When the user navigates to the home page
Then the photo gallery should display all of the images in the gallery

How are we implementing it?
The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

## Feature 2: Allow users to vote for their favorite beast

Estimate of time needed to complete: _2 hours__

Start time: _8 pm____

Finish time: _12 pm____

Actual time needed to complete: _3 hours____

Why are we implementing this feature?
As a user, I want to be able to interact with the site and pick my favorite beast.
What are we going to implement?
Given that a user clicks on an image, the number of “favorites” displayed on that image will increase by one.

How are we implementing it?
Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

Put a heart in each horned beast with the number of times it was “favorited” next to it.

## Feature 3: Bootstrap

Estimate of time needed to complete: _2 hours____

Start time: _8 pm____

Finish time: _12 pm____

Actual time needed to complete: _3 pm____

Why are we implementing this feature?
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
What are we going to implement?
Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way
The images should be displayed in columns, as screen width allows

How are we implementing it?
Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
Stretch Goal: Add Interaction
Why are we implementing this feature?
As a user, I want to be able to interact with each item on the page.
What are we going to implement?
Given that a user clicks on an item other than the horned beasts, such as the title of the page or the footer, the information and styles should change.

How are we implementing it?
When the user clicks on elements such as the header, footer or title of page, make something change using state.
You can update the words, change the styles or add something new. Be creative.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
