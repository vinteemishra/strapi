const axios = require('axios');
const fs = require('fs');


const data = JSON.parse(fs.readFileSync('quizdata.json', 'utf8'));



const strapiURL = 'http://127.0.0.1:1337'; 
const apiToken = '234f0b43b6408a041646dfdc1858f22979c66459de6c102955b063e3ab6fa07c6bcd1e8fc65ebc8ec94e3c3eaf7cc0fa130666ad0248ae17b730edbc79e84cbe4735cfc8db872fe712906c164ea5b41d57473efa89996281dede4ef3a9f3b6de0a71735b43952d8fd036585abbfad71a97b8cc889222d486170a366c6e6ef03f'; // Replace with your Strapi API Token

async function importQuizData() {
  try {
    
    for (const quiz of data) {
      
      const quizPayload = {
        langId: quiz.langId,
        key: quiz.key,
        title: quiz.title,
        description: quiz.description,
        level: quiz.level,
        LastUpdatedBy: quiz.LastUpdatedBy,
        LastUpdated: new Date(quiz.LastUpdated).toISOString(),
        _table: quiz._table,
        questions: quiz.questions.map((question) => ({
          question: question.question.content,
          description: question.description.content,
          quizzType: question.quizzType,
          image: question.image,
          showToggle: question.showToggle,
          link: question.link,
          key: question.key,
          answers: question.answers.map((answer) => ({
            correct: answer.correct,
            value: answer.value.content,
          })),
        })),
      };

      
      const response = await axios.post(
        `${strapiURL}/api/quizzes`, 
        { data: quizPayload },
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );

      console.log('Imported quiz:', response.data);
    }

    console.log('All quizzes imported successfully!');
  } catch (error) {
    console.error('Error importing quiz data:', error.response?.data || error.message);
  }
}


importQuizData();
