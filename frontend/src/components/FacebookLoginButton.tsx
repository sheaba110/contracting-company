import React, { useEffect } from "react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

const FacebookLoginButton = () => {
  useEffect(() => {
    // تحميل SDK مرة واحدة
    if (!window.FB) {
      ((d, s, id) => {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        const js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode?.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");

      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "932182522356357",
          cookie: true,
          xfbml: true,
          version: "v19.0",
        });
      };
    }
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(
      (response: any) => {
        if (response.authResponse) {
          window.FB.api("/me", { fields: "name,email" }, async (userInfo: any) => {
            const accessToken = response.authResponse.accessToken;
            try {
              const res = await fetch("http://localhost:8000/api/facebook-login/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  access_token: accessToken,
                  facebook_id: userInfo.id,
                  name: userInfo.name,
                  email: userInfo.email,
                }),
              });

              const data = await res.json();
              console.log("JWT Token:", data.access);
              // localStorage.setItem("token", data.access);
            } catch (err) {
              console.error("Failed to login:", err);
            }
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <button
      onClick={handleFacebookLogin}
      className="w-full py-2 rounded-full text-white font-medium bg-[#1877f2] text-sm flex items-center justify-center gap-2"
    >
      <i className="fab fa-facebook-f text-lg"></i>
      <span>Login with Facebook</span>
    </button>
  );
};

export default FacebookLoginButton;
