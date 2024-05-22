// components/uppy.tsx
import React from "react";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react"; // Commented out temporarily
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const uppy = new Uppy({
  autoProceed: false,
  restrictions: {
    maxNumberOfFiles: 1,
  },
});

const UppyComponent: React.FC = () => {
   return <Dashboard uppy={uppy} />; // Commented out temporarily
  return null; // Return null temporarily to disable rendering
};

export default UppyComponent;
