import logo from './logo.svg';
import classes from './Project-React.module.css';
import ProductData from './Project-React-data';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDeatails';
import React, {Component} from 'react';
class App extends Component {
    state = {
        productData:ProductData,
        //currentPreviewImage:'https://imgur.com/iOeUBV7.png',
        currentPreviewImagePos:0,
        showHeartBeatSection:true,
    }
    onClickOptionClick = (pos) => {
        // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl;
        // console.log(updatedPreviewImage);
        // this.setState({currentPreviewImage:updatedPreviewImage});
        this.setState({currentPreviewImagePos:pos});
    }
    onFeatureItemClick = (pos) =>{
        let updatedState = false;
        if(pos === 1){
            updatedState = true;
        }
        this.setState({showHeartBeatSection:updatedState});
        console.log(pos);
    }
    shouldComponentUpdate(nextProps,nextState){
        // console.log('Next State => ',nextState);
        // console.log('Current State =>',this.state);
        
        if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos){
            return false;
        }
        return true;
    }
    render(){
        console.log('Rendering Project-React.js')
        return (
            <div className="App">
              <header className="App-header">
                <nav className={classes.TopBar}>
                    <img  src = "https://th.bing.com/th/id/OIP.kr2jhAEiTvLGsr2WAbPW0QHaFg?pid=ImgDet&rs=1" alt="Maersk logo"/>
                </nav>
              </header>
              <div className={classes.MainContainer}>
                  {/* <div className={classes.ProductPreview}>
                      <img src = "https://imgur.com/iOeUBV7.png" alt = "Product Preview" />
                        <div className={classes.TimeSection}>
                            <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                        </div>
                        <div className={classes.HeartBeatSection}>
                        <i class="fas fa-heartbeat"></i>
                            <p>78</p>
                        </div> instead of this we can use these below
                        
        
                  </div> */}
                  <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection = {this.state.showHeartBeatSection} />
                  
                  <ProductDetails data = {this.state.productData} onColorOptionClick = {this.onClickOptionClick} currentPreviewImagePos = {this.state.currentPreviewImagePos}
                  onFeatureItemClick = {this.onFeatureItemClick} showHeartBeatSection = {this.state.showHeartBeatSection}/>
              </div>
            </div>
          );
    }
    // const currentHour = new Date().getHours() > 9 ? new Date().getHours:'0'+ new Date().getHours();
    
    // const currentMinute = new Date().getMinutes()>9 ? new Date().getMinutes():'0'+new Date().getMinutes()
    // console.log(currentHour,currentMinute);
    //<p>{`${currentHour}:${currentMinute}`}</p>
 
}

export default App;