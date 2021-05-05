import React, { Component } from 'react'


class Sushi extends Component {
  constructor() {
    super()
    this.state = {
      eaten: false
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={(e) => { this.setState({ eaten: true }); this.props.eatSushi(this.props.sushi.price); }}>
          {/*  onClick={(event) => { func1(event); func2();}}   */}
          {
            this.state.eaten === true ?
              null
              :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}


export default Sushi