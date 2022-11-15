import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://nucleus.actofit.com:8001/webservice/v1/guidedworkout/get?firebase_id=N61z5NxoesOcwMlAKYQDOcg7hsh2`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ subname, banner }) => (
            <li key={subname}>
              <h3>{banner}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
