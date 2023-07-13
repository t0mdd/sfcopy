
import {Skill, Gig, ImageObject} from "../SanityTypes/Types"

export interface User {
  userId: string;
  token: string;
  id: string;  // Modify the type of `id` to be non-optional
  username?: string;
  profileImage?: string;
  coverImage?: string;
  credits?: string;
  socialLinks?: any;
  description?: string;
}
export interface UserSchema {
  _id: string;
  _type: string;
  name: string;
  email: string;
  profileImage: string;
  coverImage: string;
  credits: number;
  subscriptionPlan: string;
  skills: {
    _id: string;
    _type: string;
    name: string;
    icon: string;
  }[];
  socialLinks: any;
  following: Array<{ _ref: string }>;
  followers: Array<{ _ref: string }>;
  description: string;
  firebaseUid: string;
}

export interface mongoUser {
  id: string;
  username:string,
  token: string;
  profileImage: string;
  coverImage: string;
  credits: string;
}

export interface Category {
  _id: string;
  _type: "category";
  name: string;
  catName: string;
  description: string | null;
  coverPhoto:string;
  skills: Skill[]; 
  gigs: Gig[];// Add this line
}

export interface SearchResult {
  _id: string;
  _type: string;
  displayName?: string;
  title?: string;
  name?: string;
  firebaseUid?: string;
}

export interface Review {
  _id: string;
  gigId: string;
  text: string;
  rating: number;
  userId: string;

}

export interface Block {
  type: string;
  data: any;
  id: string;
  _id?: string;
  name?: string;
  ref: React.RefObject<HTMLTextAreaElement>;
  fields?:any;
  // Extend here if you have more properties for each block
}

export interface Field {
  // Define the properties of a field here
}

 export interface ReviewData {
  _id: string;
  author: {
    _ref: any,
    
    name: string,
    profileImage: ImageObject
  };
  review: string;
  rating: number;
}