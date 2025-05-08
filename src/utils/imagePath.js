/**
 * Helper function to get the correct image path for both development and production
 * @param {string} path - The path to the image relative to the public directory
 * @returns {string} The full image path
 */
export function getImagePath(path) {
  // Get the base URL from import.meta.env, fallback to empty string (for dev)
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Remove any leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Combine the base URL with the image path
  return `${baseUrl}${cleanPath}`;
}

