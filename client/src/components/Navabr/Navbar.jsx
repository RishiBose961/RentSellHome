import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlices";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="h-16 w-full">
      <div className="flex justify-between pt-4  max-w-7xl mx-auto px-3 mb-3">
        <Link to="/">
          <div className=" inline-flex space-x-2">
            <img src="/Larkef.png" alt="loading" className="h-10" />
            <p className="text-xl font-bold font-mono pt-1">Rent + Sell</p>
          </div>
        </Link>
        <div>
          {userInfo ? (
            <div
              className="bg-red-500 hover:bg-slate-200 w-20 rounded-2xl h-10 flex justify-center items-center cursor-pointer"
              onClick={logoutHandler}
            >
              <AiOutlineLogout className=" w-5 h-5 text-center" />
            </div>
          ) : (
            <Link to="/login">
              <p className="pt-1">Login</p>
            </Link>
          )}
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
