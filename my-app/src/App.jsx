// import logo from './logo.svg';
import React from 'react';
import Form from './components/form/form';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Result from './components/results/result';
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
      {/* <History/> */}
      {/* <If/> */}
      <Footer />
     </div> 
    </React.Fragment>
    
  );
  }

}

export default App;
