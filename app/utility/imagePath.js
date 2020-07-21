import settings from "../config/settings";

export function imagePath(imageUrl) {
  return `${settings.baseUrl}${imageUrl}`;
}
