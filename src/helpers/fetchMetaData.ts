
const apiKey = import.meta.env.VITE_LINK_PREVIEW_API_KEY;

export const fetchMetaData = async (watchedUrl: string) => {
  if (watchedUrl && watchedUrl.startsWith("http")) {
    try {
      const response = await fetch(
        `https://api.linkpreview.net/?key=${apiKey}&q=${watchedUrl}`,
      );
      const data = await response.json();
      console.log(data);
      

      if (data.error) {
        console.error("Link Preview Error", data.description);
        throw new Error(data.description || 'API Error')
      }

      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
};
