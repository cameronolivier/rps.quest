import type { FormEvent } from 'react';
import { useState } from 'react';

import Button from '../../components/Button';
import { tw } from '../../utils/tailwind.utils';

type Props = {
  onUserCreate: (name: string) => void;
  isLoading: boolean;
};
const AddUser = ({ onUserCreate, isLoading }: Props) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onUserCreate(name);
  };

  return (
    <div
      className={tw('w-full max-w-md rounded-lg bg-violet-900 p-6 shadow-md')}
    >
      <h2 className="mb-4 text-2xl font-bold text-violet-300">{`What's your name?`}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-violet-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-md border border-violet-900 p-2 focus:border-violet-400 focus:outline-none"
            placeholder="Enter your nickname"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding you to the game...' : "Let's go!"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
