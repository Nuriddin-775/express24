import axios from 'axios';

export const GetShops = async () => {
  const { data } = await axios.get(
    `https://api.express24.uz/client/v5/catalog/stores?limit=20&rootCategoryId=1`
  );

  return data?.list;
};
