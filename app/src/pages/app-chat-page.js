import { LitElement, html, css } from "lit-element";
import "../components/chat-user-list.js";
import { messagesArrSocket, ws } from "../sockets.js";

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
      reload: {
        type: Boolean,
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
        overflow: auto;
      }
      .chat-scroll {
        height: 94%;
        overflow: auto;
      }
      .typing {
        height: 6%;
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
        left: -20px;
        font-size: 14px;
        border-radius: 11px;
        background-color: #c18cf9;
      }
      .message-div {
        display: inline;
        padding: 5px 25px;
        border-radius: 8px;
        background-color: #c09cfa;
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
              ${this.reload
                ? messagesArrSocket.map((messageObj) => {
                    return html`
                      <li class="message-block">
                        <div class="message-title">
                          ${messageObj.senderFirstName}
                        </div>
                        <div class="message-div">${messageObj.message}</div>
                      </li>
                    `;
                  })
                : messagesArrSocket.map((messageObj) => {
                    return html`
                      <div>
                        <span>${messageObj.senderFirstName}</span>
                        <span>${messageObj.message}</span>
                      </div>
                    `;
                  })}
            </ul>
            <div class="typing">${this.message ? "typing..." : ""}</div>
          </div>
          <div class="messaging-bar">
            <input
              type="text"
              class="chat-input"
              placeholder="Click here to type something"
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
    // this.messageArr.push(...messagesArrSocket);
    this.reload = true;
    console.log(messagesArrSocket);
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
    // if (this.message) {
    //   this.messageArr.push(...messagesArrSocket);
    // }
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
    this.reload = true;
  }
}

customElements.define(AppChatPage.is, AppChatPage);
