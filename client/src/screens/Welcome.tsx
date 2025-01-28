import { useState } from "react";
import { useNavigate } from "react-router";

const WelcomeScreen = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigation = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Logo */}
      <div className="mb-8">
        <img src="/logo.png" alt="logo" className="w-20 h-20" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Easy School Management
      </h1>

      {/* Progress Indicator */}
      <div className="flex items-center space-x-2 mb-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === 1 ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Accept Terms */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <label
          htmlFor="terms"
          className="ml-2 text-gray-700 text-sm font-medium"
        >
          Accept Terms & Conditions
        </label>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 text-yellow-500 border border-yellow-500 rounded-md hover:bg-yellow-50"
          onClick={() => navigation("/signup")}
        >
          Already Have an Account
        </button>
        <button
          className={`px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 ${
            !termsAccepted ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!termsAccepted}
          onClick={() => termsAccepted && navigation("/setup-account")}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
