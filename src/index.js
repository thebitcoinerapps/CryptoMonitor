import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Grid from './components/grid';
import Spinner from './components/spinner';
import './style.css';

const button = document.querySelector(".btn");

class App extends React.Component{

    state = {
        data:[],
        metadata:[]
    };


    render(){

        if(this.state.data.length < 1){
            return <Spinner />;
        }
        if(this.state.metadata.length !== null){
        return(
            <div>

                <Grid data={this.state.data} metadata={this.state.metadata}/>
            
            </div>
        );}
    }
    componentDidMount(){
    let paramsToload = '';
    axios.get('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
        params:{},
        headers:{'X-CMC_PRO_API_KEY': '153b7674-87f4-4648-87a3-1c282cad2931'}
    }).then((res)=>{
        this.setState({data: res.data.data});

        const idArray = this.state.data.map((element)=>{
            return element.id;
        });
        paramsToload = idArray.join();
    }).then((ok)=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',{
            params:{id: paramsToload},
            headers:{'X-CMC_PRO_API_KEY': '153b7674-87f4-4648-87a3-1c282cad2931'}
        }).then((res)=>{
            this.setState({metadata: res.data});
        })}
    );
    button.addEventListener('click',()=>{
        this.componentDidMount();
    });
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);