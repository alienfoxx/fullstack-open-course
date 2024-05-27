/* eslint-disable react/prop-types */
import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  allFeedbacks,
  average,
  positive,
}) => {
  return (
    <table>
      <tbody>
        <h1>Statistics</h1>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All Feedbacks" value={allFeedbacks} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={`${positive}%`} />
      </tbody>
    </table>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
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
        <Button
          text="Good"
          handleClick={() => {
            setGood(good + 1);
            setAllFeedbacks(allFeedbacks + 1);
            setAverage(average + 1 / 100);
            setPositive(handlePositive());
          }}
        />
        <Button
          text="Neutral"
          handleClick={() => {
            setNeutral(neutral + 1);
            setAllFeedbacks(allFeedbacks + 1);
            setAverage(average);
            setPositive(handlePositive());
          }}
        />
        <Button
          text="Bad"
          handleClick={() => {
            setBad(bad + 1);
            setAllFeedbacks(allFeedbacks + 1);
            setAverage(average - 1 / 100);
            setPositive(handlePositive());
          }}
        />
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
