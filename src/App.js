import Routes from './Routes';
import axios from "axios";
import './css/App.css';
import StateContext from "./StateContext";

/**
 * App renders routes component and sets basic theme styles
 */
function App() {
  // updates user state and return edited user
  const updateState = async ({id, firstName, lastName, email, state, isAdmin}) => {

    let user = {
        id,
        email,
        firstName,
        lastName,
        state,
        isAdmin
    }
    
    try{
        const {data} = await axios.put(`http://localhost:3001/users/${id}`,
        user);
        
        return data
    } catch(e){
        alert("Error changing state");
        console.error(e);
    }
  };


  return (
    <StateContext.Provider value ={{updateState}}>
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </StateContext.Provider>
  );
}

export default App;
