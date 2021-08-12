import React, { useEffect }  from "react"
import axios from 'axios';
// import { existsTypeAnnotation } from "@babel/types";





// export default class Students extends Component{
//     // MORE CODE GOES HERE
//     componentDidMount() {
//         existsTypeAnnotation.get('http://localhost:3030/student', {
//             responseType: 'json'
//         }).then(result => console.log(result.data)).catch(err => console.log('error'));
//     }
//     render(){
//         return(
//             <div>
//             Hello
//             </div>
//         )
//     }
// }

class MyForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
        </form>
      );
    }
  }
  ReactDOM.render(<MyForm />, document.getElementById('root'));

// const Students = (props) => {
//     const Student = require('./Page');
    
//     // let data = [];
//     useEffect(() =>{
//         // console.log('useEffect ran');
//         axios.get('http://localhost:3030/student', {
//             responseType: 'json'
//         }).then(result => console.log(result)).catch(err => console.log('Error fetching data: ', err));
//     }, []);

//     return (
//         <div>
//             {/* You are in Students! */}
//             <page Student></page>
//         </div>
//     )
// }

// export default Students
export default MyForm