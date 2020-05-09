# react-video-trimmer

React component to upload files to cloudinary using drag and drop provided with react-dropzone

Documentation and examples at https://react-dropzone.js.org. Source code at
https://github.com/react-dropzone/react-dropzone/.

## Installation

Install it from npm and include it in your React build process (using
[Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/),
etc).

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
  apiKey="YOUR_API_KEY"
  apiSecret="YOUR_API_SECRET"
  cloudName="YOUR_CLOUD_NAME"
  public_id="YOUR_PUBLIC_ID"
  format="FILE_FORMAT"
  upload_preset="YOUR_UPLOAD_PRESET"
  onComplete={onComplete}
/>;
```

## Props

- **className**: \_Proptypes.string
- **dropzoneConfig**: _Proptypes.object_ Options for the nested dropzone component.
- **onComplete**: _Proptypes.func_ Callback called after the upload has been completed. Receives the file data sent from cloudinary as argument.

- **onError**: _Proptypes.func_ Callback called whever an error is encountered during the upload. Receives a standard axios error return value.
- **onProgress**: _Proptypes.func_ Callback called while uploading. Receives a number 0-1 for the uploaded ratio.
- **cloudinaryConfig**: _Proptypes.object_ Options that are needed to make the upload to cloudinary. It requires the following keys:
  - **apiKey**: _Proptypes.required.string_ Cloudinary API KEY
  - **apiSecret**: _Proptypes.required.string_ Cloudinary API SECRET
  - **cloudName**: _Proptypes.required.string_ Cloudinary Account cloudname
  - **public_id**: _Proptypes.string_ Cloudinary Account public id
  - **format**: _Proptypes.string_ The file format for the uploaded files
  - **upload_preset**: _Proptypes.string_ Cloudinary Account Upload Preset

## License

MIT
