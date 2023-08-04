"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bfde0ef9-4754-431b-bf44-2c9d855e20bd");
  }, []);

  return null;
}