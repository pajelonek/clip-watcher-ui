import apiClient from "./apiClient";

export const getClips = () => apiClient.post("/clips", {
    "gameId": "509658",
    "first": "10"
});