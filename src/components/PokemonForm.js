import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {
            value: 150,
            name: 'special-attack'
          },
          {
            value: 150,
            name: 'speed'
          },
          {
            value: 150,
            name: 'defense'
          },
          {
            value: 150,
            name: 'special-defense'
          },
          {
            value: 150,
            name: 'attack'
          },
          {
            value: this.state.hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
  }

  newName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  newHp = (event) => {
    this.setState({
      hp: event.target.value
    })
  }

  newFrontImage = (event) => {
    this.setState({
      frontUrl: event.target.value
    })
  }

  newBackImage = (event) => {
    this.setState({
      backUrl: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.newName} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.newHp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.newFrontImage} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.newBackImage} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
