const $form = $("#support");
const $name = $form.find('[data-name="firstname"]');
const $surname = $form.find('[data-name="lastname"]');
const $patronymic = $form.find('[data-name="patronymic"]');
const $phone = $form.find('[data-name="tel"]');
const $email = $form.find('[data-name="email"]');
const $city = $form.find('[data-name="city"]');
const $message = $form.find('[data-name="message"]');
const $checkbox = $form.find('[data-name="checkbox"]');
const $submit = $form.find('button[type="submit"]');

let isNameValid = false;
let isSurnameValid = false;
let isPatronymicValid = false;
let isEmailValid = false;
let isPhoneValid = false;
let isCityValid = false;
let isMessageValid = false;
let isChecked = false;

let hasNameError = false;
let hasSurnameError = false;
let hasPatronymicError = false;
let hasEmailError = false;
let hasPhoneError = false;
let hasCityError = false;
let hasMessageError = false;
let hasCheckError = false;
const emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const setError = ($item) => {
  $item.addClass("error");
};

const removeError = ($item) => {
  $item.removeClass("error");
};

const checkErrors = () => {
  if (
    hasNameError ||
    hasSurnameError ||
    hasPatronymicError ||
    hasEmailError ||
    hasPhoneError ||
    hasCityError ||
    hasMessageError ||
    hasCheckError
  ) {
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
  if (!isSurnameValid) {
    setError($surname);
    hasSurnameError = true;
  }
  if (!isPatronymicValid) {
    setError($patronymic);
    hasPatronymicError = true;
  }
  if (!isEmailValid) {
    setError($email);
    hasEmailError = true;
  }
  if (!isPhoneValid) {
    setError($phone);
    hasPhoneError = true;
  }
  if (!isCityValid) {
    setError($city);
    hasCityError = true;
  }
  if (!isMessageValid) {
    setError($message);
    hasCityError = true;
  }
  if (!isChecked) {
    setError($checkbox);
    hasCheckError = true;
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

const onSurnameInput = () => {
  removeError($surname);
  hasSurnameError = false;
  checkErrors();

  if ($surname.val().trim().length === 0) {
    isSurnameValid = false;
  } else {
    isSurnameValid = true;
  }
};

const onPatronymicInput = () => {
  removeError($patronymic);
  hasPatronymicError = false;
  checkErrors();

  if ($patronymic.val().trim().length === 0) {
    isPatronymicValid = false;
  } else {
    isPatronymicValid = true;
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

const onCityInput = () => {
  removeError($city);
  hasCityError = false;
  checkErrors();

  if ($city.val().trim().length === 0) {
    isCityValid = false;
  } else {
    isCityValid = true;
  }
};

const onMessageInput = () => {
  removeError($message);
  hasMessageError = false;
  checkErrors();

  if ($message.val().trim().length === 0) {
    isMessageValid = false;
  } else {
    isMessageValid = true;
  }
};

const onCheckboxChange = () => {
  removeError($checkbox);
  hasCheckError = false;
  checkErrors();

  if ($checkbox.is(":checked")) {
    isChecked = true;
  } else {
    isChecked = false;
  }
};

const onSubmit = (e) => {
  e.preventDefault();

  setErrors();

  if (
    isNameValid &&
    isSurnameValid &&
    isPatronymicValid &&
    isEmailValid &&
    isPhoneValid &&
    isCityValid &&
    isMessageValid &&
    isChecked
  ) {
    $form.trigger("submit");
  } else {
    $submit.attr("disabled", true);
  }
};

if ($form.length > 0) {
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
  if ($surname.val().trim().length === 0) {
    isSurnameValid = false;
  } else {
    isSurnameValid = true;
  }
  if ($patronymic.val().trim().length === 0) {
    isPatronymicValid = false;
  } else {
    isPatronymicValid = true;
  }
  if ($city.val().trim().length === 0) {
    isCityValid = false;
  } else {
    isCityValid = true;
  }
  if ($message.val().trim().length === 0) {
    isMessageValid = false;
  } else {
    isMessageValid = true;
  }

  if ($checkbox.is(":checked")) {
    isChecked = true;
  } else {
    isChecked = false;
  }
}

$name.on("input", onNameInput);
$surname.on("input", onSurnameInput);
$patronymic.on("input", onPatronymicInput);
$email.on("input", onEmailInput);
$phone.on("input", onPhoneInput);
$city.on("input", onCityInput);
$message.on("input", onMessageInput);
$checkbox.on("change", onCheckboxChange);
$submit.on("click", onSubmit);
