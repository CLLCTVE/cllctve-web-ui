import {v4} from 'uuid';
import mockQuestionSets from './mock-question-sets';

let questionSets = [...mockQuestionSets];

// console.log('mockQuestionSets: ', questionSets);

const fakeDatabase = {
  questionSets: questionSets,
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchQuestionSets = async () => {
  console.log('#fetchQuestionSets, start');
  
  return await delay(10).then(() => {
    let data =  {
      status: 'ok',
      statusCode: 200,
      data: fakeDatabase.questionSets
    };
    console.log('#fetchQuestionSets, done');
    return data;
  });
};

export const addQuestionSet = (qs) =>
  delay(500).then(() => {
    // TODO: Implement adding question set
    console.log('API#addQuestionSet, qs: ', qs);
  });

export const okResponse = () =>
  delay(500).then(() => {
    console.log('okResponse');
    return JSON.stringify({
      status: 'ok',
      statusCode: 200
    });
  });
