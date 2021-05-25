# react-dropzone-cloudinary

React component to upload files to cloudinary using drag and drop provided through [react-dropzone](https://react-dropzone.js.org)

## Installation

Install it from npm and include it in your React build process

```bash
npm install --save react-dropzone-cloudinary
```

or:

```bash
yarn add react-dropzone-cloudinary
```

## Usage

```jsx
import React, { useCallback } from "react";
import ReactDropzoneCloudinary from "react-dropzone-cloudinary";

// const onComplete = data=> console.log(data)

<ReactDropzoneCloudinary
  cloudinaryConfig={{
    apiKey: CLOUDINARY_API_KEY,
    apiSecret: CLOUDINARY_API_SECRET,
    cloudName: CLOUDINARY_CLOUD_NAME,
    public_id: "",
    format: "image",
    upload_preset: CLOUDINARY_UPLOAD_SECRET,
  }}
  onComplete={(data) => {
    console.log(data);
  }}
/>;
```

## License

MIT
