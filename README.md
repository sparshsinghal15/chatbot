# Getting Started with Chatbot Flow Builder

This project is hosted on [Chatbot Flow Builder](https://chatbot-mu-beige.vercel.app/). Check it out!

## Project Description

The application has following features:

1. **Text Node**
   1. Our flow builder currently supports only one type of message (i.e Text Message).
   2. There can be multiple Text Nodes in one flow.
   3. Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.
2. **Nodes Panel**
   1. This panel houses all kind of Nodes that our Flow Builder supports.
   2. Right now there is only Message Node, but we’d be adding more types of Nodes in the future so make this section extensible
3. **Edge**
   1. Connects two Nodes together
4. **Source Handle**
   1. Source of a connecting edge
   2. Can only have **one edge** originating from a source handle
5. **Target Handle**
   1. Target of a connecting edge
   2. Can have **more than one edge** connecting to a target handle
6. **Settings Panel**
   1. Settings Panel will replace the Nodes Panel when a Node is selected
   2. It has a text field to edit text of the selected Text Node
7. **Save Button**
   1. Button to save the flow
   2. **Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles**

## Libraries

The application uses following libraries:

1. Reactflow: To create a node based environment
2. Antd: UI Library to build interactive user interfaces
3. react-transition-group: to enable the transistion of components in and out of DOM in a declarative and efficient way to minimize need for boilerplate code

## Deployment

The application is deployed using [Vercel](vercel.com)

## React Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
