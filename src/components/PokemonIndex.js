import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import LoadingPage from  './LoadingPage'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    data: null
  }

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          data: pokemons
        })
      })
  }

  startQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      data: pokemon
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.startQuery} showNoResults={false} />
        <br />
        {this.state.data ? <PokemonCollection data={this.state.data} query={this.state.query}/> : <LoadingPage/>}
        <br />
        <PokemonForm data={this.state.data} addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
