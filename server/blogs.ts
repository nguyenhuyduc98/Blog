import {discussionGql} from './graphql';

const API_URL = 'https://api.github.com/graphql';
const TOKEN = process.env.TOKEN;
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID;
export const getBlogs = async () => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `token ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: discussionGql(DISCUSSION_CATEGORY_ID)}),
  });
  const res = await response.json();
  console.log('🚀 ~ file: blogs.ts:16 ~ getBlogs ~ res:', res);
};
