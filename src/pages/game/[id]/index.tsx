import { useRouter } from "next/router";
import Game from "~/layouts/Game";

function GamePage() {
  const router = useRouter();
  const id = router.query.id as string;

  return <Game id={id} />;
}

export default GamePage;
