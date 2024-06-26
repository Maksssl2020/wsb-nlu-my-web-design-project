import React from "react";
import CreditCardIcon from "./icons/CreditCardIcon.jsx";
import PaypalIcon from "./icons/PaypalIcon.jsx";
import OnlineBankingPlIcon from "./icons/OnlineBankingPlIcon.jsx";
import BlikIcon from "./icons/BlikIcon.jsx";
import PaySafeCardIcon from "./icons/PaySafeCardIcon.jsx";
import PaymentMethodButton from "./PaymentMethodButton.jsx";
import UserIcon from "../account-tabs-panel/icons/UserIcon.jsx";
import { usePayments } from "./PaymentMethodButtonProvider.jsx";

function PaymentMethodButtonsSection() {
  const { setSelectedPaymentMethod } = usePayments();
  const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);

  const paymentMethodsData = [
    {
      icon: <CreditCardIcon />,
      text: "Credit Card",
    },
    {
      icon: <PaypalIcon />,
      text: "PayPal",
    },
    {
      icon: <OnlineBankingPlIcon />,
      text: "Online Banking PL",
    },
    {
      icon: <BlikIcon />,
      text: "Blik",
    },
    {
      icon: <PaySafeCardIcon />,
      text: "Paysafeard",
    },
  ];

  function handlePaymentMethodButtonClick(index, buttonTitle) {
    setActiveButtonIndex(index);
    setSelectedPaymentMethod(buttonTitle);
  }

  return (
    <div className="m-6 flex h-full flex-col text-custom-white">
      <div className="flex border-b-2 border-custom-emerald py-5 font-medium">
        <h2 className="text-xl">ORDER</h2>
        <p className="ml-auto flex items-center gap-2 text-sm">
          <UserIcon />
          <p>Frank2020</p>
        </p>
      </div>
      <div className="mt-10">
        <h2 className="mb-6 text-xl font-medium">PAYMENT METHODS</h2>
        <ul className="space-y-4">
          {paymentMethodsData.map((data, index) => (
            <li key={index}>
              <PaymentMethodButton
                paymentData={data}
                isActive={activeButtonIndex === index}
                onClick={() => handlePaymentMethodButtonClick(index, data.text)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentMethodButtonsSection;
