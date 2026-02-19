export const fetchMetaData = async (watchedUrl: string) => {
  if (watchedUrl && watchedUrl.startsWith("http")) {
    try {
      const response = await fetch(
        `https://api.linkpreview.net/?fields=image,description=${watchedUrl}`,
      );
      const data = await response.json();

      if (data.image) {
        return (data.image);
      }
    } catch (error) {
      if (error) throw new Error("Error fetching website image");
    }
  }
};
