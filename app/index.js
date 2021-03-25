import  React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Header from './header/header';

class App extends React.Component {
	render(){
		return (
			<div> 
			<Header user="akshay"/>
			</div>
		)
	}
}

ReactDom.render(
	<App/>,
	document.getElementById('app')
)
