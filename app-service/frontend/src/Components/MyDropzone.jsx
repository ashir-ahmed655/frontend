import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const MyDropzone = () => {
  const [files, setFiles] = useState([]);

  // Callback to handle the files dropped or selected
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length + files.length > 20) {
      alert('You can only upload up to 20 images.');
      return;
    }

    const updatedFiles = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
  }, [files]);

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      files.forEach(({ preview }) => URL.revokeObjectURL(preview));
    };
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',  // Accept only images
    multiple: true      // Allow multiple file uploads
  });

  // Limit the displayed previews to the first 20 images
  const displayedFiles = files.slice(0, 20);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div
        {...getRootProps()}
        className="p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-100"
      >
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p className="text-gray-700">Drop the files here...</p>
          ) : (
            <p className="text-gray-700">Drag 'n' drop some files here, or click to select files</p>
          )
        }
      </div>

      {/* Display selected files with previews */}
      {displayedFiles.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {displayedFiles.map(({ preview, file }, index) => (
            <div key={index} className="text-center">
              <img
                src={preview}
                alt={`preview-${index}`}
                className="w-24 h-24 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-gray-700">{file.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDropzone;


