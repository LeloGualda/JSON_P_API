import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import  AtributosPokemon from './AtributosPokemon';
import ListaPokemon from './ListaPokemon';
import IdList from './IdList';
import fetch from 'isomorphic-fetch';
import $ from 'jquery';


var i = 0;



class App extends React.Component
{   
    constructor()
    {
        super();
        this.state = {meu_id:1,pokerAtual:1};
    }
//Para proxima pagina
        SomaId ()

            {   
                    
                const x = this.state.meu_id;
                const y = x+1;
                if(y > 11)
                {
                    alert('Já está na ultima pagina');
                    return false;       
                }
                else
                {
                    this.setState({meu_id:y});
                    return true;
                }

                
            };
            //Para  pagina antiga
            SubId ()
            {   const x = this.state.meu_id;
                const y = x-1;

                if(y >= 1){
                    this.setState({meu_id:y});
                    return true;
                }
                else if (y == 0)
                {
                    alert('Já esta na ultima pagina');
                }
                return false;
            };
            SetPokemon(Mid)
           {

                    this.setState({pokerAtual:Mid});
                    return true;
           }
       
        render() 
        {
            
           // this.setState({meu_id:3});
    return (

         <div className="center"> 
           <AtributosPokemon m_id={this.state.pokerAtual}/>
  <ListaPokemon SubId={this.SubId.bind(this)} SetPokemon={this.SetPokemon.bind(this)} 
  SomaId={this.SomaId.bind(this)} pokerAtual={this.state.pokerAtual}    m_id={this.state.meu_id}/>
        
           
      </div>

    );
        }    


}

    

  
export default App;

