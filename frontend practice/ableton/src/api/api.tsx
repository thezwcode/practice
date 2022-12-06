const API_KEY = "AIzaSyCvb_YJ363vUMA6JvkpHJ9-KjX2I-pixbE";
const FIREBASE_URL =
  "https://react-guide-b3165-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function GetPageMenuList(page: string) {
  const response = await fetch(`${FIREBASE_URL}/pageMenu/${page}.json`);
  const data = await response.json();
  if (data.error || data.error.message) {
    throw Error(data.error.message);
  }

  return [];
}

export async function AddPageMenuItem(requestData: {
  page: string;
  itemName: string;
  index?: number;
}) {
  const response = await (
    await fetch(`${FIREBASE_URL}/pageMenu/${requestData.page}.json`)
  ).json();
  if (!response.ok) {
    throw Error(response.error.message);
  }
  return null;
}
