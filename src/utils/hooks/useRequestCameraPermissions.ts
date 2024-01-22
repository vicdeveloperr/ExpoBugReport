import { Camera } from "expo-camera";
import type { PermissionStatus } from "expo-camera";

export default async function useRequestCameraPermissions(): Promise<PermissionStatus> {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (permission == null) {
    const { status } = await requestPermission();
    return status;
  }

  return permission.status;
}
