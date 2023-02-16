import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
    render(){
        const show = Math.random() < 0.5;

        if(show){
            return <div>текст1</div>
        }

        return <div>текст2</div>
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);