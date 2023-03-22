type Props = {
  id: string;
};
function Game({ id }: Props) {
  return (
    <div>
      <h1>Game {id}</h1>
    </div>
  );
}

export default Game;
