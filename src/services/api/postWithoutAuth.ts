export const postWithoutAuth = async (url: string, data: any) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const response = await fetch(url, body);
    return response.json();
  } catch (err: any) {
    throw new Error(err);
  }
};
