import React from 'react';
class Help extends React.Component{
 render() {
     return(
        <React.Fragment>
        <div>
        <h1>How to use RESTy</h1>
        <h3> In nav bar you can navigate between the components : Home , history and help</h3>
            <h2> In Home Page</h2>
        <ul>
<li> <strong>Fill URL in the input field</strong> </li>
<li><strong>Choose the method by clicking on the methods' button</strong> </li>
<li><strong>Fill the object in the body field of the request if needed</strong></li>
<li><strong> hit (GO!) button to see the response.</strong></li>
       
       </ul>
     
        </div>
        </React.Fragment> 
   )     
 }
}
export default Help