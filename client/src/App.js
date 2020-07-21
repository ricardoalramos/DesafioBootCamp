import React from 'react';
import M from 'materialize-css';
import { PERIODS, DESC_PERIODS } from './helpers/periods';
import { Header } from './components/Header';
import { MounthSelect } from './components/MounthSelect';
import './App.css';
import { Summary } from './components/Summary';
import { Filter } from './components/Filter';
import { Modal } from './components/Modal';
export default function App() {
  const [transactions, setTransactions] = React.useState([]);
  const [currentPeriod, setCurrentPeriod] = React.useState(PERIODS[0]);

  React.useEffect(() => {
    console.log(currentPeriod);
    const fetchTransactions = async () => {};
  }, [transactions, currentPeriod]);
  React.useEffect(() => {
    M.AutoInit();
  }, []);
  const handlePeriodChange = (event) => {
    setCurrentPeriod(event.target.value);
    //console.log('1' + currentPeriod);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <MounthSelect
          currentMonth={currentPeriod}
          months={PERIODS}
          descMonths={DESC_PERIODS}
          onChange={handlePeriodChange}
        />
        <Summary />

        <Filter />
      </div>
    </div>
  );
}
