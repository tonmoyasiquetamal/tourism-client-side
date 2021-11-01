import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

// Use Authentication With use & auth Context
const useAuth = () => {
    return useContext(AuthContext);
};
export default useAuth;
