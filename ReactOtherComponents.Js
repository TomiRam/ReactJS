//Pure Components
import React, {PureComponent} from 'react'

class MessageBox extends PureComponent {
  ···
} 

//Component API
this.forceUpdate()
this.setState({ ... })
this.setState(state => { ... })
this.state
this.props

//Functional components
function MyComponent ({ name }) {
  return <div className='message-box'>
    Hello {name}
  </div>
}

