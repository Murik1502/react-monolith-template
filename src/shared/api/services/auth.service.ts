import { IAuthResponse } from '@/shared/api/types';

import { axiosClassic } from '@/shared/api/helpers/set-instances-auth-header';

import { removeFromStorage, saveTokenStorage } from './auth-token.service';
import { AUTH_ROUTES } from '@/shared/api/constants/routes';

export const authService = {
  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(AUTH_ROUTES.GET_NEW_TOKEN);

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>(AUTH_ROUTES.LOGOUT);

    if (response.data) removeFromStorage();

    return response;
  },
};

export default authService;
