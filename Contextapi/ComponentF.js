import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      
      <UserConsumer>
        {
            (username) =>{
                return <h2>Its time for {username}</h2>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF
