let elWrapper = document.querySelector(".hero__wrapper");
let elCarusel = document.querySelector(".hero__carusel");
let elForm = document.querySelector(".hero__form");
let elWrName = document.querySelector(".name");
let elName = document.querySelector(".name__text");
let elWrSurname = document.querySelector(".surname");
let elSurname = document.querySelector(".surname__text");
let elWrEmail = document.querySelector(".email");
let elEmail = document.querySelector(".email__text");
let elWrPassword = document.querySelector(".password");
let elPassword = document.querySelector(".password__text");
let elWrRPassword = document.querySelector(".repeat-password");
let elRPassword = document.querySelector(".rep-password__text");
let elPasswordBtn = document.querySelector(".password__btn");
let elRPasswordBtn = document.querySelector(".rep-password__btn");


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // ROTATE values

  let nameValue = elName.value.trim();
  let surnameValue = elSurname.value.trim();
  let emailValue = elEmail.value.trim();
  let passwordValue = elPassword.value.trim();
  let rpasswordValue = elRPassword.value.trim();

  // NAME validation----------------
  // Name min length val------

  if (nameValue.length < 2) {
    elWrName.classList.add("error");
    return;
  } else {
    elWrName.classList.remove("error");
  }

  // Name max length val-------

  if (nameValue.length > 30) {
    elWrName.classList.add("error");
    return;
  } else {
    elWrName.classList.remove("error");
  }

  // Name number val-----
  for (let a = 0; a < nameValue.length; a++) {
    if (
      nameValue[a] == "0" ||
      nameValue[a] == "1" ||
      nameValue[a] == "2" ||
      nameValue[a] == "3" ||
      nameValue[a] == "4" ||
      nameValue[a] == "5" ||
      nameValue[a] == "6" ||
      nameValue[a] == "7" ||
      nameValue[a] == "8" ||
      nameValue[a] == "9"
    ) {
      elWrName.classList.add("error");
      return;
    } else {
      elWrName.classList.remove("error");
    }
  }
  // ---------------
  // SURNAME Vvalidation-----------
  // Surname min length val------

  if (surnameValue.length < 2) {
    elWrSurname.classList.add("error");
    return;
  } else {
    elWrSurname.classList.remove("error");
  }

  // Surname max length val-------

  if (surnameValue.length > 30) {
    elWrSurname.classList.add("error");
    return;
  } else {
    elWrSurname.classList.remove("error");
  }

  // Surname number val--------

  for (let a = 0; a < surnameValue.length; a++) {
    if (
      surnameValue[a] == "0" ||
      surnameValue[a] == "1" ||
      surnameValue[a] == "2" ||
      surnameValue[a] == "3" ||
      surnameValue[a] == "4" ||
      surnameValue[a] == "5" ||
      surnameValue[a] == "6" ||
      surnameValue[a] == "7" ||
      surnameValue[a] == "8" ||
      surnameValue[a] == "9"
    ) {
      elWrSurname.classList.add("error");
      return;
    } else {
      elWrSurname.classList.remove("error");
    }
  }

  // ----------

  // EMAIL validation-----------

  if (emailValue.endsWith("@gmail.com") || emailValue.endsWith("@mail.ru")) {
    elWrEmail.classList.remove("error");
    return;
  } else {
    elWrEmail.classList.add("error");
  }

  // ----------

  // PASSWORD validation----------

  // PASSWORD date-type val-------

  
  if (passwordValue.length == 8 || isNaN(passwordValue)) {
    elWrPassword.classList.add("error");
    return;
  } else {
    elWrPassword.classList.remove("error");
  }


  if (true) {

    
  }
});


  // -------------

  // PASSWORD length val-----------

  // -----------

  // REPEAT-PASSWORD validation------

  // PASSWORD date-type val--------

  //   if (passwordValue = rpasswordValue) {
  //    elWrRPassword.classList.remove("error");
  //    return;
  //   }else {
  //    elWrRPassword.classList.add("error");
  //   }

  //---------

  // ALL VALIDATION----------

  //   if (
  //     nameValue.length >= 2 &&
  //     nameValue.length <= 30 &&
  //     surnameValue.length >= 2 &&
  //     surnameValue.length <= 30 &&
  //     (emailValue.endsWith("@gmail.com") || emailValue.endsWith("@mail.ru")) &&
  //     (rpasswordValue = passwordValue)
  //   ) {
  //     elWrapper.style.display = "none";
  //     elCarusel.style.display = "block";
  //   }

  //   //-------
  // });

  // // PASSWORD type select--------

  // elPasswordBtn.addEventListener("click", function (evt) {
  //   evt.preventDefault();

  //   if (elPassword.type == "password") {
  //     elPassword.type = "text";
  //   } else {
  //     elPassword.type = "password";
  //   }
  //   return;
  // });

  // // -------------

  // // REPEAT-PASSWORD type select--------

  // elRPasswordBtn.addEventListener("click", function (evt) {
  //   evt.preventDefault();

  //   if (elRPassword.type == "password") {
  //     elRPassword.type = "text";
  //   } else {
  //     elRPassword.type = "password";
  //   }
  //   return;
  // });

  // // -------------

  // // CARUSEL VALIDATION-----------------

  // // CARUSEL listes---------

  let elCarForm = document.querySelector(".carusel__form");
  // CARUSELS
  let elContactC = document.querySelector(".carusel__contact");
  let elServiceC = document.querySelector(".carusel__service");
  let elBudgetC = document.querySelector(".carusel__budget");
  let elCheekC = document.querySelector(".carusel__cheek");
  // WRAPPERS
  let elNameWr = document.querySelector(".contact__name-wr");
  let elEmailWr = document.querySelector(".contact__email-wr");
  let elTelWr = document.querySelector(".contact__tel-wr");
  // VALUES
  let elContactName = document.querySelector(".contact__name");
  let elContactEmail = document.querySelector(".contact__email");
  let elContactTel = document.querySelector(".contact__tel");
  let elContactCompany = document.querySelector(".contact__company");
  // BUTTONS
  let elBack = document.querySelector(".back");
  let elNext = document.querySelector(".next");

  // ----------

  // CARUSEL FORM validations-------------

  elCarForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    // VALUE ROTATE---------
    let contactName = elContactName.value.trim();
    let contactEmail = elContactEmail.value.trim();
    let contactTel = elContactTel.value.trim();
    let contactCompany = elContactCompany.value.trim();
    // --------------

    // NAME validation----------------
    // Name min length val------

    if (contactName.length < 2) {
      elNameWr.classList.add("error");
      return;
    } else {
      elNameWr.classList.remove("error");
    }

    // Name max length val-------

    if (contactName.length > 30) {
      elNameWr.classList.add("error");
      return;
    } else {
      elNameWr.classList.remove("error");
    }

    // Name number val-----
    for (let a = 0; a < contactName.length; a++) {
      if (
        contactName[a] == "0" ||
        contactName[a] == "1" ||
        contactName[a] == "2" ||
        contactName[a] == "3" ||
        contactName[a] == "4" ||
        contactName[a] == "5" ||
        contactName[a] == "6" ||
        contactName[a] == "7" ||
        contactName[a] == "8" ||
        contactName[a] == "9"
      ) {
        elNameWr.classList.add("error");
        return;
      } else {
        elNameWr.classList.remove("error");
      }
    }
    // ---------------

    // EMAIL validation-----------

    if (
      contactEmail.endsWith("@gmail.com") ||
      contactEmail.endsWith("@mail.ru")
    ) {
      elEmailWr.classList.remove("error");
      return;
    } else {
      elEmailWr.classList.add("error");
    }

    // ----------
})
