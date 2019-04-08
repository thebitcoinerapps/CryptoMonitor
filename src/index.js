import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Grid from './components/grid';
import Spinner from './components/spinner';
import './style.css';

class App extends React.Component{

    state = {data:[]};


    render(){

        if(this.state.data.length < 1){
            return <Spinner />;
        }


        return(
            <div><Grid /></div>
        );
    }
    componentDidMount(){
    
    axios.get('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
        params:{},
        headers:{'X-CMC_PRO_API_KEY': '153b7674-87f4-4648-87a3-1c282cad2931'}
    }).then((res)=>{
        this.setState({data: res.data.data});
        console.log(this.state);
    })



    }


}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);