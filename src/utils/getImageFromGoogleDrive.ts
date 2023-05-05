const getImageFromGoogleDrive = (link: string): string => {
  const id = link.split("/").at(-2);
  return `https://drive.google.com/uc?export=view&id=${id}`;
};

export default getImageFromGoogleDrive;
