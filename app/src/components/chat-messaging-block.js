import { LitElement, html, css } from "lit-element";
// import { RestClient } from "../common/rest-client.js";

class ChatMessagingBlock extends LitElement {
  static get is() {
    return "chat-messaging-block";
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
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .chat-block {
        display: grid;
        grid-gap: 20px;
        margin-top: 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="chat-block">
        <div>
          <span>To: ${this.receiverFirstName} ${this.receiverLastName}</span>
        </div>
        <div class="chat">
          <div>${this.message}</div>
        </div>
        <div class="messaging-bar">
          <input
            type="text"
            placeholder="Click here to type something"
            @input="${(event) => (this.message = event.target.value)}"
          />
          <button class="btn send-btn" @click="${this.sendMessage}">
            send
          </button>
        </div>
      </div>
    `;
  }

  sendMessage() {
    const user = {
      receiverId: this.receiverId,
      receiverFirstName: this.receiverFirstName,
      receiverLastName: this.receiverLastName,
      senderId: this.senderId,
      senderFirstName: this.senderFirstName,
      senderLastName: this.senderLastName,
      message: this.message,
    };
    console.log(user);
    // RestClient.call("/api/client/registerUser", user)
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error))
    // this.message = "";
  }

  emptyInputValues() {
    this.senderId = "";
    this.senderFirstName = "";
    this.senderLastName = "";
    this.receiverId = "";
    this.receiverFirstName = "";
    this.receiverLastName = "";
    this.message = "";
  }

  constructor() {
    super();
    this.tooltip = `Hello world!`;
    this.emptyInputValues();
  }
  setReceiverData(user) {
    // console.log(user);
    this.receiverId = user._id;
    this.receiverFirstName = user.firstName;
    this.receiverLastName = user.lastName;
  }
}

customElements.define(ChatMessagingBlock.is, ChatMessagingBlock);
