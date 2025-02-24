import axios from "axios";


export async function createcompany(data1) {
  console.log(data1);
  const BASE_URL2 =
    "https://mycashback.mycashtest.com/api/companyRequest/create";
  try {
    const { data } = await axios.post(BASE_URL2, data1);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("company could not be created");
  }
}