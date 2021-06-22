import React from 'react';
import JSONPretty  from 'react-json-pretty';
// import './App.scss';
const JSONPrettyMon = require('react-json-pretty/dist/acai');
class Result extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                 <div className = "textApi">
                     {console.log('I am THere !!!!')}
                     {/* <h1> Tasnim</h1> */}

                <JSONPretty id="json-pretty" data='Headers :'></JSONPretty>

                <JSONPretty id="json-pretty" data={this.props.headers} theme={JSONPrettyMon}></JSONPretty>
                <br></br>
              
                <JSONPretty id="json-pretty" data='Response :'></JSONPretty>

                <JSONPretty id="json-pretty" data={this.props.result} theme={JSONPrettyMon}></JSONPretty>


            </div> 
            </React.Fragment>
        )
    }
}

export default Result;