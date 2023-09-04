const form = document.getElementById("form");

[...form.elements].forEach((input) => {
  ["change", "keyup"].forEach((method) =>
    input.addEventListener(method, (e) => formControl(e.target))
  );
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  [...this.elements].forEach((input) => formControl(input));

  if (this.checkValidity() === true) {
    alert(
      "Formu doldurduğunuz için teşekkür ederiz, size en kısa süre dönüş yapacağız"
    );
    [...this.elements].forEach((input) => {
      input.value = "";
    });
  }
});

function formControl(input) {
  if (!input.checkValidity()) {
    let error;
    if (input.nextElementSibling?.className === "error-msg") {
      error = input.nextElementSibling;
    } else {
      error = document.createElement("small");
    }
    error.className = "error-msg";
    error.innerText = input.validationMessage;
    input.insertAdjacentElement("afterend", error);
  } else {
    const errorMsg = input.nextElementSibling;
    if (errorMsg) {
      errorMsg.remove();
    }
  }
}

// phone

const phoneInput = document.getElementById("phone-input");

phoneInput.addEventListener("input", formatPhoneNumber);

function formatPhoneNumber() {
  const phoneNumber = phoneInput.value.replace(/\D/g, "").substring(0, 10);
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{3})(\d{3})(\d{2})(\d{2})/,
    "($1) $2 $3 $4"
  );

  phoneInput.value = formattedPhoneNumber;

  if (phoneNumber.length !== 10) {
    phoneInput.setCustomValidity("Lütfen geçerli bir telefon numarası girin.");
  } else {
    phoneInput.setCustomValidity("");
  }
}
