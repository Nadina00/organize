import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://organize-noda.onrender.com" || "http://localhost:5000";

const eventsList = createAsyncThunk("calendar/eventsList", async () => {
  try {
    const data = await axios.get("https://organize-noda.onrender.com/event")
    console.log(data.data.result)
    return data.data.result
    ;
  } catch (error) {
    console.error(error);
  }
})

const eventsAdd = createAsyncThunk("calendar/eventsAdd", async (credential) => {
  try {
    const serializedEvent = {
      ...credential,
      start: credential.start.toISOString(), // Перетворення в рядок ISO
      end: credential.end.toISOString(),
    };
    const { data } = await axios.post("https://organize-noda.onrender.com/event", serializedEvent);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
});
const eventsDel = createAsyncThunk("calendar/eventsDel", async (id) => {
  console.log(id)
  try {
    const { data } = await axios.delete(`https://organize-noda.onrender.com/event/${id}`);
    console.log(data.result);
    return data.result;
  } catch (error) {
    console.error(error);
  }
});

const calendarOperations = {
  eventsDel,
  eventsAdd,
  eventsList
};

export default calendarOperations;
