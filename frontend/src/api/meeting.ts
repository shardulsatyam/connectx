import { API } from "./auth";

export const createMeeting = (
  token: string,
  title: string
) => {
  return API.post(
    "/meeting/create",
    { title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getMyMeetings = (token: string) => {
  return API.get("/meeting/my-meetings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const joinMeeting = (
  meetingId: string,
  token: string
) => {
  return API.get(`/meeting/${meetingId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};