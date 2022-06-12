import { LitElement, html, css } from "lit-element";
import { RestClient } from "../common/rest-client.js";

class AppRegistrationForm extends LitElement {
  static get is() {
    return "app-registration-form";
  }

  static get properties() {
    return {
      tooltip: {
        type: String,
        reflect: true,
      },
      submitBtn: {
        type: String,
      },
      firstName: {
        type: String,
        reflect: true,
        attribute: "first-name",
      },
      lastName: {
        type: String,
        reflect: true,
        attribute: "last-name",
      },
      email: {
        type: String,
        reflect: true,
        attribute: "email",
      },
      dateOfBirth: {
        type: String,
      },
      gender: {
        type: String,
      },
      telNumber: {
        type: Number,
      },
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      agreed: {
        type: Boolean,
      },
      pass: {
        type: String,
      },
      passTwo: {
        type: String,
      },
      _id: {
        type: String,
      },
      countries: { type: Array },
      errors: { type: Array },
      checkActive: {
        type: Boolean,
      },
    };
  }
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
      }
      .sign-up-header {
        padding: 10px;
      }
      .title {
        text-align: center;
      }

      .form {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
        margin-top: 20px;
      }

      .buttons {
        grid-column-start: 1;
        grid-column-end: 5;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .buttons .btn {
        height: 30px;
        width: 200px;
        margin: 0 20px;
        font-size: 18px;
        border: none;
      }
      .submit-btn {
        background-color: rgb(128, 240, 128);
      }
      .cleanup-btn {
        background-color: lightcoral;
      }
      .submit-btn:hover {
        box-shadow: 1px 2px 13px black;
        background-color: rgb(115, 219, 115);
      }
      .cleanup-btn:hover {
        box-shadow: 1px 2px 13px black;
        background-color: rgb(233, 105, 105);
      }
      label {
        font-size: 18px;
      }
      input,
      select {
        height: 24px;
        width: 220px;
        padding: 1px 5px;
        font-size: 16px;
        background-color: antiquewhite;
        border: 2px solid transparent;
      }
      input[type="radio"],
      input[type="checkbox"] {
        width: 15px;
        margin: 0 20px 0 5px;
      }
      .error-messages {
        grid-column-start: 1;
        grid-column-end: 5;
        color: red;
      }
      .valid {
        border: 2px solid green;
      }
      .invalid {
        border: 2px solid red;
      }

      @media (max-width: 1024px) {
        .form {
          padding: 0 auto;
          grid-template-columns: 1fr 1fr;
        }
        .buttons {
          grid-column-start: 1;
          grid-column-end: 3;
        }
        .error-messages {
          grid-column-start: 1;
          grid-column-end: 3;
          color: red;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="sign-up-header">
        <h1 class="title">Create Your Account</h1>
        <h4>* Required to complete your enrollment</h4>
      </div>
      <div class="form">
        <label for="firstName">First name *</label>
        <input
          type="text"
          id="firstName"
          required
          onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9-]/g, '')"
          .value="${this.firstName}"
          @input="${(event) => (this.firstName = event.target.value)}"
          class=" ${this.fieldCheck("firstName")}"
        />

        <label for="lastName">Last name *</label>
        <input
          type="text"
          id="lastName"
          required
          onkeyup="this.value=this.value.replace(/[^a-zA-Z-' ']/g, '')"
          .value="${this.lastName}"
          @input="${(event) => (this.lastName = event.target.value)}"
          class=" ${this.fieldCheck("lastName")}"
        />

        <label for="email">Email address *</label>
        <input
          type="email"
          id="email"
          required
          .value="${this.email}"
          @input="${(event) => (this.email = event.target.value)}"
          class=" ${this.fieldCheck("email")}"
        />

        <span>Gender</span>
        <div>
          <label for="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            .checked="${this.gender === "male" ? true : false}"
            @input="${(event) => (this.gender = event.target.value)}"
          />
          <label for="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            .checked="${this.gender === "female" ? true : false}"
            @input="${(event) => (this.gender = event.target.value)}"
          />
        </div>

        <label for="dateOfBirth">Date of birth *</label>
        <input
          type="date"
          id="dateOfBirth"
          required
          .value="${this.dateOfBirth}"
          @input="${(event) => (this.dateOfBirth = event.target.value)}"
          class=" ${this.fieldCheck("dateOfBirth")}"
        />

        <label for="telNumber">Mobile number</label>
        <input
          type="tel"
          title="max 12 digit number"
          name="telNumber"
          id="telNumber"
          .value="${this.telNumber}"
          @input="${(event) => (this.telNumber = event.target.value)}"
        />

        <label for="country">Country</label>
        <select
          id="country"
          .value="${this.country}"
          @input="${(event) => (this.country = event.target.value)}"
        >
          ${this.countries.map(
            (item) => html`
              <option value="${item.country}">${item.country}</option>
            `
          )}
        </select>

        <label for="city">City </label>
        <input
          type="text"
          placeholder="enter your city"
          name="city"
          id="city"
          list="cities"
          .value="${this.city}"
          @input="${(event) => (this.city = event.target.value)}"
        />
        <datalist id="cities">
          <option value="Tokyo">Tokyo</option>
          <option value="Delhi">Delhi</option>
          <option value="Shanghai">Shanghai</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Mexico City">Mexico City</option>
          <option value="Cairo">Cairo</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Beijing">Beijing</option>
          <option value="New York City">New York City</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Moscow">Moscow</option>
          <option value="Paris">Paris</option>
          <option value="Seoul">Seoul</option>
          <option value="London">London</option>
          <option value="Tehran">Tehran</option>
          <option value="Madrid">Madrid</option>
          <option value="Berlin">Berlin</option>
          <option value="Tbilis">Tbilis</option>
          <option value="Baku">Baku</option>
          <option value="Yerevan">Yerevan</option>
          <option value="Batumi">Batumi</option>
        </datalist>

        <label for="paroliOne">Password *</label>
        <input
          type="password"
          id="paroliOne"
          name="paroli"
          required
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          .value="${this.pass}"
          @input="${(event) => (this.pass = event.target.value)}"
          class=" ${this.fieldCheck("pass")}"
        />

        <label for="paroliTwo">Repeat password *</label>
        <input
          type="password"
          id="paroliTwo"
          name="paroli"
          required
          .value="${this.passTwo}"
          @input="${(event) => (this.passTwo = event.target.value)}"
          class=" ${this.fieldCheck("passTwo")}"
        />

        <label for="agree"
          >I agree to the <a href="">Terms of Service</a></label
        >
        <input
          type="checkbox"
          name="agree"
          id="agree"
          required
          .checked="${this.agreed}"
          @change="${this.toggleAgreed}"
          class=" ${this.fieldCheck("agreed")}"
        />

        <ul class="error-messages">
          ${this.errors.map((error) => html` <li>${error}</li> `)}
        </ul>
        <div class="buttons">
          <button class="btn submit-btn" @click="${this.registerUser}">
            ${this.submitBtn}
          </button>
          <button class="btn cleanup-btn" @click="${this.emptyInputValues}">
            Clean up
          </button>
        </div>
      </div>
    `;
  }

  toggleAgreed() {
    this.agreed = !this.agreed;
  }

  regexCheck(response, message) {
    if (response) {
      if (this.errors.includes(message)) {
        const index = this.errors.indexOf(message);
        if (index > -1) {
          this.errors.splice(index, 1);
        }
      }
      return "valid";
    } else {
      if (!this.errors.includes(message)) {
        this.errors.push(message);
      }
      return "invalid";
    }
  }
  fieldCheck(fieldname) {
    if (!this.checkActive) {
      return;
    }
    if (fieldname === "firstName") {
      if (this.firstName) {
        return "valid";
      } else {
        return "invalid";
      }
    }
    if (fieldname === "lastName") {
      if (this.lastName) {
        return "valid";
      } else {
        return "invalid";
      }
    }
    if (fieldname === "email") {
      const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      const response = regex.test(this.email);
      const message = "Enter email correctly!";
      return this.regexCheck(response, message);
    }
    if (fieldname === "dateOfBirth") {
      if (this.dateOfBirth) {
        return "valid";
      } else {
        return "invalid";
      }
    }
    if (fieldname === "pass") {
      const regex = new RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
      const response = regex.test(this.pass);
      const message =
        "New password must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters.";
      return this.regexCheck(response, message);
    }
    if (fieldname === "passTwo") {
      const message = "Repeat the password correctly!!!";
      if (this.passTwo !== this.pass || this.passTwo === "") {
        if (!this.errors.includes(message)) {
          this.errors.push(message);
        }
        return "invalid";
        //
      } else {
        if (this.errors.includes(message)) {
          const index = this.errors.indexOf(message);
          if (index > -1) {
            this.errors.splice(index, 1);
          }
        }
        return "valid";
      }
    }
    if (fieldname === "agreed") {
      const message = "You have to agree the Terms of Service";
      if (this.agreed === true) {
        if (this.errors.includes(message)) {
          const index = this.errors.indexOf(message);
          if (index > -1) {
            this.errors.splice(index, 1);
          }
        }
        return "valid";
      } else {
        if (!this.errors.includes(message)) {
          this.errors.push(message);
        }
        return "invalid";
      }
    }
  }
  checkInputs() {
    this.checkActive = true;

    if (
      this.errors.length > 0 ||
      this.agreed === false ||
      this.pass !== this.passTwo
    ) {
      return false;
    }
    return true;
  }

  registerUser(event) {
    if (!this.checkInputs()) {
      return;
    }

    const target = event.currentTarget;
    target.disabled = true;

    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      gender: this.gender,
      dateOfBirth: this.dateOfBirth,
      telNumber: this.telNumber,
      country: this.country,
      city: this.city,
      pass: this.pass,
      _id: this._id,
    };

    RestClient.call("/api/client/registerUser", user)
      .then((result) => {
        console.log(result);
        if (!result._id) {
          alert("You have successfully registered ✔");
        }
        if (result._id) {
          this.submitBtn = "Sign up";
          alert("You have successfully updated your info ✔");
        }
      })
      .catch((error) => console.log(error))
      .finally(() => (target.disabled = false));

    this.emptyInputValues();
    this.callUserList(user);
  }

  callUserList(user) {
    const event = new CustomEvent("app-call-user-list", {
      detail: user,
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  emptyInputValues() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.gender = "";
    this.dateOfBirth = "";
    this.telNumber = 0;
    this.country = "";
    this.city = "";
    this.agreed = false;
    this.pass = "";
    this.passTwo = "";
    this._id = undefined;
    this.submitBtn = "Sign up";
    this.checkActive = false;
    this.errors = [];
  }

  connectedCallback() {
    super.connectedCallback();
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => (this.countries = result.data))
      .catch((error) => console.log(error));
  }

  constructor() {
    super();
    this.tooltip = "Hello world!";
    this.emptyInputValues();
    this.countries = [];
  }

  setUserData(user) {
    Object.keys(user).forEach((key) => {
      this[key] = user[key];
    });
    this.submitBtn = "Update user info";
  }
}

customElements.define(AppRegistrationForm.is, AppRegistrationForm);
