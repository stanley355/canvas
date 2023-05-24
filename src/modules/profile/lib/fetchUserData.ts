import axios from "axios";

export const fetchUserData = async (email: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `?email=${email}`,
    },
  };

  const { data } = await axios(axiosConfig);
  if (data?.id) {
    return data;
  }

  return null;
};
