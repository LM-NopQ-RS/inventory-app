import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <main className="authentication-page">
        <section className={isLogin ? "flip-card flipped" : "flip-card"}>
          <div className="flip-card-front">
            <Register setIsLogin={setIsLogin} />
          </div>

          <div className="flip-card-back">
            <Login setIsLogin={setIsLogin} />
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthenticationPage;
