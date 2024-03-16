import AccountPlanDetail from "@/modules/account/components/AccountPlanDetail";
import AccountPlanList from "@/modules/account/components/AccountPlanList";

const AccountSubscription = () => {
  return (
    <div className="container mx-auto mt-16 lg:mt-4 lg:px-12">
      <AccountPlanDetail />
      <AccountPlanList />
    </div>
  );
};

export default AccountSubscription;
