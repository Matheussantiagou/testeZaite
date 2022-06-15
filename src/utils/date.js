export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 1900; i <= currentYear; i++) {
    years.push({ value: i, label: i });
  }
  return years.reverse();
};

export const getMonthOfYear = () => {
  const monthNames = [
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
  return monthNames.map((month, index) => ({ value: index, label: month }));
};

export const getDaysOfMonth = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push({ value: i, label: i });
  }
  return days;
};
