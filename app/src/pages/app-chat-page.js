import { LitElement, html, css } from "lit-element";
import "../components/chat-user-list.js";

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
        grid-template-columns: 200px 1fr;
        grid-gap: 20px;
        padding: 10px;
        background-color: #f5f5f5;
      }
    `;
  }

  render() {
    return html`
      <div class="chat-section" @start-chatting-user="${this.callChat}">
        <div>
          <chat-user-list></chat-user-list>
        </div>
      </div>
    `;
  }

  callChat(event) {
    const user = event.detail;
    const chati = this.shadowRoot.getElementById("chati");
    console.log(user, chati);
    // chati.setReceiverData(user);
  }
  constructor() {
    super();
    this.tooltip = `Hello world!`;
  }
}

customElements.define(AppChatPage.is, AppChatPage);
