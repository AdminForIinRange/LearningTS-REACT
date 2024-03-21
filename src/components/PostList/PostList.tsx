import React from "react";
import PostCard from "../postCard/PostCard"; // Importing the PostCard component
import { PostProps } from "@/types/types"; // Importing the PostProps type from types/types.ts

// Function to fetch data asynchronously from an API
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Component to display a list of posts
const PostList = async () => {
  // Fetching data and waiting for the promise to resolve 
  const data: PostProps[] = await getData(); //const data, is being typed checked by PostProps
  
  return (
    <div className="postList">
      {/* Rendering PostCard component for each post */}
      {data.map((post) => (
        <PostCard key={post.id} {...post} /> // Spread operator used to pass all properties of post as props to PostCard
      ))}
    </div>
  );
};



export default PostList; // Exporting the PostList component as default
