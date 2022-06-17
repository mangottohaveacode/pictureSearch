import axios from "axios";
import React from "react";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6SvhuYcuyyp5-klP7WGWPysPr5sFIDitVdBWH1VQdMQ",
    "Cache-Control": "No-Cache",
  },
});
