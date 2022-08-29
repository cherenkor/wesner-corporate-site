export const parseStringContent = (str: string) => {
  const result = str.match(/<link>(.*?)<\/link>/g);
  console.log(result);
};
