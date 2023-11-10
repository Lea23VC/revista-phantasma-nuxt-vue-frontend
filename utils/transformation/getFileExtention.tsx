export function getFileExtension(filename: string) {
  // This will return an empty string if there is no extension
  return filename
    .slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2)
    .toLocaleUpperCase();
}
