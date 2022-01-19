import React from "react";

import classes from './Topbar.module.css';
import BlogCardModule from './BlogCard'
class App extends React.Component{
  state = {
    showBlogs:true,
    ProductDatas: [
      { 
        id:1,
        items:'Maersk - Blog - 1',
        description:'Maersk - Blog - 1 description',
        addFavorite:0
      },
      {
        
        id:2,
        items:'Maersk - Blog - 2',
        description:'Maersk - Blog - 2 description',
        addFavorite:0
        
      },
      {
        id:3,
        items:'Maersk - Blog - 3',
        description:'Maersk - Blog - 3 description',
        addFavorite:0,
      },
      {
        id:4,
        items:'Maersk - Blog - 4',
        description:'Maersk - Blog - 4 description',
        addFavorite:0,
      },
      {
        id:4,
        items:'Maersk - Blog - 4',
        description:'Maersk - Blog - 4 description',
        addFavorite:0,
      },
     
]
}

isArrayEmpty = (arr) =>{
  if(arr !== undefined && arr !== null && arr.length > 0){
      return false;
  }
  return true;
}
onHideBtnClick = ()=>{
 
  this.setState((prevState1,prevProps1)=>{
      return {showBlogs:!prevState1.showBlogs}
});
}
onFavoritebtnClick = (pos)=>{
  const updatedBlogList = this.state.ProductDatas;
  const updatedBlogObj = updatedBlogList[pos];
  updatedBlogObj.addFavorite = updatedBlogObj.addFavorite + 1;
  updatedBlogList[pos] = updatedBlogObj;
  this.setState({ProductDatas:updatedBlogList})
  console.log(updatedBlogObj);
}
render(){
      const blogs = this.isArrayEmpty(this.state.ProductDatas) ? [] : this.state.ProductDatas.map((item,pos)=>{
        console.log(item);
        return(
       
        <BlogCardModule class= "Blog" key = {pos}  titleItems= {item.items} description = {item.description} addFavorite  = {item.addFavorite} Id = {item.id} onFavoritebtnClick= {()=>this.onFavoritebtnClick(pos)} />
          
        )
      });
        return (
            <div className="App">
              
              <header className="App-header">
                <nav className={classes.TopBar}>
                    <img  src = "https://rsb.org/wp-content/uploads/2018/04/Maersk_Logo-960x714.png" alt="Maersk logo"/>
                </nav>
              </header>
              
            <div className={classes.down}>
           
             <button className={classes.center} onClick={this.onHideBtnClick}>{this.state.showBlogs?'Hide Blogs':'Show Blogs'}</button>
             
             <br></br>
             {this.state.showBlogs? blogs : null}
             {this.BlogCardModule}
             </div>
             </div> 
       

              
    );
}
}

export default App;
