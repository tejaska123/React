import React from "react";
import classes from './ProductDetails.module.css'
import ProductData from "./Project-React-data";

const ProductDetails = (props) =>{
    console.log(props.data);
    const colorOption = props.data.colorOptions.map((item,pos)=>{
        const classArr = [classes.ProductImage]
        if(pos === props.currentPreviewImagePos){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key = {pos} className={classArr.join(' ')} src = {item.imageUrl} alt = {item.styleName} onClick={()=>props.onColorOptionClick(pos) }/>
        )
    })
    const featureList = props.data.featureList.map((item,pos)=>{
        const classArr = [classes.FeatureItem];
        if(pos === 1 && props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem);
        }
        else if(pos === 0 && !props.showHeartBeatSection){
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button onClick = {()=>props.onFeatureItemClick(pos)} key = {pos} className={classArr.join(' ')}>{item}</button>
        )
    })
    return(
        <div>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOption}
                {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src = "https://imgur.com/PTgQlim.png" alt = "Red Coloured Watch"/>
                <img className={classes.ProductImage} src = "https://imgur.com/Mplj1YR.png" alt = "Blue Coloured Watch"/>
                <img className={classes.ProductImage} src = "https://imgur.com/iOeUBV7.png" alt = "Purple Coloured Watch"/>
                <img className={classes.ProductImage} src = "https://imgur.com/PTgQlim.png" alt = "Red Coloured Watch"/> */}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
            {featureList}
            {/* <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button> */}
            </div>
            
                <button className={classes.PrimaryButton}>Buy Now</button>
            
        </div>
    )
}
export default ProductDetails;