import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
}

const UserDropdown = () => {
  const getUser = async () => {
    const { data } = await axios.get<User>(
      "https://jsonplaceholder.typicode.com/users/a"
    );
    return data;
  };

  const { data: user } = useQuery<User>(["getUser"], getUser, {
    suspense: true,
  });

  return (
    <div>
      <div>{user?.id}</div>
      <div>{user?.name}</div>
      <div>{user?.username}</div>
    </div>
  );
};

export default UserDropdown;
