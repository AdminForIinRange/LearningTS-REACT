import React from 'react';
import { PostProps } from "@/types/types";

export default function PostCard({ title, body }: PostProps) {
  return (
    <div className='postCard'>
      {title}
      {body}
    </div>
  );
}
