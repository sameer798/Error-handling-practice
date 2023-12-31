import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
 const [userLsit, setUserList] = useState([]);

 const addUserHandler = (uName, uAge) =>{
    setUserList((prevUserList)=>{
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
 };
 
  
  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userLsit}/>
    </>
  );
}

export default App;
