import { NextApiRequest, NextApiResponse } from 'next';

const serpScholarAPI= async (req: NextApiRequest, res: NextApiResponse) => {
    const url = new URL(`${process.env.SERPAPI_URL}search`);
    url.searchParams.set('api_key', String(process.env.SERPAPI_KEY));
    url.searchParams.set('engine', 'google_scholar');
//   const URL = `${process.env.SERPAPI_URL}search?api_key=4d1934e56d6edeb90c1096d0bdb1600cf7569fc76a4067270aea24511f11558c&engine=google_scholar`;

//   let requestOptions: RequestInit = prepareHTTPConfig(req);
//   requestOptions.body = JSON.stringify(req.body);

//   let response;
//   try {
//     response = await HTTPClient(URL, requestOptions);
//   } catch (err) {
//     response = errorHandler(err);
//   }

//   res.statusCode = response && response.code ? response.code : 200;
//   await res.setHeader('Content-Type', 'application/json');
//   res.json(response);
};

export default serpScholarAPI;
