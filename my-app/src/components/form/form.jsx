import React from 'react';
// import '../../App.scss';
//https://swapi.dev/api/people
import superagent from 'superagent';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'',
      method:'get',
      body:{},
    }
 } 


    
    handleInput = e => {
        let url = e.target.value;
        this.setState({ url });
        console.log(url);
      }
      handleClick = async e => {
        e.preventDefault();
        // let raw = await fetch(this.state.url);
        // console.log('++++++raw++++++',raw.headers);
        // let data = await raw.json();
        // console.log('******data*******',data);
        // let headers ={};
        // raw.headers.forEach((val,idx)=>{
        //   headers[idx]=val;
      
        // return headers;
    try{   
const data = await  superagent[this.state.method](this.state.url).send(this.state.body).set('Content-Type', 'application/json');
        console.log('*********data********',data.body);
        const headers = data.headers; 
        this.props.handler(headers,data.body);
       
        const savedArr = JSON.parse(localStorage.getItem('object'));
        const { url, body,method } = this.state;
        const newObject = {url, body,method};
        if(!savedArr){
          localStorage.setItem('object',JSON.stringify([newObject]));
        }
       else if(savedArr){
         savedArr.forEach(item=>{
           if(item.url !==url && item.body !== body && item.method !== method){
           savedArr.push(localStorage.setItem(JSON.stringify([newObject])))
         } 
         })
        
       }
       } catch(error){
         console.error(error)
          
       }
      }
      handleMethod = e =>{
        
          let method = e.target.name;
          this.setState({method});
      }
      handleRequest=e=>{
        let body = e.target.value;
        this.setState({ body });
        console.log(body);
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
            
            <button  onClick={this.handleMethod} name='get' >Get</button>
            <button  onClick={this.handleMethod} name='post' >Post</button>
            <button  onClick={this.handleMethod} name='put' >Put</button>
            <button  onClick={this.handleMethod} name='delete' >Delete</button>
            <br> 
            </br>
            <textarea name="" id="" cols="30" rows="10" onChange={this.handleRequest} value={this.state.body}></textarea>
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