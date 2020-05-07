import axios from "axios";
import sha1 from "sha1";

const createClient = (params = {}) => {
  Object.assign(params, {
    apiKey: "",
    apiSecret: "",
    cloudName: "",
  });

  const uploadToCloudinary = (
    file,
    public_id = "",
    format = "",
    upload_preset = ""
  ) => {
    const API_KEY = params.apiKey;
    const API_SECRET = params.apiSecret;
    const CLOUD_NAME = params.cloudName;
    const FORMAT = format;
    const PUBLIC_ID =
      public_id === "" ? file["name"].replace(/\.[^/.]+$/, "") : public_id;
    const UPLOAD_PRESET = upload_preset;

    const time = Date.now();
    const data = new FormData();

    data.append("file", file);
    data.append("timestamp", `${time}`);
    data.append("public_id", PUBLIC_ID);
    data.append("api_key", API_KEY);

    let signature = sha1(
      `public_id=${PUBLIC_ID}&timestamp=${time}${API_SECRET}`
    );

    if (UPLOAD_PRESET !== "") {
      signature = sha1(
        `public_id=${PUBLIC_ID}&timestamp=${time}&upload_preset=${UPLOAD_PRESET}${API_SECRET}`
      );
      data.append("upload_preset", UPLOAD_PRESET);
    }

    data.append("signature", signature);

    const uploadURL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${FORMAT}/upload`;

    return new Promise(function(resolve, reject) {
      axios
        .request({
          method: "post",
          url: uploadURL,
          data: data,
          onUploadProgress: (p) => {
            if (typeof params.onUploadProgress === "function") {
              params.onUploadProgress(Math.ceil(p.loaded / p.total));
            }
          },
        })
        .then(({ data }) => {
          if (typeof params.onUploadProgress === "function") {
            params.onUploadProgress(1);
          }
          return data;
        })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

  return uploadToCloudinary;
};

export default createClient;
