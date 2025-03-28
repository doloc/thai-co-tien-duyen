import axios from 'axios';

export interface TApiResponse<T> {
  error_code: number;
  message: string;
  data: T;
  extraData: string;
}

export async function get<T>(url: string, params: Record<string, any> = {}) {
  try {
    const res = await axios.get<TApiResponse<T>>(url, {
      params,
      // headers: {
      //   // zgsk,
      //   Authorization: "Bearer " + zgsk,

      //   // referer: "http://localhost:3000/",
      // },
    });

    return res.data;
  } catch (err) {
    const error = err as any;
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      console.log('error.response.data', error.response.data);
      console.log('error.response.status', error.response.status);
      console.log('error.response.headers', error.response.headers);
      if (error.response.status >= 500) {
        throw new Error('Lỗi hệ thống');
      }
      throw error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    throw error;
  }
}

export async function post<T>(
    url: string,
    data: Object,
    params: Record<string, any> = {}
  ) {
    try {
      const res = await axios.post<TApiResponse<T>>(url, data, {
        params,
      });
  
      return res.data;
    } catch (err) {
      const error = err as any;
  
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response?.data?.error?.details);
        console.log(error.response.status);
        console.log(error.response.headers);
        if (error.response.status >= 500) {
          throw new Error("Lỗi hệ thống");
        }
        throw error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
      throw error.response.data;
    }
  }
  