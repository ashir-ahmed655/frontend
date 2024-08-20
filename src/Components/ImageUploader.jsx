import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import OrbitSpinner from './loader'; // Import the OrbitSpinner component
import axios from 'axios';
import '@google/model-viewer';
import { saveAs } from 'file-saver';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('Astrophotography');
  const [finalImages, setFinalImages] = useState([]); // Initialize as an empty array
  const [gltfFile, setGltfFile] = useState(null);

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

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };





  const handleDenoise = () => {
    setLoading(true);
  
    // Prepare FormData
    const formData = new FormData();
  
    // Append files to the FormData object
    files.forEach((file) => {
      formData.append('files', file.file); // Adjusting this to use the file property
    });
  
    
      axios.post('http://127.0.0.1:5000/denoise', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
    
        const data = response.data;
        if (data.DENOISED_Image_URL) {
          // Set the image URL if Base64 data is not available
          setFinalImages(data.DENOISED_Image_URL);
        } else {
          console.error('No image data found in the response');
        }
      })
      .catch(error => {
        console.error('Error during stacking process:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };



  // const handleFocusStacking = () => {
  //   setLoading(true);
  //   // Prepare FormData
  //   const formData = new FormData();
    
  //   // Append files to the FormData object
  //   files.forEach((file) => {
  //     formData.append('files', file.file); // Adjusting this to use the file property
  //   });
  
  //   const url = mode === 'Astrophotography' 
      // ? 'http://127.0.0.1:5000/astrophotography/stack' 
  //     : 'http://127.0.0.1:5000/macrophotography/stack';
  
  //   // Send the files and mode to the backend using fetch
  //   fetch(url, {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   .then(response => {
  //     console.log(response);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //   //   return response.blob();
  //   // })
  //   // .then(blob => {
  //   //   console.log(blob);
  //   //   const imageUrl = URL.createObjectURL(blob);
  //   //   setFinalImages(imageUrl);
  //   //   setLoading(false);
  //   // })

  //   const data = await response.json();
  //   if (data.Stacked_Image_Base64) {
  //     setFinalImage(`data:image/png;base64,${data.Stacked_Image_Base64}`);
  //   } else {
  //     console.error('No image data found in the response');
  //   }

  //   .catch((error) => {
  //     console.error('Error during stacking process:', error);
  //     setLoading(false);
  //   });
  
  
  // };
  
  const handleFocusStacking = () => {
    setLoading(true);
  
    // Prepare FormData
    const formData = new FormData();
  
    // Append files to the FormData object
    files.forEach((file) => {
      formData.append('files', file.file); // Adjusting this to use the file property
    });
  
    const url = mode === 'Astrophotography' 
      ? 'http://127.0.0.1:5000/astrophotography/stack' 
      : 'http://127.0.0.1:5000/macrophotography/stack';
      axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
    
        const data = response.data;
        if (data.Stacked_Image_Base64) {
          // Set the Base64 data if available
          setFinalImages(`data:image/png;base64,${data.Stacked_Image_Base64}`);
        } else if (data.Stacked_Image_URL) {
          // Set the image URL if Base64 data is not available
          setFinalImages(data.Stacked_Image_URL);
        } else {
          console.error('No image data found in the response');
        }
      })
      .catch(error => {
        console.error('Error during stacking process:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  

  };


  const handle3DReconstruction = () => {
    setLoading(true);
  
    // Prepare FormData
    const formData = new FormData();
  
    // Append files to the FormData object
    files.forEach((file) => {
      formData.append('files', file.file); // Adjusting this to use the file property
    });
  
    
      axios.post('http://127.0.0.1:5000/macrophotography/3d-reconstruction', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        
        const data = response.data;

    // Set images and GLTF file
    const images = [];
    if (data.Depth_Map) images.push(data.Depth_Map);
    if (data.Stacked_Image) images.push(data.Stacked_Image);

    setFinalImages(images); // Set the images array
    setGltfFile(data.gltf_file || null); // Set the GLTF file URL if available
  })
  .catch(error => {
    console.error('Error during stacking process:', error);
  })
  .finally(() => {
    console.log()
    setLoading(false);
  });
  };





  
  // const handleDownloadFinalImages = () => {
  //   // Ensure finalImages is always an array
  //   const allFiles = Array.isArray(finalImages) ? [...finalImages] : [finalImages];
  
  //   if (gltfFile) {
  //     allFiles.push(gltfFile); // Add the gltfFile to the list if it exists
  //   }
  
  //   allFiles.forEach((file) => {
  //     axios({
  //       url: file,
  //       method: 'GET',
  //       responseType: 'blob', // Important to get the file as a Blob
  //     })
  //       .then((response) => {
  //         const url = window.URL.createObjectURL(new Blob([response.data]));
  
  //         // Extract the filename from the URL
  //         const filename = file.split('/').pop().split('\\').pop();
  
  //         const link = document.createElement('a');
  //         link.href = url;
  //         link.download = filename;
  //         document.body.appendChild(link);
  //         link.click();
  //         link.remove();
  //         window.URL.revokeObjectURL(url); // Clean up
  //       })
  //       .catch((error) => console.error('Error downloading the file:', error));
  //   });
  // };

  const handleDownloadFinalImages = () => {
    let urls=finalImages
    if (!Array.isArray(finalImages)) {
      urls = [finalImages]; // Ensure urls is an array
    }
  
    urls.forEach((url, index) => {
      const fileName = url.split('/').pop(); 
      saveAs(url, fileName);
    });

    if (gltfFile) {
      const fileName_gltf = gltfFile.split('/').pop(); 
      saveAs(gltfFile, fileName_gltf);
    }
  };


  // const handleDownloadFinalImages = () => {
  //   if (Array.isArray(finalImages)) {
  //     // Handle multiple images
  //     finalImages.forEach((image, index) => {
  //       const link = document.createElement('a');
  //       link.href = image;
  //       link.download = `final-image-${index + 1}.jpg`;
  //       link.click();
  //     });
  //   } else if (finalImages) {
  //     // Handle a single image
  //     const link = document.createElement('a');
  //     link.href = finalImages;
  //     link.download = `final-image.jpg`;
  //     link.click();
  //   }
  // };
  



  // const renderImages = () => {
    // if (Array.isArray(finalImages)) {
    //   return finalImages.map((image, index) => (
    //     <div key={index} className="relative text-center w-64 h-64 flex-shrink-0 mx-auto">
    //       <img
    //         src={image}
    //         alt={`final-processed-${index}`}
    //         className="w-full h-full object-cover rounded-lg shadow-md"
    //       />
    //     </div>
    //   ));
    // } else if (finalImages) {
    //   return (
    //     <div className="relative text-center w-64 h-64 flex-shrink-0 mx-auto">
    //       <img
    //         src={finalImages}
    //         alt="final-processed"
    //         className="w-full h-full object-cover rounded-lg shadow-md"
    //       />
    //     </div>
    //   );
    // }
    // return null;
  // };

  // const renderImages = () => {
  //   return (
  //     <div>
  //       {/* Render Images */}
  //       {finalImages.length > 0 && (
  //         <div className="image-gallery">
  //           {finalImages.map((image, index) => (
  //             <div key={index} className="relative text-center w-64 h-64 flex-shrink-0 mx-auto">
  //               <img
  //                 src={image}
  //                 alt={`image-${index}`}
  //                 className="w-full h-full object-cover rounded-lg shadow-md"
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       )}
  
  //       {/* Render GLTF File */}
  //       {gltfFile && (
  //         <div className="gltf-container">
  //           <model-viewer src={gltfFile} alt="GLTF Model" auto-rotate camera-controls />
  //         </div>
  //       )}
  //     </div>
  //   );
  // };



  const renderImages = () => {
    return (
      <div className="content-container">
        {/* Render Images */}
        {finalImages && (
          <div className="image-gallery">
            {Array.isArray(finalImages) ? (
              finalImages.map((image, index) => (
                <div key={index} className="image-item">
                  <img
                    src={image}
                    alt={`final-processed-${index}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              ))
            ) : (
              <div className="image-item">
                <img
                  src={finalImages}
                  alt="final-processed"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        )}
    
        {/* Render GLTF File */}
        {gltfFile && (
          <div className="gltf-container">
            <model-viewer src={gltfFile} alt="GLTF Model" auto-rotate camera-controls />
          </div>
        )}
      </div>
    );
    
    
  };
  





  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  const displayedFiles = files.slice(0, 20);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'Astrophotography' ? 'Macrophotography' : 'Astrophotography'));
  };

  return (
    <div className="bg-black flex flex-col items-center justify-center p-4 relative">
      <div className="bg-black border-2 border-yellow-600 p-8 rounded-lg shadow-lg w-full max-w-3xl text-center relative">
        <h1 className="text-2xl font-bold text-white mb-4">Image Uploader</h1>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <OrbitSpinner />
          </div>
        )}

        {!loading && (
          <>
            <div {...getRootProps()} className="border-4 border-dashed border-white p-6 bg-yellow-400 rounded-lg cursor-pointer">
              <input {...getInputProps()} />
              <p className="text-black">Drop files or click here</p>
            </div>

            {displayedFiles.length > 0 && (
              <div className="mt-4">
                <h2 className="text-xl font-bold text-white">Selected Files:</h2>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {displayedFiles.map(({ preview }, index) => (
                    <div
                      key={index}
                      className="relative text-center w-24 h-24 flex-shrink-0"
                    >
                      <img
                        src={preview}
                        alt={`preview-${index}`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="absolute top-1 right-1 bg-white p-1 rounded-full opacity-75 hover:opacity-100 transition-opacity"
                        title="Remove image"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <div className="bg-yellow-500 p-1 rounded-full flex items-center w-80 cursor-pointer relative mb-8">
                <div
                  className={`absolute w-1/2 h-full bg-black rounded-full transition-transform duration-300 ease-in-out ${
                    mode === 'Astrophotography' ? 'translate-x-0' : 'translate-x-full'
                  }`}
                ></div>
                <button
                  onClick={toggleMode}
                  className={`w-1/2 z-10 py-2 text-center font-bold transition-colors duration-300 ease-in-out ${
                    mode === 'Astrophotography' ? 'text-white' : 'text-black'
                  }`}
                >
                  Astrophotography
                </button>
                <button
                  onClick={toggleMode}
                  className={`w-1/2 z-10 py-2 text-center font-bold transition-colors duration-300 ease-in-out ${
                    mode === 'Macrophotography' ? 'text-white' : 'text-black'
                  }`}
                >
                  Macrophotography
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-center w-full space-x-8">
              {mode === 'Astrophotography' && (
                <>
                  <button
                    onClick={handleDenoise}
                    disabled={files.length === 0}
                    className="bg-yellow-500 hover:bg-yellow-300 transition-all ease-in-out text-black font-bold py-2 px-4 rounded w-1/2"
                  >
                    Denoise
                  </button>
                  <button
                    onClick={handleFocusStacking}
                    disabled={files.length === 0}
                    className="bg-yellow-500 hover:bg-yellow-300 transition-all ease-in-out text-black font-bold py-2 px-4 rounded w-1/2"
                  >
                    Focus Stacking
                  </button>
                </>
              )}
              {mode === 'Macrophotography' && (
                <>
                  <button
                    onClick={handleDenoise}
                    disabled={files.length === 0}
                    className="bg-yellow-500 hover:bg-yellow-300 transition-all ease-in-out text-black font-bold py-2 px-4 rounded w-1/3"
                  >
                    Denoise
                  </button>
                  <button
                    onClick={handleFocusStacking}
                    disabled={files.length === 0}
                    className="bg-yellow-500 hover:bg-yellow-300 transition-all ease-in-out text-black font-bold py-2 px-4 rounded w-1/3"
                  >
                    Focus Stacking
                  </button>
                  <button
                    onClick={handle3DReconstruction}
                    disabled={files.length === 0}
                    className="bg-yellow-500 hover:bg-yellow-300 transition-all ease-in-out text-black font-bold py-2 px-4 rounded w-1/3"
                  >
                    3D Reconstruction
                  </button>
                </>
              )}
            </div>

            {/* {finalImages.length > 0 && (
              <div className="mt-4">
                <h2 className="text-xl font-bold text-white">Final Processed Images:</h2>
                <div className="flex justify-center space-x-4">
                  {finalImages.map((image, index) => (
                    <div key={index} className="relative text-center w-64 h-64 flex-shrink-0 mx-auto">
                      <img
                        src={image}
                        alt={`final-processed-${index}`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleDownloadFinalImages}
                  className="mt-4 bg-white text-black font-bold py-2 px-4 rounded shadow"
                >
                  Download Final Images
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}; */}
 {/* Render the final image or images */}
 {(!loading && finalImages.length > 0) && (
              <div className="mt-4">
                <h2 className="text-xl font-bold text-white">Final Processed Images:</h2>
                <div className="flex justify-center space-x-4">
                  {renderImages()}
                </div>
                <button
                  onClick={handleDownloadFinalImages}
                  className="bg-yellow-500 hover:bg-yellow-300 transition-all ease-in-out text-black font-bold py-2 px-4 rounded w-1/3"
                >
                  Download Final Images
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
