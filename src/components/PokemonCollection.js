import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  createCards = () => {
    return this.props.data.map(pokemon => <PokemonCard name={pokemon.name} imgUrl={pokemon.sprites.front} backImgUrl={pokemon.sprites.back} hp={pokemon.stats.find(function(stat) {
      return stat.name === 'hp'
    }).value}/>)
  }

  filterCards = () => {
    let filteredPokemon = this.props.data.filter(pokemon => pokemon.name.includes(this.props.query))
    return filteredPokemon.map(pokemon => <PokemonCard name={pokemon.name} imgUrl={pokemon.sprites.front} backImgUrl={pokemon.sprites.back} hp={pokemon.stats.find(function(stat) {
      return stat.name === 'hp'
    }).value}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.query ? this.filterCards() : this.createCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
