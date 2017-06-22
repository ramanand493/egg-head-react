import React from 'react'

class App extends React.Component {

  render(){
    return <Title text="The Text"/>
  }
}

const Title = (props) => <h1>Title : { props.text }</h1>

Title.propTypes = {
  text(props,propName,Component){
    if(!(propName in props)){
      return new Error('Missing ${ propName }')
    }
    if(props[propName].length<6){
      return new Error(' ${ propName } is too shorts')
    }
  }
}
export default App
