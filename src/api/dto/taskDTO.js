export const locationsDTO = (locations) => {
  const locationsArr = [...locations];
  return locationsArr.map(
    ({ id, city, start_date, end_date, price, status, color }) => {
      return { id, city, start_date, end_date, price, status, color };
    }
  );
};

export const locationDTO = ({
  id,
  city,
  start_date,
  end_date,
  price,
  status,
  color,
}) => {
  return { id, city, start_date, end_date, price, status, color };
};
