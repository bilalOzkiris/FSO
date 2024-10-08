import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ text, vote }) => (
  <div>
    <p>{text}</p>
    <p>has {vote} votes</p>
  </div>
);

const Header = ({ text }) => <h1>{text}</h1>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  const handleNextAnecdote = () => {
    let nextAnecdote;
    do {
      nextAnecdote = Math.floor(Math.random() * anecdotes.length);
    } while (nextAnecdote === selected);
    setSelected(nextAnecdote);
  };

  const getMostVotedAnecdote = () =>
    getAnectode(votes.indexOf(Math.max(...votes)));

  const getAnectode = (idx) => ({ text: anecdotes[idx], votes: votes[idx] });

  const selectedAnecdote = getAnectode(selected);
  const mostVotedAnecdote = getMostVotedAnecdote();

  return (
    <>
      <Header text="Anecdote of the day" />
      <Anecdote text={selectedAnecdote.text} vote={selectedAnecdote.votes} />
      <Button text="vote" onClick={handleVote} />
      <Button text="next anecdote" onClick={handleNextAnecdote} />
      <Header text="Anecdote with most votes" />
      <Anecdote text={mostVotedAnecdote.text} vote={mostVotedAnecdote.votes} />
    </>
  );
};

export default App;
