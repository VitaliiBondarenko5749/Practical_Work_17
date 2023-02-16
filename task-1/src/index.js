import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(){
    return <div>текст</div>;
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

