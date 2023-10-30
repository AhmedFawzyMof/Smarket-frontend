"use strict";

function logout() {
  localStorage.removeItem("AuthToken");
  location.replace("/");
}