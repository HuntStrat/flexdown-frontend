import React from 'react';
import { ImagePreviewProps } from './types';

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrls, onRemove }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {imageUrls.map((url, index) => (
        <div key={url} className="relative">
          <img
            src={url}
            alt={`Preview ${index + 1}`}
            className="w-full h-32 object-cover rounded"
          />
          {onRemove && (
            <button
              onClick={() => onRemove(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;