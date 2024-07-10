import AccountFreePlanTable from "@/modules/account/components/AccountFreePlanTable";

const HomeStudent = () => {
  return (
    <div className="container mx-auto p-8 px-4 lg:px-0">
      <h3 className="text-3xl text-center font-bold mb-4">
        Are you a student?
      </h3>
      <div className="text-xl text-center mb-8">
        Enjoy our Application for free!
      </div>

      <div className="lg:w-1/2 mx-auto">
        <AccountFreePlanTable />
      </div>
    </div>
  );
};

export default HomeStudent;
