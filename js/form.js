// * === CONTACT SECTION === *

// FORM VALIDATION

// add event listener to button
document.querySelector("button").addEventListener("click", validateForm);

function validateForm(e) {
  // prevent reloading of page
  e.preventDefault();

  // prevent generating error messages several times
  if (document.querySelector("form span")) {
    document.querySelectorAll("form span").forEach((element) => {
      element.remove();
    });
  }

  // input data
  let data = {};
  // error messages
  let validationErrors = {};

  // create properties for data object
  data.name = document.querySelector("#name").value;
  data.email = document.querySelector("#email").value;
  data.phone = document.querySelector("#phone").value;
  data.message = document.querySelector("#message").value;
  data.awarenessOther = document.querySelector("#other_text").value;
  data.autograph = document.querySelector("#autograph_name").value;

  // name
  if (!data.name) {
    console.error(`No name ${data.name}`);
    validationErrors.name = "Please enter your name";
  } else {
    console.info(`name: ${data.name}`);
  }

  // email
  if (!data.email) {
    console.error(`No email ${data.email}`);
    validationErrors.email = "Please enter an email address";
  } else {
    console.info(`Email: ${data.email}`);

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // test if email is an email
    if (!emailRegex.test(data.email)) {
      // email is not a match
      validationErrors.email = "Invalid email address";
    } else {
      console.info("Email is valid");
    }
  }

  // phone (optional)
  if (!data.phone == "") {
    let phoneRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    // test if phone number is a phone number
    if (!phoneRegex.test(data.phone)) {
      // phone number is not a match
      console.error(`Phone number "${data.phone}" is invalid`);
      validationErrors.phone = "Invalid phone number";
    } else {
      console.info("Phone number is valid");
    }
  }

  // message
  if (!data.message) {
    console.error(`No message ${data.message}`);
    validationErrors.message = "Please enter a message";
  } else {
    console.info(`Message: ${data.message}`);
  }

  // survey "how did you hear about me?" (optional) - if "Other" is checked
  if (document.querySelector("#other").checked) {
    if (!data.awarenessOther) {
      console.error(
        `No text in "Other:" section is filled in ${data.awarenessOther}`
      );
      validationErrors.awarenessOther = "Please fill in";
    } else {
      console.info(`"Other:" section is filled in`);
    }
  }

  // autograph
  if (document.querySelector("#autograph").checked) {
    if (!data.autograph) {
      console.error(`No name for autograph ${data.autograph}`);
      validationErrors.autograph = "Please fill in";
    } else {
      console.info("Name for autograph is filled in");
    }
  }

  // if there are errors
  if (Object.keys(validationErrors).length > 0) {
    // display error messages
    displayErrors(validationErrors);
  } else {
    // send form to backend
    console.log("Sending form data");

    // clear placeholder display errors
    document.querySelector("#other_text").placeholder = "";
    document.querySelector("#autograph_name").placeholder = "";

    // display for user: form send succeeded
    const succeededContainer = document.createElement("span");
    succeededContainer.innerHTML =
      "Thanks for your message! I'll get back to you as soon as possible! :)";
    document.querySelector("button").after(succeededContainer);
  }
}

// function that will show errors in the page
function displayErrors(validationErrors) {
  if (validationErrors.name) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.name;
    document.querySelector("#name").after(errorContainer);
  }

  if (validationErrors.email) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.email;
    document.querySelector("#email").after(errorContainer);
  }

  if (validationErrors.phone) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.phone;
    document.querySelector("#phone").after(errorContainer);
  }

  if (validationErrors.message) {
    const errorContainer = document.createElement("span");
    errorContainer.innerHTML = validationErrors.message;
    document.querySelector("#message").after(errorContainer);
  }

  if (validationErrors.awarenessOther) {
    document.querySelector("#other_text").placeholder =
      validationErrors.awarenessOther;
  }
  // remove error message if it's not checked anymore
  if (!document.querySelector("#other").checked) {
    document.querySelector("#other_text").placeholder = "";
  }

  if (validationErrors.autograph) {
    document.querySelector("#autograph_name").placeholder =
      validationErrors.autograph;
  }
  // remove error message if it's not checked anymore
  if (!document.querySelector("#autograph").checked) {
    document.querySelector("#autograph_name").placeholder = "";
  }
}
