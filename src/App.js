import React from 'react';
import Routes from './Routes';

export default  class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  componentWillMount(){
    this.checkToken();
  }

  checkToken(){
    var auth = true
    if(auth){
      this.setState({
        authenticated: true
      })
    }
  }
  render()
  {
    return(
        <Routes authenticated={this.state.authenticated}/>
    )
  } 
}
