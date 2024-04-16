import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import { ResultData } from "@/api/interface";
import NProgress from "@/config/nprogress";
import { message } from "antd";

// import { store } from "@/redux";

const config = {
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true,
  showErr: true
};

class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);
    this.service.interceptors.request.use((config) => {
      NProgress.start();
      return config;
    });
    this.service.interceptors.response.use(
      (response) => {
        NProgress.done();
        const { data } = response;
        if (data.status === 500) {
          return { err: response.statusText || "", ...data };
        }
        return { data };
      },
      (err) => {
        const { response } = err;
        NProgress.done();
        message.error(response.statusText);
        return { err: response.statusText || "" };
      }
    );
  }
  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new RequestHttp(config);
