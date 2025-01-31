import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />
    })
  }

  let bill = props.sushiEatenInfo.reduce(function (a, b) {
    return a + b;
  }, 0)

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${100 - bill} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.sushiEatenInfo)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table