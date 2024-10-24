import express from 'express';
import { CloudinaryService } from './cloudinary.service';
import { ApiService } from './api.service';
import { windowsData, doorsData, complementarySystemData,
  controlSolar, windowsFatherData, garageDoorsData, barData, doorsModel, bathroomPartitionData,
  resaleCurtainsData ,fachadasYLamas,
 } from './aluplast/catalog';
import path from 'path';
import fs from 'fs';

const app = express();


const cloudinaryService = new CloudinaryService();
const apiService = new ApiService();

const reportFilePath = './upload_report.txt';
fs.writeFileSync(reportFilePath, 'Reporte de errores en la subida de productos:\n\n');

function logErrorToFile(errorMessage: string) {
  fs.appendFileSync(reportFilePath, `${new Date().toISOString()} - ${errorMessage}\n`);
}



async function getCategoryIds(filters: string[], parentCategory: string): Promise<number[]> {
  const categoryIds: number[] = [];


  const parentCategoryId = await findOrCreateCategory(parentCategory);

  if (parentCategoryId) {
    categoryIds.push(parentCategoryId);
  }


  for (const filter of filters) {
    const childCategoryId = await findOrCreateCategory(filter, parentCategoryId);
    if (childCategoryId) {
      categoryIds.push(childCategoryId);
    }
  }

  return categoryIds;
}

async function findOrCreateCategory(name: string, parentCategoryId?: number): Promise<number | undefined> {
  const categoryData = {
    label: name,
    value: name,
    catalogId: 1,
    fatherCategoryId: parentCategoryId || null
  };

  try {

    const existingCategoryId = await apiService.findByName(name);
    if (existingCategoryId) {
      return existingCategoryId;
    } else {

      return await apiService.createCategory(categoryData);
    }
  } catch (error: any) {
    const errorMessage = `Failed to find or create category: ${name}. Error: ${error.message}`;
    console.error(errorMessage);
    logErrorToFile(errorMessage);
    return undefined;
  }
}



async function uploadProductImages(productId: string, images: string[]): Promise<{ url: string; cloudinary_id: string }[]> {
  const uploadedImages = [];

  const productFolderPath = path.join(cloudinaryService.folderPath, productId);

  for (const image of images) {

    const imagePath = path.join(productFolderPath, `${image}.png`);
    try {
      const uploadedImage = await cloudinaryService.uploadImage(imagePath);
      uploadedImages.push(uploadedImage);
    } catch (error: any) {
      const errorMessage = `Failed to upload image: ${imagePath} . Error: ${error.message}`;
      console.error(errorMessage);
      logErrorToFile(errorMessage);
    }
  }

  return uploadedImages;
}


async function uploadProducts(products: any[], parentCategory: string) {
  for (const product of products) {
    try {

      if (!product.name || !product.description || !product.filters) {
        logErrorToFile(`Product is missing required fields: ${product.name}`);
        continue;
      }

      const uploadedImages = await uploadProductImages(product.id, product.img || []);

      const categoryIds = await getCategoryIds(product.filters, parentCategory);

      const productData: any = {
        name: product.name,
        categoryIds,
        catalogId: 1,
        description: product.description,
        images: uploadedImages.map(image => ({
          url: image.url,
          cloudinary_id: image.cloudinary_id,
        })),
      };

      if (product.specs) {
        
        productData.productFeatures = productData.productFeatures || {};
      
       
        if (product.specs.features) {
          productData.productFeatures.specs = product.specs.features || [];
        } else {
          productData.productFeatures.specs = []
        }
      
        
        if (product.specs.description) {
          productData.productFeatures.items = product.specs.description.map((desc: any) => ({
            title: desc.title,
            text: desc.text,
          })) || [];
        } else {
          productData.productFeatures.items = []
        }
      }
      

      await apiService.createProduct(productData);
    } catch (error: any) {
      const errorMessage = `Error uploading product: ${product.name}. Error: ${error.message}`;
      console.error(errorMessage);
      logErrorToFile(errorMessage);
    }
  }
}


app.get('/upload-products', async (req, res) => {
  try {
    // await uploadProducts(windowsData, "aberturas"); Exito
    // await uploadProducts(doorsData,"aberturas");exito
    // await uploadProducts(controlSolar, "control-solar")  exito
    // await uploadProducts(windowsFatherData, "vidrios") exito 
    // await uploadProducts(garageDoorsData, "puertas-garaje") exito 
    // await uploadProducts(barData, "sistemas-complementarios") Extio

    // await uploadProducts(doorsModel, "aberturas") chequear errores 
    // await uploadProducts(bathroomPartitionData, "reventas") chequear errores 

    // await uploadProducts(resaleCurtainsData, "reventas") chequear un error 

    // await uploadProducts(fachadasYLamas, "fachadas-y-lamas") Exitooo

    res.send('Proceso de subida completado. Revisa el archivo de reporte si hay errores.');
  } catch (error: any) {
    res.status(500).send('Error en el proceso de subida de productos');
  }
});

const PORT = 4242;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});