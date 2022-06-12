class MySigninForm extends HTMLElement {
  static get is() {
    return "my-signin-form";
  }

  constructor() {
    super();
    const templete = MySigninForm.createTemplate();
    let templateContent = templete.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  //
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    /*
    if (name === "title") {
      const element = this.shadowRoot.getElementById("test");
      console.log(element);
      const title = document.createElement("span");
      title.innerHTML = newValue;
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(title);
    }
    */
    // Ak davamato
    // const slot = this.shadowRoot.getElementById("slot");
  }
  static get observedAttributes() {
    return ["href", "title"];
  }

  static createTemplate() {
    const tpl = document.createElement("template");
    tpl.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: row;
          width: max-content;
          width: 300px;
          text-align: left;
        }
        // :host([title]) {
        //   background-color: rgb(250, 238, 220);
        // }
        // :host(:hover) {
        //   background-color: rgb(246, 225, 193);
        // }
        #fpass {
          float: right;
        }
        input {
          margin: 5px;
        }
        #login,
        #pass {
          padding: 5px;
          width: 280px;
          margin-bottom: 15px;
          border: black;
          background-color: antiquewhite;
          border-radius: 3px;
        }
        #submit {
          margin: 40px auto;
          display: block;
          padding: 5px 30px;
          text-align: center;
          font-size: 17px;
          border-radius: 15px;
          background-color: #86cdce;
          border: none;
        }
        #submit:hover {
          background-color: #4eb4b6;
          text-shadow: 3px 3px 10px;
        }
        @media only screen and (max-width: 1024px) {
          #login,
          #pass {
            width: 90%;
          }
        }
        @media only screen and (max-width: 600px) {
          #login,
          #pass {
            width: 95%;
          }
          #submit {
            padding: 5px 60px;
          }
        }
      </style>

      <div class="form">
        <label for="login">Username or Email</label>
        <input type="text" name="login" id="login" required />
        <label for="pass">Password</label>
        <input type="password" name="pass" id="pass" required />

        <input type="checkbox" name="remember" id="remember" />
        <label for="remember">Remember Me</label>
        <button type="submit" id="submit" >Sign in</button>
      </div>
    `;
    return tpl;
  }
}

customElements.define(MySigninForm.is, MySigninForm);
