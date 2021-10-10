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

// export async function setContactsToDb(data) {
//   try {
//     console.log("object");
//     await axios.post(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

setContactsToDb({
  name: "New Lox",
  number: "123-321",
  id: 2,
});
