"use strict";

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("button");
const fnerror = document.getElementById("fnerror");
const lnerror = document.getElementById("lnerror");
const emailerror1 = document.getElementById("emailerror1");
const emailerror2 = document.getElementById("emailerror2");
const passerror = document.getElementById("passerror");
const fnerroricon = document.getElementById("fnerroricon");
const lnerroricon = document.getElementById("lnerroricon");
const emailerroricon = document.getElementById("emailerroricon");
const passerroricon = document.getElementById("passerroricon");

function validfirst() {
  let pfirst = /^[A-Za-z]{1,20}$/;
  if (pfirst.test(first.value) == "") {
    fnerror.className = "show";
    fnerroricon.className = "showicon";
  }
}

function validlast() {
  let plast = /^[A-Za-z]{1,20}$/;
  if (plast.test(last.value) == "") {
    lnerror.className = "show";
    lnerroricon.className = "showicon";
  }
}

function validemail() {
  let pemail = /^[a-z0-9]{1,20}@[a-z]{3,10}[.]com$/;
  if (email.value == "") {
    emailerror2.className = "show";
    emailerroricon.className = "showicon";
  } else if (pemail.test(email.value) == false) {
    emailerror1.className = "show";
    emailerroricon.className = "showicon";
  }
}

function validpass() {
  let ppass = /^[A-Za-z0-9]{1,10}$/;
  if (ppass.test(password.value) == "") {
    passerror.className = "show";
    passerroricon.className = "showicon";
  }
}

function clear() {
  fnerror.className = "hide";
  fnerroricon.className = "hide";
  lnerror.className = "hide";
  lnerroricon.className = "hide";
  emailerror1.className = "hide";
  emailerror2.className = "hide";
  emailerroricon.className = "hide";
  passerror.className = "hide";
  passerroricon.className = "hide";
}

btn.addEventListener("click", validfirst);
btn.addEventListener("click", validlast);
btn.addEventListener("click", validemail);
btn.addEventListener("click", validpass);
first.addEventListener("focus", clear);
last.addEventListener("focus", clear);
email.addEventListener("focus", clear);
password.addEventListener("focus", clear);
