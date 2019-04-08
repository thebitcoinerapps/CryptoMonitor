import React from 'react';
import Column from './column';

class Grid extends React.Component {
    
    render(){
        return (
            <div className="container">
                <div className="five column doubling ui grid">
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                </div>
            </div>
        );
    };
    
     
}

export default Grid;
