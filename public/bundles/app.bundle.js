!function(e){function n(n){for(var i,a,o=n[0],l=n[1],c=n[2],d=0,u=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&u.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(p&&p(n);u.length;)u.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,o=1;o<t.length;o++){var l=t[o];0!==s[l]&&(i=!1)}i&&(r.splice(n--,1),e=a(a.s=t[0]))}return e}var i={},s={3:0},r=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="./bundles/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var p=l;r.push([12,1]),t()}({12:function(e,n,t){"use strict";t.r(n);var i,s,r,a,o,l,c,p,d,u,h,g,m,f,b,v,x=t(0);class y{static call(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json())}}function w(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}class k extends x.a{static get is(){return"app-signin-form"}static get properties(){return{tooltip:{type:String,reflect:!0},email:{type:String},pass:{type:String},users:{type:Array}}}static get styles(){return Object(x.b)(i||(i=w(["\n      :host {\n        display: flex;\n        flex-direction: row;\n        width: max-content;\n        width: 300px;\n        text-align: left;\n      }\n      #fpass {\n        float: right;\n      }\n      input {\n        margin: 5px;\n      }\n      #login,\n      #pass {\n        padding: 5px;\n        width: 280px;\n        margin-bottom: 15px;\n        border: black;\n        background-color: antiquewhite;\n        border-radius: 3px;\n      }\n      #submit {\n        margin: 40px auto;\n        display: block;\n        padding: 5px 35px;\n        text-align: center;\n        font-size: 17px;\n        border-radius: 15px;\n        background-color: #86cdce;\n        border: none;\n      }\n      #submit:hover {\n        background-color: #4eb4b6;\n        text-shadow: 3px 3px 10px;\n      }\n      @media only screen and (max-width: 1024px) {\n        #login,\n        #pass {\n          width: 90%;\n        }\n      }\n      @media only screen and (max-width: 600px) {\n        #login,\n        #pass {\n          width: 95%;\n        }\n        #submit {\n          padding: 5px 60px;\n        }\n      }\n    "])))}render(){return Object(x.c)(s||(s=w(['\n      <div class="form">\n        <label for="login">Email</label>\n        <input\n          type="text"\n          name="login"\n          id="login"\n          @input="','"\n        />\n        <label for="pass">Password</label>\n        <input\n          type="password"\n          name="pass"\n          id="pass"\n          @input="','"\n        />\n\n        <input type="checkbox" name="remember" id="remember" />\n        <label for="remember">Remember Me</label>\n        <button type="submit" id="submit" @click="','">\n          Sign in\n        </button>\n      </div>\n    '])),e=>this.email=e.target.value,e=>this.pass=e.target.value,this.signIn)}filter(e){return!!this.email&&new RegExp(this.email,"i").test(e.email)}signIn(){this.users&&this.email&&this.users.filter(e=>this.filter(e)).map(e=>{if(e.pass===this.pass){var n={_id:e._id,firstName:e.firstName,lastName:e.lastName};sessionStorage.setItem("user",JSON.stringify(n)),window.location="#chat"}else alert("Please, enter email and password correctly. If you have not an account yet, please sign up first.")})}connectedCallback(){super.connectedCallback(),y.call("/api/client/getClientInfo").then(e=>{this.users=e}).catch(e=>console.log(e))}emptyInputValues(){this.email="",this.pass=""}constructor(){super(),this.tooltip="Sign in form",this.emptyInputValues()}}function O(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}customElements.define(k.is,k);class N extends x.a{static get is(){return"app-main-page"}static get properties(){return{tooltip:{type:String,reflect:!0}}}static get styles(){return Object(x.b)(r||(r=O(["\n      :host {\n        display: flex;\n        flex-direction: column;\n      }\n      .section {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        padding: 20px auto;\n        grid-gap: 20px;\n      }\n      .section-img {\n        background-image: url(https://i.pinimg.com/originals/08/80/99/08809940d40530bfdb457d7a60466657.jpg);\n        background-size: cover;\n        min-height: 700px;\n        width: 100%;\n      }\n      .section-img-h2 {\n        text-align: center;\n        margin-top: 85px;\n        text-shadow: 3px 3px 20px;\n        color: rgb(83, 116, 95);\n        font-size: 30px;\n      }\n      .section-login {\n        margin: 20px auto;\n      }\n      .section-login h2 {\n        text-align: center;\n        font-size: 32px;\n      }\n      .section-login h3 {\n        margin-top: 55px;\n        margin-bottom: 60px;\n        text-shadow: 3px 3px 18px;\n        text-align: center;\n      }\n      @media (max-width: 1024px) {\n        .section {\n          grid-template-columns: 1fr 1.3fr;\n        }\n      }\n      @media (max-width: 600px) {\n        .section {\n          grid-template-columns: 1fr;\n          grid-template-rows: 0.5fr 1fr;\n        }\n        .section-img {\n          min-height: 300px;\n        }\n      }\n    "])))}render(){return Object(x.c)(a||(a=O(['\n      <div class="section">\n        <div class="section-img">\n          <h2 class="section-img-h2">\n            Explore The <br />\n            Caucasian Lifestyle\n          </h2>\n        </div>\n        <div class="section-login">\n          <h2>\n            Welcome to <br />\n            CaucasusChat\n          </h2>\n          <h3>Sign in to continue</h3>\n\n          <app-signin-form tooltip="Sign in page"></app-signin-form>\n\n          <h4>\n            Don\'t have an account?\n            <a href="#signUp" id="signupLink">Sign up now</a>\n          </h4>\n        </div>\n      </div>\n    '])))}constructor(){super(),this.tooltip="Main - sign in page "}}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}customElements.define(N.is,N);class S extends x.a{static get is(){return"app-registration-form"}static get properties(){return{tooltip:{type:String,reflect:!0},submitBtn:{type:String},firstName:{type:String,reflect:!0,attribute:"first-name"},lastName:{type:String,reflect:!0,attribute:"last-name"},email:{type:String,reflect:!0,attribute:"email"},dateOfBirth:{type:String},gender:{type:String},telNumber:{type:Number},country:{type:String},city:{type:String},agreed:{type:Boolean},pass:{type:String},passTwo:{type:String},_id:{type:String},countries:{type:Array},errors:{type:Array},checkActive:{type:Boolean}}}static get styles(){return Object(x.b)(o||(o=j(['\n      :host {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 20px;\n      }\n      .sign-up-header {\n        padding: 10px;\n      }\n      .title {\n        text-align: center;\n      }\n\n      .form {\n        width: 100%;\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-gap: 20px;\n        margin-top: 20px;\n      }\n\n      .buttons {\n        grid-column-start: 1;\n        grid-column-end: 5;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .buttons .btn {\n        height: 30px;\n        width: 200px;\n        margin: 0 20px;\n        font-size: 18px;\n        border: none;\n        border-radius: 11px;\n      }\n      .submit-btn {\n        background-color: rgb(128, 240, 128);\n      }\n      .cleanup-btn {\n        background-color: lightcoral;\n      }\n      .submit-btn:hover {\n        box-shadow: 1px 2px 13px black;\n        background-color: rgb(115, 219, 115);\n      }\n      .cleanup-btn:hover {\n        box-shadow: 1px 2px 13px black;\n        background-color: rgb(233, 105, 105);\n      }\n      label {\n        font-size: 18px;\n      }\n      input,\n      select {\n        height: 24px;\n        width: 220px;\n        padding: 1px 5px;\n        font-size: 16px;\n        background-color: antiquewhite;\n        border: 2px solid transparent;\n      }\n      input[type="radio"],\n      input[type="checkbox"] {\n        width: 15px;\n        margin: 0 20px 0 5px;\n      }\n      .error-messages {\n        grid-column-start: 1;\n        grid-column-end: 5;\n        color: red;\n      }\n      .valid {\n        border: 2px solid green;\n      }\n      .invalid {\n        border: 2px solid red;\n      }\n\n      @media (max-width: 1024px) {\n        .form {\n          padding: 0 auto;\n          grid-template-columns: 1fr 1fr;\n        }\n        .buttons {\n          grid-column-start: 1;\n          grid-column-end: 3;\n        }\n        .error-messages {\n          grid-column-start: 1;\n          grid-column-end: 3;\n          color: red;\n        }\n      }\n    '])))}render(){return Object(x.c)(l||(l=j(['\n      <div class="sign-up-header">\n        <h1 class="title">Create Your Account</h1>\n        <h4>* Required to complete your enrollment</h4>\n      </div>\n      <div class="form">\n        <label for="firstName">First name *</label>\n        <input\n          type="text"\n          id="firstName"\n          required\n          onkeyup="this.value=this.value.replace(/[^a-zA-Z0-9-]/g, \'\')"\n          .value="','"\n          @input="','"\n          class=" ','"\n        />\n\n        <label for="lastName">Last name *</label>\n        <input\n          type="text"\n          id="lastName"\n          required\n          onkeyup="this.value=this.value.replace(/[^a-zA-Z-\' \']/g, \'\')"\n          .value="','"\n          @input="','"\n          class=" ','"\n        />\n\n        <label for="email">Email address *</label>\n        <input\n          type="email"\n          id="email"\n          required\n          .value="','"\n          @input="','"\n          class=" ','"\n        />\n\n        <span>Gender</span>\n        <div>\n          <label for="male">Male</label>\n          <input\n            type="radio"\n            name="gender"\n            id="male"\n            value="male"\n            .checked="','"\n            @input="','"\n          />\n          <label for="female">Female</label>\n          <input\n            type="radio"\n            name="gender"\n            id="female"\n            value="female"\n            .checked="','"\n            @input="','"\n          />\n        </div>\n\n        <label for="dateOfBirth">Date of birth *</label>\n        <input\n          type="date"\n          id="dateOfBirth"\n          required\n          .value="','"\n          @input="','"\n          class=" ','"\n        />\n\n        <label for="telNumber">Mobile number</label>\n        <input\n          type="tel"\n          title="max 12 digit number"\n          name="telNumber"\n          id="telNumber"\n          .value="','"\n          @input="','"\n        />\n\n        <label for="country">Country</label>\n        <select\n          id="country"\n          .value="','"\n          @input="','"\n        >\n          ','\n        </select>\n\n        <label for="city">City </label>\n        <input\n          type="text"\n          placeholder="enter your city"\n          name="city"\n          id="city"\n          list="cities"\n          .value="','"\n          @input="','"\n        />\n        <datalist id="cities">\n          <option value="Tokyo">Tokyo</option>\n          <option value="Delhi">Delhi</option>\n          <option value="Shanghai">Shanghai</option>\n          <option value="São Paulo">São Paulo</option>\n          <option value="Mexico City">Mexico City</option>\n          <option value="Cairo">Cairo</option>\n          <option value="Mumbai">Mumbai</option>\n          <option value="Beijing">Beijing</option>\n          <option value="New York City">New York City</option>\n          <option value="Istanbul">Istanbul</option>\n          <option value="Moscow">Moscow</option>\n          <option value="Paris">Paris</option>\n          <option value="Seoul">Seoul</option>\n          <option value="London">London</option>\n          <option value="Tehran">Tehran</option>\n          <option value="Madrid">Madrid</option>\n          <option value="Berlin">Berlin</option>\n          <option value="Tbilis">Tbilis</option>\n          <option value="Baku">Baku</option>\n          <option value="Yerevan">Yerevan</option>\n          <option value="Batumi">Batumi</option>\n        </datalist>\n\n        <label for="paroliOne">Password *</label>\n        <input\n          type="password"\n          id="paroliOne"\n          name="paroli"\n          required\n          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"\n          .value="','"\n          @input="','"\n          class=" ','"\n        />\n\n        <label for="paroliTwo">Repeat password *</label>\n        <input\n          type="password"\n          id="paroliTwo"\n          name="paroli"\n          required\n          .value="','"\n          @input="','"\n          class=" ','"\n        />\n\n        <label for="agree"\n          >I agree to the <a href="">Terms of Service</a></label\n        >\n        <input\n          type="checkbox"\n          name="agree"\n          id="agree"\n          required\n          .checked="','"\n          @change="','"\n          class=" ','"\n        />\n\n        <ul class="error-messages">\n          ','\n        </ul>\n        <div class="buttons">\n          <button class="btn submit-btn" @click="','">\n            ','\n          </button>\n          <button class="btn cleanup-btn" @click="','">\n            Clean up\n          </button>\n        </div>\n      </div>\n    '])),this.firstName,e=>this.firstName=e.target.value,this.fieldCheck("firstName"),this.lastName,e=>this.lastName=e.target.value,this.fieldCheck("lastName"),this.email,e=>this.email=e.target.value,this.fieldCheck("email"),"male"===this.gender,e=>this.gender=e.target.value,"female"===this.gender,e=>this.gender=e.target.value,this.dateOfBirth,e=>this.dateOfBirth=e.target.value,this.fieldCheck("dateOfBirth"),this.telNumber,e=>this.telNumber=e.target.value,this.country,e=>this.country=e.target.value,this.countries.map(e=>Object(x.c)(c||(c=j(['\n              <option value="','">',"</option>\n            "])),e.country,e.country)),this.city,e=>this.city=e.target.value,this.pass,e=>this.pass=e.target.value,this.fieldCheck("pass"),this.passTwo,e=>this.passTwo=e.target.value,this.fieldCheck("passTwo"),this.agreed,this.toggleAgreed,this.fieldCheck("agreed"),this.errors.map(e=>Object(x.c)(p||(p=j([" <li>","</li> "])),e)),this.registerUser,this.submitBtn,this.emptyInputValues)}toggleAgreed(){this.agreed=!this.agreed}regexCheck(e,n){if(e){if(this.errors.includes(n)){var t=this.errors.indexOf(n);t>-1&&this.errors.splice(t,1)}return"valid"}return this.errors.includes(n)||this.errors.push(n),"invalid"}fieldCheck(e){if(this.checkActive){if("firstName"===e)return this.firstName?"valid":"invalid";if("lastName"===e)return this.lastName?"valid":"invalid";if("email"===e){var n=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(this.email);return this.regexCheck(n,"Enter email correctly!")}if("dateOfBirth"===e)return this.dateOfBirth?"valid":"invalid";if("pass"===e){var t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(this.pass);return this.regexCheck(t,"New password must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters.")}if("passTwo"===e){var i="Repeat the password correctly!!!";if(this.passTwo!==this.pass||""===this.passTwo)return this.errors.includes(i)||this.errors.push(i),"invalid";if(this.errors.includes(i)){var s=this.errors.indexOf(i);s>-1&&this.errors.splice(s,1)}return"valid"}if("agreed"===e){var r="You have to agree the Terms of Service";if(!0===this.agreed){if(this.errors.includes(r)){var a=this.errors.indexOf(r);a>-1&&this.errors.splice(a,1)}return"valid"}return this.errors.includes(r)||this.errors.push(r),"invalid"}}}checkInputs(){return this.checkActive=!0,!(this.errors.length>0||!1===this.agreed||this.pass!==this.passTwo)}registerUser(e){if(this.checkInputs()){var n=e.currentTarget;n.disabled=!0;var t={firstName:this.firstName,lastName:this.lastName,email:this.email,gender:this.gender,dateOfBirth:this.dateOfBirth,telNumber:this.telNumber,country:this.country,city:this.city,pass:this.pass,_id:this._id};y.call("/api/client/registerUser",t).then(e=>{console.log(e),e._id||alert("You have successfully registered ✔"),e._id&&(this.submitBtn="Sign up",alert("You have successfully updated your info ✔"))}).catch(e=>console.log(e)).finally(()=>n.disabled=!1),this.emptyInputValues(),this.callUserList(t)}}callUserList(e){var n=new CustomEvent("app-call-user-list",{detail:e,composed:!0,bubbles:!0});this.dispatchEvent(n)}emptyInputValues(){this.firstName="",this.lastName="",this.email="",this.gender="",this.dateOfBirth="",this.telNumber=0,this.country="",this.city="",this.agreed=!1,this.pass="",this.passTwo="",this._id=void 0,this.submitBtn="Sign up",this.checkActive=!1,this.errors=[]}connectedCallback(){super.connectedCallback(),fetch("https://countriesnow.space/api/v0.1/countries").then(e=>e.json()).then(e=>this.countries=e.data).catch(e=>console.log(e))}constructor(){super(),this.tooltip="Regitration form",this.emptyInputValues(),this.countries=[]}setUserData(e){Object.keys(e).forEach(n=>{this[n]=e[n]}),this.submitBtn="Update user info"}}function C(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}customElements.define(S.is,S);class I extends x.a{static get is(){return"app-user-list"}static get properties(){return{tooltip:{type:String,reflect:!0},users:{type:Array},searchTerm:{type:String}}}static get styles(){return Object(x.b)(d||(d=C(["\n      :host {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .users-info_header {\n        padding: 10px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-flow: row wrap;\n      }\n      .users-info_header h3 {\n        margin: 5px 15px;\n      }\n      #searchedValue {\n        padding: 0 5px;\n      }\n      .users-info_grid {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: 40px auto;\n        grid-gap: 10px;\n        padding: 10px;\n      }\n      .gird_header-row,\n      .grid_user-row {\n        display: grid;\n        grid-template-columns: 30px repeat(3, 1fr) 180px repeat(4, 1fr);\n        grid-gap: 4px;\n      }\n      .gird_header-row span {\n        font-weight: bold;\n      }\n      .grid_user-row span {\n        word-wrap: break-word;\n      }\n      .action-btns {\n        display: inline-flex;\n        justify-content: space-evenly;\n        align-items: center;\n      }\n      .btn {\n        cursor: pointer;\n      }\n\n      input {\n        height: 24px;\n        width: 220px;\n        padding: 1px 7px;\n        font-size: 16px;\n        background-color: antiquewhite;\n        border: 2px solid transparent;\n      }\n      @media (max-width: 1024px) {\n        .gird_header-row,\n        .grid_user-row {\n          grid-template-rows: 1fr 1fr;\n          grid-template-columns: repeat(4, 1fr) 150px;\n        }\n      }\n    "])))}render(){return Object(x.c)(u||(u=C(['\n      <div class="users-info_header">\n        <h3>Users information</h3>\n        <div class="search-bar">\n          <input\n            type="text"\n            id="searchedValue"\n            placeholder="🔍 Search.. "\n            @input="','"\n          />\n        </div>\n      </div>\n      <div class="users-info_grid">\n        <div class="gird_header-row">\n          <span>#</span>\n          <span>Name</span>\n          <span>Gender</span>\n          <span>Date of birth</span>\n          <span>Email</span>\n          <span>Mobile number</span>\n          <span>Country</span>\n          <span>City</span>\n          <span>Actions</span>\n        </div>\n        <div class="gird_info-rows" id="usersInfoTable">\n          ',"\n        </div>\n      </div>\n    "])),e=>this.searchTerm=e.target.value,this.users.filter(e=>this.filter(e)).map((e,n)=>Object(x.c)(h||(h=C(['\n                  <div class="grid_user-row">\n                    <span><b>',"</b></span>\n                    <span><b>"," ","</b></span>\n                    <span>","</span>\n                    <span\n                      >","</span\n                    >\n                    <span>","</span>\n                    <span>","</span>\n                    <span>","</span>\n                    <span>",'</span>\n                    <div class="action-btns">\n                      <div\n                        title="Update user info"\n                        class="update-btn btn"\n                        @click="','"\n                      >\n                        <span>📝</span>\n                      </div>\n                      <div\n                        title="Delete user"\n                        class="delete-btn btn"\n                        @click="','"\n                      >\n                        <span>❌</span>\n                      </div>\n                    </div>\n                  </div>\n                '])),n+1,e.firstName,e.lastName,e.gender,e.dateOfBirth?this.getFormattedDate(e.dateOfBirth):"",e.email,0!==e.telNumber?e.telNumber:"",e.country,e.city,()=>this.editUser(e),()=>this.deleteUser(e))))}getFormattedDate(e){var n,t,i=new Date(e);return n=i.getDate()<10?"0".concat(i.getDate()):i.getDate(),t=i.getMonth()<9?"0".concat(i.getMonth()+1):i.getMonth()+1,"".concat(n,"/").concat(t,"/").concat(i.getFullYear())}filter(e){if(!this.searchTerm)return!0;var n=new RegExp(this.searchTerm,"i");return n.test(e.firstName)||n.test(e.lastName)||n.test(e.gender)||n.test(e.email)||n.test(e.telNumber)||n.test(e.country)||n.test(e.city)}getAccess(e){var n=prompt("Enter the password");return null!==n&&(n!==e?(alert("You entered wrong password, please try again!"),!1):n===e||void 0)}getUserList(){y.call("/api/client/getClientInfo").then(e=>{this.users=e}).catch(e=>console.log(e))}editUser(e){if(this.getAccess(e.pass)){var n=new CustomEvent("app-edit-user",{detail:e,composed:!0,bubbles:!0});this.dispatchEvent(n)}}deleteUser(e){this.getAccess(e.pass)&&y.call("/api/client/deleteUser",e).then(e=>{console.log(e),alert("You have successfully deleted the user ✔"),this.getUserList()}).catch(e=>console.log(e))}connectedCallback(){super.connectedCallback(),this.getUserList()}constructor(){super(),this.tooltip="Sign up - user list",this.users=[]}callUserList(e){this.getUserList()}}function z(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}customElements.define(I.is,I);class _ extends x.a{static get is(){return"app-signup-page"}static get properties(){return{tooltip:{type:String,reflect:!0}}}static get styles(){return Object(x.b)(g||(g=z(["\n      :host {\n        display: flex;\n        flex-direction: column;\n      }\n      .sign-up_section {\n        background-color: snow;\n        padding: 15px;\n      }\n      .users-info_section {\n        margin: 40px 0;\n        padding: 10px 0;\n        background-color: snow;\n        min-height: 300px;\n      }\n    "])))}render(){return Object(x.c)(m||(m=z(['\n      <div\n        @app-edit-user="','"\n        @app-call-user-list="','"\n      >\n        <section class="sign-up_section">\n          <app-registration-form id="form"></app-registration-form>\n        </section>\n        <section class="users-info_section">\n          <app-user-list id="userList"></app-user-list>\n        </section>\n      </div>\n    '])),this.editUser,this.callUserList)}editUser(e){var n=e.detail;this.shadowRoot.getElementById("form").setUserData(n)}callUserList(e){var n=e.detail;this.shadowRoot.getElementById("userList").callUserList(n)}constructor(){super(),this.tooltip="Sign up page"}}function M(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}customElements.define(_.is,_);class L extends x.a{static get is(){return"chat-user-list"}static get properties(){return{tooltip:{type:String,reflect:!0},users:{type:Array},searchTerm:{type:String}}}static get styles(){return Object(x.b)(f||(f=M(["\n      :host {\n        display: flex;\n        flex-direction: column;\n        background-color: #dce9fc;\n      }\n      .title {\n        text-align: center;\n      }\n      .search-bar input {\n        margin: 0 15px;\n        padding: 2px 5px;\n        border: none;\n        border-radius: 8px;\n      }\n      .users-info_list {\n        height: 60vh;\n        overflow: auto;\n        margin: 10px 0;\n        padding: 10px 0;\n      }\n      .list_user-row {\n        display: flex;\n        flex-flow: row wrap;\n        align-items: center;\n        min-height: 40px;\n        width: 85%;\n        padding: 5px;\n        margin: 5px auto;\n        background-color: #78c6f7;\n        cursor: pointer;\n      }\n      .profile-img {\n        width: 30px;\n        margin-right: 20px;\n      }\n    "])))}render(){return Object(x.c)(b||(b=M(['\n      <div class="users-info_header">\n        <h3 class="title">CaucasianChat Users</h3>\n        <div class="search-bar">\n          <input\n            type="text"\n            id="searchedValue"\n            placeholder="🔍 Search.. "\n            @input="','"\n          />\n        </div>\n      </div>\n      <div class="users-info_list">\n        ',"\n      </div>\n    "])),e=>this.searchTerm=e.target.value,this.users.filter(e=>this.filter(e)).map(e=>Object(x.c)(v||(v=M(['\n                <div\n                  class="list_user-row"\n                  @click="','"\n                >\n                  <img\n                    src="./assets/blank-profile-picture-973460_640.png"\n                    alt="profile-img"\n                    class="profile-img"\n                  />\n                  <span>'," ","</span>\n                </div>\n              "])),()=>this.selectUser(e),e.firstName,e.lastName)))}filter(e){if(!this.searchTerm)return!0;var n=new RegExp(this.searchTerm,"i");return n.test(e.firstName)||n.test(e.lastName)||n.test(e.email)||n.test(e.telNumber)||n.test(e.country)||n.test(e.city)}getAccess(e){var n=prompt("Enter the password");return null!==n&&(n!==e?(alert("You entered wrong password, please try again!"),!1):n===e||void 0)}getUserList(){y.call("/api/client/getClientInfo").then(e=>{this.users=e}).catch(e=>console.log(e))}selectUser(e){var n=new CustomEvent("start-chatting-user",{detail:e,composed:!0,bubbles:!0});this.dispatchEvent(n)}connectedCallback(){super.connectedCallback(),this.getUserList()}constructor(){super(),this.tooltip="Chat - user list",this.users=[]}}customElements.define(L.is,L);var T=new WebSocket("ws://localhost:8088");T.addEventListener("open",e=>{console.log("Client connected to server")});var U,B,E,A,P,F,D,R,Y=t(11);function q(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}class V extends x.a{static get is(){return"app-chat-page"}static get properties(){return{tooltip:{type:String,reflect:!0},receiverId:{type:String},receiverFirstName:{type:String},receiverLastName:{type:String},message:{type:String},senderId:{type:String},senderFirstName:{type:String},senderLastName:{type:String},messageArr:{type:Array},messageList:{type:String},errorMessage:{type:String}}}static get styles(){return Object(x.b)(U||(U=q(["\n      :host {\n        display: flex;\n        flex-direction: column;\n      }\n      .chat-section {\n        display: grid;\n        grid-template-columns: 210px 1fr;\n        grid-gap: 15px;\n        padding: 10px;\n        background-color: #f5f5f5;\n      }\n      .chat-list-block {\n        height: 100%;\n      }\n      .chat-block {\n        height: 100%;\n        display: grid;\n        grid-template-rows: 40px 62vh 60px;\n      }\n      .chat-header {\n        display: flex;\n        align-items: center;\n        padding: 3px 10px;\n        background-color: #89ccf6;\n      }\n      .chat {\n        padding: 5px 10px;\n        background-color: #baebff;\n        position: relative;\n      }\n      .chat-scroll {\n        height: 90%;\n        overflow: auto;\n      }\n      .typing {\n        height: 10%;\n      }\n      .messaging-bar {\n        display: flex;\n        align-items: center;\n        justify-content: space-evenly;\n        padding: 10px;\n        background-color: #89ccf6;\n      }\n      .chat-input {\n        width: 70%;\n        height: 35px;\n        border: none;\n        border-radius: 8px;\n        padding: 2px 10px;\n      }\n      .send-btn {\n        padding: 5px 25px;\n        text-align: center;\n        font-size: 17px;\n        border-radius: 15px;\n        background-color: #c55df6;\n        border: none;\n      }\n      .message-block {\n        display: flex;\n        margin: 15px;\n        position: relative;\n        padding: 4px;\n        border-radius: 11px;\n        list-style: none;\n        padding-inline-start: 10px;\n      }\n      .message-title {\n        display: inline-block;\n        text-transform: capitalize;\n        padding: 2px 10px;\n        position: absolute;\n        top: -10px;\n        font-size: 14px;\n        border-radius: 11px;\n      }\n      .message-div {\n        display: block;\n        padding: 5px 25px;\n        border-radius: 8px;\n        position: relative;\n      }\n      .reciver-msg {\n        justify-content: flex-start;\n      }\n      .sender-msg {\n        justify-content: flex-end;\n      }\n      .reciver-msg .message-title {\n        background-color: #09ecb0;\n        left: -20px;\n      }\n      .sender-msg .message-title {\n        background-color: #c18cf9;\n        right: -20px;\n      }\n      .reciver-msg .message-div {\n        background-color: #43f5c6;\n      }\n      .sender-msg .message-div {\n        background-color: #c09cfa;\n        margin-right: 25px;\n      }\n      @media (max-width: 1024px) {\n        .chat-section {\n          grid-template-columns: 190px 1fr;\n          grid-gap: 10px;\n        }\n        .send-btn {\n          padding: 5px 18px;\n          font-size: 17px;\n        }\n      }\n      @media (max-width: 600px) {\n        .chat-section {\n          grid-template-columns: 1fr;\n          grid-template-rows: 0.8fr 1fr;\n          grid-gap: 10px;\n        }\n        .send-btn {\n          padding: 4px 10px;\n          font-size: 15px;\n        }\n      }\n    "])))}render(){return Object(x.c)(B||(B=q(['\n      <div class="chat-section" @start-chatting-user="','">\n        <div class="chat-list-block">\n          <chat-user-list></chat-user-list>\n        </div>\n        <div class="chat-block">\n          <div class="chat-header">\n            <span>To: '," ",'</span>\n          </div>\n          <div class="chat">\n            <ul class="chat-scroll">\n              ','\n            </ul>\n            <div class="typing">\n              '," ",'\n            </div>\n          </div>\n          <div class="messaging-bar">\n            <input\n              type="text"\n              class="chat-input"\n              placeholder="','"\n              ?disabled=','\n              .value="','"\n              @input="','"\n            />\n            <button\n              class="btn send-btn"\n              @click="','"\n              ?disabled=',"\n            >\n              ⇈ send\n            </button>\n          </div>\n        </div>\n      </div>\n    "])),this.callChat,this.receiverFirstName,this.receiverLastName,Object(Y.a)(this.messageList),this.message?"typing...":"",this.errorMessage,this.receiverId?"Click here to type something":"Please select a person whom you'd like to send message",!this.receiverId,this.message,e=>this.message=e.target.value,this.sendMessage,!this.message)}filter(e){return"62a87dc0eeb5f952443c24b9"===this.receiverId?e.receiverId===this.receiverId:this.receiverId===e.senderId&&this.senderId===e.receiverId||this.senderId===e.senderId&&this.receiverId===e.receiverId}getMsg(){this.messageArr=[],y.call("/api/client/getMessages").then(e=>{this.messageArr=e,this.showMessages()}).catch(e=>console.log(e))}showMessages(){this.messageList=this.messageArr.filter(e=>this.filter(e)).map(e=>'\n        <li class="message-block '.concat(e.senderId===this.senderId?"sender-msg":"reciver-msg",'">\n          <div class="message-div">\n          <div class="message-title">').concat(e.senderFirstName,"</div>\n          <span>").concat(e.message,"</span>\n          </div>\n        </li>\n      ")).join("")}sendMessage(){var e={senderId:this.senderId,senderFirstName:this.senderFirstName,senderLastName:this.senderLastName,receiverId:this.receiverId,receiverFirstName:this.receiverFirstName,receiverLastName:this.receiverLastName,message:this.message};this.saveMsg(e),T.send(JSON.stringify(e)),this.message=""}callChat(e){this.setSenderInfo();var n=e.detail;this.receiverId=n._id,this.receiverFirstName=n.firstName,this.receiverLastName=n.lastName,this.getMsg()}setSenderInfo(){var e=JSON.parse(sessionStorage.getItem("user"));this.senderId=e._id,this.senderFirstName=e.firstName,this.senderLastName=e.lastName}saveMsg(e){y.call("/api/client/saveMessage",e).then(e=>{this.errorMessage="",console.log(e)}).catch(e=>{this.errorMessage="The Message has not sent, try again!",console.log(e)})}connectedCallback(){super.connectedCallback(),T.addEventListener("message",e=>{try{var n=JSON.parse(e.data);console.log("Message from server",n),this.messageArr.push(n),this.showMessages()}catch(e){console.error(e.message)}})}constructor(){super(),this.tooltip="Chat page",this.receiverId="",this.receiverFirstName="",this.receiverLastName="",this.message="",this.senderId="",this.senderFirstName="",this.senderLastName="",this.messageArr=[],this.messageList="",this.errorMessage=""}}function J(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}customElements.define(V.is,V);class Z extends x.a{static get is(){return"app-root"}static get properties(){return{page:{type:String}}}static get styles(){return Object(x.b)(E||(E=J(["\n      :host {\n        display: flex;\n        flex-direction: column;\n      }\n\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n      .container {\n        width: 1000px;\n        margin: 0 auto;\n        background-color: snow;\n      }\n      header {\n        height: 100px;\n      }\n      .header-block {\n        display: flex;\n        flex-flow: row wrap;\n        justify-content: space-between;\n        align-items: center;\n        padding: 3px 15px;\n      }\n      .logo {\n        display: flex;\n        flex-flow: row wrap;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .logo-img {\n        width: 80px;\n        margin: 0 20px;\n      }\n      .nav-bar {\n        margin: 10px 5px;\n      }\n      .nav-bar a {\n        padding: 5px 15px;\n        text-decoration: none;\n        text-align: center;\n        font-size: 17px;\n        border-radius: 15px;\n        background-color: #4eb4b6;\n        color: snow;\n        border: none;\n      }\n      .nav-bar a:hover {\n        box-shadow: 0.5px 1px 5px black;\n      }\n\n      @media (max-width: 1024px) {\n        .container {\n          width: 80vw;\n        }\n      }\n      @media (max-width: 600px) {\n        .container {\n          display: flex;\n          flex-flow: column;\n          width: 100vw;\n        }\n        .header-block {\n          justify-content: center;\n        }\n        .logo-img {\n          width: 50px;\n          margin: 0 5px;\n        }\n        .logo h1 {\n          font-size: 21px;\n        }\n        .nav-bar a {\n          padding: 2px 8px;\n          font-size: 15px;\n        }\n      }\n    "])))}render(){return Object(x.c)(A||(A=J(['\n      <header>\n        <div class="container">\n          <div class="header-block">\n            <div class="logo">\n              <img\n                src="./assets/logo-Caucasus-Winter-Bonanza-Richard-Tyler.jpg"\n                alt="logo"\n                class="logo-img"\n              />\n              <h1>CaucasusChat</h1>\n            </div>\n            <div class="nav-bar">\n              <a href="#main">Main</a> |\n              ','\n              <a href="#signUp">Sign Up</a>\n            </div>\n          </div>\n        </div>\n      </header>\n      <main>\n        <div class="container">\n          ',"\n          ","\n          ","\n        </div>\n      </main>\n    "])),this.checkLogedinUser()?Object(x.c)(P||(P=J(['<a href="#chat">Chat</a> |\n                    <a href="#main" @click="','">Sign out</a> |'])),this.signOut):"","main"===this.page?Object(x.c)(F||(F=J(["<app-main-page></app-main-page>"]))):"","chat"===this.page?Object(x.c)(D||(D=J(["<app-chat-page></app-chat-page>"]))):"","signUp"===this.page?Object(x.c)(R||(R=J(["<app-signup-page></app-signup-page>"]))):"")}checkLogedinUser(){return null!==JSON.parse(sessionStorage.getItem("user"))}signOut(){sessionStorage.removeItem("user")}constructor(){super(),this.page="main"}connectedCallback(){super.connectedCallback(),this.onRouteChange(),window.addEventListener("popstate",()=>this.onRouteChange())}onRouteChange(){window.location.hash&&(this.page=window.location.hash.substring(1))}}customElements.define(Z.is,Z);var W;W=document.createElement("app-root"),document.body.appendChild(W)}});