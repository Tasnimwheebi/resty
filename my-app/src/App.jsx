// import logo from './logo.svg';
import React from 'react';
import Form from './form';
import Header from './header';
import Footer from './footer';
import Result from './result';
import './App.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // url:'',
      // count:0,
      headers:{},
      results:[],
      // method:'Get',
    }
 } 
 handleForm = (headers , results)=>{
   console.log('I am here !!!!!');
   this.setState({headers,results});
 }
 render(){
  return (
    <React.Fragment>
      <div className="App">
      <Header className="App-header"/>
      <Form handler = {this.handleForm}/>
      <Result result={this.state.results} headers={this.state.headers} />
      <Footer />
     </div> 
    </React.Fragment>
    
  );
  }

}

export default App;
