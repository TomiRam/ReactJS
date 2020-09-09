//Setting default props
Hello.defaultProps = {
  color: 'blue'
}

//Setting default state
class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }
  }
}

class Hello extends Component {
  state = { visible: true }
}