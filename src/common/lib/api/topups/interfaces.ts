export interface ITopup {
  id: string;
  user_id: string;
  created_at: string;
  topup_amount: number;
  paid: boolean;
  topup_type: string;
}

export enum PremiumTopupDuration {
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  HalfYearly = "HalfYearly",
}
