import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/contacts";

export async function getContactsFromDb() {
  try {
    const { data } = await axios.get();
    return data;
  } catch (error) {
    console.error(error);
  }
}
// export async function setContactsFromDb(data) {
//   try {
//     await axios.post(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// setContactsFromDb({
//   name: "Homer",
//   number: "123-321",
//   id: 2,
// });
