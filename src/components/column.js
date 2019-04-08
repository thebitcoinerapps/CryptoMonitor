import React from 'react';

const Column = (props) =>{

    const columns = props.data.data.map((element)=>{
        return (
            <div className="column">
                <div className="ui card">
                    <div className="content">
                        {element.name}
                    </div>
                </div>
            </div>
        );
    }); 
    return columns;

}
export default Column;
