import React from 'react';
import Column from './column';

class Grid extends React.Component {
    
    render(){
        return (
            <div className="container">
                <div className="five column doubling ui grid">
                <Column data={this.props}/>
                </div>
            </div>
        );
    };
    componentDidMount(){
    }
     
}

export default Grid;
