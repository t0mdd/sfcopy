import { Timestamp } from '@firebase/firestore';


export type ImageObject = {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: {
      x: number;
      y: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  
  export type Like = {
    _key: string;
    _type: "like";
    user: {
      _ref: string;
      _type: "reference";
    };
  };
  
  export type Skill = {
    _id: string;
    _type: "skill";
    title: string;
    coverPhoto: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
      hotspot?: {
        x: number;
        y: number;
      };
      crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
    };
    price: number;
    likes: Like[];
    description: string;
    author: {
      _type: "reference";
      _ref: string;
      name: string;
      profileImage: string;
    };
    numberSold: number;
    category: {
      _type: "reference";
      _ref: string;
      name: string;
    };
    saleStarts: Date
    saleEnds:Date;
  };
  
  
  export type Gig = {
    _id: string;
    _type:"gig";
    author: {
      _type: "reference";
      _ref: string;
      name: string;
      coverPhoto: ImageObject;
      firebaseUid:string;
    };
    title: string;
    description: string;
    totalStars:number;
    starNumber:number;
    cat: string;
    price: number;
    coverPhoto: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    }
    images:ImageObject[];
    likes: Like[];
    shortTitle: string;
    shortDesc: string;
    deliveryTime: number;
    revisionNumber: number;
    features: string[];
    sales: number;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    category: {
      _type: "reference";
      _ref: string;
      name: string;
    };
    properties: Record<string, unknown>;
    isInstantSale: boolean;
    instantSalePrice: number;
  }



  export type Fusion = {
    _id: string;
    _type:"fusion";
    author: {
      _type: "reference";
      _ref: string;
      name: string;
      coverPhoto: ImageObject;
      firebaseUid:string;
    };
    title: string;
    description: string;
    totalStars:number;
    starNumber:number;
    cat: string;
    price: number;
    coverPhoto: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    }
    images:ImageObject[];
    likes: Like[];
    shortTitle: string;
    shortDesc: string;
    deliveryTime: number;
    revisionNumber: number;
    features: string[];
    sales: number;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    category: {
      _type: "reference";
      _ref: string;
      name: string;
    };
    properties: Record<string, unknown>;
    isInstantSale: boolean;
    instantSalePrice: number;
  }