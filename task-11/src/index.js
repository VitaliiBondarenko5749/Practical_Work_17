import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
     getNum1(){
          return 1;
     }

     getNum2(){
          return 2;
     }

     render(){
          return (
               <div>текст {this.getNum1() + this.getNum2()}</div>
          );
     }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
);
