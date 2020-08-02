import http from "./apiClient";

const login = (email, password) => http.post("/auth", { email, password });

const register = ({ name, email, password }) =>
  http.post("/users", { name, email, password });

const requestResetToken = (email) =>
  http.post("/forgotPassword/request", { email });

const validateToken = (email, token) =>
  http.post("/forgotPassword/validate", { email, token });

const resetPassword = (email, token, newPassword) =>
  http.put("/forgotPassword/reset", { email, token, newPassword });

export default {
  login,
  register,
  requestResetToken,
  validateToken,
  resetPassword,
};
