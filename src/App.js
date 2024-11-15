import React, { useState } from "react"; // Import useState hook
import "./App.css";

function App() {
  const [subscribed, setSubscribed] = useState(false); // State to track subscription status
  const [email, setEmail] = useState(""); // State to track email input
  const [error, setError] = useState(""); // State to track error message

  const updates = [
    {
      image: "/assets/images/icon-list.svg",
      message: "Product discovery and building what matters.",
    },
    {
      image: "/assets/images/icon-list.svg",
      message: "Measuring to ensure updates are a success.",
    },
    {
      image: "/assets/images/icon-list.svg",
      message: "And much more!",
    },
  ];

  // Email regex pattern for validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle the subscription button click
  const handleSubscribe = () => {
    // Check if email is empty
    if (!email) {
      setError("Please enter an email address.");
      return; // Stop execution if no email
    }

    // Check if email format is valid
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return; // Stop execution if email is invalid
    }

    // If email is valid, set subscribed state to true and clear error
    setSubscribed(true);
    setError("");
  };

  // Handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(""); // Clear error when the user starts typing
  };

  return (
    <>
      {/* Render initial content only if not subscribed */}
      {!subscribed ? (
        <div className="subscribe">
          <div className="update">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div>
              {updates.map((update, index) => {
                return (
                  <div className="updates" key={index}>
                    <img src={update.image} alt="update-icon" />
                    <p>{update.message}</p>
                  </div>
                );
              })}
            </div>

            <div className="input">
              <h5>Email address:</h5>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your email..."
              />
              {/* Show error message if there is an error */}
              {error && <p className="error">{error}</p>}
            </div>

            {/* Subscribe Button */}
            <button className="sub-button" onClick={handleSubscribe}>
              Subscribe to monthly newsletter
            </button>
          </div>
          <img
            className="right-image"
            src="/assets/images/illustration-sign-up-desktop.svg"
            alt="desktop-image"
          />
        </div>
      ) : (
        <div className="thanks">
          <img src="/assets/images/icon-list.svg" alt="fdg" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>{email}</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button className="sub-button" onClick={() => setSubscribed(false)}>Dismiss message</button>
        </div>
      )}
    </>
  );
}

export default App;
