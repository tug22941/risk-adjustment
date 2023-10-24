import { useEffect, useState } from "react";

const LoanResponse = (props) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (props.loanRate <= 0.0225) {
      setColor("#1e8dc9");
    } else if (props.loanRate <= 0.0325) {
      setColor("#1ec93a");
    } else if (props.loanRate <= 0.045) {
      setColor("#c9601e");
    } else {
      setColor("#c91e1e");
    }
  });

  return (
    <div>
      <h1>Loan Response</h1>
      <h6>Loan Amount: {props.loanAmount}</h6>
      <h6>Credit Score: {props.creditScore}</h6>
      <h6>Country: {props.country}</h6>
      <h6 style={{ backgroundColor: color }}>Loan Rate: {props.loanRate}</h6>
    </div>
  );
};

export default LoanResponse;
