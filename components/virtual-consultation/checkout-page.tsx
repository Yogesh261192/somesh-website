import { Suspense } from "react";
import { VirtualConsultationCheckoutContent } from "./checkout-content";

export function VirtualConsultationCheckout(props: Parameters<typeof VirtualConsultationCheckoutContent>[0]) {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <VirtualConsultationCheckoutContent {...props} />
    </Suspense>
  );
}
