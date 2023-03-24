import type { FormEvent } from 'react';
import { useState } from 'react';
import { api } from '../../utils/api';

const AddUser = () => {
  const createUser = api.users.create.useMutation();
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createUser.mutate({ name });
  };

  return (
    <div className="">
      <div className="">
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className=""
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <input type="submit" value="Add User" className="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
