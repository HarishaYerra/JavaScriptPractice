import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <div>

      <h1>Hello {displayName}</h1>

      <input
        type="text"
        placeholder="Enter your name"

        // Complete here
        value={name}

        // Complete here
        onChange={(e)=>setName(e.target.value)}
      />

      <button
        onClick={()=>setDisplayName(name)}
      >
        Submit
      </button>

    </div>
  );
}

export default App;