export interface Loan {
  loanNumber: string;
  loanType: "Personal" | "Home" | "Auto" | "Business" | "Education";
  borrowerName: string;
  borrowerAddress: string;
  coBorrowerName?: string;
  coBorrowerAddress?: string;
  sanctionAmount: number;
  currentDPO: number; // Days Past Due
  tenureMonths: number;
  region: string;
  status: "Approved" | "Pending" | "Rejected" | "Active" | "Closed";
  appliedDate: string; // YYYY-MM-DD
  auctionScheduled?: boolean;
  dmOrderIssued?: boolean;
  creditScore: number;
}