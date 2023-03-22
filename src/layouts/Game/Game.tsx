import Header from "~/components/Header";
import PageWrapper from "~/components/PageWrapper";

type Props = {
  id: string;
};
function Game({ id }: Props) {
  return (
    <PageWrapper>
      <Header>
        Let&apos;s get playing <br />
        <strong>Game: {id}</strong>
      </Header>
    </PageWrapper>
  );
}

export default Game;
