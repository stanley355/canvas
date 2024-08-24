import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import ref
export const uploadFileToFirebase = async (storagePath: string, file: File) => {
  const storage = getStorage();
  const storef = ref(storage, storagePath);
  const result = await uploadBytes(storef, file);
  const downloadURL = await getDownloadURL(result.ref);

  return downloadURL;
};
