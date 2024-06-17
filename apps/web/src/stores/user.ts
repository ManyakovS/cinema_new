import type { User } from "@prisma/client";
import { defineStore } from "pinia";
import type {
  CreateVerifyDto,
  LoginUserDto,
  RegisterUserDto,
  VerifyDto,
} from "api/src/modules/auth/dto/auth.dto";
import $router from "@/router/index";

import {
  authRequest,
  getCurrentUserRequest,
  loginRequest,
  logoutRequest,
  registerRequest,
  useChangeImageRequest,
  verifyCodeRequest,
  verifyEmailRequest,
} from "@/@types/schema";

export const ACCESS_TOKEN_KEY = "access_token";
export const RESTORE_EMAIL = "restore_email";

export const useUserStore = defineStore("userStore", () => {
  const user = ref<Partial<User> | null>(null);
  const accessToken = ref(localStorage.getItem(ACCESS_TOKEN_KEY) ?? "");
  const isAuthenticated = ref(false);

  const queryEmail = computed({
    get() {
      return (
        localStorage.getItem(RESTORE_EMAIL) ||
        $router.currentRoute.value.query?.email?.toString()
      );
    },
    set(value: string) {
      return value;
    },
  });

  const login = async (data: LoginUserDto) => {
    const {
      data: { user, accessToken },
    } = await loginRequest(data);
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    setAuthUser(user, accessToken);
  };

  const register = async (data: RegisterUserDto) => {
    const {
      data: { user, accessToken },
    } = await registerRequest(data);
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

    setAuthUser(user, accessToken);
  };

  const getCurrentUser = async () => {
    const { data: user } = await getCurrentUserRequest(accessToken.value);
    setAuthUser(user, accessToken.value);
  };

  const auth = async () => {
    const {
      data: { user, accessToken },
    } = await authRequest();

    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    setAuthUser(user, accessToken);

    return accessToken;
  };

  const logout = async () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    await logoutRequest();
    user.value = null;
    accessToken.value = "";
    isAuthenticated.value = false;
  };

  function setAuthUser(_user: Partial<User>, _accessToken: string) {
    accessToken.value = _accessToken;
    user.value = _user;
    isAuthenticated.value = true;
  }

  const setQueryEmail = (email: string) => {
    queryEmail.value = email;
    localStorage.setItem(RESTORE_EMAIL, email);
  };

  const deleteQueryEmail = () => {
    queryEmail.value = null;
    localStorage.removeItem(RESTORE_EMAIL);
  };

  const changeImage = async (userId, imageId) => {
    const { data } = await useChangeImageRequest({ userId, imageId });
    user.value = data;
  };

  const verifyEmail = async (body: CreateVerifyDto) => {
    const { data } = await verifyEmailRequest(body);
    return data;
  };

  const verifyCode = async (body: VerifyDto) => {
    const { data } = await verifyCodeRequest(body);
    return data;
  };

  return {
    user,
    accessToken,
    isAuthenticated,
    queryEmail,
    login,
    register,
    getCurrentUser,
    auth,
    logout,
    setQueryEmail,
    deleteQueryEmail,
    changeImage,
    verifyEmail,
    verifyCode,
  };
});
