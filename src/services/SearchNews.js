import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=54055044f3fc45d2a9cb3464dfd2da8d",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getNews() {
    return apiClient.get();
  },
};
