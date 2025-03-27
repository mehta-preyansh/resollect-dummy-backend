import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Loan } from "./types";
import { getRandomBorrower } from "./utils";
import { chipTags } from "./constants";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: "*", 
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}))

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  const loans: Loan[] = [];
  const total = Math.floor(Math.random()*100) + 25;

  for (let i = 1; i <= total; i++) {
    loans.push({
      loanNumber: `LN25U09${i}`,
      loanType: ["Personal", "Home", "Auto", "Business", "Education"][
        Math.floor(Math.random() * 5)
      ] as Loan["loanType"],
      borrowerName: getRandomBorrower(),
      borrowerAddress: `${i * 5} Random Street, ${["NY", "CA", "TX", "FL", "IL"][Math.floor(Math.random() * 5)]
        }`,
      sanctionAmount: Math.floor(Math.random() * 500000) + 10000,
      currentDPO: Math.floor(Math.random() * 200),
      tenureMonths: Math.floor(Math.random() * 240) + 12,
      region: ["New York", "California", "Texas", "Florida", "Illinois"][
        Math.floor(Math.random() * 5)
      ],
      status: ["Approved", "Pending", "Rejected", "Active", "Closed"][
        Math.floor(Math.random() * 5)
      ] as Loan["status"],
      appliedDate: `202${Math.floor(Math.random() * 5)}-${Math.floor(
        Math.random() * 12
      )
        .toString()
        .padStart(2, "0")}-${Math.floor(Math.random() * 28)
        .toString()
        .padStart(2, "0")}`,
      auctionScheduled: Math.random() > 0.8, // 20% probability
      dmOrderIssued: Math.random() > 0.7, // 30% probability
      creditScore: Math.floor(Math.random() * 300) + 500,
    });
  }
  res.send({loans, total, chipTags});
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
