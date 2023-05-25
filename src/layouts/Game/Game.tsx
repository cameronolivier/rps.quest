import { Share } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Heading from '~/components/Heading';
import AddUser from '~/modules/AddUser';
import { tw } from '~/utils/tailwind.utils';
import { getAbsoluteUrl } from '~/utils/vercel.utils';

type Props = {
  onUserCreate: (name: string) => void;
  isLoading: boolean;
};
export default function Game({ onUserCreate, isLoading }: Props) {
  const [url, setUrl] = useState('No URL available');

  useEffect(() => {
    const gameUrl = getAbsoluteUrl();
    if (gameUrl) {
      setUrl(gameUrl);
    }
  }, []);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success('Game URL copied to clipboard!');
      })
      .catch(() => {
        toast.error('Failed to copy to the clipboard!');
      });
  };
  return (
    <>
      <Heading>Share this game:</Heading>
      <button
        className={tw(
          'mb-2 flex rounded border border-violet-400 bg-violet-800 p-0 text-sm' +
            ' text-violet-500'
        )}
        onClick={handleCopy}
      >
        <span
          className={tw(
            'block rounded border-r border-violet-500 bg-violet-800 px-2 py-3 text-sm' +
              ' text-violet-400'
          )}
        >
          {url}
        </span>
        <span
          className={tw(
            'block rounded bg-violet-800 px-5 py-3 text-sm text-violet-400'
          )}
        >
          <Share />
        </span>
      </button>
      <p className={tw('mb-10 mt-2 text-violet-400')}>
        If you want to play with another player copy and share the game url
        above.
      </p>
      <Heading>Add your name:</Heading>
      <AddUser onUserCreate={onUserCreate} isLoading={isLoading} />
    </>
  );
}
