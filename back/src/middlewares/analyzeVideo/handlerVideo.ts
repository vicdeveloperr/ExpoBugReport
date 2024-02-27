import multer from "multer";

const upload = multer({ dest: "/workspaces/ChossApp/back/assets" });

export const handlerVideo = (name: string) => {
  const result = upload.single(name);

  return result;
};
