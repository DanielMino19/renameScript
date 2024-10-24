import axios from 'axios';
require('dotenv').config();

export class ApiService {
  APIUrl = process.env.API_URL;
  ApiToken = process.env.API_TOKEN;

  async createCategory(categoryData: any): Promise<number> {
    try {
      const response = await axios.post(`${this.APIUrl}/catalog/categories`, categoryData, {
        headers: { Authorization: `Bearer ${this.ApiToken}` },
      });
      return response.data.id;
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  }
  
  async findByName(name: string): Promise<number | null> {
    try {
      const response = await axios.get(`${this.APIUrl}/catalog/categories/search/${1}/${name}`);
      const categories = response;
  
      const category = categories.data[0];
  
      return category ? category.id : null;
    } catch (error) {
      console.error('Error finding category by name:', error);
      throw error;
    }
  }
  
  

  async createProduct(productData: any): Promise<void> {
    try {
      await axios.post(`${this.APIUrl}/products`, productData, {
        headers: { Authorization: `Bearer ${this.ApiToken}` },
      });
      console.log('Product created successfully');
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }
}
