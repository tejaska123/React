import React,{useState} from "react";

import AddUser from './AddUser';
import './User.css';
import UserList from "./UserList";

function App(){
    const [usersList,setUsersList] = useState([]);
    console.log(usersList)
    const addUserHandler = (uName,uAge) =>{
        setUsersList((prevUsersList) =>{
            console.log(...prevUsersList);
            return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()},];
        })
    }
    return(
        <div >
            <AddUser onAddUser = {addUserHandler}/>
            <UserList users= {usersList}/>
        </div>
    )
}

export default App;

