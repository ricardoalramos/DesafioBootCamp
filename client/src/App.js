import React from 'react';
import M from 'materialize-css';
import { PERIODS, DESC_PERIODS } from './helpers/periods';
import { Header } from './components/Header';
import { MonthSelect } from './components/MonthSelect';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Summary } from './components/Summary';
import { Filter } from './components/Filter';

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
        <Summary />
        <Filter />
        <MonthSelect
          currentMonth={currentPeriod}
          months={PERIODS}
          descMonths={DESC_PERIODS}
          onChange={handlePeriodChange}
        />
      </div>
    </div>
  );
}
