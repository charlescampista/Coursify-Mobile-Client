export interface Media {
  id: number;
  title: string; //accesable as title.rendered in the endpoint

  //accesable as media_details.sizes in the endpoint it is a lists of objects
  //thumbnail, medium, medium_large, large, post-thumbnail, full
  //the link to image is in sizes.<any above size>.file
  details: object;
}
