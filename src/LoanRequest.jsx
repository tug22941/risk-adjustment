import { useState, useEffect } from "react";
import LoanResponse from "./LoanResponse";

const LoanRequest = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [country, setCountry] = useState("");
  const [sendRequest, setSendRequest] = useState(false);
  const [loanRate, setLoanRate] = useState(0.0);

  const calculateLoan = () => {
    if (creditScore > 800) {
      if (loanAmount > 50000) {
        setLoanRate(0.0225);
      } else if (loanAmount > 0) {
        setLoanRate(0.02);
      }
    } else if (creditScore > 700) {
      if (loanAmount > 50000) {
        setLoanRate(0.0325);
      } else if (loanAmount > 0) {
        setLoanRate(0.0275);
      }
    } else if (creditScore > 200) {
      if (loanAmount > 50000) {
        setLoanRate(0.045);
      } else if (loanAmount > 0) {
        setLoanRate(0.0425);
      }
    } else {
      setLoanRate(0.07);
    }
  };

  useEffect(() => {
    calculateLoan();
  }, [sendRequest]);

  return (
    <div>
      {!sendRequest ? (
        <div>
          <form action="">
            <h1>Loan Request</h1>
            <div>
              <label for="loan-amount">Loan amount</label>
              <input
                type="text"
                id="loan-amount"
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div>
              <label for="credit-score">Credit score</label>
              <input
                type="text"
                id="credit-score"
                onChange={(e) => setCreditScore(e.target.value)}
              />
            </div>
            <div>
              <label for="country">Country</label>
              <select id="country" onChange={(e) => setCountry(e.target.value)}>
                <option value="US">United States</option>
                <option value="AU">Australia</option>
                <option value="ENG">England</option>
                <option value="JP">Japan</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => {
                setSendRequest(true);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <LoanResponse loanAmount={loanAmount} creditScore={creditScore} country={country} loanRate={loanRate} />
        </div>
      )}
    </div>
  );
};
export default LoanRequest;
