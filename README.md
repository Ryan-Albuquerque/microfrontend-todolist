# Todo Micro Frontend

This project is a Todo List component developed as a Micro Frontend using React and TypeScript. It is designed to be integrated into various host applications using Webpack's Module Federation.

## Features

- Add tasks
- Mark tasks as complete/incomplete
- Task persistence using localStorage
- Task filters: All, Active, Completed

## Requirements

- Node.js
- npm
- React
- TypeScript
- Webpack

## Installation

Clone the repository and install the dependencies:

```sh
git clone <repository_url>

cd todo-mfe
npm install

cd ../host
npm install
```

## Usage

To run the Todo Micro Frontend and Host, use the following command:

```sh
cd todo-mfe
npm start

cd ../host
npm start
```

## Integration into Host App

To integrate the Todo Micro Frontend into a host application, follow these steps:

1. Ensure you have a host application set up with Webpack.
2. Add the Todo Micro Frontend as a remote module in your host application's Webpack configuration.
3. Import and mount the Todo Micro Frontend component in your host application.

Example of integrating Todo Micro Frontend into a host application:

```javascript
// webpack.config.js in the host application

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  // other webpack configurations...

  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        todoMFE: 'todoMFE@http://localhost:3000/remoteEntry.js',
      },
    }),
  ],
};
```

```javascript
// In the host application's entry file

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'todoMFE/TodoApp'; // Import the Todo Micro Frontend component

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Repository

Find the repository on GitHub: [Todo Micro Frontend](<repository_url>)