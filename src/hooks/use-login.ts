import { useMutation } from "@tanstack/react-query"
import api from "../api";
import { LoginRequest } from "../models/login-request";
import { LoginResponse } from "../models/login-response";

export const useLogin = () => {
    return useMutation<LoginResponse, Error, LoginRequest>({
        mutationKey: ["login"],
        mutationFn: async (params: LoginRequest) => {
            const response = await api.post("/auth/login", params) 
            return response.data
        }
    })
}