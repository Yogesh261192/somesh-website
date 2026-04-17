import { VirtualConsultationCheckout } from "@/components/virtual-consultation/checkout-page";
import { getCompanyLogoUrl, getDefaultServicePrice, getRazorpayMode } from "@/lib/razorpay";

export default function VirtualConsultationPage() {
  return (
    <VirtualConsultationCheckout
      companyLogoUrl={getCompanyLogoUrl()}
      defaultAmount={getDefaultServicePrice()}
      defaultServiceName="Expert Virtual Physio Consultation"
      paymentMode={getRazorpayMode()}
    />
  );
}
