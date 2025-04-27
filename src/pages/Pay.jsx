import React, { useState } from "react";
import axios from "axios";
import {
  Coffee,
  Heart,
  DollarSign,
  ArrowRight,
  Gift,
  Sparkles,
} from "lucide-react";

function Pay() {
  const [amount, setAmount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:8000/api/order", {
      amount: amount,
    });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount: payAmount, id: order_id, currency } = result.data;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: payAmount.toString(),
      currency: currency,
      name: "Angad Sudan",
      description: "Support My Work",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:8000/payment/success",
          data
        );

        alert(result.data.msg);
      },
      notes: {
        address: "Thank you for your support!",
      },
      theme: {
        color: "#22c55e", // Green-500 to match your header
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-6xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-green-500/30">
        {/* Header with coffee icon */}
        <div className="text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Coffee size={28} className="text-white" />
            <h2 className="text-xl font-bold text-white">Buy Me A Coffee</h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Playful Text */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-3xl font-bold text-green-300 mb-2">
                  Why Buy Me A Coffee? ☕
                </h3>
              </div>

              <p className="text-green-100 text-lg leading-relaxed">
                Not a reason to buy at all. Totally your wish. I'm only here to
                test payemnt Gateways and maybe flex a bit about it XD
              </p>

              <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-green-200 font-medium italic">
                  "Your wish, your way! Think of this as your chance to get me
                  aligned with your next project lol."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="w-full md:w-1/2 bg-gray-900/50 p-8 rounded-l-2xl">
            <div className="max-w-md mx-auto space-y-6">
              {/* Amount Input */}
              <div className="bg-gray-800/70 rounded-lg p-5 border border-green-500/20">
                <label className="block text-green-300 font-medium mb-3">
                  Select Amount
                </label>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500/20 p-2 rounded-md">
                    <p className="text-green-400 text-[20px]">₹</p>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-green-500/30 focus:border-green-500 outline-none px-2 py-1 text-2xl font-medium text-green-100"
                  />
                </div>
              </div>

              {/* Quick Amounts */}
              <div>
                <p className="text-green-300 text-sm mb-2">Quick Select:</p>
                <div className="flex justify-between">
                  {[5, 10, 20, 50].map((value) => (
                    <button
                      key={value}
                      onClick={() => setAmount(value)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        amount === value
                          ? "bg-green-500 text-gray-900"
                          : "bg-gray-700 text-green-100 hover:bg-gray-600"
                      }`}
                    >
                      ₹{value}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pay Button */}
              <button
                onClick={displayRazorpay}
                className="w-full bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-green-500/20 transform hover:scale-105"
              >
                <Coffee size={20} />
                <span>Pay ₹{amount}</span>
                <ArrowRight
                  size={18}
                  className="transform transition-transform group-hover:translate-x-1"
                />
              </button>

              {/* Security Note */}
              <div className="flex items-center justify-center space-x-2 text-center">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs text-green-300">
                  Secured by Razorpay. Your payment information is never stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;
