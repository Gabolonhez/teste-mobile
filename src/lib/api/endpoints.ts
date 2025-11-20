import { apiClient } from './client';
import { API_ENDPOINTS } from './config';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserResponse,
} from './types';

export const authApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.LOGIN,
      data
    );
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>(
      API_ENDPOINTS.REGISTER,
      data
    );
    return response.data;
  },
};

export const userApi = {
  getUser: async (userId: number): Promise<GetUserResponse> => {
    const response = await apiClient.get<GetUserResponse>(
      `${API_ENDPOINTS.USER}/${userId}`
    );
    return response.data;
  },

  updateUser: async (data: UpdateUserRequest): Promise<UpdateUserResponse> => {
    const response = await apiClient.put<UpdateUserResponse>(
      API_ENDPOINTS.USER,
      data
    );
    return response.data;
  },

  deleteUser: async (data: DeleteUserRequest): Promise<DeleteUserResponse> => {
    const response = await apiClient.delete<DeleteUserResponse>(
      API_ENDPOINTS.USER,
      { data }
    );
    return response.data;
  },
};

export const healthApi = {
  check: async (): Promise<string> => {
    const response = await apiClient.get<string>(API_ENDPOINTS.HEALTH);
    return response.data;
  },
};
