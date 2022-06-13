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
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .chat-section {
        height: 75vh;
        display: grid;
        grid-template-columns: 210px 1fr;
        grid-gap: 15px;
        padding: 10px;
        background-color: #f5f5f5;
      }
      .chat-block {
        display: grid;
        grid-template-rows: 40px 1fr 60px;
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
    `;
  }

  render() {
    return html`
      <div class="chat-section" @start-chatting-user="${this.callChat}">
        <div>
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
            <div class="typing">${this.message ? "typing..." : ""}</div>
          </div>
          <div class="messaging-bar">
            <input
              type="text"
              class="chat-input"
              placeholder="${this.receivreId
                ? "Click here to type something"
                : "Please select a person whom you'd like to send message"}"
              ?disabled=${!this.receivreId ? true : false}
              .value="${this.message}"
              @input="${(event) => (this.message = event.target.value)}"
            />
            <button class="btn send-btn" @click="${this.sendMessage}">
              send
            </button>
          </div>
        </div>
      </div>
    `;
  }

  showMessages() {
    this.messageList = this.messageArr
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

  filter(item) {
    if (!this.senderId) {
      return true;
    }
    const regex = new RegExp(this.senderId, "i");
    const regexi = new RegExp(this.receivreId, "i");
    const response = regex.test(item.senderId) && regexi.test(item.receiverId);
    return response;
  }

  sendMessage() {
    this.reload = false;
    this.setSenderInfo();
    const messageInfo = {
      senderId: this.senderId,
      senderFirstName: this.senderFirstName,
      senderLastName: this.senderLastName,
      receivreId: this.receivreId,
      receiverFirstName: this.receiverFirstName,
      receiverLastName: this.receiverLastName,
      message: this.message,
    };
    // console.log(messageInfo);
    ws.send(JSON.stringify(messageInfo));
    this.message = "";
  }

  callChat(event) {
    const user = event.detail;
    this.receivreId = user._id;
    this.receiverFirstName = user.firstName;
    this.receiverLastName = user.lastName;
    // const chati = this.shadowRoot.getElementById("chati");
    // console.log(user, chati);
    // chati.setReceiverData(user);
  }

  setSenderInfo() {
    const sender = JSON.parse(sessionStorage.getItem("user"));
    this.senderId = sender._id;
    this.senderFirstName = sender.firstName;
    this.senderLastName = sender.lastName;
  }

  connectedCallback() {
    super.connectedCallback();

    ws.addEventListener("message", (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("Message from server", data);

        this.messageArr.push(data);
        this.showMessages();
        // RestClient.call("/api/client/getMessages")
        // .then((result) => {
        //   console.log(result);
        //   this.messageArr = result;
        // })
        // .catch((error) => console.log(error));
      } catch (exception) {
        console.error(exception.message);
      }
    });
  }

  constructor() {
    super();
    this.tooltip = `Hello world!`;
    this.receivreId = "";
    this.receiverFirstName = "";
    this.receiverLastName = "";
    this.message = "";
    this.senderId = "";
    this.senderFirstName = "";
    this.senderLastName = "";
    this.messageArr = [];
    this.messageList = "";
  }
}

customElements.define(AppChatPage.is, AppChatPage);
