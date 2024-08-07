import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setSuccess("");
    } else if (!isValidEmail(email)) {
      setError("Please provide a valid email");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Thank you for subscribing!");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:pr-4 p-4 md:p-0">
      <div className="max-w-[38rem] flex mb-4 md:mb-6 relative">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="w-full rounded-full placeholder:text-light-pink placeholder:opacity-50 px-6 py-3 border-2 border-light-pink"
        />
        <button className="absolute right-0 h-full px-7 py-3 sm:px-10 bg-gradient-to-b from-pink to-dark-pink rounded-full cursor-pointer shadow-[0_15px_20px_0_rgba(198,110,110,0.25)]  hover:from-very-light-pink hover:to-very-light-pink">
          <img src="/images/icon-arrow.svg" alt="icon" className="mx-auto" />
        </button>
        {error && (
          <img
            src="/images/icon-error.svg"
            className="absolute right-0 top-4 mr-28"
            alt="icon"
          />
        )}
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
    </form>
  );
}

export default EmailForm;
