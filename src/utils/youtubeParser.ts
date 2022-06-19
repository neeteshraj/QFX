/**
 * It takes a YouTube URL and returns the video ID
 * @param {string} url - The URL of the YouTube video.
 * @returns The youtube video id
 */
const youtubeParser = (url: string) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : undefined;
};

export default youtubeParser;
