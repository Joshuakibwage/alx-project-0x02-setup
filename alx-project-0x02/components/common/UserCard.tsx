import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-neutral-800 rounded-md shadow p-4 space-y-2 max-w-sm">
        <h2 className="text-xl font-semibold">
            {name}
        </h2>
        <p className="text-gray-400">
            {email}
        </p>
        <p className="text-gray-300 text-sm">
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
    </div>
  );
};

export default UserCard;
