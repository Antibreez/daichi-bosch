const $modal = $("#get-price");
const $name = $modal.find('[data-name="firstname"]');
const $phone = $modal.find('[data-name="tel"]');
const $email = $modal.find('[data-name="email"]');
const $submit = $modal.find('button[type="submit"]');

let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;

let hasNameError = false;
let hasEmailError = false;
let hasPhoneError = false;

const emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const setError = ($item) => {
  $item.addClass("error");
};

const removeError = ($item) => {
  $item.removeClass("error");
};

const checkErrors = () => {
  if (hasNameError || hasEmailError || hasPhoneError) {
    $submit.attr("disabled", true);
  } else {
    $submit.removeAttr("disabled");
  }
};

const setErrors = () => {
  if (!isNameValid) {
    setError($name);
    hasNameError = true;
  }
  if (!isEmailValid) {
    setError($email);
    hasEmailError = true;
  }
  if (!isPhoneValid) {
    setError($phone);
    hasPhoneError = true;
  }
};

const onNameInput = () => {
  removeError($name);
  hasNameError = false;
  checkErrors();

  if ($name.val().trim().length === 0) {
    isNameValid = false;
  } else {
    isNameValid = true;
  }
};

const onEmailInput = () => {
  removeError($email);
  hasEmailError = false;
  checkErrors();

  if (!!$email.val() && emailRegExp.test($email.val().trim())) {
    isEmailValid = true;
  } else {
    isEmailValid = false;
  }
};

const onPhoneInput = () => {
  removeError($phone);
  hasPhoneError = false;
  checkErrors();

  if (!!$phone.val() && !$phone.val().includes("_")) {
    isPhoneValid = true;
  } else {
    isPhoneValid = false;
  }
};

const onSubmit = (e) => {
  e.preventDefault();

  setErrors();

  if (isNameValid && isEmailValid && isPhoneValid) {
    $modal.trigger("submit");
  } else {
    $submit.attr("disabled", true);
  }
};

$("a[href='#vrf-select']").on("click", function () {
  if (!!$email.val() && emailRegExp.test($email.val().trim())) {
    isEmailValid = true;
  } else {
    isEmailValid = false;
  }
  if (!!$phone.val() && !$phone.val().includes("_")) {
    isPhoneValid = true;
  } else {
    isPhoneValid = false;
  }
  if ($name.val().trim().length === 0) {
    isNameValid = false;
  } else {
    isNameValid = true;
  }

  console.log($email.val());
  console.log($name.val());
  console.log(emailRegExp.test($email.val().trim()));

  console.log(isNameValid, isPhoneValid, isEmailValid);
});

$name.on("input", onNameInput);
$email.on("input", onEmailInput);
$phone.on("input", onPhoneInput);
$submit.on("click", onSubmit);
