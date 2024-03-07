const fs = require('fs');
const path = require('path');

  //======= paths =======//
const csvFilePath = './public/csv/masInsumosAgricolas.csv';
const inputFolderPath = './public/images';
const outputFolderPath = './public/outputImages';

try {
  //======= Read the CSV file and extract the IDs =======//
  const csvData = fs.readFileSync(csvFilePath, 'utf-8');
  const csvLines = csvData.trim().split('\n').slice(1); 

  const imageNames = fs.readdirSync(inputFolderPath)
      .filter(file => {
          const extension = path.extname(file).toLowerCase();
          return extension === '.jpg' || extension === '.png' || extension === '.jpeg';
      })
      .map(file => path.basename(file, path.extname(file)));
      
  //======= Merge CSV IDs with image filenames and rename =======//

  csvLines.forEach((line, index) => {
      const [id, name] = line.split(',').map(item => item.trim().replace(/"/g, '')); 
      const oldFileName = `${imageNames[index]}.jpg`; 
      const newFileName = `${id}.jpg`; 

      const oldPath = path.join(inputFolderPath, oldFileName);
      const newPath = path.join(outputFolderPath, newFileName);

  //======= Rename file =======//
      fs.renameSync(oldPath, newPath);
  });

  console.log('Renombrado de archivos completado.');
} catch (err) {
  console.error('Error al renombrar archivos:', err);
}

