import axios from "axios";
const API_URL = "https://restcountries.com/v3.1";

export async function getCountries({ commit }) {
  try {
    const response = await axios.get(`${API_URL}/all`);
    commit("setCountries", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleCountry({ commit }, countryName) {
  try {
    const response = await axios.get(`${API_URL}/name/${countryName}`);
    commit("setSingleCountry", response.data[0]);
    return response.data[0];
  } catch (err) {
    console.log(err);
  }
}
