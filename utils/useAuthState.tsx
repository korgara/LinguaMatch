import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();

const TWO_DAYS_MS = 172800000;

export const useAuthState = () => {
  const [auth, setAuth] = useMMKVStorage<{
    expiresAt: number
  } | null>('auth', storage, null);

  const login = () => {
    setAuth({
      expiresAt: Date.now()
    });
  }

  return {
    isLoggedIn: Boolean(auth?.expiresAt && (auth.expiresAt - TWO_DAYS_MS) < Date.now()),
    login
  };
}
