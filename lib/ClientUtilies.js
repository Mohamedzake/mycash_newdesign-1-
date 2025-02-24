"use server";

import { baseUrl } from "@/helpers/baseUrl";
import { cookies } from "next/headers";

export async function loginServer(formData) {
  try {
    const session = cookies().get("session")?.value;
    const sessionSig = cookies().get("session.sig")?.value;
    const response = await fetch(`${baseUrl}/auth/login`, {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
        Cookie: `session=${session}; session.sig=${sessionSig}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data, "tasda");
    if (data?.status === "error") {
      return data;
    }

    const Sesionsd = response.headers.get("set-cookie");
    if (Sesionsd !== "") {
      const Sesions = Sesionsd.split(";");

      const sessionSig = Sesions.filter((item) =>
        item.includes("session.sig")
      ).toString();
      const session = Sesions.filter((item) =>
        item.includes("session")
      ).toString();
      const expireDate = Sesions.filter((item) =>
        item.includes("expires")
      ).toString();
      if (response?.ok) {
        cookies().set("role", data?.data.role);
        cookies().set("session", `${session.split("=")[1]}`);
        cookies().set("session.sig", sessionSig.split(["="])[1]);
        cookies().set("expireDate", expireDate.split(",").pop());
      }
    }

    return data;
  } catch (error) {
    console.log("rrrrrrrrrrrrrrrrrrrrrr =>>", error);
    return {
      status: "error",
      error_en: "Error in Login",
      error_ar: "خطا في تسجيل الدخول",
    };
  }
}

/* 
uploadingAssets
-----------------
  Receive two arguments contains endpoint and file
  -
  endpoint: route of crud operation;
  uploadedFile: uploaded file;
  -
  Methods : 'POST

*/
