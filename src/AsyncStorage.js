import AsyncStorage from '@react-native-async-storage/async-storage';

const DARK_MODE_KEY = 'darkMode';
const RECIPE_DATA = '';

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

export const saveFaveState = async (value) => {
  try {
    await AsyncStorage.setItem(RECIPE_DATA, JSON.stringify(value));
    console.log("saved data")
  } catch (e) {
    console.error('Error saving favorite state to AsyncStorage:', e);
  }
};

export const loadFaveState = async (value) => {
  try {
    const storedRecipeData = await AsyncStorage.getItem(RECIPE_DATA);
    return storedRecipeData
  } catch (e) {
    console.error('Error reading favorite state from AsyncStorage:', e);
  }
};