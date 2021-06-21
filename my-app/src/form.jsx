import React from 'react';
import './App.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'',
      method:'Get',
    }
 } 
    
    handleInput = e => {
        let url = e.target.value;
        this.setState({ url });
        console.log(url);
      }
      handleClick = async e => {
        e.preventDefault();
        let raw = await fetch(this.state.url);
        console.log('++++++raw++++++',raw.headers);
        let data = await raw.json();
        console.log('******data*******',data);
        let headers ={};
        raw.headers.forEach((val,idx)=>{
          headers[idx]=val;
      
        return headers;
        })
        this.props.handler(headers,data);
      }
      handleMethod = e =>{
        
          let method = e.target.name;
          this.setState({method});
      }

    render() {
        return (
          <div className = "mainArea">
            <form onSubmit={this.handleClick}>
              <label htmlFor="">URL : </label>
            <input value={this.state.url} onChange={this.handleInput} />
            <button type="submit" >GO!</button> <br> 
            </br>
            <br> 
            </br>
            
            <button value={this.state.method} onClick={this.handleMethod} name='Get' >Get</button>
            <button value={this.state.method} onClick={this.handleMethod} name='Post' >Post</button>
            <button value={this.state.method} onClick={this.handleMethod} name='Put' >Put</button>
            <button value={this.state.method} onClick={this.handleMethod} name='Delete' >Delete</button>
            <br> 
            </br>
            </form>
            <br> 
            </br>
            <div className = "textArea">
                <p>{this.state.method} </p> 
                <p>{this.state.url}</p>

            </div>
            
          </div>

        );
      }

    }
  
  
export default Form;