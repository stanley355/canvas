import React from "react";
import { FaRegCircleUser, FaEnvelope } from "react-icons/fa6";
import { IUser } from "@/common/lib/api/users/userInterfaces";

interface IProfileIdentity {
  user: IUser;
}

const ProfileIdentity = (props: IProfileIdentity) => {
  const { user } = props;
  return (
    <div className="text-xl">
      <div className="flex items-center gap-2">
        <FaRegCircleUser className="text-blue-900" />
        <span className="font-bold">{user.fullname}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-blue-900" />
        <span className="text-lg">{user.email}</span>
      </div>
    </div>
  );
};

export default ProfileIdentity;
