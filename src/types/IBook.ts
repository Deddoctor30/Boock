export interface IVolume {
   title: string
   authors: string[]
   publishedDate: string
   categories: string[]
   description: string
   imageLinks: {
      smallThumbnail: string
      thumbnail: string
      small: string
      medium: string
      large: string
   }
}

export interface IBook {
   kind: string
   id: string
   etag: string
   selfLink: string
   volumeInfo: IVolume
}