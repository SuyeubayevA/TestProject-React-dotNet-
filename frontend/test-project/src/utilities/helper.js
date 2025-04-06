import axios from "axios";

export const fetchData = async (filter) => {
  try {
    var response = await axios.get("http://localhost:5046/testmodel", {
      params: {
        search: filter?.search,
        sortItem: filter?.sortItem,
        sortOrder: filter?.sortOrder,
      },
    });

    return response.data.modelDtos;
  } catch (e) {
    console.error(e);
  }
};

export const postData = async (model) => {
  try {
    var response = await axios.post("http://localhost:5046/testmodel", model);

    return response.status;
  } catch (e) {
    console.error(e);
  }
};
