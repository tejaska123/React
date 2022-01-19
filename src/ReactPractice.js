// import React from "react";
// import CounterButton from './ReactPractice1'

// function PracticeState() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <CounterButton/>
//       </header>
//     </div>
//   );
// }

// export default PracticeState;

import React from "react";
import CounterButton from './ReactPractice1'

class PracticeState extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mount:true,
      ignoreProp:0,
      seed:40,
      showErrorComponent:false
    }
    this.mountCounter = () => this.setState({mount:true})
    this.unmountCounter = () => this.setState({mount:false})
    this.ignoreProp = () => this.setState({ignoreProp:Math.random()});
    this.seedGenerator = () => this.setState({seed:Number.parseInt(Math.random() * 100)});
    this.toggleError = () => this.setState({showErrorComponent:!this.state.showErrorComponent})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div>
                <button onClick={this.mountCounter} disabled = {this.state.mount}>Mount Counter

                </button><br></br>
                <button onClick={this.unmountCounter} disabled = {!this.state.mount}>Unmount Counter

                </button>
                <button onClick={this.ignoreProp} >Ignore Prop

                </button>
                <button onClick={this.seedGenerator} >Generate Seed

                </button>
                <button onClick={this.toggleError} >Toggle Error

                </button>
               {this.state.mount ? <CounterButton ignoreProp = {this.state.ignoreProp} seed = {this.state.seed} showErrorComponent = {this.state.showErrorComponent} /> : null} 
            </div>
      
      </header>
    </div>
  );
}
}

export default PracticeState;