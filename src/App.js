import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import User from "./User";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const user = async () => {
      const response = await axios('https://randomuser.me/api/?results=10')
      setPersons(response.data.results);

    }
   user()
  }, [])

  return (
    <div className="App">

     <User users={persons}/>
    </div>
  );
}

export default App;
