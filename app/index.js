import  React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './header/header';
import Profile from './profile/profile';
import Details from './details/details';
import Table from './components/table/table';
import data from "../public/data"; // see how we can load via API
import FourOhFour from './fourOhfour/fourOhfour';

class App extends React.Component {
	constructor() {
    super();
    this.state = {
    	data:{},
      navigation:{},
      userProfile:{}
    };
  }

  componentDidMount(){
  	this.setState({
  		data:data,
      navigation:{
        logoImage:data.site.logoImage,
        firstName:data.profile.firstName
      },
      userProfile:data.profile
  	})
  	
  }
	render(){
		return (
			<div className='app'> 
				<Router>
					<Header navigation={this.state.navigation}/>
					
					<div className='app__body'>
						<Switch>
              <Route path="/profile/:profileID">
                <Profile user={this.state.userProfile}/>
              </Route>

              <Route path="/details/:ID">
                <Details data= {data.data}/>
              </Route>

              <Route exact path="/">
                <Table data={data}/>
              </Route>

              <Route path="*">
                <FourOhFour />
              </Route>
            </Switch>
					</div>
				</Router>
			</div>
		)
	}
}

ReactDom.render(
	<App/>,
	document.getElementById('app')
)
