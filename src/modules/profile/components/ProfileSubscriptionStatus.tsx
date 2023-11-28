import { IProfile } from "@/pages/profile";
import ProfileNoSubscriptionStatus from "./ProfileNoSubscriptionStatus";
import ProfileTimelySubscriptionStatus from "./ProfileTimelySubscriptionStatus";
import ProfilePayGoSubscriptionStatus from "./ProfilePayGoSubscriptionStatus";

const ProfileSubscriptionStatus = (props: IProfile) => {
  const { user, subscription } = props;

  if (subscription?.id) {
    return (
      <div className="border-y border-blue-900 py-4 my-4">
        <ProfileTimelySubscriptionStatus subscription={subscription} />
      </div>
    );
  }

  if (user?.balance > 0) {
    return <div className="border-y border-blue-900 py-4 my-4">
      <ProfilePayGoSubscriptionStatus user={user} />
    </div>;
  }

  return (
    <div className="border-y border-blue-900 py-4 my-4">
      <ProfileNoSubscriptionStatus />
    </div>
  );
};

export default ProfileSubscriptionStatus;
