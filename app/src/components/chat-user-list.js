import { LitElement, html, css } from "lit-element";
import { RestClient } from "../common/rest-client.js";

class ChatUserList extends LitElement {
  static get is() {
    return "chat-user-list";
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
        background-color: #dce9fc;
      }
      .title {
        text-align: center;
      }
      .search-bar input {
        margin: 0 15px;
        padding: 2px 5px;
        border: none;
        border-radius: 8px;
      }
      .users-info_list {
        height: 60vh;
        overflow: auto;
        margin: 10px 0;
        padding: 10px 0;
      }
      .list_user-row {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        min-height: 40px;
        width: 85%;
        padding: 5px;
        margin: 5px auto;
        background-color: #78c6f7;
        cursor: pointer;
      }
      .profile-img {
        width: 30px;
        margin-right: 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="users-info_header">
        <h3 class="title">CaucasianChat Users</h3>
        <div class="search-bar">
          <input
            type="text"
            id="searchedValue"
            placeholder="🔍 Search.. "
            @input="${(event) => (this.searchTerm = event.target.value)}"
          />
        </div>
      </div>
      <div class="users-info_list">
        ${this.users
          .filter((item) => this.filter(item))
          .map(
            (user) =>
              html`
                <div
                  class="list_user-row"
                  @click="${() => this.selectUser(user)}"
                >
                  <img
                    src="./assets/blank-profile-picture-973460_640.png"
                    alt="profil img"
                    class="profile-img"
                  />
                  <span>${user.firstName} ${user.lastName}</span>
                </div>
              `
          )}
      </div>
    `;
  }

  filter(item) {
    if (!this.searchTerm) {
      return true;
    }
    const regex = new RegExp(this.searchTerm, "i");
    const response =
      regex.test(item.firstName) ||
      regex.test(item.lastName) ||
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

  selectUser(user) {
    const event = new CustomEvent("start-chatting-user", {
      detail: user,
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  connectedCallback() {
    super.connectedCallback();
    this.getUserList();
  }
  constructor() {
    super();
    this.tooltip = `Chat - user list`;
    this.users = [];
  }
}

customElements.define(ChatUserList.is, ChatUserList);
