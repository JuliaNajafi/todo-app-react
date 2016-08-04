import React, {Component} from 'react'
import AddItem from './AddItem.js'

class App extends Component {
  render(){
    return(
      <div>
        <h1><a href='/'> Task Manager App </a></h1>
        <ul>
          {this.props.items.map( (item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        <AddItem  />
      </div>
    )
  }
}





export default App
