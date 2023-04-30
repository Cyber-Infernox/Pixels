import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // Remove user from storage
    localStorage.removeItem("user");

    // Update the auth context state
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
