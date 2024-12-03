const fs = require('fs');
const axios = require('axios');
const path = require('path');
const archiver = require('archiver');



async function exportContent() {
  
  try {
    
    
    const quizzesResponse = await axios.get('http://127.0.0.1:1337/api/quizzes?populate[Questions][populate]=Image&populate[Questions][populate]=link&populate[Questions][populate]=Ansers');
    
    
    const categoriesResponse = await axios.get('http://127.0.0.1:1337/api/modulecategories?populate=*');

    
    const quizzesContent = quizzesResponse.data;
    const categoriesContent = categoriesResponse.data;

    
    console.log('Quizzes API response received:', JSON.stringify(quizzesContent, null, 2)); 
    console.log('Categories API response received:', JSON.stringify(categoriesContent, null, 2)); 

    
    const quizImageUrls = quizzesContent.data.flatMap(item => 
      item.Questions.flatMap(question => 
          question.Image ? question.Image.map(img => img.url) : []
      )
    );

    
    const categoryImageUrls = categoriesContent.data.flatMap(item => 
      item.icon ? item.icon.map(img => img.url) : [] 
    );

    
    console.log('Quiz Image URLs:', quizImageUrls);
    console.log('Category Image URLs:', categoryImageUrls);

    
    const allImageUrls = [...quizImageUrls, ...categoryImageUrls];

    console.log('All Image URLs:', allImageUrls); 

    
    const downloadedImages = await Promise.all(allImageUrls.map(imageUrl => downloadImage(imageUrl)));

    createZip(downloadedImages);

  } catch (error) {
    console.error('Error exporting content:', error);
  }
}

async function downloadImage(imageUrl) {
  if (!imageUrl) {
    console.warn('No image URL provided. Skipping download.');
    return null;
  }
  
  const baseUrl = 'http://127.0.0.1:1337'; 
  const fullUrl = new URL(imageUrl, baseUrl).href;

  console.log(`Attempting to download from: ${fullUrl}`); 
  
  const imagePath = path.basename(imageUrl);
  const downloadPath = path.join(__dirname, 'downloads', imagePath); 
  try {
    const response = await axios.get(fullUrl, { responseType: 'arraybuffer' });
    fs.mkdirSync(path.dirname(downloadPath), { recursive: true }); 
    fs.writeFileSync(downloadPath, response.data);
    console.log(`Downloaded image: ${downloadPath}`);
    return downloadPath; 
  } catch (error) {
    console.error(`Failed to download image ${imagePath} from ${fullUrl}:`, error.message);
    return null; 
  }
}

function createZip(files) {
  const output = fs.createWriteStream('exported-images__klp_module.zip'); 
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`Created zip file: exported-images__klp_module.zip (${archive.pointer()} total bytes)`);
  });

  archive.pipe(output);

  const validFiles = files.filter(file => file);
  validFiles.forEach(file => {
    archive.file(file, { name: path.basename(file) }); 
  });

  archive.finalize();
}

exportContent().catch(error => console.error('Error in exportContent:', error));
