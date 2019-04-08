import React from 'react';

const Column = (props) =>{

    const columns = props.data.data.map((element)=>{

        let price = element.quote.USD.price.toFixed(4);



        return (
            <div className="column">
                <div className="ui card">
                    <div className="content">
                        {element.name}
                    <div className="content">
                        {price}
                    
                    </div>
                    </div>
                </div>
            </div>
        );
    }); 
    return columns;

}
export default Column;
