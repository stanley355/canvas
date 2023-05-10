import React from "react";
import Router from "next/router";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const handleLogin = async (event: React.FormEvent) => {
  event.preventDefault();
  const target = event.target as any;
  const email = target.email.value;
  const password = target.password.value;

  console.log(email, password);

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/login/",
    },
    data: {
      email,
      password,
    },
  };

  const { data } = await axios(axiosConfig);
  if (data && data.token) {
    Cookies.set("token", data.token);
    Router.push("/");
    return "";
  } 

  if (data && data.error) {
    toast.error(data.message);
    return "";
  }

  toast.error("Something went wrong, please try again");
  return "";
};
