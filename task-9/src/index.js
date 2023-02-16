import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(){
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const list = arr.map(function(item, index){
       return <li key={index}>{item}</li>; 
      });

      return <ul>
        {list}
      </ul>;
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);