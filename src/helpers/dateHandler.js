
export const getWeekDaysInRange = (startDate, endDate, weekendDays = [0, 6]) => {
  const date = new Date(startDate.getTime());

  const dates = [];
  while (date <= endDate) {
    if (weekendDays.indexOf(date.getDay()) === -1) {
      dates.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  };
  return dates;
}

//! Funcion que elimina las fechas del arreglo del rango a excluir del rango de fechas
export const excludeDatesInRange = (rangeDate, rangeToExclude) =>
  rangeDate.filter(date => {
    let isExcluded = rangeToExclude.some(excludeDate =>
      excludeDate.getYear() == date.getYear() &&
      excludeDate.getMonth() == date.getMonth() &&
      excludeDate.getDate() == date.getDate());
    if (!isExcluded)
      return date;
  });


export const getDatesInRange = (startDate, endDate) => {
  console.log(startDate);
  const date = new Date(startDate.getTime());
  // console.log(date);
  //! Exclude start date
  date.setDate(date.getDate() + 1);

  const dates = [];

  //! Exclude end date
  while (date < endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  };

  return dates;
}

