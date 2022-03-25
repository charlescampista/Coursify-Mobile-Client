import { Media } from "../data/@types/Media";
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

export const getMediaPieceById = async (mediaId: number): Promise<Media> => {
  let response = await api.get(`/media/${mediaId}`);
  return convertObjectToMedia(response.data);
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
  return idsString;
}

function convertObjectToMedia(object: any): Media {
  return {
    id: object.id,
    title: object.title.rendered,
    details: object.media_details.sizes,
  } as Media;
}
