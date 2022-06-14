import { LitElement, html, css } from "lit-element";
import { RestClient } from "../common/rest-client.js";
import "../components/chat-user-list.js";
import { ws } from "../sockets.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

class AppChatPage extends LitElement {
  static get is() {
    return "app-chat-page";
  }

  static get properties() {
    return {
      tooltip: {
        type: String,
        reflect: true,
      },
      receiverId: {
        type: String,
      },
      receiverFirstName: {
        type: String,
      },
      receiverLastName: {
        type: String,
      },
      message: {
        type: String,
      },
      senderId: {
        type: String,
      },
      senderFirstName: {
        type: String,
      },
      senderLastName: {
        type: String,
      },
      messageArr: {
        type: Array,
      },
      messageList: {
        type: String,
      },
      errorMessage: {
        type: String,
      },
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .chat-section {
        display: grid;
        grid-template-columns: 210px 1fr;
        grid-gap: 15px;
        padding: 10px;
        background-color: #f5f5f5;
      }
      .chat-list-block {
        height: 100%;
      }
      .chat-block {
        height: 100%;
        display: grid;
        grid-template-rows: 40px 62vh 60px;
      }
      .chat-header {
        display: flex;
        align-items: center;
        padding: 3px 10px;
        background-color: #89ccf6;
      }
      .chat {
        padding: 5px 10px;
        background-color: #baebff;
        position: relative;
      }
      .chat-scroll {
        height: 90%;
        overflow: auto;
      }
      .typing {
        height: 10%;
      }
      .messaging-bar {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px;
        background-color: #89ccf6;
      }
      .chat-input {
        width: 70%;
        height: 35px;
        border: none;
        border-radius: 8px;
        padding: 2px 10px;
      }
      .send-btn {
        padding: 5px 25px;
        text-align: center;
        font-size: 17px;
        border-radius: 15px;
        background-color: #c55df6;
        border: none;
      }
      .message-block {
        display: flex;
        margin: 15px;
        position: relative;
        padding: 4px;
        border-radius: 11px;
        list-style: none;
        padding-inline-start: 10px;
      }
      .message-title {
        display: inline-block;
        text-transform: capitalize;
        padding: 2px 10px;
        position: absolute;
        top: -10px;
        font-size: 14px;
        border-radius: 11px;
      }
      .message-div {
        display: block;
        padding: 5px 25px;
        border-radius: 8px;
        position: relative;
      }
      .reciver-msg {
        justify-content: flex-start;
      }
      .sender-msg {
        justify-content: flex-end;
      }
      .reciver-msg .message-title {
        background-color: #09ecb0;
        left: -20px;
      }
      .sender-msg .message-title {
        background-color: #c18cf9;
        right: -20px;
      }
      .reciver-msg .message-div {
        background-color: #43f5c6;
      }
      .sender-msg .message-div {
        background-color: #c09cfa;
        margin-right: 25px;
      }
      @media (max-width: 1024px) {
        .chat-section {
          grid-template-columns: 190px 1fr;
          grid-gap: 10px;
        }
        .send-btn {
          padding: 5px 18px;
          font-size: 17px;
        }
      }
      @media (max-width: 600px) {
        .chat-section {
          grid-template-columns: 1fr;
          grid-template-rows: 0.8fr 1fr;
          grid-gap: 10px;
        }
        .send-btn {
          padding: 4px 10px;
          font-size: 15px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="chat-section" @start-chatting-user="${this.callChat}">
        <div class="chat-list-block">
          <chat-user-list></chat-user-list>
        </div>
        <div class="chat-block">
          <div class="chat-header">
            <span>To: ${this.receiverFirstName} ${this.receiverLastName}</span>
          </div>
          <div class="chat">
            <ul class="chat-scroll">
              ${unsafeHTML(this.messageList)}
            </ul>
            <div class="typing">
              ${this.message ? "typing..." : ""} ${this.errorMessage}
            </div>
          </div>
          <div class="messaging-bar">
            <input
              type="text"
              class="chat-input"
              placeholder="${this.receiverId
                ? "Click here to type something"
                : "Please select a person whom you'd like to send message"}"
              ?disabled=${!this.receiverId ? true : false}
              .value="${this.message}"
              @input="${(event) => (this.message = event.target.value)}"
            />
            <button
              class="btn send-btn"
              @click="${this.sendMessage}"
              ?disabled=${!this.message ? true : false}
            >
              ⇈ send
            </button>
          </div>
        </div>
      </div>
    `;
  }

  filter(item) {
    let response;
    if (this.receiverId === "62a87dc0eeb5f952443c24b9") {
      // All users chat
      if (item.receiverId === this.receiverId) {
        response = true;
      } else {
        response = false;
      }
    } else {
      // private chat
      if (
        (this.receiverId === item.senderId &&
          this.senderId === item.receiverId) ||
        (this.senderId === item.senderId && this.receiverId === item.receiverId)
      ) {
        response = true;
      } else {
        response = false;
      }
    }

    return response;
  }

  getMsg() {
    this.messageArr = [];
    RestClient.call("/api/client/getMessages")
      .then((result) => {
        this.messageArr = result;

        this.showMessages();
      })
      .catch((error) => console.log(error));
  }

  showMessages() {
    this.messageList = this.messageArr
      .filter((item) => this.filter(item))
      .map((messageObj) => {
        return `
        <li class="message-block ${
          messageObj.senderId === this.senderId ? "sender-msg" : "reciver-msg"
        }">
          <div class="message-div">
          <div class="message-title">${messageObj.senderFirstName}</div>
          <span>${messageObj.message}</span>
          </div>
        </li>
      `;
      })
      .join("");
  }

  sendMessage() {
    const messageInfo = {
      senderId: this.senderId,
      senderFirstName: this.senderFirstName,
      senderLastName: this.senderLastName,
      receiverId: this.receiverId,
      receiverFirstName: this.receiverFirstName,
      receiverLastName: this.receiverLastName,
      message: this.message,
    };

    this.saveMsg(messageInfo);
    ws.send(JSON.stringify(messageInfo));
    this.message = "";
  }

  callChat(event) {
    this.setSenderInfo();
    const user = event.detail;
    this.receiverId = user._id;
    this.receiverFirstName = user.firstName;
    this.receiverLastName = user.lastName;

    this.getMsg();
  }

  setSenderInfo() {
    const sender = JSON.parse(sessionStorage.getItem("user"));
    this.senderId = sender._id;
    this.senderFirstName = sender.firstName;
    this.senderLastName = sender.lastName;
  }

  saveMsg(data) {
    RestClient.call("/api/client/saveMessage", data)
      .then((result) => {
        this.errorMessage = "";
        console.log(result);
      })
      .catch((error) => {
        this.errorMessage = "The Message has not sent, try again!";
        console.log(error);
      });
  }

  connectedCallback() {
    super.connectedCallback();

    ws.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("Message from server", data);

        this.messageArr.push(data);
        this.showMessages();
      } catch (exception) {
        console.error(exception.message);
      }
    });
  }

  constructor() {
    super();
    this.tooltip = `Chat page`;
    this.receiverId = "";
    this.receiverFirstName = "";
    this.receiverLastName = "";
    this.message = "";
    this.senderId = "";
    this.senderFirstName = "";
    this.senderLastName = "";
    this.messageArr = [];
    this.messageList = "";
    this.errorMessage = "";
  }
}

customElements.define(AppChatPage.is, AppChatPage);
