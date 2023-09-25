import { useFetchData } from "../../hooks/useFetchData";
import "./currency.css";

export const Currency = () => {
  const apiEndPoint = "https://api.exchangerate.host/latest";

  const { data: initialData, isLoading, isError } = useFetchData(apiEndPoint);

  if (isLoading) {
    return <p> Loading... </p>;
  }

  if (isError) {
    return <p>Error fetching data or no data available</p>;
  }

  return (
    <>
      <p> CURRENCY EXCHANGE </p>;
      <select className="mt-12 currency-select">
        {Object.keys(initialData?.rates).map((currency, key) => (
          <option key={key}>{currency}</option>
        ))}
      </select>
    </>
  );
};
