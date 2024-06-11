import React from 'react';

const RemoteApp = React.lazy(() : any => import("todoMFE/TodoApp"));
const App : React.FC = () => {
  return <div>
    <h1>
     Host Application
    </h1>
    <React.Suspense fallback="loading">
        <RemoteApp />
    </React.Suspense>
  </div>;
};

export default App;
