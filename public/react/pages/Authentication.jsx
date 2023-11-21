import React from "react";

const AuthenticationPage = () => {
  return (
    <>
      <main className="authentication-page">
        {/* When isLogin is true set the className of the flip card to "flip-card
        flipped" else "flip-card" */}
        <section className="flip-card">
          <div className="flip-card-front">
            <Register />
          </div>

          <div className="flip-card-back">
            <Login />
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthenticationPage;
