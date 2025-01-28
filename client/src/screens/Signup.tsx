import { useState } from "react";
import { Button } from "../components/ui/button";
import Register from "../components/Register";
import Login from "../components/Login";

const SignupPage = () => {
  const [selectedTab, setSeletedTab] = useState<string>("register");

  return (
    <div className=" flex flex-1 justify-center items-center min-h-screen bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20231218/pngtree-sunlight-shining-into-study-room-interior-design-background-image_15519788.png')] bg-no-repeat bg-cover">
      <div className="flex max-w-6xl w-full rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 relative flex items-center justify-center ">
          <img
            src="https://media-hosting.imagekit.io//af23647c21ec4a5e/authimage.png?Expires=1831880984&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W4gQzsIevcxbn3NfwnRrY9WYYPsep3QBPSs0uAm7hkFk0LbW6G9hQlYZL-89uUfPC5ao64oFHM0a1epEKQ46iGp0oOVg5zrZ4KLttV9NavmY5yMkoA42ZjMC7U77tX6zrq5MsuNMSAxME18EypyuuZdroqx784wEgIWbbqUj2sIkn5vEcBmbelHQEjo7gV8tsW7EUmmuEFaNqri0IK59J3a0YwevO3B4znKdGJQC1p9i2oHYy9kBbQvH58GPABcLck~8IXnsSKhYt5iYmsqVlHpJq-Glw6-Va24e-N8uph9Y~YYz2sJjxfVayA6~BysZ-Su1H8zA1kgS8-Vtoln2rg__"
            alt="Background"
            className="absolute w-full h-full object-cover"
          />
          <div className="relative z-10 ">
            <img src="/logo.png" alt="logo" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col items-center  bg-white px-12 py-10">
          {/* Header */}
          <div className="w-full flex items-center gap-3 mb-10">
            <Button
              variant={"outline"}
              className={` rounded-3xl px-5 ${
                selectedTab == "login" ? "bg-yellow-500" : ""
              } `}
              onClick={() => setSeletedTab("login")}
            >
              Login
            </Button>
            <Button
              variant={"outline"}
              className={` rounded-3xl px-5 ${
                selectedTab == "register" ? "bg-yellow-500" : ""
              } `}
              onClick={() => setSeletedTab("register")}
            >
              Register
            </Button>
          </div>
          <div className=" w-full mb-8">
            <h1 className="text-4xl font-bold text-gray-700">Welcome</h1>
            <p className="text-gray-500 mt-2">
              Please register to your account
            </p>
          </div>
          {selectedTab === "register" ? <Register /> : <Login />}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
