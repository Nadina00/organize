import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import currencyOperations from "../../redux/currency/currency-operations";
import { currencyList } from "../../redux/currency/currency-select";

export const Currency = () => {
  const dispatch = useDispatch();
  const currency = useSelector(currencyList);

  const USD = 1 / currency.USD;
  const EUR = 1 / currency.EUR;

  useEffect(() => {
    dispatch(currencyOperations.currencyList());
  }, [dispatch]);

  return (
    <div>
      <h2>Exchange rates</h2>
      <p>USD: {USD.toFixed(2)} UAH</p>
      <p>EUR: {EUR.toFixed(2)} UAH</p>
    </div>
  );
};
