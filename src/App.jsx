import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/api/avgSigunPrice.do?out=json&sido=14&code=F241126487")
      .then((res) => res.json())
      .then((res) => setData(res.RESULT.OIL));
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Opinet</h1>
      <ul>
        {data &&
          data.map((item) => {
            return (
              <li key={`${item.SIGUNNM}${item.PRICE}`}>
                {item.SIGUNNM}: {item.PRICE}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
