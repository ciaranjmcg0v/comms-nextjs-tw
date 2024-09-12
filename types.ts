// Basic types
export type ClassValue = string | number | null | undefined | ClassValue[];

// Function types
export type FormatDate = (date_ms: number) => string;
export type GetRelativeDateTime = (message: Message, previousMessage?: Message) => string | undefined;
export type IsSameDay = (timestamp1: number, timestamp2: number) => boolean;
export type RandomID = (len: number) => string;

// Interfaces
export interface Message {
  _id: string;
  content: string;
  messageType: 'text' | 'image' | 'video';
  sender: string;
}

export interface ConversationType {
  _id: string;
  admin: string | null;
  groupImage: string | null;
  groupName: string | null;
  participants: string[];
  _creationTime: number;
  lastMessage: {
    _id: string;
    messageType: string;
    content: string;
    sender: string;
  };
  sender: string;
  isOnline: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  admin?: boolean;
  isOnline: boolean;
}