"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { decodeSession } from "./decodeSession";
// import { redirect } from "next/dist/server/api-utils";

/* 
getOperation
-------------------------
 Receive two arguments for endpoint and reqOptions
 -
  endpoint: is a string which detect route of crud operation;
  reqOptions: is an object includes the options of your request such as 
  - cache
   next : {
    revalidate,
    tags,
   }
  --
  Note: this operation allow to fetch single item or many items
  By default here a cookies in headers
  Methods: GET
*/

export const getOperation = async (endpoint, reqOptions = undefined) => {
  const session = cookies()?.get(`session`)?.value;

  if (!session) {
    return;
  }

  const sessionDecrypted = decodeSession(session);

  try {
    const tempReqOptions =
      reqOptions !== undefined
        ? {
            ...reqOptions,
            headers: {
              ...reqOptions?.headers,
              Authorization: `Bearer ${sessionDecrypted?.payload?.token}`,
            },
          }
        : {
            headers: {
              Authorization: `Bearer ${sessionDecrypted?.payload?.token}`,
            },
          };

    const res = await fetch(process.env.BASE_URL + endpoint, tempReqOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Faild To Fetch",err);
  }
};

/* 
operationsServer
-----------------
  Receive an object argument contains endpoint and reqOptions and revalidation
  -
  endpoint: route of crud operation;
  payload: is an object includes method and data as a strings types
  revalidation: is an object contains tags (Array of Strings) or path (Strging)
  --
  Note: if delete operation you have to send method key only into payload object
  Methods: POST | PUT | DELETE

*/
export const operationsServer = async ({ endpoint, payload, revalidation }) => {
  console.log(payload,endpoint,'payload');
   const session = cookies().get(`session`).value;
   console.log(session,'asdsad');
  const sessionDecrypted = decodeSession(session);
  const tempOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionDecrypted?.payload?.token}`,
    },
    method: payload?.method,
    body: JSON.stringify(payload?.data),
    credentials: "include",
  };
  try {
    const response = await fetch(process.env.BASE_URL + endpoint, {
      ...tempOptions,
    });
    const data = await response.json();
    if (revalidation?.path) {
      revalidatePath(revalidation.path);
    }
    if (revalidation?.tags) {
      revalidateTag(revalidation.tags);
    }
    return data;
  } catch (err) {
    throw new Error("Faild To Fetch",err);
  }
};
