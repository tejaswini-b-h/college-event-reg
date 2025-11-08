document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    usn: document.getElementById('usn').value,
    branch: document.getElementById('branch').value,
    event: document.getElementById('event').value
  };

  document.getElementById('msg').textContent = "Submitting...";

  // Backend integration comes in Phase 3
  console.log("Registration Data:", data);

  document.getElementById('msg').textContent = "✅ Registration data ready to send!";
});


const form = document.getElementById("multiStepForm");
const formSteps = document.querySelectorAll(".form-step");
let currentStep = 0;

document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      formSteps[currentStep].classList.remove("active");
      currentStep++;
      formSteps[currentStep].classList.add("active");

      if (currentStep === formSteps.length - 1) {
        showConfirmation();
      }
    }
  });
});

document.querySelectorAll(".prev-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("active");
    currentStep--;
    formSteps[currentStep].classList.add("active");
  });
});

function validateStep(step) {
  let valid = true;
  const inputs = formSteps[step].querySelectorAll("input, select");
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.reportValidity();
      valid = false;
    }
  });
  return valid;
}

function showConfirmation() {
  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const email = document.getElementById("email").value;
  const event = document.getElementById("event").value;
  const utr = document.getElementById("utr").value;

  document.getElementById("confirmData").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>College:</strong> ${college}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Event:</strong> ${event}</p>
    <p><strong>UTR No:</strong> ${utr}</p>
  `;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById("msg").textContent = "Submitting...";

  const formData = new FormData(form);

  // later we will send this to backend via fetch()
  console.log("Form Data:", Object.fromEntries(formData.entries()));

  document.getElementById("msg").textContent = "✅ Registration completed successfully!";
});
