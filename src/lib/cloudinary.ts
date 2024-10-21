// // Function to handle image upload to Cloudinary
// export const uploadImageToCloudinary = async (file: File): Promise<any> => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'create-list'); // Your unsigned upload preset from Cloudinary
  
//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dqiznt9zd/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to upload image');
//       }
  
//       return await response.json();
//     } catch (error) {
//       console.error('Error uploading to Cloudinary:', error);
//       throw error;
//     }
//   };
  