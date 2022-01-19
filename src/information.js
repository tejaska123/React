//where we can use <div></div> around the elements or we can use user defined tags around the tags
//like this
import React from "react";
const Wrapper  = props =>{
    return props.children

};
export default Wrapper;
 
//We can use this in render() in class or in returning any JSX Statements and wrap it around it actaully does not return anything but we can it includes children and do many more
//And one more thing we can use just empty tags around that to solve the problem
{/* <>


</> */}
//like above empty tags just solve the problems







// //we can use 
// <React.Fragment>
// </React.Fragment>
// //and inside of this we can use any JSX element 
