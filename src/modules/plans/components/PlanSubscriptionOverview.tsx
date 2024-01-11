import { formatSubscriptionMonth } from "../lib/formatSubscriptionMonth";
import { formatSubscriptionStartDate } from "../lib/formatSubscriptionDate";
import { formatSubscriptionEndDate } from "../lib/formatSubscriptionDate";
import { calcSubscriptionCost } from "../lib/calcSubscriptionCost";

interface IPlanSubscriptionOverview {
  duration: string;
}

const PlanSubscriptionOverview = (props: IPlanSubscriptionOverview) => {
  const { duration } = props;
  return (
    <div className="border border-blue-900 rounded p-2 mt-4">
      <div className="text-center text-xl font-semibold mb-4">
        Paket Langganan
      </div>
      <div>
        Durasi:{" "}
        <span className="font-semibold">
          {" "}
          {formatSubscriptionMonth(duration)}{" "}
        </span>
      </div>
      <div>
        Harga:{" "}
        <span className="text-green-700 font-semibold">
          Rp{calcSubscriptionCost(duration)}
        </span>{" "}
      </div>
      <div>Tanggal Mulai: {formatSubscriptionStartDate()}</div>
      <div>Tanggal Berakhir: {formatSubscriptionEndDate(duration)}</div>
    </div>
  );
};

export default PlanSubscriptionOverview;
