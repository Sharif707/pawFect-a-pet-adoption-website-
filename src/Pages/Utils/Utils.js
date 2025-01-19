import axios from "axios";

export const uploadImageToImageBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  console.log("formdata", formData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
    formData
  );
  console.log(data);
  return data.data.display_url;
};

export const saveUser = async (user) => {
  console.log('saved user data', user)
  await axios.post(`${import.meta.env.VITE_API_URL}`, user)
};
