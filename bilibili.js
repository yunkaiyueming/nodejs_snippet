const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeBilibili(keyword) {
  try {
    const searchUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;
    const response = await axios.get(searchUrl);

    const $ = cheerio.load(response.data);
    const results = [];

    $('.video-item .title').each((index, element) => {
      const title = $(element).text().trim();
      const description = $(element).attr('title').trim();

      results.push({ title, description });
    });

    return results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

function scrapeBilibili2(keyword) {
  try {
    const searchUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;
    const response = axios.get(searchUrl);

    // const $ = cheerio.load(response.data);
    // const results = [];

    // $('.video-item .title').each((index, element) => {
    //   const title = $(element).text().trim();
    //   const description = $(element).attr('title').trim();

    //   results.push({ title, description });
    // });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

//scrapeBilibili异步处理，保证then调用后results是完整的数据，方便使用同步的编写代码；异步但不是并行
const keyword = 'bilibili';
scrapeBilibili(keyword)
  .then(results => {
    console.log(`搜索 "${keyword}" 的结果：`);
    results.forEach((result, index) => {
      console.log(`视频 ${index + 1}:`);
      console.log('标题:', result.title);
      console.log('描述:', result.description);
      console.log('----------------------');
    });
    console.log("scrapeBilibili over....")
  })
  .catch(error => {
    console.error('Error:', error);
  });

//scrapeBilibili2 普通函数，data可能获取不到结果，
var data = scrapeBilibili2(keyword)
console.log("scrapeBilibili2 search", data)

//执行到over,但不会中断执行，会继续等待scrapeBilibili执行完
console.log("over")