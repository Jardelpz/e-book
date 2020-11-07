import React, { Component } from 'react'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';
import { withRouter } from 'react-router-dom'

class App extends Component {
	render() {
	  const menuitems = [
		{
		   label:'Home',
		   icon:'pi pi-fw pi-home',
		   command:() => this.props.history.push('/')
		},
		{
			label:'Login',
			icon:'pi pi-fw pi-login',
			command:() => this.props.history.push('/login')
		 },
		 {
			label:'Comentários',
			icon:'pi pi-fw pi-comment',
			command:() => this.props.history.push('/comentarios')
		 },
		{
		   label:'Sobre',
		   icon:'pi pi-fw pi-user',
		   command:() => this.props.history.push('/sobre')
		}
		
	 ];
	  return (
		<div className="App">
			<Menubar model={menuitems}/>
			<Header/>
			<div id="main">
			<main>
				<div className="content" id="content">
					{this.props.children}
				</div>
			</main>
			</div>
			<Footer />
			
		</div>
	  );
	}
  }
  
  export default withRouter(App);
  