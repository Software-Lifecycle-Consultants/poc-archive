import { useState, useEffect } from "react";

export default function Cookie() {

  const [isConsented,setIsConsented] = useState(false);
 
const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const checkCookie = () => {
    let user = getCookie("username");
    if (user !== "") {
      console.log("Welcome again " + user);
      setIsConsented(true);
      console.log(isConsented);
    } else {
      user = prompt("Please enter your name:", "");
      if (user !== "" && user !== null) {
        setCookie("username", user, 365);
      }
      setIsConsented(true);
      console.log(isConsented);
    }

  };

  const rejectCookie = () => {
    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    setIsConsented(true);
    console.log(isConsented);
  };

  useEffect(() => {
    setIsConsented(false);
  },[]);

  return (
    <>
      {!isConsented && (
        <div className="display-container">
          <div className="cookie-container">
            <p className="description">
              By continuing to used this website, you consent to our use of
              cookies. Learn more in our
              <a href="privacy-policy-page"> Privacy Policy.</a>
              <button className="accept-button" onClick={checkCookie}>
                Accept
              </button>
              <button className="reject-button" onClick={rejectCookie}>
                Reject
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
