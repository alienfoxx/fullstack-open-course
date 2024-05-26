/* eslint-disable react/prop-types */
import { useState } from "react";

const Statistics = ({
  good,
  neutral,
  bad,
  allFeedbacks,
  average,
  positive,
}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All Feedbacks: {allFeedbacks}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedbacks, setAllFeedbacks] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  function handlePositive() {
    return (good / allFeedbacks) * 100;
  }

  return (
    <div>
      <div className="action">
        <h1>Give Feedback</h1>
        <button
          onClick={() => {
            setGood(good + 1);
            setAllFeedbacks(allFeedbacks + 1);
            setAverage(average + 1);
            setPositive(handlePositive());
          }}
        >
          Good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
            setAllFeedbacks(allFeedbacks + 1);
            setAverage(average);
            setPositive(handlePositive());
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
            setAllFeedbacks(allFeedbacks + 1);
            setAverage(average - 1);
            setPositive(handlePositive());
          }}
        >
          Bad
        </button>
      </div>

      {allFeedbacks > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allFeedbacks={allFeedbacks}
          average={average}
          positive={positive}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
