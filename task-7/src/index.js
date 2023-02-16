import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(){
    return <div style={{color: "green", borderRadius: '30px', backgroundColor: "indigo"}}>текст</div>
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
