import authApi from "./authApi";
import { getCurrentPosition } from "./geolocation";

// 심심한 상태의 강아지를 조회
export const getBoringDogs = async () => {
  try {
    const position = await getCurrentPosition();
    const response = await authApi.post("/dogs/boring", {
      latitude: position.latitude,
      longitude: position.longitude,
    });
    return response.data.dogs;
  } catch (error) {
    console.error(error.response);
    throw error;
  }
};
