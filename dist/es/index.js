function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import cloudinaryClient from "../libs/cloudinaryClient";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./style.css";

var nooped = function nooped(fn) {
  return typeof fn === "function" ? fn : function () {};
};

function DropzoneCloudinary(_ref) {
  var dropzoneOptions = _ref.dropzoneOptions,
      onComplete = _ref.onComplete,
      onError = _ref.onError,
      onProgress = _ref.onProgress,
      cloudinaryConfig = _ref.cloudinaryConfig,
      className = _ref.className,
      children = _ref.children;
  onComplete = nooped(onComplete);
  onError = nooped(onError);
  onProgress = nooped(onProgress);
  var _cloudinaryConfig = {};
  Object.assign(_cloudinaryConfig, {
    apiKey: "",
    apiSecret: "",
    cloudName: "",
    public_id: "",
    format: "",
    upload_preset: ""
  }, cloudinaryConfig);
  console.log(_cloudinaryConfig);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      progress = _useState2[0],
      setProgress = _useState2[1];

  var handleFileDrop = useCallback(function (acceptedFiles) {
    setProgress(0);
    var uploadClient = cloudinaryClient(_objectSpread({}, _cloudinaryConfig, {
      onUploadProgress: function onUploadProgress(progress) {
        setProgress(progress);
        onProgress(progress);
      }
    }));
    uploadClient(acceptedFiles[0], _cloudinaryConfig.public_id, _cloudinaryConfig.upload_preset).then(onComplete)["catch"](onError);
  });

  var _dropzoneOptions = Object.assign({
    multiple: false
  }, dropzoneOptions || {});

  return React.createElement(React.Fragment, null, React.createElement(Dropzone, _extends({
    onDrop: handleFileDrop
  }, _dropzoneOptions), function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return React.createElement("section", {
      className: "dropzone-cloudinary ".concat(className || "")
    }, React.createElement("div", getRootProps(), React.createElement("input", getInputProps()), children || React.createElement(React.Fragment, null, React.createElement("p", null, React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 0C8.55229 0 9 0.447715 9 1V15C9 15.5523 8.55229 16 8 16C7.44772 16 7 15.5523 7 15V1C7 0.447715 7.44772 0 8 0Z",
      fill: "#91796B"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H1C0.447715 9 0 8.55229 0 8Z",
      fill: "gray"
    }))), React.createElement("p", null, "Drag file here ", React.createElement("br", null), " Or ", React.createElement("br", null), " Click to select"))));
  }), (progress || "") && React.createElement(Progress, {
    percent: progress * 100,
    status: progress < 1 ? "active" : "success"
  }));
}

export default DropzoneCloudinary;