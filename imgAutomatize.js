require('dotenv').config()
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

class ImgAutomatizeUploadService {

  constructor() {
    this.cloudName = process.env.CLOUD_NAME; // Cloudinary cloud name
    this.apiKey = process.env.API_KEY; // Cloudinary API key 
    this.uploadPreset = process.env.UPLOAD_PRESENT ; // Cloudinary upload preset
    this.supabaseUrl = process.env.SUPABASE_URL; // Supabase URL
    this.supabaseApiKey = process.env.SUPABASE_API_KEY; // Supabase API key
    this.folderPath = './public/imagesFelix'; // Carpeta de imágenes
  }

  async startScript() {
    try {
      console.log('Iniciando script...');
      const files = await this.readFolder(this.folderPath);
      console.log('Archivos encontrados:', files);
      for (const file of files) {
        console.log('Procesando archivo:', file);
        try {
          const imagePath = `${this.folderPath}/${file}`;
          const imageUrl = await this.uploadImage(imagePath);
          const productId = file.split('.')[0];
          console.log('Imagen cargada en Cloudinary:', imageUrl);
          await this.updateSupabase(productId, imageUrl);
          console.log('Supabase actualizado para el producto:', productId);
        } catch (error) {
          console.error(`Error al procesar el archivo ${file}:`, error);
        }
      }
      console.log('Script finalizado');
    } catch (error) {
      console.error('Error durante la ejecución del script:', error);
    }
  }

  readFolder(folderPath) {
    return new Promise((resolve, reject) => {
      fs.readdir(folderPath, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
  }

  async uploadImage(imagePath) {
    console.log('Subiendo imagen a Cloudinary...');

    try {
      const formData = new FormData();
      formData.append('file', fs.createReadStream(imagePath));
      formData.append('upload_preset', this.uploadPreset);
      formData.append('cloud_name', this.cloudName);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            'Authorization': `Basic ${Buffer.from(`${this.apiKey}:`).toString('base64')}`
          }
        }
      );

      console.log('Imagen cargada exitosamente en Cloudinary');
      return response.data.secure_url;
    } catch (error) {
      console.error('Error al cargar la imagen en Cloudinary:', error.response.data);
      throw error;
    }
  }

  async updateSupabase(productId, imgUrl) {
    console.log('Actualizando Supabase para el producto:', productId);
    const supabaseUrl = `${this.supabaseUrl}/rest/v1/products?id=eq.${productId}`;
    const updateData = { img: imgUrl };

    try {
      const response = await axios.patch(
        supabaseUrl,
        updateData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
            'apikey': this.supabaseApiKey,
            'Authorization': `Bearer ${this.supabaseApiKey}`
          }
        }
      );

      console.log('Supabase actualizado correctamente');
      return response.data;
    } catch (error) {
      console.error('Error al actualizar Supabase:', error);
      throw error;
    }
  }

}

const service = new ImgAutomatizeUploadService();
service.startScript();
