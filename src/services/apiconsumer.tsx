"use client";
import axios from "axios";

export async function apiConsumer<T = unknown>(url: string) {
  const { data } = await axios.get(url);
  return data;
}
