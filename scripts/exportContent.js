const fs = require('fs');
const axios = require('axios');

console.log('Starting content export...');

async function exportContent() {
  try {
    // const response = await axios.get('http://127.0.0.1:1337/api/modulecategories?populate=*'); 
    // const response = await axios.get('http://127.0.0.1:1337/api/quizzes?populate[Questions][populate]=Image&populate[Questions][populate]=link&populate[Questions][populate]=Ansers'); // Use 127.0.0.1 instead of localhost
    // const response= await axios.get('http://127.0.0.1:1337/api/actioncard4s?populate[actioncard4][populate]=content')
    // const response1= await axios.get('http://127.0.0.1:1337/api/practical-procedures?populate[chapter][populate]=*')
    const response1= await axios.get('http://127.0.0.1:1337/api/practical-procedures?locale=so-ET&populate[chapter][populate]=*')

    const content = response1.data;
    

    // Check if content is received
    console.log('Data received:', content);

    // Write to file
    fs.writeFileSync('content-bundle_pp.json', JSON.stringify(content, null, 2));
    console.log('Content exported to content-bundle.json');
  } catch (error) {
    console.error('Error exporting content:', error);
  }
}

exportContent();
