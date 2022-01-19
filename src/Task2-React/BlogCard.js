import React  from 'react';
import classes from './Topbar.module.css'
class BlogCard extends React.Component{
    render(){
    return(
        <div className = {classes.NewBlogCard} >
               <h3>{this.props.titleItems}</h3>
               <p>{this.props.description}</p>
               <p>Add Favorite: <span className={classes.addFavorite}>{this.props.addFavorite}</span></p>
               <p>{this.props.onFavoritebtnClick}</p>
               <button className = {classes.addFavoritebutton} onClick = {this.props.onFavoritebtnClick}>Add Favorite</button>
               
          </div>
    )
    
    }
}
export default BlogCard;