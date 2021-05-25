import React, { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import cloudinaryClient from "../libs/cloudinaryClient";
import Progress from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./style.css";
const nooped = (fn) => (typeof fn === "function" ? fn : () => {});

function DropzoneCloudinary({
  dropzoneOptions,
  onComplete,
  onError,
  onProgress,
  cloudinaryConfig,
  className,
  children,
}) {
  onComplete = nooped(onComplete);
  onError = nooped(onError);
  onProgress = nooped(onProgress);

  const _cloudinaryConfig = {};
  Object.assign(
    _cloudinaryConfig,
    {
      apiKey: "",
      apiSecret: "",
      cloudName: "",
      public_id: "",
      format: "",
      upload_preset: "",
    },
    cloudinaryConfig
  );

  console.log(_cloudinaryConfig);

  const [progress, setProgress] = useState(0);
  const handleFileDrop = useCallback((acceptedFiles) => {
    setProgress(0);
    const uploadClient = cloudinaryClient({
      ..._cloudinaryConfig,
      onUploadProgress: (progress) => {
        setProgress(progress);
        onProgress(progress);
      },
    });
    uploadClient(
      acceptedFiles[0],
      _cloudinaryConfig.public_id,
      _cloudinaryConfig.upload_preset
    )
      .then(onComplete)
      .catch(onError);
  });
  const _dropzoneOptions = Object.assign(
    { multiple: false },
    dropzoneOptions || {}
  );
  return (
    <>
      <Dropzone onDrop={handleFileDrop} {..._dropzoneOptions}>
        {({ getRootProps, getInputProps }) => (
          <section className={`dropzone-cloudinary ${className || ""}`}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {children || (
                <>
                  <p>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C8.55229 0 9 0.447715 9 1V15C9 15.5523 8.55229 16 8 16C7.44772 16 7 15.5523 7 15V1C7 0.447715 7.44772 0 8 0Z"
                        fill="#91796B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H1C0.447715 9 0 8.55229 0 8Z"
                        fill="gray"
                      />
                    </svg>
                  </p>
                  <p>
                    Drag file here <br /> Or <br /> Click to select
                  </p>
                </>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      {(progress || "") && (
        <Progress
          percent={progress * 100}
          status={progress < 1 ? "active" : "success"}
        />
      )}
    </>
  );
}

export default DropzoneCloudinary;
