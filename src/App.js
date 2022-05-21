import React from "react";
import "./App.css";
import PayPalBtn from "./components/PayPalBtn";

const paypalSubscribe = (data, actions) => {
  console.log(data);

  return actions.subscription.create({
    plan_id: "P-01L188882B7028404MKCWDFI",
    custom_id: "6269ce496cd810875830d092",
  });
};

const paypalOnError = (err) => {
  console.log("Error");
  console.log(err);
};

const paypalOnApprove = (data, detail) => {
  console.log("Payapl approved");
  console.log(data);
  console.log(detail);
};

function App() {
  return (
    <div className="App">
      <PayPalBtn
        currency="GBP"
        createSubscription={paypalSubscribe}
        onApprove={paypalOnApprove}
        catchError={paypalOnError}
        onError={paypalOnError}
        onCancel={paypalOnError}
      />
    </div>
  );
}

export default App;
