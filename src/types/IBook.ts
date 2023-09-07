export interface IBook {
   kind: string
   id: string
   etag: string
   selfLink: string
   volumeInfo: {
      title: string
      authors: string[]
      publishedDate: string
      categories: string[]
      imageLinks: {
         smallThumbnail: string
         thumbnail: string
      }
   }
}