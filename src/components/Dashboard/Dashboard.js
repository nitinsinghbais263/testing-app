import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props)
  {
    super(props)
  }

  clickHandle=()=>{
    let _that = this;
    _that.props.history.push('department',{testing: 'testing'})
  }

  render() {
    return (
      <div>
        <span onClick={()=>this.clickHandle()}>DashBoard</span>
      </div>
    )
  }
}
