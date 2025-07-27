import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border border-neutral-700 rounded-md shadow p-4 space-y-2 max-w-sm">
        <h2 className="text-xl font-semibold">
            {title}
        </h2>
        <p className="text-gray-300">
            {content}
        </p>
        <span className="text-sm text-gray-500">
            User ID: {userId}
        </span>
    </div>
  );
};

export default PostCard;
