export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  status: string;
  plan: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  status: number;
  token: string;
  user: User;
  company: null;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  plan: string;
}

export interface RegisterResponse {
  message: string;
  status: number;
}

export interface UpdateUserRequest {
  userId: number;
  name: string;
  email: string;
  oldPassword?: string;
  password?: string;
}

export interface UpdateUserResponse {
  message: string;
  status: number;
}

export interface DeleteUserRequest {
  userId: number;
}

export interface DeleteUserResponse {
  message: string;
  status: number;
}

export interface GetUserResponse {
  message: string;
  status: number;
  user: User;
}

export interface ApiError {
  message: string;
  status?: number;
}
