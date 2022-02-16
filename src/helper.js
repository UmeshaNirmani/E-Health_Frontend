import CryptoJS from "crypto-js";

//password encryption
export const CryptoPassword = (value) => {
  return CryptoJS.SHA256(value).toString();
};
