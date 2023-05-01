import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import AddUser from '~/modules/AddUser';

import { getAbsoluteUrl } from '../../utils/vercel.utils';

type Props = {
  slug: string;
  onUserCreate: (name: string) => void;
  isLoading: boolean;
};
export default function Game({ slug, onUserCreate, isLoading }: Props) {
  const [url, setUrl] = useState();

  useEffect(() => {
    const gameUrl = getAbsoluteUrl() || 'No URL available';
    setUrl(gameUrl);
  }, []);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success('Copied to clipboard!');
      })
      .catch(() => {
        toast.error('Failed to copy to the clipboard!');
      });
  };
  return (
    <PageWrapper>
      <Heading>Game Url:</Heading>
      <button
        className="mb-10 rounded border border-violet-400 bg-violet-900 p-2 text-sm text-violet-400"
        onClick={handleCopy}
      >
        {url} 📋
      </button>
      <AddUser onUserCreate={onUserCreate} isLoading={isLoading} />
    </PageWrapper>
  );
}
