import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import Button from '../../components/Button';

import { tw } from '../../utils/tailwind';
import { letTheComputerPlay } from './Match.utils';

const optionEmojiMap = {
  rock: '🤘',
  paper: '📄',
  scissors: '✂️️️',
};

type Options = keyof typeof optionEmojiMap;

const getOptionEmoji = (option: Options) => optionEmojiMap[option];

type OptionProps = {
  name: (typeof optionEmojiMap)[keyof typeof optionEmojiMap];
  onClick: (option: string) => void;
};
const Option: FC<OptionProps> = ({ name, onClick }) => {
  return (
    <span
      className="m-5 cursor-pointer rounded border border-lime-500 p-5 text-center text-6xl"
      onClick={() => onClick(name)}
    >
      {name}
    </span>
  );
};

const getTheWinner = (left: Options, right: Options) => {
  if (left === 'rock' && right === 'paper') {
    return 'right';
  }
  if (left === 'rock' && right === 'scissors') {
    return 'left';
  }
  if (left === 'paper' && right === 'rock') {
    return 'left';
  }
  if (left === 'paper' && right === 'scissors') {
    return 'right';
  }
  if (left === 'scissors' && right === 'rock') {
    return 'right';
  }
  if (left === 'scissors' && right === 'paper') {
    return 'left';
  }
  return 'draw';
};

type Props = {
  name?: string;
};

const Match = ({ name = 'Player 1' }: Props) => {
  const [playerOption, setPlayerOption] = useState<Options>();
  const [pcOption, setPcOption] = useState<Options>();
  const [winner, setWinner] = useState<string>();

  const compName = useMemo(() => {
    if (pcOption === 'rock') {
      return 'Dwayne';
    }
    if (pcOption === 'paper') {
      return 'Michael';
    }

    return 'Edward';
  }, [pcOption]);

  useEffect(() => {
    if (playerOption && pcOption) {
      const _winner = getTheWinner(pcOption, playerOption);
      if (_winner === 'left') {
        setWinner('computer');
      }
      if (_winner === 'right') {
        setWinner('you');
      }
      if (_winner === 'draw') setWinner('draw');
    }
  }, [playerOption, pcOption]);

  const handleClick = (option: Options) => {
    const pc = letTheComputerPlay();
    setPlayerOption(option);
    setPcOption(pc);
  };
  return (
    <>
      {!winner && (
        <>
          <h1 className="text-5xl text-lime-500">
            Choose your weapon, {name}!
          </h1>
          <div className="flex w-full items-center justify-center">
            <Option name="🤘" onClick={() => handleClick('rock')} />
            <Option name="📄" onClick={() => handleClick('paper')} />
            <Option name="✂️️️" onClick={() => handleClick('scissors')} />
          </div>
        </>
      )}
      {!!playerOption && (
        <h2 className="text-2xl text-amber-500">
          You selected {playerOption} {getOptionEmoji(playerOption)}
        </h2>
      )}
      {!!pcOption && (
        <h2 className="text-2xl text-amber-300">
          {compName} chose {pcOption} {getOptionEmoji(pcOption)}
        </h2>
      )}
      {!!winner && (
        <>
          <h1
            className={tw(
              'mt-10 text-5xl',
              winner === 'draw' && 'text-blue-500',
              winner === 'computer' && 'text-red-500',
              winner === 'you' && 'text-emerald-500'
            )}
          >
            {winner === 'draw' && `It's a draw!`}
            {winner === 'computer' && `${compName} won!`}
            {winner === 'you' && `${name || 'you'} won!`}
          </h1>
          <div className="mt-10">
            <Button>
              <Link href={'/'}>Play again</Link>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Match;
