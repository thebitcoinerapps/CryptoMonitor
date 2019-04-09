import React from 'react';

const Column = (props) =>{
    let foundValues = [];
    if(props.data.metadata.data !== undefined){
        const images = Object.values(props.data.metadata.data);
        foundValues = props.data.data.map((e)=>{
            return images.find((img)=>{
                return img.id === e.id;
            });
        });

        const columns = props.data.data.map((element)=>{
            let pos = element.cmc_rank - 1;
            let price = element.quote.USD.price.toFixed(4);
            return (
                <div className="column">
                    <div className="ui card">
                        <div className="content">
                            {element.name}
                        <div className="content">
                            {price}
                            <div className="image">
                            <img src={foundValues[pos].logo}></img>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            );
        });
    
        return columns;

    }



    const columns = props.data.data.map((element)=>{
        let price = element.quote.USD.price.toFixed(4);
        return (
            <div className="column">
                <div className="ui card">
                    <div className="content">
                        {element.name}
                    <div className="content">
                        {price}
                        <div className="content">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    });

    return columns;

}
export default Column;
