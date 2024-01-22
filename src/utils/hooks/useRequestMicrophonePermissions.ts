import { Camera } from "expo-camera";
import type { PermissionStatus } from "expo-camera";

export default async function useRequestMicrophonePermissions(): Promise<PermissionStatus> {
  const [permission, requestPermission] = Camera.useMicrophonePermissions();

  if (permission == null) {
    const { status } = await requestPermission();
    return status;
  }

  return permission.status;
}
