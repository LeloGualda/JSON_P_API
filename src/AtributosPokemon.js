import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ListaPokemon from './ListaPokemon';
import IdList from './IdList';
import fetch from 'isomorphic-fetch';
import $ from 'jquery';





var AtributosPokemon = React.createClass 
({
    // buscando um pokemon com id argumento

    TrazerPokemon:function(idPokemon)
    {
           
    // coloca id em um vetor; em caso de nulo atribui 1
 

var pokerInf = function (values)
    { 
     
        var pokemon  = {
            nome: values.name,                            // nome  do pokemon
            id: values.id,                               // id  do pokemon
            altura: values.base_experience,             // altura  do pokemon
            base_exp:values.height,                    // experiencia para evoluir 
            tipo:[],                                  // seus tipos
            qntAbilit:values.abilities.length,       // quantidade de abilidades
            img:'sprites/' + values.id + '.png'     // sua imagem
            };  //define informação inicial
           this.setState ({meu_pokemon: this.state.meu_pokemon = pokemon });
        }.bind(this);        
        
            var valorPoker      =   idPokemon || 1;
            var valorPoker = [String('pokemon/' + valorPoker)];
                         
             //executa metodo Get utilizando ajax/jquery
                $.ajax
                ({
                    url: 'http://pokeapi.co/api/v2/' + valorPoker + '/',
                    datatype: 'json', 
                    method: 'GET',
                    cache: true,
                    contentType: 'application/json; charset=utf-8',
                    success: function(values) // caso busca feita com sucesso!
                            {
                        var pokemon  = {
                                        nome: values.name,                            // nome  do pokemon
                                        id: values.id,                               // id  do pokemon
                                        altura: values.base_experience,             // altura  do pokemon
                                        base_exp:values.height,                    // experiencia para evoluir 
                                        tipo:[],                                  // seus tipos
                                        qntAbilit:values.abilities.length,       // quantidade de abilidades
                                        img:'sprites/' + values.id + '.png'     // sua imagem
                                    };

                                   // values.types.map( (val,i) => i++);
                            for(var i=0; i<(values.types.length -1);i++)pokemon.tipo[i]=values.types[i].type.name  + ", ";
                                pokemon.tipo[i]=values.types[i].type.name; 
                        //atualiza pokemon a a ser rederizado
                                this.setState ({meu_pokemon: this.state.meu_pokemon = pokemon });
                                 this.setState ({idAnterior:this.state.idAnterior = this.props.m_id  });
                    }.bind(this)
                });
                    
    },

getInitialState: function() 
     {
        return {
            meu_pokemon:{},
                idAnterior:0
        };

     },

componentDidMount: function() // função inicio
    {
        
     //    this.setState ({idAnterior: this.state.idAnterior = 0  });
         //   const idAtual = this.props.m_id; 
          //  const idMudou = idAtual;
                var  x = this.props.m_id;
                        this.TrazerPokemon(x); 
                 
        
    },
        render: function() 
        { 
              
                  
    return (
        
          
//Mostra os atributos do pokemom            
        <div className="pokemon--species--container--Card">
            
                <img src={this.state.meu_pokemon.img} />                
                   
                    <ul id="LisP1">  
                    <li>        <label > Name:                          {this.state.meu_pokemon.nome}</label> </li> 
                    <li>        <label > Altura:                        {this.state.meu_pokemon.altura}</label> </li>
                    <li>        <label > Quantidade de Habildiades :    {this.state.meu_pokemon.qntAbilit}</label> </li>
                    <li>        <label > Base de experiencia:            {this.state.meu_pokemon.base_exp}</label> </li>
                    <li>        <label > Elementos:                      {this.state.meu_pokemon.tipo}</label> </li>
                    </ul>
                    
          </div>
  

    );
        }    
});

  
export default AtributosPokemon;

