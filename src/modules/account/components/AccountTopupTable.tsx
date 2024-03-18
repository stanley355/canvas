import { ITopup } from "@/common/lib/api/topups/interfaces";
import { TbCheck } from "react-icons/tb";

interface IAccountTopupTable {
  topups: ITopup[];
}

const AccountTopupTable = (props: IAccountTopupTable) => {
  const { topups } = props;

  // created_at: string
  // topup_amount: number
  // paid: boolean
  // topup_type: string
  return (
    <div>
      <div className="mb-2 text-2xl font-semibold">Payment History</div>
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
          {topups.map((topup: ITopup, index: number) => (
            <tr key={topup.id} className="text-sm">
              <td className="p-1 text-center border">{index + 1}</td>
              <td className="p-1 text-center border">
                {new Date(topup.created_at).toLocaleString("id-ID")}
              </td>
              <td className="p-1 text-center border">
                {topup.topup_type === "topup" ? "Pay as You Go" : "Premium"}
              </td>
              <td className="p-1 text-center border">
                Rp {topup.topup_amount}
              </td>
              <td className="p-1 border">
                <TbCheck className="mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTopupTable;
