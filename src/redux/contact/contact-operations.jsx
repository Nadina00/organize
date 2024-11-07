import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000";

const contactsList = createAsyncThunk("contacts/contactsList", async () => {
  try {
    const data = await axios.get("/contact")
    console.log(data.data.result)
    return data.data.result;
  } catch (error) {
    console.error(error);
  }
});

const contactsAdd = createAsyncThunk(
  "contacts/contactsAdd",
  async (credential) => {
    try {
      console.log(credential);
      const { data } = await axios.post("/contact", credential);

      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
const contactsDel = createAsyncThunk("contacts/contactsDel", async (id) => {
  console.log(id)
  try {
    const { data } = await axios.delete(`/contact/${id}`);
    console.log(data.result);
    return data.result;
  } catch (error) {
    console.error(error);
  }
});

const contactsOperations = {
  contactsDel,
  contactsAdd,
  contactsList
};

export default contactsOperations;
