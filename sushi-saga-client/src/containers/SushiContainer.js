import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  // var film = this.props.data.filter((item, idx) => idx < 5).map(item => {
  //   return <FilmItem key={item.id} film={item} />
  // });

  let currentInd = props.ind
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.filter((sushi, index) => index < (currentInd + 4) && index >= (currentInd)).map(sushi => {
            return < Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />
          })
        }
        <MoreButton incrementInd={props.incrementInd} />
      </div>
    </Fragment>
  )
}

export default SushiContainer