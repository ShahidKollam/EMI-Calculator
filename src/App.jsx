import { useState } from "react";
import "./App.css";
import { tenureData } from "./utils/constants";
const App = () => {
    const [cost, setCost] = useState(0);
    const [interest, setInterest] = useState(10);
    const [fee, setFee] = useState(1);
    const [downPayment, setDownPayment] = useState(0);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(0);
    const calculateEmi = () => {
      if (!cost) return;

      const loanAmt  = cost - downPayment
      const rateOfInterest =  interest/100
      const numOfYears = tenure/12
      
    };

    const updateEMI = (e) => {
        if (!cost) return;

        const dp = Number(e.target.value);
        setDownPayment(dp.toFixed(0));
    };

    const updateDownPayment = (e) => {
        if (!cost) return;

        const emi = Number(e.target.value);
        setEmi(emi.toFixed(0));
    };

    return (
        <div className="app">
            <span className="title" style={{ fontSize: 30, marginTop: 10 }}>
                EMI Calculator
            </span>
            <span className="title">Total cost of asset</span>
            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Total cost of asset" />

            <span className="title">Interest rate (in %)</span>
            <input
                type="number"
                value={interest}
                onChange={(e) => setCost(e.target.value)}
                placeholder="Interest rate (in %)"
            />

            <span className="title">Processing fee in (in %)</span>
            <input
                type="number"
                value={fee}
                onChange={(e) => setCost(e.target.value)}
                placeholder="Processing fee in (in %)"
            />

            <span className="title">Down Payment</span>
            <div>
                <input
                    type="range"
                    min={0}
                    max={cost}
                    value={downPayment}
                    className="slider"
                    onChange={updateEMI}
                    placeholder="Processing fee in (in %)"
                />
                <div className="labels">
                    <label>0%</label>
                    <b>{downPayment}</b>
                    <label>100%</label>
                </div>
            </div>

            <span className="title">Loan per Month</span>
            <div>
                <input
                    type="range"
                    min={calculateEmi(cost)}
                    max={calculateEmi(0)}
                    value={emi}
                    className="slider"
                    onChange={updateDownPayment}
                    placeholder="Processing fee in (in %)"
                />
                <div className="labels">
                    <label>{calculateEmi(cost)}</label>
                    <b>{downPayment}</b>
                    <label>{calculateEmi(0)}</label>
                </div>
            </div>
            <span className="title">Loan tenure (in months)</span>
            <div className="tenureContainer">
                {tenureData.map((t) => {
                    return (
                        <button className={`tenure ${tenure === t ? "selected" : ""}`} onClick={() => setTenure(t)}>
                            {t}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
