export const uploadImageToImageBB = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  console.log("formdata", formData);
  console.log(file)


 
};
