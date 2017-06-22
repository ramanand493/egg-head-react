import React from 'react'

class App extends React.Component {
constructor(){
  super();
    this.state ={
                a:'update me a',
                b:'update me b'
              }

}
update(){
  this.setState({
      a:this.refs.a.value,
      b:this.refs.b.value
    })
}

  render(){
    return (
      <div>
          <input type="text"
            ref="node => this.a = node "
            onChange={ this.update.bind(this)}
          />
        <h1> {this.state.a }</h1>
        <hr/>
            <input type="text"
              ref="b"
              onChange={ this.update.bind(this)}
            />
          <h1>{this.state.b }</h1>
      </div>
    )
  }
}

export default App
