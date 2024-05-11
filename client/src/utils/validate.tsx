export const checkValidData = (
  email: string,
  password: string,
  name: string
) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      password
    );
  const isUserNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  const isImageFile = (fileName) => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"]; // Add more extensions if needed
    const extension = fileName.split(".").pop().toLowerCase();
    return imageExtensions.includes(extension);
  };

  if (!isUserNameValid) return "Enter a Valid User Name";
  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  if(!isImageFile) return "Upload a Valid File"

  return null;
};
