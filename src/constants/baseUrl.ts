export const BaseUrl: string = 'https://staging.qfxcinemas.com:2005/';
export const ThumbNailUrl = (id: any) => {
  `https://staging.qfxcinemas.com:2005/api/public/ThumbnailImage?eventId=${id}`;
};
