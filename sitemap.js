require('dotenv').config()
const fs = require('fs');
const axios = require('axios');

const existingUrls = [
    'http://felixmenendez.com.ar/productos-felix-menendez',

    // mas insumos agricolas
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Mas+insumos+agrícolas',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Mas+insumos+agrícolas&categoria=Silo+Bolsas',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Mas+insumos+agrícolas&categoria=Varios',

    //Fertilizantes
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Fertilizantes',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Fertilizantes&categoria=Granulados',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Fertilizantes&categoria=Solubles',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Fertilizantes&categoria=Liquidos',


    'https://felixmenendez.com.ar/productos-felix-menendez?type=Semillas',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Semillas&categoria=Maiz',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Semillas&categoria=Sorgo',

    //Proteccion de cultivo
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Protección+de+cultivo',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Protección+de+cultivo&categoria=Fungicidas',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Protección+de+cultivo&categoria=Hermicidas',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Protección+de+cultivo&categoria=Insecticidas',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Protección+de+cultivo&categoria=Herbicidas',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Protección+de+cultivo&categoria=Coadyuvantes',
    'https://felixmenendez.com.ar/productos-felix-menendez?type=Protección+de+cultivo&categoria=Hormiguicidas',
];

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

async function getProductNamesFromSupabase() {
    try {
        const response = await axios.get(`${supabaseUrl}/products`,{
          headers: {
              'apikey': supabaseKey
          }
      });
        return response.data.map(products => products.name);
    } catch (error) {
        console.error('Error al obtener nombres de productos desde Supabase:', error);
        return [];
    }
}

async function generateURLs() {
    const productNames = await getProductNamesFromSupabase();
    const supabaseUrls = productNames.map(nombre => `http://felixmenendez.com.ar/productos-felix-menendez/producto?name=${encodeURIComponent(nombre)}`);

    const allUrls = [...existingUrls, ...supabaseUrls];

    return allUrls;
}

async function generateSitemap() {
    const urls = await generateURLs();
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    `;

    // Agregar cada URL al sitemap
    urls.forEach(url => {
        xml += `<url><loc>${url}</loc></url>\n`;
    });

    xml += '</urlset>';

    const sitemapFilePath = './public/sitemaps/sitemap.xml';
    fs.writeFileSync(sitemapFilePath, xml, 'utf-8');

    console.log('Sitemap generado exitosamente.');
}

generateSitemap();
