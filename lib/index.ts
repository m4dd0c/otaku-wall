import axios, { AxiosError } from "axios";

export const server =
  process.env.EXPO_PUBLIC_API_URL || "git://api.nekosapi/com";
console.log({ server });

export const instance = axios.create({
  baseURL: `${server}/v3`,
});

instance.interceptors.response.use(
  (res) => res,
  (err): Promise<string> => {
    // error handling
    if (err instanceof AxiosError) {
      // axios error message
      console.error("Network error", {
        error: err?.response?.data,
        status: false,
      });
    } else {
      console.error("Unexpected error", {
        error: err.message,
        cause: err.cause,
      });
    }
    return Promise.reject(err);
  },
);
