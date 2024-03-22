import { Input } from '@/common/components/ui/input';
import React, { useState } from 'react'

const ImageToText = () => {
  type Image = null | { data: string; mimeType: string };
  const [image, setImage] = useState<Image>(null);


  const getBase64 = async (file: File): Promise<Image> => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = () => {
        const { result } = reader;

        if (typeof result === "string")
          resolve({ data: result, mimeType: file.type });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    // setOnCamera(0);
    const MB = 1e6;

    if (file) {
      // setPrompt("");


      const image: Image | null = await getBase64(file);

      setImage(image);
    }
    e.target.value = "";
  };

    return (
    <div className='container h-screen mx-auto'>
      <div className='mb-8 text-lg'>Image to text</div>

      <Input type='file' placeholder='woi'  accept=".jpeg,.jpg, .png, .webp " />
    </div>
  )
}

export default ImageToText;