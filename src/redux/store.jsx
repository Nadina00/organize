import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/news_slice";
import currencyReducer from "./currency/currency_slice";
import weatherReducer from "./weather/weather_slice";
import contactsReducer from "./contact/constact_slice";
import calendarReducer from "./calendar/calendar_slice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    currency: currencyReducer,
    weather: weatherReducer,
    contacts: contactsReducer,
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['calendar.events'], // Ігноруємо перевірку для `calendar.events`
      },
    }),
});
