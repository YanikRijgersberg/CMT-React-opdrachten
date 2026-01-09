const USER_PROFILE_KEY = "userProfile";

const safeParse = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("fout:", error);
    return null;
  }
};

export const getUserProfile = () => {
  try {
    const data = localStorage.getItem(USER_PROFILE_KEY);
    return data ? safeParse(data) : null;
  } catch (error) {
    console.error("Fout", error);
    return null;
  }
};

export const setUserProfile = (profile) => {
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (error) {
  }
};

export const removeUserProfile = () => {
  try {
    localStorage.removeItem(USER_PROFILE_KEY);
  } catch (error) {
  }
};
