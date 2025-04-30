import { useMutation } from "@tanstack/react-query"
import api from "../api";
import { LoginRequest } from "../models/login-request";

export const useLogin = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async (params: LoginRequest) => {
            await api.post("/auth/login", params) 
        }
    })
}