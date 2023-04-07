import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useState } from 'react';

import { api } from '~/utils/api.utils';

type Props = {
  slug: string;
};
const AddUser = ({ slug }: Props) => {
  const router = useRouter();
  const createUser = api.users.create.useMutation();
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createUser.mutate(
      { name, slug },
      {
        onSuccess: (data) => {
          console.log('data', data);
          void router.push({
            pathname: '/game/[slug]/play',
            query: { slug, name: data.name, userGameId: data.userGameId },
          });
        },
      }
    );
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">{`What's your name?`}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-md border border-gray-400 p-2 focus:border-blue-400 focus:outline-none"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={createUser.isLoading}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
          >
            {createUser.isLoading ? 'Adding user...' : 'Add User'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
