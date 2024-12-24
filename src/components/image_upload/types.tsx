export interface ImageUploadProps {
    onUploadComplete?: (urls: string[]) => void;
    maxImages?: number;
  }
  
  export interface ImagePreviewProps {
    imageUrls: string[];
    onRemove?: (index: number) => void;
  }