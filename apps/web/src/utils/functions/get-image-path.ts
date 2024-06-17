export function getImagePath(imagePath) {
  if (imagePath) {
    const correctImagePath = imagePath.replace(/\\/g, "/");
    return (
      `${import.meta.env.VITE_API_URL}/${correctImagePath}` ??
      `http://localhost:7000/${correctImagePath}`
    );
  }
}
