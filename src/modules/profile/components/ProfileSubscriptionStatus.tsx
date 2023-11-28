import { IProfile } from "@/pages/profile";
import ProfileNoSubscriptionStatus from "./ProfileNoSubscriptionStatus";
import ProfileTimelySubscriptionStatus from "./ProfileTimelySubscriptionStatus";

const ProfileSubscriptionStatus = (props: IProfile) => {
  const { user, subscription } = props;
  return (
    <div className="border-y border-blue-900 py-4 my-4">
      {/* <ProfileNoSubscriptionStatus /> */}
      {/*  */}
      <ProfileTimelySubscriptionStatus subscription={subscription} />
    </div>
  );
};

export default ProfileSubscriptionStatus;
