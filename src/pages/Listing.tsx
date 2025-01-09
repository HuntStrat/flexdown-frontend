
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

    const PropertyForm = () => {
    // Form state
    const [formData, setFormData] = useState<{ 
        category: string; 
        sale_type: string; 
        status: string; 
        payment_plan: string; 
        mode_of_payment: string; 
        address: string; 
        title: string; 
        agency: string; 
        city: string; 
        postal_code: string; 
        bedrooms: number; 
        bathrooms: number; 
        square_feet: number; 
        description: string; 
        price: number; 
        amenities: string[]; 
        secure_url: string[]; 
    }>({
        category: 'Commercial',
        sale_type: 'For Sale',
        status: 'Active',
        payment_plan: 'OneTime',
        mode_of_payment: 'Card',
        address: '',
        title: '',
        agency: '',
        city: '',
        postal_code: '',
        bedrooms: 0,
        bathrooms: 0,
        square_feet: 0,
        description: '',
        price: 0,
        amenities: [],
        secure_url: []
    });

    // Image upload state
    const [baseImage, setBaseImage] = useState<File | null>(null);
    const [additionalImages, setAdditionalImages] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [amenityInput, setAmenityInput] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
const navigate = useNavigate()
       // Modified uploadImage function with better error handling and logging
       const uploadImage = async (file: File): Promise<string> => {
        try {
            console.log('Starting upload for file:', file.name);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'flex_preset');
            
            const cloudName = 'dbqczgqir';
            const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
            
            console.log('Uploading to Cloudinary:', uploadUrl);
            
            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: formData,
            });
            
            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Upload failed: ${errorData}`);
            }

            const data = await response.json();
            console.log('Upload successful:', data);
            return data.secure_url;
        } catch (error: any) {
            console.error('Detailed upload error:', error);
            throw new Error(`Failed to upload ${file.name}: ${error.message}`);
        }
    };

    const handleBaseImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        setBaseImage(file);
        }
    }, []);

    const handleAdditionalImagesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        const remainingSlots = 5 - additionalImages.length; // Max 6 images total (1 base + 5 additional)
        const newFiles: File[] = (files as File[]).slice(0, remainingSlots);
        setAdditionalImages((prev: File[]) => [...prev, ...newFiles]);
    }, [additionalImages]);

    const handleRemoveImage = (index: number) => {
        setFormData(prev => ({
        ...prev,
        secure_url: prev.secure_url.filter((_, i) => i !== index)
        }));
    };

    // Form handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: type === 'number' ? Number(value) : value
        }));
    };

    const handleAmenityAdd = () => {
        if (amenityInput.trim()) {
        setFormData(prev => ({
            ...prev,
            amenities: [...prev.amenities, amenityInput.trim()]
        }));
        setAmenityInput('');
        }
    };

    const handleAmenityRemove = (index: number) => {
        setFormData(prev => ({
        ...prev,
        amenities: prev.amenities.filter((_, i) => i !== index)
        }));
    };

        // Modified form submission
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setIsUploading(true);
            setUploadProgress(0);
            navigate('/user-list')
    
            try {
                console.log('Starting form submission process');
                
                // Upload images first if there are any
                let imageUrls: string[] = [...formData.secure_url];
                
                if (baseImage || additionalImages.length > 0) {
                    console.log('Uploading images...');
                    
                    if (baseImage) {
                        const baseImageUrl = await uploadImage(baseImage);
                        imageUrls = [baseImageUrl];
                        setUploadProgress(50);
                    }
    
                    if (additionalImages.length > 0) {
                        const additionalImageUrls = await Promise.all(
                            additionalImages.map(uploadImage)
                        );
                        imageUrls = [...imageUrls, ...additionalImageUrls];
                    }
                    
                    setFormData(prev => ({
                        ...prev,
                        secure_url: imageUrls
                    }));
                }
    
                // Prepare final form data
                const finalFormData = {
                    ...formData,
                    secure_url: imageUrls
                };
    
                console.log('Submitting to backend:', finalFormData);
    
                // Submit to your backend endpoint
                // 'https://lockedin-flexdown.fly.dev/api/v1/property/add/hi/pub'
                const response = await fetch('https://lockedin-flexdown.fly.dev/api/v1/property/add/hi/pub', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmF0YXNoZXZza2FlbWlsaWphQGdtYWlsLmNvbSIsInJvbGUiOiJzZWxsZXIiLCJpZCI6MywiaWF0IjoxNzM2NDI4OTE4LCJleHAiOjE3MzY1MTUzMTh9.vUCF4N3Bp4CDZd8NIY_sFRqxxFkJmHk3gVEQyu574Rg'
                    },
                    body: JSON.stringify(finalFormData)
                });
    
                if (!response.ok) {
                    const errorData = await response.text();
                    throw new Error(`Submission failed: ${errorData}`);
                }
    
                const result = await response.json();
                console.log('Submission successful:', result);
                
                alert('Property listed successfully!');
                // Reset form
                setFormData({
                    category: 'Commercial',
                    sale_type: 'For Sale',
                    status: 'Active',
                    payment_plan: 'OneTime',
                    mode_of_payment: 'Card',
                    address: '',
                    title: '',
                    agency: '',
                    city: '',
                    postal_code: '',
                    bedrooms: 0,
                    bathrooms: 0,
                    square_feet: 0,
                    description: '',
                    price: 0,
                    amenities: [],
                    secure_url: []
                });
                setBaseImage(null);
                setAdditionalImages([]);
                
            } catch (error: any) {
                console.error('Detailed submission error:', error);
                alert(`Failed to submit form: ${error.message}`);
            } finally {
                setIsUploading(false);
                setUploadProgress(0);
            }
        };

    // Preview component for uploaded images
    const ImagePreview: React.FC<{ urls: string[], onRemove?: (index: number) => void }> = ({ urls, onRemove }) => (
        <div className="grid grid-cols-3 gap-4">
        {urls.map((url, index) => (
            <div key={url} className="relative">
            <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded"
            />
            {onRemove && (
                <button
                type="button"
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

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
            <h2 className="text-xl font-bold">Basic Information</h2>
            
            <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                >
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Apartments">Apartments</option>
                <option value="SingleHomes">Single Homes</option>
                <option value="Condos">Condos</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Sale Type</label>
                <select
                name="sale_type"
                value={formData.sale_type}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                >
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Sold">Sold</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Payment Plan</label>
                <select
                name="payment_plan"
                value={formData.payment_plan}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                >
                <option value="OneTime">One Time</option>
                <option value="Installment">Installment</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Mode of Payment</label>
                <select
                name="mode_of_payment"
                value={formData.mode_of_payment}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                >
                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
                </select>
            </div>
            </div>

            <div className="space-y-4">
            <h2 className="text-xl font-bold">Property Details</h2>
            
            <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                 placeholder="Property Title"
                className="w-full p-2 border rounded"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Agency</label>
                <input
                type="text"
                name="agency"
                value={formData.agency}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                </div>

                <div>
                <label className="block text-sm font-medium mb-1">Postal Code</label>
                <input
                    type="text"
                    name="postal_code"
                    value={formData.postal_code}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                </div>
            </div>
            </div>
        </div>

        {/* Property Specifications */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Property Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">Bedrooms</label>
                <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Bathrooms</label>
                <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Square Feet</label>
                <input
                type="number"
                name="square_feet"
                value={formData.square_feet}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
                />
            </div>
            </div>

            <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
            />
            </div>

            <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows={4}
                required
            />
            </div>
        </div>

        {/* Amenities */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Amenities</h2>
            
            <div className="flex gap-2">
            <input
                type="text"
                value={amenityInput}
                onChange={(e) => setAmenityInput(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Add an amenity"
            />
            <button
                type="button"
                onClick={handleAmenityAdd}
                className="px-4 py-2 bg-facebook text-black rounded hover:bg-blue-600"
            >
                Add
            </button>
            </div>

            <div className="flex flex-wrap gap-2">
            <ul className="space-y-2 mt-4">
    {formData.amenities.map((amenity, index) => (
      <li key={index} className="flex items-center space-x-2">
        <span>{amenity}</span>
        <button
          type="button"
          onClick={() => handleAmenityRemove(index)}
          className="text-red-500"
        >
          x
        </button>
      </li>
    ))}
  </ul>
</div>
        </div>

        {/* Image Upload */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Property Images</h2>
            
            <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">
                Base Image 
                </label>
                <input
                type="file"
                accept="image/*"
                onChange={handleBaseImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">
                Additional Images (Max 5)
                </label>
                <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleAdditionalImagesChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                disabled={additionalImages.length >= 5}
                />
            </div>
            </div>

            {formData.secure_url.length > 0 && (
            <ImagePreview
                urls={formData.secure_url}
                onRemove={handleRemoveImage}
            />
            )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
                <button
                    type="submit"
                    disabled={isUploading}
                    className="w-full md:w-auto px-6 py-3 bg-facebook text-black rounded hover:bg-blue-600 disabled:opacity-50 font-bold"
                    style={{ minWidth: '200px' }} // Ensure button has good width
                >
                    {isUploading ? (
                        <div className="flex items-center justify-center gap-2">
                            <span>Uploading... {uploadProgress}%</span>
                            <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
                        </div>
                    ) : (
                        'Submit Property Listing'
                    )}
                </button>
            </div>

            {/* Debug information (remove in production) */}
            <div className="mt-4 p-4 bg-gray-100 rounded">
                <h3 className="font-bold mb-2">Debug Info:</h3>
                <p>Base Image: {baseImage?.name || 'None'}</p>
                <p>Additional Images: {additionalImages.length}</p>
                <p>Uploaded URLs: {formData.secure_url.length}</p>
            </div>
        </form>
    );
    }
    ;

    export default PropertyForm;



