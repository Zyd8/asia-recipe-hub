import AsyncStorage from '@react-native-async-storage/async-storage';

const DARK_MODE_KEY = 'darkMode';

export const saveDarkModeState = async (value) => {
  try {
    await AsyncStorage.setItem(DARK_MODE_KEY, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving dark mode state to AsyncStorage:', e);
  }
};

export const loadDarkModeState = async () => {
  try {
    const storedDarkMode = await AsyncStorage.getItem(DARK_MODE_KEY);
    return storedDarkMode !== null ? JSON.parse(storedDarkMode) : false;
  } catch (e) {
    console.error('Error reading dark mode state from AsyncStorage:', e);
    return false;
  }
};
