import { NewsItemIface } from "../interface/EntityIface";
import { get, post } from "./api-helper";

export const getListNews = async (gameId: number, from: number, count: number, type: String, isPublic: boolean) => {
    const url = "https://api-content.zagoo.vn/api/post";
    const resp = await get<NewsItemIface[]>(url, {
        gameId,
        from,
        count,
        type,
        public: isPublic,
    });
    return resp;
}

export const getNewsDetail = async (gameId:number, postId: number, isPublic: boolean) => {
    const url = "https://api-content.zagoo.vn/api/post";
    const resp = await get<NewsItemIface>(url, {
        gameId,
        postId,
        public: isPublic,
    });
    return resp;
}