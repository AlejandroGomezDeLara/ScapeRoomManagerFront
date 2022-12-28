import { Post } from "./Post";

export interface User{
    id?:number;
    name?:string;
    email?:string;
    avatar?:string;
    role_id?:number;
    api_token?:string;
    phone?:string;
    instagram_user?:string;
    facebook_user?:string;
    twitter_user?:string;
    funly_points?:number;
    alias?:string;
    online?:boolean;
    posts?:Post[];
    banner_img?:string;
    upload_image?:string;

}