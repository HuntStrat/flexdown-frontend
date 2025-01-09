import React, { useState } from 'react';

const ImageUploader = ({ onUpload }: { onUpload: (images: string[]) => void }) => {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setImages(files);
      onUpload(files);
    }
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" multiple onChange={handleUpload} />
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} style={{ width: 100 }} />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
