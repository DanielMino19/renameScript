import axios from 'axios';
import fs from 'fs';
require('dotenv').config();
import FormData from 'form-data';

export class CloudinaryService {
  cloudName = process.env.CLOUD_NAME;
  apiKey = process.env.API_KEY;
  uploadPreset = process.env.UPLOAD_PRESENT;
  folderPath = '../renameScript/public/products/';

  async uploadImage(imagePath: string): Promise<{ url: string; cloudinary_id: string }> {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));
    formData.append('upload_preset', this.uploadPreset);
    formData.append('api_key', this.apiKey);
    formData.append('folder', 'img_aluplast');

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return {
        url: response.data.secure_url,
        cloudinary_id: response.data.public_id,
      };
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw error;
    }
  }
}

