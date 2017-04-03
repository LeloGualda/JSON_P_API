import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import AtributosPokemon from './AtributosPokemon';
import fetch from 'isomorphic-fetch';
import $ from 'jquery';


class RenderPokemon extends Component
{
  ClicouNaImg(e)
  {
    
    const SetPok = this.props.funcAmostrPoker(e.target.alt); 
  } 
  render(){
     //pokemon atual recebi na posição do vetor.Map e index sua posção real 
    const {pokemonAtual,id} = this.props;
      // seprar o id da sua url 
    const idpokemon = pokemonAtual.url.substring(33,37);
      const res = idpokemon.replace('/','');
    const sprite = '/sprites/' + res +'.png';
    const lab_poker = 'poker' + res;
   
      
  
    return (
    <div className="pokemon--species">
        <div className="pokemon--species--container">
            <div className="pokemon--species--sprite">
                <img src={sprite} alt={res} onClick={this.ClicouNaImg.bind(this)} />
                
             </div>
            <div className="pokemon--species--name"> 
             <label id={lab_poker} >{pokemonAtual.name}</label> 
            </div>
        </div>
    </div>
        );
    }
}

class FetchPokemon extends Component{
// define status de o pokemon já carregou
  constructor(props){
    super(props);
    this.state = {
      species : [],
      carregado : false,
      loading : false,
      pokemonAmostra:1
    };
  }
// ao clikcar na img mostra atributos
  PokemonAmostra(idP)
  {
     // console.log(idP);
    const SetPok = this.props.SetPokemon(idP);
 //  this.setState({pokemonAmostra:idP}); 
  }
  // chama função inicial
  componentWillMount()
  {
    this.MinhaF(0);   
    }

// recebe a pagina e multiplica por 12 que o número de pokemons que é mostrado
  MinhaF(pag)
  {
      this.setState({species : [],carregado : false,loading : true});

    var url = 'http://pokeapi.co/api/v2/pokemon?limit=12&offset=' + (pag * 12) ; 
    // comando fetch para buscar o json 
    fetch(url).then(res=>res.json())
    .then(response=>{
      this.setState({
        species : response.results,
        loading : true,
        carregado : true
      });
    });

  }
  MeuTrocarIdS(e)
  {// prixima pagina
      const condSum  = this.props.SomaId();
    if (condSum)
        {
         this.MinhaF(this.props.m_id);
        }
    

  }

    MeuTrocarIdD(e)
  {
      //pagina antetiror
    const condSub =  this.props.SubId();
        if (condSub)
        {
          this.MinhaF(this.props.m_id);
        }
  }
  render(){
    
        // verifica se conteudo já carregou
    const    {carregado, loading, species} = this.state;
  
    let content ;
    if(carregado)
    {
        // executa um loop dentro do vetor enviando cada pokemon para a função RenderPOkemon apara ser atribuido no conteudo da pagina
         content = 
         <div className="pokemon--species--list">
            {
                species.map( (pokemonAtual,index)=><RenderPokemon  id={index+1} key={pokemonAtual.name} funcAmostrPoker={this.PokemonAmostra.bind(this)} pokemonAtual={pokemonAtual}/>)
            }
        </div>;

    }
      else if(loading && !carregado)
    { 
        content = <p> Carregando...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
      
      {content}

      <input onClick={this.MeuTrocarIdD.bind(this)} type="button" value='<' />
      Página {this.props.m_id}

       <input onClick={this.MeuTrocarIdS.bind(this)} type="button" value='>' />
        
    </div>;
  }
  }




export default FetchPokemon;  
