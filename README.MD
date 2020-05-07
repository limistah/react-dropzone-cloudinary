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
  // apiKey="YOUR_API_KEY"
  apiKey="265769613316523"
  // apiSecret="YOUR_SECRET_KEY"
  apiSecret="FbiyB4q3347vFOqqsbZWg6RChLw"
  // cloudName="YOUR_CLOUD_NAME"
  cloudName="aleem"
  // public_id="YOUR_PUBLIC_ID"
  public_id=""
  // format="FILE_FORMAT"
  format="image"
  // upload_preset="YOUR_UPLOAD_PRESET"
  upload_preset="kngveu8v"
  onComplete={(data) => {
    console.log(data);
  }}
  // onComplete={onComplete}
/>;
```

## License

MIT
