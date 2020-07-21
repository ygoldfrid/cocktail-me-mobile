import http from "./apiClient";

const login = (email, password) => http.post("/auth", { email, password });

const register = (userInfo) => http.post("/users", userInfo);

export default { login, register };
