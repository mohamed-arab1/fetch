import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const respones = axios.get('https://qasimahapp.com/api/categories', {
      headers: {
         'Accept-Language': 'ar'
      }

    })
    respones.then((response) => console.log(respones))
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
