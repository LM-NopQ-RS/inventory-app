import React, { useState } from "react";

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <main className="authentication-page">
        <section className={isLogin ? "flip-card flipped" : "flip-card"}>
          <div className="flip-card-front">
            <Register isLogin={isLogin} setIsLogin={setIsLogin} />
          </div>

          <div className="flip-card-back">
            <Login isLogin={isLogin} setIsLogin={setIsLogin} />
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthenticationPage;
