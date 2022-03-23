import { api } from "./api";

export const getAllMedia = async (quantityPerPage: number) => {
  return await api.get(`/media?per_page=${quantityPerPage}`);
};

export const getSpecificMedia = async (
  idsList: number[],
  quantityPerPage: number
) => {
  //Fix This Later Waste of time right now
  return await api.get(
    `/?per_page=${quantityPerPage}${
      idsList ? "&include=" + convertParamsToString(idsList) : ""
    }`
  );
};

export const getMediaPieceById = async (mediaId: number) => {
  return await api.get(`/media/${mediaId}`);
};

//Utilitary functions bellow
function convertParamsToString(idList: number[]) {
  let idsString = "";
  idList.map((value, index, array) => {
    idsString += value;
    let next = array[index + 1];
    if (!next) return;
    idsString += ",";
  });
  console.log(idsString);
  return idsString;
}
