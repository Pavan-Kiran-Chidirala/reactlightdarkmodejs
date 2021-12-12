// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {text: 'Light Mode', className: 'dark'}

  stateChange = () => {
    this.setState(prevState => {
      if (prevState.text === 'Light Mode') {
        return {text: 'Dark Mode', className: 'light'}
      }
      return {text: 'Light Mode', className: 'dark'}
    })
  }

  render() {
    const {text, className} = this.state
    return (
      <div className="container">
        <div className={`inner ${className}`}>
          <h1 className="main-heading">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.stateChange}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
