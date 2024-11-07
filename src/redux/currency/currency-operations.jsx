import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const currencyList = createAsyncThunk("currency/currencyList", async () => {
  try {
    const { data } = await axios.get(
      "https://v6.exchangerate-api.com/v6/5481d082091d38b3b11aa21d/latest/UAH"
    );

    const USD = data.conversion_rates.USD;
    const EUR = data.conversion_rates.EUR;
    const currency = { USD, EUR };
    return currency;
  } catch (error) {
    console.error(error);
  }
});

const currencyOperations = {
  currencyList,
};

export default currencyOperations;
