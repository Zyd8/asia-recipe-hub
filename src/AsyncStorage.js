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

export const saveFaveState = async (favoriteKey, value) => {
  try {
    await AsyncStorage.setItem(favoriteKey, JSON.stringify(value));
    console.log("saved data")
  } catch (e) {
    console.error('Error saving favorite state to AsyncStorage:', e);
  }
};

export const loadFaveState = async (favoriteKey) => {
  try {
    const storedFavState = await AsyncStorage.getItem(favoriteKey);
    return storedFavState !== null ? JSON.parse(storedFavState) : false;
  } catch (e) {
    console.error('Error reading favorite state from AsyncStorage:', e);
  }
};
