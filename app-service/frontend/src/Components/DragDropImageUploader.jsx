import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function CustomPaging({ currentSlide, slideCount }) {
  return (
      <div
          style={{
              display: 'flex',
              justifyContent: 'center',
          }}
      >
          {Array.from({ length: slideCount }).map((_, index) => (
              <div
                  key={index}
                  style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: index === currentSlide ? 'green' : 'white',
                      marginRight: '5px',
                  }}
              />
          ))}
      </div>
  );
}





// function DragDropImageUploader() {
//     const [files, setFiles] = useState([]);
//     const [previewUrls, setPreviewUrls] = useState([]);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const fileInputRef = useRef(null); // Create a ref for the file input element

//     const onDragOver = (event) => {
//         event.preventDefault();
//     };

//     const onDrop = (event) => {
//         event.preventDefault();
//         const droppedFiles = event.dataTransfer.files;
//         if (droppedFiles.length > 0) {
//             const newFiles = Array.from(droppedFiles);
//             setFiles([...files, ...newFiles]);
//             updatePreviews(newFiles);
//         }
//     };

//     const onFileChange = (event) => {
//         const newFiles = Array.from(event.target.files);
//         setFiles([...files, ...newFiles]);
//         updatePreviews(newFiles);
//     };

//     const updatePreviews = (newFiles) => {
//       const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
//       console.log('New Preview URLs:', newPreviewUrls);
//       setPreviewUrls([...previewUrls, ...newPreviewUrls]);
//   };
  

//     const sendFilesToServer = () => {
//         const formData = new FormData();
//         files.forEach(file => formData.append('files', file));
        
//         fetch('http://127.0.0.1:5000/upload', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => {
//             console.log('Files uploaded successfully.');
//         })
//         .catch(error => {
//             console.error('Error uploading files:', error);
//         });
//     };


//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     afterChange: setCurrentSlide, // Update currentSlide state after slide change
// };

//     return (
//         <>
//             <div className='font-bold text-center text-white text-4xl' >
//                 <h1>Witness Focal.AI in Action</h1>
//             </div>
//             <div
//                 className="drag-drop-area"
//                 onDragOver={onDragOver}
//                 onDrop={onDrop}
//                 style={{ border: files.length > 0 ? '2px dashed #fff' : '2px dashed #fff' }}
//             >
//                 <input
//                     type="file"
//                     onChange={onFileChange}
//                     style={{ display: 'none' }}
//                     ref={fileInputRef} // Assign the ref to the file input element
//                     multiple // Allow multiple file selection
//                 />
//                 {files.length > 0 ? (
//                     <Slider {...sliderSettings}>
//                         {previewUrls.map((previewUrl, index) => (
//                         <div key={index}>
//                         <img src={previewUrl} alt={`Preview ${index}`} className="preview-image" />
//                         </div>
//                       ))}

//                     </Slider>
//                 ) : (
//                     <p className='text-white'>Drag and drop images here, or click to select files.</p>
//                 )}
//                   <CustomPaging currentSlide={currentSlide} slideCount={files.length} />
              
//                 <div className="button-container" style={{ display: 'flex', justifyContent: 'center', gap: '15px'  }}>
//     <button sx={{mr:'5%'}} onClick={() => fileInputRef.current.click()} className="button-85 mt-6">Select files</button>
//     <button onClick={sendFilesToServer} className="button-85 mt-6" >Upload files</button>
// </div>

              
//             </div>
//         </>
//     );
// }

// export default DragDropImageUploader;










function DragDropImageUploader() {
    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const fileInputRef = useRef(null);

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles([...files, ...newFiles]);
            updatePreviews(newFiles);
        }
    };

    const onFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles([...files, ...newFiles]);
        updatePreviews(newFiles);
    };

    const updatePreviews = (newFiles) => {
        const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
        console.log('New Preview URLs:', newPreviewUrls);
        setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    };

    const sendFilesToServer = () => {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));
        
        fetch('http://43.205.241.109/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            console.log('Files uploaded successfully.');

            alert("Files Uploaded Successfully")
        })
        .catch(error => {
            console.error('Error uploading files:', error);
        });
    };

    const sliderSettings = {
        dots: false, // Enable dot indicators for navigation
        infinite: previewUrls.length > 1, // Only loop if more than one image
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: setCurrentSlide
        
    };

    return (
        <>
            <div className='font-bold text-center text-white text-4xl'>
                <h1>Witness Focal.AI in Action</h1>
            </div>
            <div
                className="drag-drop-area"
                onDragOver={onDragOver}
                onDrop={onDrop}
                style={{ border: files.length > 0 ? '2px dashed #fff' : '2px dashed #fff' }}
            >
                <input
                    type="file"
                    onChange={onFileChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    multiple
                />
                {files.length > 0 ? (
                    <Slider {...sliderSettings}>
                        {previewUrls.map((previewUrl, index) => (
                        <div key={index}>
                        <img src={previewUrl} alt={`Preview ${index}`} className="preview-image" />
                        </div>
                      ))}
                    </Slider>
                ) : (
                    <p className='text-white'>Drag and drop images here, or click to select files.</p>
                )}
                <CustomPaging currentSlide={currentSlide} slideCount={files.length} />
                <div className="button-container" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop:'3%',marginBottom:'3%' }}>
                    <button onClick={() => fileInputRef.current.click()} className="button-85 mt-6">Select files</button>
                    <button onClick={sendFilesToServer} className="button-85 mt-6">Upload files</button>
                </div>
            </div>
        </>
    );
}

export default DragDropImageUploader;







