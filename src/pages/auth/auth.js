import React from "react";
import useBodyClass from "../../hooks/useBodyClass";

const Auth = () => {
  useBodyClass("p-auth");

  return (
    <main className="p-auth-main">
      <form method="POST" action="/" className="form">
        <h1 className="el-title--h1">Sign in</h1>

        <div className="el-input">
          <input name="user-email" id="user-email" type="email" />
          <label>Email address</label>
        </div>

        <button className="el-button outline" type="submit">
          Send login link
        </button>

        <span className="el-question">
          Don’t have an account yet? <a href="/signup.html">Sign up</a>
        </span>
      </form>
    </main>
  );
};

export default Auth;
