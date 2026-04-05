import { Metadata } from "next"
import ClientParkinsonsDisease from "./ClientParkinsonsDisease"

export const metadata: Metadata = {
  title: "Parkinson's Disease | Home Physiotherapy in Delhi NCR",
  description:
    "Learn how home physiotherapy for Parkinson's Disease in Delhi NCR supports balance, movement and daily living through expert home visits and personalised rehab.",
  keywords:
    "Parkinson's Disease physiotherapy, Parkinson's rehab Delhi NCR, home physiotherapy for Parkinson's, neurological physiotherapy Delhi, Parkinson's treatment at home",
  openGraph: {
    title: "Parkinson's Disease | Home Physiotherapy in Delhi NCR",
    description:
      "Discover safe, condition-focused home physiotherapy for Parkinson's Disease with in-home balance training and functional movement support.",
    type: "article",
  },
}

export default function ParkinsonsDiseasePage() {
  return <ClientParkinsonsDisease />
}
