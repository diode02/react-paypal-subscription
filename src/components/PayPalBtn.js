import { PayPalButton } from "react-paypal-button-v2";
import React from "react";

export function PayPalBtn(props) {
  const {
    amount,
    currency,
    createSubscription,
    onApprove,
    catchError,
    onError,
    onCancel,
  } = props;
  const paypalKey =
    "ASEd9d9mJnasnrpS_OveCyLmlLjjztQBWjByI2LkxS18OmSUmvQSMdJv81dU4T3L-WoATzKfQwOu2Tkw";
  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
      onApprove={(data, details) => onApprove(data, details)}
      onError={(err) => onError(err)}
      catchError={(err) => catchError(err)}
      onCancel={(err) => onCancel(err)}
      options={{
        clientId: paypalKey,
        vault: true,
      }}
      style={{
        shape: "rect",
        color: "blue",
        layout: "horizontal",
        label: "subscribe",
      }}
    />
  );
}

export default PayPalBtn;
