const USER_PROFILE_KEY = "userProfile";

export const getUserProfile = () => {
  const data = localStorage.getItem(USER_PROFILE_KEY);
  return data ? JSON.parse(data) : null;
};

export const setUserProfile = (profile) => {
  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
};

export const removeUserProfile = () => {
  localStorage.removeItem(USER_PROFILE_KEY);
};
