// import React from 'react';
// import { dumpLogs } from './Utils';
// import classes from './BlogCard.module.css';
// // const BlogCard = (props) =>{
// //     console.log(props);
// //     return(
// //         // <div className = "BlogCard" >
// //         //        <h3>Blog Title</h3>
// //         //        <p>Blog Description</p>
// //         //   </div>
// //         <div className = "BlogCard" >
// //                <h3>{this.props.title}</h3>
// //                <p>{this.props.description}</p>
// //           </div>
// //     )
// // }

// // export default BlogCard;
// const BlogCard = (props) =>{
//     dumpLogs(props);
//     return(
//         // <div className = "BlogCard" >
//         //        <h3>Blog Title</h3>
//         //        <p>Blog Description</p>
//         //   </div>
//         <div className = {classes.NewBlogCard} >
//                <h3>{this.props.title}</h3>
//                <p>{this.props.description}</p>
//           </div>
//     )
// }

// export default BlogCard;
//Making use of props in ES6 Class :::=== passsing props to class based components
// import React, {Component} from 'react';
// import { dumpLogs } from './Utils';
// import classes from './BlogCard.module.css';

// class BlogCard extends Component{
//     state = {
//         likeCount: 0,
//     }
//     onClickLikeBtn = () =>{
//         this.setState((prev,post)=>{
            
//             return {likeCount:prev.likeCount + 1}
//         })
//     }
//     render(){
//         dumpLogs(this.props);
//     return(
//         // <div className = "BlogCard" >
//         //        <h3>Blog Title</h3>
//         //        <p>Blog Description</p>
//         //   </div>
//         <div className = {classes.NewBlogCard} >
//                <h3>{this.this.props.title}</h3>
//                <p>{this.this.props.description}</p>
//                <p>Like Count: <span className='LikeCount'>{this.state.likeCount}</span></p>
//                <button onClick = {this.onClickLikeBtn}>Like</button>
               
//           </div>
//     )
//     }
// }
// export default BlogCard;

// import React  from 'react';
// import { dumpLogs } from './Utils';
// import classes from './BlogCard.module.css';

// const BlogCard = (props) => {
    
//     // onClickLikeBtn = () =>{
//     //     this.setState((prev,post)=>{
            
//     //         return {likeCount:prev.likeCount + 1}
//     //     })
//     // }
//     console.log('BlogCard Rendered');
//     dumpLogs(props);
//     return(
//         // <div className = "BlogCard" >
//         //        <h3>Blog Title</h3>
//         //        <p>Blog Description</p>
//         //   </div>
//         <div className = {classes.NewBlogCard} >
//                <h3>{this.props.title}</h3>
//                <p>{this.props.description}</p>
//                <p>Like Count: <span className={classes.LikeCount}>{this.props.likeCount}</span></p>
//                <p>{this.props.likeCount}</p>
//                <button onClick = {this.props.onLikebtnClick}>Like</button>
               
//           </div>
//     )
// }
// export default BlogCard;

//Convert It into Class Based Component
import React  from 'react';
import { dumpLogs } from './Utils';
import classes from './BlogCard.module.css';

class BlogCard extends React.Component{
    
    // onClickLikeBtn = () =>{
    //     this.setState((prev,post)=>{
            
    //         return {likeCount:prev.likeCount + 1}
    //     })
    // }
    componentWillUnmount(){
        console.log('Unmounting Blog Cards');
    }
    render(){
        console.log('BlogCard Rendered');
    dumpLogs(this.props);
    return(
        // <div className = "BlogCard" >
        //        <h3>Blog Title</h3>
        //        <p>Blog Description</p>
        //   </div>
        <div className = {classes.NewBlogCard} >
               <h3>{this.props.title}</h3>
               <p>{this.props.description}</p>
               <p>Like Count: <span className={classes.LikeCount}>{this.props.likeCount}</span></p>
               <p>{this.props.likeCount}</p>
               <button onClick = {this.props.onLikebtnClick}>Like</button>
               
          </div>
    )
    }
    
}
export default BlogCard;