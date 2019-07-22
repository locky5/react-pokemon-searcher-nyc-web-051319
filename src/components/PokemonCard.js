import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    picture: true
  }

  changePicture = () => {
    this.setState({
      picture: !this.state.picture
    })
  }

  render() {
    return (
      <Card onClick={this.changePicture}>
        <div>
          <div className="image">
            {this.state.picture ? <img src={this.props.imgUrl} alt="oh no!" /> : <img src={this.props.backImgUrl} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
