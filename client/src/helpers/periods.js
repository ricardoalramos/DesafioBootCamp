const CURRENT_YEAR = new Date().getFullYear();
const YEARS = [CURRENT_YEAR - 1, CURRENT_YEAR, CURRENT_YEAR + 1];
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DESC_MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const PERIODS = [];
const DESC_PERIODS = [];

YEARS.forEach((year) => {
  MONTHS.forEach((month) => {
    const period = `${year}-${month.toString().padStart(2, '0')}`;
    const desc_period = {
      value: `${year}-${month.toString().padStart(2, '0')}`,
      desc: `${DESC_MONTHS[month - 1]}/${year}`,
    };
    DESC_PERIODS.push(desc_period);
    PERIODS.push(period);
  });
});

export { PERIODS, DESC_PERIODS };
