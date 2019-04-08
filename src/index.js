import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid';
import './style.css';

class App extends React.Component{

    state = {};

    render(){
        return(
            <div><Grid /></div>
        );
    }



}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);