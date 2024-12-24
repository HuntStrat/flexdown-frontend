    import React, { useState, useCallback } from 'react';
    import { uploadImage } from '../../utils/cloudinary';
    import ImagePreview from './image_preview';
    import { ImageUploadProps } from './types';

    const ImageUpload: React.FC<ImageUploadProps> = ({
    onUploadComplete,
    maxImages = 6
    }) => {
    const [baseImage, setBaseImage] = useState<File | null>(null);
    const [additionalImages, setAdditionalImages] = useState<File[]>([]);
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    const handleBaseImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        setBaseImage(file);
        }
    }, []);

    const handleAdditionalImagesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        if (files.length + additionalImages.length <= maxImages - 1) {
        setAdditionalImages(prev => [...prev, ...files]);
        }
    }, [additionalImages, maxImages]);

    const handleRemoveImage = useCallback((index: number) => {
        setImageUrls(prev => prev.filter((_, i) => i !== index));
    }, []);

    const handleUpload = async () => {
        if (baseImage) {
        try {
            setIsUploading(true);
            const baseImageUrl = await uploadImage(baseImage);
            const additionalImageUrls = await Promise.all(
            additionalImages.map(uploadImage)
            );
            const allUrls = [baseImageUrl, ...additionalImageUrls];
            setImageUrls(allUrls);
            onUploadComplete?.(allUrls);
        } catch (error) {
            console.error('Error uploading images:', error);
        } finally {
            setIsUploading(false);
        }
        }
    };

    return (
        <div className="space-y-4">
        <div className="space-y-2">
            <label className="block text-sm font-medium">
            Base Image (Required)
            <input
                type="file"
                accept="image/*"
                onChange={handleBaseImageChange}
                className="mt-1 block w-full"
            />
            </label>
        </div>

        <div className="space-y-2">
            <label className="block text-sm font-medium">
            Additional Images (Max {maxImages - 1})
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleAdditionalImagesChange}
                className="mt-1 block w-full"
                disabled={additionalImages.length >= maxImages - 1}
            />
            </label>
        </div>

        <button
            onClick={handleUpload}
            disabled={!baseImage || isUploading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
            {isUploading ? 'Uploading...' : 'Upload Images'}
        </button>

        {imageUrls.length > 0 && (
            <ImagePreview
            imageUrls={imageUrls}
            onRemove={handleRemoveImage}
            />
        )}
        </div>
    );
    };

    export default ImageUpload;