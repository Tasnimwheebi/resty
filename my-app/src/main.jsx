import React from 'react';
import './App.scss';
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url:'http://localhost:3000',
        method:'Get',
      }
    }
    handleInput = e => {
        let url = e.target.value;
        this.setState({ url });
        console.log(url);
      }
      handleClick = e => {
        let words = this.state.url
        this.setState({ words });
      }
      handleMethod = e =>{
        e.preventDefault();
          let method = e.target.name;
          this.setState({method});
      }

    render() {
        return (
          <div className = "mainArea">
              <label htmlFor="">URL : </label>
            <input value={this.state.url} onChange={this.handleInput} />
            <button onClick={this.handleClick} >GO!</button> <br> 
            </br>
            <br> 
            </br>
            <form action="">
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


export default Main;