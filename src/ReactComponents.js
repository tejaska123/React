// import React,{ Component} from 'react';
// import logo from './logo.svg';
// import './App.css';


// import BlogCardModule from './BlogCard'
// import {isArrayEmpty , dumpLogs} from './Utils'

// //we can also do like this and we can also do like this
// //import React,{Component} from 'react';
// //like this above if we do then class reactComponents extends Component or
// //if we want to call in a class we can do like in below
// // class reactComponents extends React.Component{

// // }
// class ReactComponents extends  Component {
//     state =  {
//         showBlogs:true
//     }
//     blogArr =[
//         { 
//           id:1,
//           Company:'Maersk',
//           Department:'Contract LifeCycle Management',
//           likeCount1:10
//         },
//         {
//           likeCount1:0,
//           id:2,
//           Company:'Maersk',
//           Department:'Contract LifeCycle Management',
          
//         },
//         {
//           id:3,
//           Company:'Maersk',
//           Department:'Contract LifeCycle Management',
//           likeCount1:0,
//         },
//       ]
//       onLikebtnClick = (pos)=>{
//         alert('Like button clicked at the pos ' +pos);
//       }
    
//     blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item,pos)=>{
//         console.log(item);
//         return(
//           //<BlogCard key = {pos} title = "Test title" description = "test-description"/>
//           <BlogCardModule class= "Blog" key = {pos} title = {item.Company} description = {item.Department} likecount = {item.likeCount1} Id = {item.id} onLikebtnClick = {()=>this.onLikebtnClick(pos)} />
           
//         )
//   });
//   onHideBtnClick = ()=>{
//     //   let updatedState = !this.state.showBlogs
//     // this.setState({showBlogs:updatedState});
//     this.setState((prevState1,prevProps1)=>{
//         return {showBlogs:!prevState1.showBlogs}
//     });
//     console.log(this.state.showBlogs);
//   }
// //   onHideBtnClick1 = ()=>{
// //     this.setState({showBlogs:true});
// //     console.log(this.state.showBlogs);
// //   }
  
//   render(){
//       console.log('render method called');//this is called after updadting the value there
//       return(
//         <div className="App">
      
//         <button onClick={this.onHideBtnClick}>{this.state.showBlogs?'Hide List':'Show List'}</button>
//         <br></br>
//         {this.state.showBlogs? this.blogCards : null}
//         {this.BlogCardModule}
       
//       </div>
//       )
//   }
// }
// export default ReactComponents;
import React,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';


import BlogCardModule from './BlogCard'
import {isArrayEmpty , dumpLogs} from './Utils'

//we can also do like this and we can also do like this
//import React,{Component} from 'react';
//like this above if we do then class reactComponents extends Component or
//if we want to call in a class we can do like in below
// class reactComponents extends React.Component{

// }
class ReactComponents extends  Component {
  constructor(props){
    super(props);
  
    this.state =  {
        showBlogs:true,
    
    blogArr: [
        { 
          id:1,
          Company:'Maersk',
          Department:'Contract LifeCycle Management',
          likeCount:10
        },
        {
          likeCount:0,
          id:2,
          Company:'Maersk',
          Department:'Contract LifeCycle Management',
          
        },
        {
          id:3,
          Company:'Maersk',
          Department:'Contract LifeCycle Management',
          likeCount:0,
        }
      ]
    }
    console.log('Inside Constructor');
  }
      onLikebtnClick = (pos)=>{
        // alert('Like button clicked at the pos ' +pos);
        const updatedBlogList = this.state.blogArr;
        const updatedBlogObj = updatedBlogList[pos];
        updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
        updatedBlogList[pos] = updatedBlogObj;
        this.setState({blogArr:updatedBlogList})
        console.log(updatedBlogObj);
      }
    
    
  
  onHideBtnClick = ()=>{
    //   let updatedState = !this.state.showBlogs
    // this.setState({showBlogs:updatedState});
    this.setState((prevState1,prevProps1)=>{
        return {showBlogs:!prevState1.showBlogs}
    });
    console.log(this.state.showBlogs);
  }
//   onHideBtnClick1 = ()=>{
//     this.setState({showBlogs:true});
//     console.log(this.state.showBlogs);
//   }
  shouldComponentUpdate(){
    console.log('Inside shouldComponentUpdate');
    return true
  }
  componentDidMount(){
    console.log('Component did mount');
  }
  componentWillUnmount(){
    console.log('Component Unmounting');
  }
  componentDidUpdate(){
    console.log('Inside componentDidUpdate');
  }
  
  render(){
      console.log('render method called');//this is called after updadting the value there
      const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item,pos)=>{
        console.log(item);
        return(
          //<BlogCard key = {pos} title = "Test title" description = "test-description"/>
          <BlogCardModule class= "Blog" key = {pos} title = {item.Company} description = {item.Department} likecount = {item.likeCount} Id = {item.id} onLikebtnClick = {()=>this.onLikebtnClick(pos)} />
           
        )
      });
      return(
        <div className="App">
      
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs?'Hide List':'Show List'}</button>
        <br></br>
        {this.state.showBlogs? blogCards : null}
        {this.BlogCardModule}
       
      </div>
      )
  }
}
export default ReactComponents;