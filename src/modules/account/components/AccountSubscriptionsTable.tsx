import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { TbCheck } from "react-icons/tb";

interface IAccountSubscriptionsTable {
  subscriptions: ISubscription[];
}

const AccountSubscriptionsTable = ({subscriptions}: IAccountSubscriptionsTable) => {

  return (
    <div>
      <div className="mb-2 text-lg font-semibold">Payment History</div>
      <table>
        <thead>
          <tr className="text-sm">
            <th className="p-1 border">No</th>
            <th className="p-1 border">Date</th>
            <th className="p-1 border">Type</th>
            <th className="p-1 border">Amount</th>
            <th className="p-1 border">Paid</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription: ISubscription, index: number) => (
            <tr key={subscription.id} className="text-sm">
              <td className="p-1 text-center border">{index + 1}</td>
              <td className="p-1 text-center border">
                {new Date(subscription.created_at).toLocaleString("id-ID")}
              </td>
              <td className="p-1 text-center border">
              Premium
              </td>
              <td className="p-1 text-center border">
                Rp {subscription.price}
              </td>
              <td className="p-1 border">
                <TbCheck className="mx-auto" /> {/* Only show paid topup from the backend */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountSubscriptionsTable;
