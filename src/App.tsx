// import { useReducer } from "react";
import "./App.css";
// import Fan from "./components/Fan";
import SpaceX from "./components/SpaceX";

function App() {
  // const initialState = 0;
  // const reducer = (state, action) => {
  //   if (action.type === "INCREMENT") {
  //     return state + action.payload;
  //   }
  //   if (action.type === "DECREMENT") {
  //     return state - action.payload;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <SpaceX></SpaceX>
      {/* <Fan></Fan> */}
      {/* <div className="text-center">
        <h1>UseReducer</h1>
        <h1>{state}</h1>
        <button className="btn" onClick={() => dispatch({ type: "INCREMENT" , payload : 3})}>
          INCREMENT
        </button>
        <button
          className="btn btn-warning ml-2"
          onClick={() => dispatch({ type: "DECREMENT", payload : 5 })}
        >
          DECREMENT
        </button>
      </div> */}
    </>
  );
}

export default App;
