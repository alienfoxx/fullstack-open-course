import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allfeadbacks, setAllFeadbacks] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  function handelPositive() {
    return (good / allfeadbacks) * 100;
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
          setAllFeadbacks(allfeadbacks + 1);
          setAverage(average + 1);
          setPositive(handelPositive());
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setAllFeadbacks(allfeadbacks + 1);
          setAverage(average);
          setPositive(handelPositive());
        }}
      >
        neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          setAllFeadbacks(allfeadbacks + 1);
          setAverage(average - 1);
          setPositive(handelPositive());
        }}
      >
        bad
      </button>
      <div className="result">
        <h1>Statistics</h1>
        <p>good{good}</p>
        <p>neutral{neutral}</p>
        <p>bad{bad}</p>
        <p>All {allfeadbacks}</p>
        <p>Average{average}</p>
        <p>Positive {positive}%</p>
      </div>
    </div>
  );
};

export default App;
