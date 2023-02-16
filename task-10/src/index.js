import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  getText(){
    return <p>текст</p>
  }

  render(){
    return <div>{this.getText()}</div>
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
