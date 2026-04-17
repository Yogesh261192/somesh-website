# Razorpay Payment Page Setup

This project now uses a custom Razorpay Checkout flow for the Delhi Physio At Home virtual consultation payment page.

## Files Added Or Updated

- `app/virtual-consultation/page.tsx`
- `components/virtual-consultation/checkout-page.tsx`
- `app/api/razorpay/create-order/route.ts`
- `app/api/razorpay/verify/route.ts`
- `app/api/razorpay/webhook/route.ts`
- `lib/razorpay.ts`
- `app/success/page.tsx`

## How The Flow Works

1. Customer opens `/virtual-consultation`
2. Customer enters name, email, phone, consultation details, and amount
3. Frontend calls `/api/razorpay/create-order`
4. Server creates a Razorpay Order using your secret key
5. Razorpay Checkout opens in a secure modal
6. On success, frontend posts payment details to `/api/razorpay/verify`
7. Server verifies the Razorpay signature and optionally fetches payment status
8. Customer is redirected to `/success?payment_id=...`

## Environment Variables

Add these to `.env.local`:

```env
RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
RAZORPAY_KEY_SECRET=your_secret_here
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here
SERVICE_PRICE=399
COMPANY_LOGO_URL=https://www.delhiphysioathome.com/assets/logo.webp
```

Notes:

- The code also supports your existing `YOUR_RAZORPAY_KEY_ID` variable.
- `RAZORPAY_WEBHOOK_SECRET` is optional unless you enable the webhook route.
- `SERVICE_PRICE=1` is useful during quick test-mode checks.

## Razorpay Dashboard Setup

1. Log in to Razorpay Dashboard.
2. Open Test Mode first.
3. Copy your Test Key ID and Test Key Secret.
4. Paste them into `.env.local`.
5. Restart the dev server after changing env vars.
6. When you are ready for production, replace the test keys with live keys.
7. Ensure payment capture is configured on Razorpay Dashboard.

## Webhook Setup

Optional webhook endpoint:

```text
https://www.delhiphysioathome.com/api/razorpay/webhook
```

Recommended events:

- `payment.authorized`
- `payment.captured`
- `order.paid`

Important:

- Use a dedicated webhook secret in Razorpay.
- Put that value in `RAZORPAY_WEBHOOK_SECRET`.
- The webhook route validates `X-Razorpay-Signature` using the raw request body.

## Testing Instructions

1. Set Razorpay test keys in `.env.local`.
2. Keep `SERVICE_PRICE=1` or another small test amount.
3. Run:

```bash
npm run dev
```

4. Open `http://localhost:3000/virtual-consultation`
5. Fill the form and click the payment button.
6. Complete the transaction using Razorpay test mode methods.
7. Confirm redirection to `/success`.
8. Verify that the payment ID appears on the success page.

## Going Live Checklist

1. Replace test keys with live keys.
2. Set your actual consultation price in `SERVICE_PRICE`.
3. Confirm that your live payment methods are enabled on Razorpay.
4. Configure the webhook secret and live webhook URL.
5. Make one small live transaction and refund it after verification.
6. Check the Razorpay Dashboard to confirm the payment status is captured.

## Dynamic Pricing

The page supports:

- Direct amount input on the payment form
- Pre-filling via URL query params

Examples:

```text
/virtual-consultation?amount=499
/virtual-consultation?service=Expert%20Virtual%20Physio%20Consultation&amount=699
```

## Notes

- Razorpay secret keys are never exposed to the client.
- The browser only receives the public Key ID returned by the secure order-creation route.
- Signature verification happens before redirecting to the success page.
