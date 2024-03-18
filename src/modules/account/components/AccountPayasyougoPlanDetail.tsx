import { IUser } from "@/common/lib/api/users/interfaces"
import Link from "next/link";

interface IAccountPayasyougoPlanDetail {
  user: IUser
}

const AccountPayasyougoPlanDetail = (props: IAccountPayasyougoPlanDetail) => {
  const { user } = props;
  return (
    <div>
      <div className="mb-8 text-2xl font-bold border-b">Subscription</div>
      <div className="mb-4 text-xl font-bold">Plan Details</div>
      <div className="mb-4">
        <div className="mb-2 text-gray-500">Your Plan</div>
        <div className="flex items-center gap-12 mb-2">
          <div>Free Plan</div>
          <Link
            href={"/plans/"}
            className="font-bold text-blue-700 border-b border-b-transparent hover:border-b-blue-700"
          >
            Change
          </Link>
        </div>

        <div className="mb-2 text-gray-500">Pay as You Go Credit</div>
        <div>Rp {user.balance}</div>
      </div>

      <div className="w-full p-2 text-sm bg-blue-100 lg:w-1/2">
        Your credit amount will change according to your usage 
      </div>
    </div>
  )
}

export default AccountPayasyougoPlanDetail