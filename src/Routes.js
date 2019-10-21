import React,{Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import Dashboard from './components/Dashboard/Dashboard';
// import Forms from './components/Deparment/Form';
// import Product from './components/Product/Product';
 import MainFrame from './share/MainFrame';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Department/Form';


export default class Routes extends Component{
  render (){
    return (
      <Router>
          { this.props.authenticated?
            <MainFrame>
               <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/department" component={Form}/>
              </Switch>
            </MainFrame>
            :
              <Switch>
                  <Route exact path="/" component={Form} />
              </Switch>
             
          }
        </Router>
    );
  }
}