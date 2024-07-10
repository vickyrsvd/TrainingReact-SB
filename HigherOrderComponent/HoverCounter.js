import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class HoverCounter extends Component {
    render() {
        const{count,incrementCount} = this.props
        return (
          <div>
            <h1 onMouseOver={this.props.incrementCount}>
                Hovered{this.props.count} Times
            </h1>
          </div>
        )
      }
}

export default WithCounter (HoverCounter)
