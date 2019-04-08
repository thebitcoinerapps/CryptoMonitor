import React from 'react';

class Spinner extends React.Component{

    render(){
        return(
            
                <div className="ui active dimmer">
                <div className="ui text loader">Fetching data from Coinmarketcap API</div>
                </div>
            
            
       
        );
    };
}
export default Spinner;