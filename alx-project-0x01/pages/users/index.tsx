import { UserProps } from "@/interfaces/index";
import UserCard from "@/components/common/UserCard";
import React from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};






export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;