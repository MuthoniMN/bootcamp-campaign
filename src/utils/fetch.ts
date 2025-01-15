export const fetchData = async (url: string) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`);

  if(response.ok){
    const data = response.json();

    return data;
  }

  return response;
}
