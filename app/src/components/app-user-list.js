import { LitElement, html, css } from "lit-element";
import { RestClient } from "../common/rest-client.js";

class AppUserlist extends LitElement {
  static get is() {
    return "app-user-list";
  }

  static get properties() {
    return {
      tooltip: {
        type: String,
        reflect: true,
      },
      users: { type: Array },
      searchTerm: { type: String },
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .users-info_header {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row wrap;
      }
      .users-info_header h3 {
        margin: 5px 15px;
      }
      #searchedValue {
        padding: 0 5px;
      }
      .users-info_grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px auto;
        grid-gap: 10px;
        padding: 10px;
      }
      .gird_header-row,
      .grid_user-row {
        display: grid;
        grid-template-columns: 30px repeat(3, 1fr) 180px repeat(4, 1fr);
        grid-gap: 4px;
      }
      .gird_header-row span {
        font-weight: bold;
      }
      .grid_user-row span {
        word-wrap: break-word;
      }
      .action-btns {
        display: inline-flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .btn {
        cursor: pointer;
      }
      input {
        height: 24px;
        width: 220px;
        padding: 1px 7px;
        font-size: 16px;
        background-color: antiquewhite;
        border: 2px solid transparent;
      }
    `;
  }

  render() {
    return html`
      <div class="users-info_header">
        <h3>Users information</h3>
        <div class="search-bar">
          <input
            type="text"
            id="searchedValue"
            placeholder="🔍 Search.. "
            @input="${(event) => (this.searchTerm = event.target.value)}"
          />
        </div>
      </div>
      <div class="users-info_grid">
        <div class="gird_header-row">
          <span>#</span>
          <span>Name</span>
          <span>Gender</span>
          <span>Date of birth</span>
          <span>Email</span>
          <span>Mobile number</span>
          <span>Country</span>
          <span>City</span>
          <span>Actions</span>
        </div>
        <div class="gird_info-rows" id="usersInfoTable">
          ${this.users
            .filter((item) => this.filter(item))
            .map(
              (user, index) =>
                html`
                  <div class="grid_user-row">
                    <span>${index + 1}</span>
                    <span>${user.firstName} ${user.lastName}</span>
                    <span>${user.gender}</span>
                    <span
                      >${user.dateOfBirth
                        ? this.getFormattedDate(user.dateOfBirth)
                        : ""}</span
                    >
                    <span>${user.email}</span>
                    <span>${user.telNumber !== 0 ? user.telNumber : ""}</span>
                    <span>${user.country}</span>
                    <span>${user.city}</span>
                    <div class="action-btns">
                      <div
                        title="Update user info"
                        class="update-btn btn"
                        @click="${() => this.editUser(user)}"
                      >
                        <span>📝</span>
                      </div>
                      <div
                        title="Delete user"
                        class="delete-btn btn"
                        @click="${() => this.deleteUser(user)}"
                      >
                        <span>❌</span>
                      </div>
                    </div>
                  </div>
                `
            )}
        </div>
      </div>
    `;
  }

  getFormattedDate(dateOfBirth) {
    const date = new Date(dateOfBirth);
    let day;
    if (date.getDate() < 10) {
      day = `0${date.getDate()}`;
    } else {
      day = date.getDate();
    }
    let month;
    if (date.getMonth() < 9) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth() + 1;
    }
    return `${day}/${month}/${date.getFullYear()}`;
  }

  filter(item) {
    if (!this.searchTerm) {
      return true;
    }

    const regex = new RegExp(this.searchTerm, "i");
    const response =
      regex.test(item.firstName) ||
      regex.test(item.lastName) ||
      regex.test(item.gender) ||
      regex.test(item.email) ||
      regex.test(item.telNumber) ||
      regex.test(item.country) ||
      regex.test(item.city);
    return response;
  }

  getAccess(pass) {
    const enteredPass = prompt("Enter the password");
    if (enteredPass === null) {
      return false;
    }
    if (enteredPass !== pass) {
      alert("You entered wrong password, please try again!");
      return false;
    }
    if (enteredPass === pass) {
      return true;
    }
  }

  getUserList() {
    RestClient.call("/api/client/getClientInfo")
      .then((result) => {
        console.log(result);
        this.users = result;
      })
      .catch((error) => console.log(error));
  }

  editUser(user) {
    if (!this.getAccess(user.pass)) {
      return;
    }
    const event = new CustomEvent("app-edit-user", {
      detail: user,
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  deleteUser(user) {
    if (!this.getAccess(user.pass)) {
      return;
    }
    RestClient.call("/api/client/deleteUser", user)
      .then((result) => {
        console.log(result);

        alert("You have successfully deleted the user ✔");
        this.getUserList();
      })
      .catch((error) => console.log(error));
  }

  connectedCallback() {
    super.connectedCallback();
    this.getUserList();
  }
  constructor() {
    super();
    this.tooltip = `Sign up - user list`;
    this.users = [];
  }

  callUserList(user) {
    console.log(user);
    this.getUserList();
  }
}

customElements.define(AppUserlist.is, AppUserlist);
