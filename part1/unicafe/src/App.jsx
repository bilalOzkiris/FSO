import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={total} />
              <StatisticLine text="average" value={average.toFixed(1)} />
              <StatisticLine
                text="positive"
                value={`${positive.toFixed(1)} %`}
              />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Feedback = ({ handleFeedback }) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => handleFeedback("good")} />
      <Button text="neutral" handleClick={() => handleFeedback("neutral")} />
      <Button text="bad" handleClick={() => handleFeedback("bad")} />
    </div>
  );
};

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };

  return (
    <>
      <Feedback handleFeedback={handleFeedback} />
      <Statistics feedback={feedback} />
    </>
  );
};

export default App;
