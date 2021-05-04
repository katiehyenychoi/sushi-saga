import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      ind: 0,
      sushiEatenInfo: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiArr => this.setState({
        sushis: sushiArr.map(sushi => { return { ...sushi, eaten: false } }) //need to give a new key here! 'eaten'
      }))
  }


  incrementInd = () => {
    this.setState({
      ind: this.state.ind + 4
    })
  }

  // removeSushi = () => {
  //   // console.log("remove clicked")
  //   this.setState({
  //     sushiEaten: !this.state.sushiEaten
  //   })
  // }

  // sushiName is unique
  //pass props.sushi.name as an argument for this callback method:
  eatSushi = (sushiId, sushiPrice) => {
    // debugger
    // console.log(sushiId)
    // console.log(sushiPrice)

    this.setState({
      sushis: this.state.sushis.map(sushi => {
        if (sushi.id === sushiId) return { ...sushi, eaten: true }
        else return sushi
      }),
      sushiEatenInfo: [...this.state.sushiEatenInfo, sushiPrice]
    })

  }



  render() {
    // console.log(this.state.sushiEatenInfo)
    console.log(this.state.sushis)
    return (
      <div className="app" >
        <SushiContainer sushis={this.state.sushis} ind={this.state.ind} incrementInd={this.incrementInd}
          eatSushi={this.eatSushi} />
        <Table sushiEatenInfo={this.state.sushiEatenInfo} />
      </div >
    );
  }
}

export default App;