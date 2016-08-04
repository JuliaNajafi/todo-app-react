import React, {Component} from 'react'

class AddItem extends Component {
  render(){
    return(
      <div>
        <form>
          <input type='text' placeholder='add a to do' value='' />
        </form>
      </div>
    )
  }
}

export default AddItem
