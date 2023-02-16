import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(){
    const text = 'текст';

    return <div>{text}</div>;
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
