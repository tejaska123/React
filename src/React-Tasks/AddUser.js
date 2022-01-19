import React ,{useState} from "react";
import Card from './Card';
import classes from './AddUser.module.css'
import Button from './Button';
import ErrorModal from './ErrorModal';
const AddUser = props => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
            setError({
                title:"Invalid input",
                message:'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+enteredAge < 1){//here +enteredAge is written because enteredAge is given as String in the useState so convert it into int or number we use this
            setError({
                title:"Invalid age",
                message:'Please enter a valid age (>0).' 
            })
            return;//this is whenever this conditions are true we can simply return the function instead not executing other parts or below code in the function
        }
        props.onAddUser(enteredUsername,enteredAge);
        console.log(enteredUsername,'\n',enteredAge);
        setEnteredUsername('')
        setEnteredAge('')

    }
    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    } 
    const errorHandler = () =>{
        setError(null);
    }
    return(
        <div>
        {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
        <Card cssClass = {classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id = "username" type = "text" value = {enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input id = "age" type = "number" value = {enteredAge} onChange={ageChangeHandler}/>
            <Button type = "submit">Add User</Button>
        </form>
        </Card>
        </div>
    )

}

export default AddUser;