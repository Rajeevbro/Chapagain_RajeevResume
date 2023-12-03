export const downloadFile = async (url, filename) => {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "blob", // Important for handling binary data
    });

    // Create a blob from the response data
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    // Create a download link
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // Append the link to the document and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};
