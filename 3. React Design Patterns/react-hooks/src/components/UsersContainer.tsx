import { useEffect, useState } from 'react';
import UserList from './UserList';

// NOTE: Container Component
const UsersContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const url = 'https://randomuser.me/api/?results=15';

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false);
      setData(data.results);
    } catch (error) {
      setError(true);
    }
  };

  // WARNING: MUST call the function inside useEffect.
  useEffect(() => {
    getUsers();
  }, []);

  // console.log(data);

  return <UserList isLoading={isLoading} error={error} data={data} />;
};

export default UsersContainer;
