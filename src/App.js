import User from "./components/user"

function App() {
  return (
    <div>
      <User name="Ankita Singh" description="Software Engineer"/>
    </div>
  );
}

export default App;

//Hooks -- it was introduced to enable the use of state in the functional component
//useState -- it is used to update the state
//useEffect -- putting in some logic or heavy computations
