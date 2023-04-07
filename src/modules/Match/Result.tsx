import Link from 'next/link';

import Button from '~/components/Button';
import {
  resultStatus,
  type ResultStatus,
} from '~/modules/Match/Match.constants';
import { getResultMessage } from '~/modules/Match/Match.utils';
import { tw } from '~/utils/tailwind.utils';

type Props = {
  status: ResultStatus;
  opponentName: string;
  name: string;
};
export default function Result({ status, name, opponentName }: Props) {
  return (
    <>
      <h1
        className={tw(
          'mt-10 text-5xl',
          status === resultStatus.draw && 'text-blue-500',
          status === resultStatus.lose && 'text-red-500',
          status === resultStatus.win && 'text-emerald-500'
        )}
      >
        {getResultMessage(status, name, opponentName)}
      </h1>
      <div className="mt-10">
        <Button>
          <Link href={'/'}>Play again</Link>
        </Button>
      </div>
    </>
  );
}
