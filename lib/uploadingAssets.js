"use client";

import { baseUrl } from "@/helpers/baseUrl";
import Cookies from "js-cookie";
import { decodeSession } from "./decodeSession";

export const uploadingAssets = async (endpoint, uploadedFile) => {
  const session = Cookies.get(`session`);
//   const sessionSig = Cookies.get("session.sig");
  const formData = new FormData();
  const sessionDecrypted = decodeSession(session);
  formData.append("image", uploadedFile);
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: "POST",
      headers: {
        // Cookie: `session=${session}; session.sig=${sessionSig}`,`
        Authorization: `Bearer ${sessionDecrypted?.payload?.token}`,
      },

      body: formData,
     });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
