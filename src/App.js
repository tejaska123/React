// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const firstName = 'Tejas';
//   const lastName = 'KA';
//   const age = 21;
//   const job = 'Software Engineer';
//   const getFullName = (firstName,lastName)=>{
//     return `${firstName} ${lastName}`
//   };
//   const inputPlaceholder = 'Enter Your Details';
//   const anotherInputBox = <input placeholder={inputPlaceholder} autoComplete/>;
//   const mArr = [1,2,3,4];
//   const mObj = {
//     laptop:'HP',
//     processor:'Intel core i7'
//   }
//   return (
//     <div className="App">
//       <h3>Full Name:{`${firstName} ${lastName}`}</h3>
//       <h1>Full Name:{getFullName(firstName,lastName)}</h1>
//       <p>Age:{`${age}`} </p>
//       <p>Age:{age}</p>
//       <p>Job:{job}</p>
//       <input placeholder={inputPlaceholder}/>
//       <br></br>
//       {anotherInputBox}
//       <br></br>
//       {mArr[3]}
//       <br></br>
//       {
//         mArr[0]>0?"true":"false"
//       }
//       <br></br>
//       {mObj.laptop}
//     </div>
//   );
// }
// export default App;
//////////////////////////////////////////////////////////////////////////////////
// import logo from './logo.svg';
// import './App.css';
// import BlogCard from './BlogCard'
// function App() {
//   const blogObj = {
//     title:'Blog Title 1',
//     description:'Reactjs Reactjs Reactjs Reactjs reactjs Reactjs Reactjs Reactjs Reactjs'
//   }
//   const styles = {
//           margin:'36px',
//           padding:'24px',
//           boxSizing:'border-box',
//           borderRadius:'5px',
//           boxShadow:'0 2px 5px #ccc'
//   }
//   //Create React Elements dynamically
//   const blogArr = [
//     { 
//       id:1,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:2,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:3,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//   ]
//   const blogCards = blogArr.map((item)=>{
//         console.log(item);
//         return(
//           <div className = "BlogCard" key={item.id}>
//                <h3>{item.Company}</h3>
//                <p>{item.Department}
//                      </p>
//           </div>
//         )
//   });
//   return (
//     <div className="App">
//       <div style = {
//         {
//           margin:'36px',
//           padding:'24px',
//           boxSizing:'border-box',
//           borderRadius:'5px',
//           boxShadow:'0 2px 5px #ccc'
//         }
//       }>
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       <hr></hr>
//       <div style  = {styles}>
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       <hr></hr>
//       <div className = "BlogCard">
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       {blogCards}
//     </div>
    
//   );
// }
// export default App;

//In React it will be like this
// React.createElement("div", {
//   className: "App"
// }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, blogObj.title), /*#__PURE__*/React.createElement("p", null, blogObj.description)), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, blogObj.title), /*#__PURE__*/React.createElement("p", null, blogObj.description)), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, blogObj.title), /*#__PURE__*/React.createElement("p", null, blogObj.description)));
//When we create like this 
//<BlogCard></BlogCard>//Pascal Case compenents treated as custom components
//it doesn't pop up error because react expect it as custom component
//React.createElement(BlogCard, null);

// import logo from './logo.svg';
// import './App.css';
// //import BlogCard from './BlogCard'//we can change the module name for whatever name we want
// //Like this
// import BlogCardModule from './BlogCard'

// function App() {
//   const blogObj = {
//     title:'Blog Title 1',
//     description:'Reactjs Reactjs Reactjs Reactjs reactjs Reactjs Reactjs Reactjs Reactjs'
//   }
//   const styles = {
//           margin:'36px',
//           padding:'24px',
//           boxSizing:'border-box',
//           borderRadius:'5px',
//           boxShadow:'0 2px 5px #ccc'
//   }
//   //Create React Elements dynamically
//   const blogArr = [
//     { 
//       id:1,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:2,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:3,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//   ]
//   const blogCards = blogArr.map((item,pos)=>{
//         console.log(item);
//         return(
//           //<BlogCard key = {pos} title = "Test title" description = "test-description"/>
//           <BlogCardModule class= "Blog" key = {pos} title = {item.Company} description = {item.Department}/>
           
//         )
//   });
//   return (
//     <div className="App">
//       <div style = {
//         {
//           margin:'36px',
//           padding:'24px',
//           boxSizing:'border-box',
//           borderRadius:'5px',
//           boxShadow:'0 2px 5px #ccc'
//         }
//       }>
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       <hr></hr>
//       <div style  = {styles}>
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       <hr></hr>
//       <div className = "BlogCard">
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       {blogCards}
//     </div>
    
//   );
// }
// export default App;
///////////////////////////////////////////////////////////////////////////////////////
// import logo from './logo.svg';
// import './App.css';

// //import BlogCard from './BlogCard'//we can change the module name for whatever name we want
// //Like this
// import BlogCardModule from './BlogCard'
// import {isArrayEmpty} from './Utils'//we can also change that function name
// //like this
// //import {isArrayEmpty as checkArrayEmpty} from './Utils'//we can use checkArrayEmpty in any case to use that function
// function App() {
//   const blogObj = {
//     title:'Blog Title 1',
//     description:'Reactjs Reactjs Reactjs Reactjs reactjs Reactjs Reactjs Reactjs Reactjs'
//   }
//   const styles = {
//           margin:'36px',
//           padding:'24px',
//           boxSizing:'border-box',
//           borderRadius:'5px',
//           boxShadow:'0 2px 5px #ccc'
//   }
//   //Create React Elements dynamically
//   const blogArr =[
//     { 
//       id:1,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:2,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:3,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//   ]
//   const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item,pos)=>{
//         console.log(item);
//         return(
//           //<BlogCard key = {pos} title = "Test title" description = "test-description"/>
//           <BlogCardModule class= "Blog" key = {pos} title = {item.Company} description = {item.Department}/>
           
//         )
//   });
//   return (
//     <div className="App">
//       <div style = {
//         {
//           margin:'36px',
//           padding:'24px',
//           boxSizing:'border-box',
//           borderRadius:'5px',
//           boxShadow:'0 2px 5px #ccc'
//         }
//       }>
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       <hr></hr>
//       <div style  = {styles}>
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       <hr></hr>
//       <div className = "BlogCard">
//       <h3>{blogObj.title}</h3>
//       <p>{blogObj.description}
//       </p>
//       </div>
//       {blogCards}
//     </div>
    
//   );
// }
// export default App;

// import logo from './logo.svg';
// import './App.css';

// //import BlogCard from './BlogCard'//we can change the module name for whatever name we want
// //Like this
// import BlogCardModule from './BlogCard'
// import {isArrayEmpty} from './Utils'//we can also change that function name
// //like this
// //import {isArrayEmpty as checkArrayEmpty} from './Utils'//we can use checkArrayEmpty in any case to use that function
// function App() {
  
//   //Create React Elements dynamically
//   const blogArr =[
//     { 
//       id:1,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:2,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//     {
//       id:3,
//       Company:'Maersk',
//       Department:'Contract LifeCycle Management'
//     },
//   ]
//   const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item,pos)=>{
//         console.log(item);
//         return(
//           //<BlogCard key = {pos} title = "Test title" description = "test-description"/>
//           <BlogCardModule class= "Blog" key = {pos} title = {item.Company} description = {item.Department}/>
           
//         )
//   });
// const onHideBtnClick = ()=>{
//   alert('Button Clicked');
// }
//   return (
//     <div className="App">
      
//       <button onClick={onHideBtnClick}>Hide List</button>
//       <br></br>
//       {blogCards}
//     </div>
    
//   );
// }
// export default App;


import logo from './logo.svg';
import './App.css';

//import BlogCard from './BlogCard'//we can change the module name for whatever name we want
//Like this
import BlogCardModule from './BlogCard'
import {isArrayEmpty} from './Utils'//we can also change that function name
//like this
//import {isArrayEmpty as checkArrayEmpty} from './Utils'//we can use checkArrayEmpty in any case to use that function
function App() {
  
  //Create React Elements dynamically
  const blogArr =[
    { 
      id:1,
      Company:'Maersk',
      Department:'Contract LifeCycle Management'
    },
    {
      id:2,
      Company:'Maersk',
      Department:'Contract LifeCycle Management'
    },
    {
      id:3,
      Company:'Maersk',
      Department:'Contract LifeCycle Management'
    },
  ]
  const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item,pos)=>{
        console.log(item);
        return(
          //<BlogCard key = {pos} title = "Test title" description = "test-description"/>
          <BlogCardModule class= "Blog" key = {pos} title = {item.Company} description = {item.Department}/>
           
        )
  });
const onHideBtnClick = ()=>{
  alert('Button Clicked');
}
  return (
    <div className="App">
      
      <button onClick={onHideBtnClick}>Hide List</button>
      <br></br>
      {blogCards}
    </div>
    
  );
}
export default App;