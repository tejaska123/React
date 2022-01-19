// import React, { useState }  from "react";

// function countInitial(){
//     console.log('run function');
//     return 4
// }
// const CounterButton = ()=>{
//     // const [count,setCount] = useState(()=>countInitial());
//     // const [count,setCount] = useState({count:4,theme:'blue'})
//     const [count,setCount] = useState(()=>countInitial())
//     const [theme,setTheme] = useState('blue')

//     // const count = state.count;
//     // const theme = state.theme;
//     function decrementCount(){
//         // setCount(count - 1);
//         //setCount(count -1);
//         //if this is used this should decrement the value by two times but this should not do like this every times it takes count from the above and decrement if we use previousState function to call it will fetch previous value

//         setCount(previousState=>previousState - 1);
//         setTheme('red');
//         //for objects we need to use below like these
//         // setCount(previousState =>{
//         //     return {...previousState,count: previousState.count - 1}
//         // });
//     }
//     function incrementCount(){
//         setCount(prevCount => prevCount + 1);
//     }
//     return(<>
//     <p>
//         You've clicked the button {count} {theme} times
//     </p>
//     <button onClick={incrementCount}>Click Me! to increment the value</button>
//     <p>                                       </p>
//     <button onClick={decrementCount}>Click Me! to decrement the value</button>
//     </>
//     )
// }
// export default CounterButton;
//useeffect in React 
// import React, { useState , useEffect }  from "react";

// const Counter = ()=>{
//     const [resourceType,setResourceType] = useState('posts');
//     console.log('render');
//     useEffect(()=>{
//         console.log('resource- type changed');
//         return () =>{
//             console.log('return from resource change');
//         }//this will bw called before above statements beacause we will do clean up activity here
//     },[resourceType]);//this will called when the value in the useState is changed 
//     return(
//     <>
//        <div>
//            <button onClick={() => setResourceType('posts')}>Posts</button>
//            <button onClick={() => setResourceType('users')}>Users</button>
//            <button onClick={() => setResourceType('comments')}>Comments</button>
//        </div>
//        <h1>{resourceType}</h1>
//     </>
//     )
// }
// export default Counter;


//useMemo in React
// import React, { useState , useEffect , useMemo }  from "react";

// const Counter = ()=>{
//     const [number,setNumber] = useState(0);
//     const [dark,setDark] = useState(false);
//     // const doubleNumber = slowfunction(number);//like this whwn we call it call even it is same value
//     //we can do this like useMemo it stores the previous value 
//     const doubleNumber = useMemo(() =>{
//         return slowfunction(number)
//     },[number]);//whenever the number is changed only then it will be called

//     // const themeStyles = {
//     //     backgroundColor: dark ? 'black' : 'white',
//     //     color: dark ? 'white':'black'
//     // }
//     //JavaScript stores two object values if it is same objects contains in both of that
//     //so when ever we call themeStyles dark it is creating new objects so we can use useMemo to store the 
//     //so using useMemo...this will whenever the dark value is changed
//     const themeStyles = useMemo(()=> {
//         return {
//         backgroundColor: dark ? 'black' : 'white',
//         color: dark ? 'white':'black'
//     }
//     },[dark]);//dark value changed only then this function is called
//     useEffect(()=>{
//         console.log('Theme Changed');
//     },[themeStyles]);
//     console.log(number);
    
//     return(
//     <>
//       <input type = 'number' value = {number} onChange={e => setNumber(parseInt(e.target.value))} />
//       <div>{number}</div>
//       <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
//       <div style = {themeStyles}>{doubleNumber}</div>
//     </>
//     )
// }

// function slowfunction(number){
//     console.log('Calling Slow Function');
//     for(let i = 0; i<= 100000000;i++){}
//     return number * 2
// }
// export default Counter;


import React, { useState  }  from "react";


// const ErrorComponent = () => <div>{prop.ignoreProp}</div>
export default class Counter extends React.Component{
    
    constructor(props){
        console.log('Constructor')
        super(props)
        this.state = {
            counter:0

        }
        this.increment = () => this.setState({counter:this.state.counter + 1})
        this.decrement = () => this.setState({counter:this.state.counter - 1})

    }
    static getDerivedStateFromProps(props,state){
        if(props.seed && state.seed !== props.seed){
            console.log("Called static method");
            return{
                seed:props.seed,
                counter:props.seed
            }
        }
        return null
    }
    componentDidMount(){
        console.log('Component Did Mount');
        console.log('--------------------');
        setTimeout(()=>{
            this.setState({initializing:false})
        },500)
    }
    componentWillUnmount(){
        console.log('Component Will Unmount');
        console.log('---------------------');
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
            console.log(nextProps.ignoreProp);
            console.log(this.props.ignoreProp);
            console.log(nextProps.ignoreProp);
            console.log('Should Component Update - DO NOT RENDER');
            return false
        }
        console.log('Should Component Update - RENDER');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Get Snapshot Before Update');
        return null
    }
    
    render(){
        
        console.log('Render');
        if(this.state.initializing){
            return <div>Initializing.....</div>
        }
        if(this.props.showErrorComponent && this.state.error){
            return <div>We have encountered an error!{this.state.error.message}</div>
        }
        return(
            <div>
                <button onClick={this.increment}>Increment

                </button><br></br>
                <button onClick={this.decrement}>Decrement

                </button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
                {/* {this.props.showErrorComponent ? <ErrorComponent /> : null} */}
            </div>
        )
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('Component Did Update');
        console.log('--------------------');
    }
    componentDidCatch(error,info){
        console.log('Component Did Catch');
        this.setState({error,info});
    }
}


