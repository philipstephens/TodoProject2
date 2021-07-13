let bcrypt = dcodeIO.bcrypt;
const saltRounds = 12;

titlePageBlock =
    `<div id="container">
    <div id="bg">
      <div class="app-page" id="title-page">
        <div class="all-pages-heading">To Do List</div>
        <div id="description">This is a multi-user, multi-list To Do application. It is part of a course
          from <a href="https://pirple.com">Pirple.com</a> about keeping up with the JavaScripts.
        </div>
        <div id="description2">Note: Almost everything except the 'ToDo' title is selectable.</div>
        <div id="title-page-footer">
          <button class="btn" id="title-page-signup-button">Signup</button>
          <button class="btn" id="title-page-login-button">Login</button>
        </div>
      </div>
    </div>
  </div>`

signupPageBlock =
    `<div id="container">
    <div id="bg">
      <div class="app-page" id="signup-page">
        <div class="all-pages-heading">To Do List</div>
        <div class="input-container">
          <div id="sp-error-msg"></div>
          <div class="sp-div">
            <div class="sp-text">First Name</div>
            <input class="sp-input" type="text" id="sp-first-name-input"/>
          </div>
          <div class="sp-div">
            <div class="sp-text">Last Name</div>
            <input class="sp-input" type="text" id="sp-last-name-input"/>
          </div>
          <div class="sp-div">
            <div class="sp-text">Email</div>
            <input class="sp-input" type="text" id="sp-email-input"/>
          </div>
          <div class="sp-div">
            <div class="sp-text">Password</div>
            <input class="sp-input" type="password" id="sp-password-input"/>
          </div>
          <div class="sp-div">
            <div class="sp-text">Repeat password</div>
            <input class="sp-input" type="password" id="sp-password2-input"/>
          </div>
          <div id="sp-terms-div">
            <input type="checkbox" id="sp-terms-checkbox"/>
            <div class="sp-terms-label">I agree to the terms of service.</div>
          </div>
          <div class="double-footer" id="sp-correct">
            <button class="btn" id="sp-enter-button">Signup</button>
            <button class="btn" id="sp-clear-button">Clear</button>
          </div>
        </div>
      </div>
    </div>
  </div>`

loginPageBlock =
    `<div id="container">
    <div id="bg">
      <div class="app-page" id="login-page">
        <div class="all-pages-heading">To Do List</div>
        <div id="lp-error-msg"></div>
        <div class="input-container">
          <div id="lp-email-div">
            <div class="lp-form-label">Email</div>
            <input type="text" id="lp-email-input"/>
          </div>
          <div id="lp-password-div">
            <div class="lp-form-label">Password</div>
            <input type="password" id="lp-password-input"/>
          </div>
          <div id="lp-buttons-div">
            <button class="btn" id="lp-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>`

dashboardBlock =
    `<div id="container">
    <div id="'bg">
      <div class="app-page" id="dashboard-page">
        <div class="all-pages-heading">To Do List</div>
        <div class="banner" id="dashboard-banner">
          <div class="btn-accounts">
            <div class="account-name">Account:</div>
          </div>
          <div class="btn-sign-out">
            <div class="sign-out-text">Sign Out</div>
          </div>
        </div>
        <div id="list-of-lists"></div>
        <div id="dashboard-footer">
          <div class="btn" id="dashboard-add-new-list">
            <div id="dashboard-add-new-list-text">Add List</div>
          </div>
        </div>
      </div>
    </div>
  </div>`

newListPageBlock =
    `<div id="container">
    <div id="bg">
      <div class="app-page" id="new-list-page">
        <div class="all-pages-heading">To Do List</div>
        <div class="banner">
          <div class="btn-accounts">
            <div class="account-name">Account:</div>
          </div>
          <div class="btn-sign-out">
            <div class="sign-out-text">Sign Out</div>
          </div>
        </div>
        <div id="nlp-new-list-div">
          <div id="nlp-new-list-label">List Name</div>
          <input type="text" id="nlp-new-list-input"/>
        </div>
        <div class="double-footer" id="nlp-footer">
          <img class="home-double" alt="homePage" src="images/house-vector-clipart2.png"/>
          <div id="nlp-button-submit">
            <div id="nlp-add-new-list-text">Add List</div>
          </div>
        </div>
      </div>
    </div>
  </div>`

taskListPageBlock =
    `<div id="container">
    <div id="bg">
      <div class="app-page" id="task-list-page">
        <div class="all-pages-heading">To Do List</div>
        <div class="sub-heading">Placeholder</div>
        <div class="banner">
          <div class="btn-accounts">
            <div class="account-name">Account:</div>
          </div>
          <div class="btn-sign-out">
            <div class="sign-out-text">Sign Out</div>
          </div>
        </div>
        <div id="sublist-container">
          <div id="sublist">
            <div class="sublist-row">
              <img class="check-mark-column" src="images/checkmark.png" alt="checkmark"/>
              <div class="subList-item">Scramble some eggs</div>
            </div>
          </div>
        </div>
        <div class="double-footer">
          <img class="home-double" alt="homePage" src="images/house-vector-clipart2.png"/>
          <div class="btn-double-footer" id="task-add-new-task">Add Item</div>
        </div>
      </div>
    </div>
  </div>`

taskEntryModifyPageBlock =
    `<div id="container">
    <div id="bg">
        <div class="app-page" id="task-entry-modify-page">
        <div class="all-pages-heading">To Do List</div>
        <div class="sub-heading">Placeholder2</div>
        <div class="banner">
          <div class="btn-accounts">
            <div class="account-name">Account:</div>
          </div>
          <div class="btn-sign-out">
            <div class="sign-out-text">Sign Out</div>
          </div>
        </div>
        <div class="input-container" id="task-container">
          <div id="task-new-list-label">Task</div>
          <input type="text" id="tem-input"/>
        </div>
        <div class="double-footer" id="tem-correct">
          <img class="home-double" alt="homePage" src="images/house-vector-clipart2.png"/>
          <div class="btn-double-footer" id="tem-add-new-task">Add Item</div>
        </div>
      </div>
    </div>
  </div>`

taskModifyPageBlock =
    `<div id="container">
    <div id="bg">
      <div class="app-page" id="task-modify-page">
      <div class="all-pages-heading">To Do List</div>
      <div class="sub-heading">Placeholder3</div>
      <div class="banner">
        <div class="btn-accounts">
          <div class="account-name">Account:</div>
        </div>
        <div class="btn-sign-out">
          <div class="sign-out-text">Sign Out</div>
        </div>
      </div>

      <div class="input-container" id="task-modify-container">
        <div id="task-modify-label">Task</div>
        <input type="text" id="task-modify-input"/>
      </div>

      <div class="double-footer">
        <img class="home-double" alt="homePage" src="images/house-vector-clipart2.png"/>
        <div class="btn-double-footer" id="custom-modify-task-btn">Modify Task</div>
      </div>
    </div>
    </div>
  </div>`

modifyMetalistPageBlock =
  `<div id="container">
    <div id="bg">
      <div class="app-page" id="modify-metalist-page">
      <div class="all-pages-heading">To Do List</div>
      <div class="banner">
        <div class="btn-accounts">
          <div class="account-name">Account:</div>
        </div>
        <div class="btn-sign-out">
          <div class="sign-out-text">Sign Out</div>
        </div>
      </div>
      <div class="input-container" id="task-modify-metalist-container">
        <div id="modify-metalist-label">List Name</div>
        <input type="text" id="modify-metalist-input"/>
      </div>
      <div class="double-footer">
        <img class="home-double" alt="homePage" src="images/house-vector-clipart2.png"/>
        <div class="btn-double-footer" id="modify-metalist-button">Modify List</div>
      </div>
    </div>
    </div>
  </div>`

acountEditPage =
    `<div id="container">
    <div id="bg">
      <div class="app-page" id="account-edit-page">
      <div class="all-pages-heading">To Do List</div>
      <div class="input-container">
        <div id="ae-error-msg"></div>
        <div class="ae-div">
          <div class="ae-text">Email</div>
          <div id="ae-email-text"></div>
        </div>
        <div class="ae-div">
          <div class="ae-text">* First Name</div>
          <input class="ae-input" type="text" id="ae-first-name-input"/>
        </div>
        <div class="ae-div">
          <div class="ae-text">* Last Name</div>
          <input class="ae-input" type="text" id="ae-last-name-input"/>
        </div>
        <div class="ae-div">
          <div class="ae-text">* Old Password</div>
          <input class="ae-input" type="password" id="ae-old-password-input"/>
        </div>
        <div class="ae-div">
          <div class="ae-text">New Password</div>
          <input class="ae-input" type="password" id="ae-new-password-input"/>
        </div>
        <div class="ae-div">
          <div class="ae-text">Repeat Password</div>
          <input class="ae-input" type="password" id="ae-password2-input"/>
        </div>
        <div class="double-footer" id="ae-correction">
          <button class="btn" id="ae-submit-button">Modify</button>
          <button class="btn" id="ae-clear-button">Clear</button>
        </div>
      </div>
    </div>
  </div>`

const titlePage = document.getElementById("title-page");
const titlePageSignupButton = document.getElementById("title-page-signup-button");
const titlePageLoginButton = document.getElementById("title-page-login-button");

const signupPage = document.getElementById("signup-page");
const spErrorMsg = document.getElementById("sp-error-msg");
const spFirstNameInput = document.getElementById("sp-first-name-input");
const spLastNameInput = document.getElementById("sp-last-name-input");
const spPassword1 = document.getElementById("sp-password-input");
const spPassword2 = document.getElementById("sp-password2-input");
const spEmail = document.getElementById("sp-email-input");
let spTermsCheckbox = document.getElementById("sp-terms-checkbox");
const spClearButton = document.getElementById("sp-clear-button");
const spSubmitButton = document.getElementById("sp-enter-button");

const loginPage = document.getElementById("login-page");
const lpErrorMsg = document.getElementById("lp-error-msg");
const lpEmail = document.getElementById("lp-email-input");
const lpPassword = document.getElementById("lp-password-input");
const lpButton = document.getElementById("lp-button");

const dashboardPage = document.getElementById("dashboard-page");
const dashboardBanner = document.getElementById("dashboard-banner");
const accountNames = document.querySelectorAll(".account-name");
// const accountsButtons       = document.querySelectorAll(".btn-accounts");
const signOutButton = document.querySelectorAll(".btn-sign-out");
const listsOfLists = document.getElementById("list-of-lists");
const newListButton = document.getElementById("dashboard-add-new-list");

const newListPage = document.getElementById("new-list-page");
const nlpButtonSubmit = document.getElementById("nlp-button-submit");
const nlpListName = document.getElementById("nlp-new-list-input");

const taskListPage = document.getElementById("task-list-page");
const tlpAddTask = document.getElementById("task-add-new-task");

const taskEntryModify = document.getElementById("task-entry-modify-page");
const temTask = document.getElementById("tem-input");
const temAddNewTask = document.getElementById("tem-add-new-task");
const subList = document.getElementById("sublist");

const taskModifyPage = document.getElementById("task-modify-page");
const modifyTaskButton = document.getElementById("custom-modify-task-btn");
const modifyTaskInput = document.getElementById("task-modify-input");

const modifyMetaListPage = document.getElementById("modify-metalist-page");
const modifyMLButton = document.getElementById("modify-metalist-button");
const modifyMLInput = document.getElementById("modify-metalist-input");
const subHeadings = document.querySelectorAll(".sub-heading");

const accountEditPage = document.getElementById("account-edit-page");
const accountSettings = document.querySelectorAll('.btn-accounts');
const aeSubmitButton = document.getElementById("ae-submit-button");
const aeClearButton = document.getElementById("ae-clear-button");
const aeFirstNameInput = document.getElementById("ae-first-name-input");
const aeLastNameInput = document.getElementById("ae-last-name-input");
const aeEmailText = document.getElementById("ae-email-text");
const aeOldPassword = document.getElementById("ae-old-password-input");
const aeNewPassword = document.getElementById("ae-new-password-input");
const aeRepeatPassword = document.getElementById("ae-password2-input");
const aeErrorMsg = document.getElementById("ae-error-msg");

const houseButtons = document.querySelectorAll(".home-double");
const someBody = document.getElementsByTagName("body")[0];

renderBody(titlePageBlock);

let currentEmail = "";
let currentList = "";
let subHeadingId = -1;
let lastIndexNum = 0;

titlePageSignupButton.addEventListener("click", alert("help!"));
titlePageLoginButton.addEventListener("click", alert("help2"));
spClearButton.addEventListener("click", signupClear);
spSubmitButton.addEventListener("click", submitSignup);
lpButton.addEventListener("click", loginUser);
newListButton.addEventListener("click", displayNewListPage);
nlpButtonSubmit.addEventListener("click", addNewList);
tlpAddTask.addEventListener("click", addNewTask);
temAddNewTask.addEventListener("click", submitNewTask);
window.addEventListener("load", displayTitlePage);
listsOfLists.addEventListener("click", displayTasks);
subList.addEventListener('click', dispatchTask);
modifyTaskButton.addEventListener('click', preModifyTask);
modifyMLButton.addEventListener("click", preModifyMetaList);
aeSubmitButton.addEventListener("click", modifyAccount);
aeClearButton.addEventListener("click", modifyClear);

houseButtons.forEach(element => {
  element.addEventListener("click", displayDashboard);
})

signOutButton.forEach(element => {
  element.addEventListener("click", displayTitlePage);
})

subHeadings.forEach(element => {
  element.addEventListener("click", displayModifyMetaListPage);
})

accountSettings.forEach(element => {
  element.addEventListener("click", displayAccountInfoPage);
})

function displayTitlePage() {
  hidePages();

  currentEmail = "";
  currentList = "";
  titlePage.style.display = "block";
}

function titlePageSignup() {
  hidePages();
  signupPage.style.display = "block";
}

function titlePageLogin() {
  hidePages();
  loginPage.style.display = "block";
}

function submitSignup() {
  if (!validateSignUp(spFirstNameInput, spLastNameInput, spEmail, spPassword1, spPassword2,
      spErrorMsg, spTermsCheckbox)) return;

  if (!matchPasswords(spPassword1, spPassword2, spErrorMsg)) return;
  const email = spEmail.value.trim();
  currentEmail = "";

  if (localStorage.getItem(email) === "true") {
    spErrorMsg.innerText = "Account already exists !";
  } else {
    // keeps track of used accounts
    if (validateEmail(email) === true) {
      localStorage.setItem(email, "true");
      currentEmail = email;
      saveSettings(spFirstNameInput, spLastNameInput, email, spPassword1);
      signupPage.style.display = "none";
      signupClear();
      dashboard(email);
    } else {
      spErrorMsg.innerText = "Invalid email address entered";
    }
  }
}

function signupClear() {
  spErrorMsg.value = "";
  spFirstNameInput.value = "";
  spLastNameInput.value = "";
  spEmail.value = "";
  spPassword1.value = "";
  spPassword2.value = "";
  spTermsCheckbox.checked = false;
}

function validateModifyOrSignup(firstNameInput, lastNameInput, emailValue, password1, password2, errorMsg) {
  if (validateName(firstNameInput.value) === false) {
    errorMsg.innerText = "First name must only contain 3-15 letters.";
    firstNameInput.focus();
    return false;
  }
  if (validateName(lastNameInput.value) === false) {
    errorMsg.innerText = "Last name must only contain 3-15 letters.";
    lastNameInput.focus();
    return false;
  }
  if (validateEmail(emailValue) === false) {
    errorMsg.innerText = "Email address " + emailValue + " is invalid.";
    return false;
  }

  return true;
}

function matchPasswords(password1, password2, errorMsg) {
  if (validatePassword(password1.value) === false) {
    errorMsg.innerText = "password must have 7 to 16 characters containing only characters, numeric digits, " +
        "underscore, and begin with a character."
    password1.focus();
    return false;
  }

  if (password1.value !== password2.value) {
    errorMsg.innerText = "The passwords do not match.";
    password1.focus();
    return false;
  }
  return true;
}

function validateSignUp(spFirstNameInput, spLastNameInput, spEmail,
                        spPassword1, spPassword2, spErrorMsg, spTermsCheckbox) {
  if (validateModifyOrSignup(spFirstNameInput, spLastNameInput,
      spEmail.value, spPassword1, spPassword2, spErrorMsg)) {
    if (signUpValidate2(spTermsCheckbox, spErrorMsg)) {
      if (validateEmail(spEmail.value) === true) {
        if (localStorage.getItem(spEmail.value) === "true") {
          spErrorMsg.innerText = "Email account already exists!";
          return false;
        } else {
          return true;
        }
      }
    }
  }
}

  function signUpValidate2(termsCheckbox, errorMsg) {
    if (termsCheckbox.checked === false) {
      errorMsg.innerText = "You must accept the terms of use to continue.";
      return false;
    } else {
      errorMsg.innerText = "";
    }
    return true;
  }

  function validateSettings(aeFirstNameInput, aeLastNameInput, aeEmailText,
                            aeOldPassword, aeNewPassword, aeRepeatPassword, aeErrorMsg) {

    if (validateModifyOrSignup(aeFirstNameInput, aeLastNameInput, aeEmailText.innerText,
        aeErrorMsg)) {

      let key_password = currentEmail + "_password";
      const hashed_password = localStorage.getItem(key_password);

      if (verifyPassword(aeOldPassword.value, hashed_password) === false) {
        aeErrorMsg.innerText = "Invalid old password";
        return false;
      }
    }

    if (!matchPasswords(aeNewPassword, aeRepeatPassword, aeErrorMsg)) {
      return false;
    }

    return true;
  }

  function validateEmail(emailAddress) {
    let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAddress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }

  function validatePassword(inputTxt) {
    let passW = /^[A-Za-z]\w{7,14}$/;
    return inputTxt.match(passW);
  }

  function validateName(inputTxt) {
    let name = /[a-zA-Z]{3,15}/g
    return inputTxt.match(name);
  }

  function loginUser() {
    let email = lpEmail.value;
    let password = lpPassword.value;
    // email = "plusgforce@gmail.com";
    // password = "SecretPassword";
    let key_password = email + "_password";
    const hashed_password = localStorage.getItem(key_password);

    if ((hashed_password != null) && (verifyPassword(password, hashed_password))) {
      currentEmail = email;
      loginPage.style.display = "none";
      dashboard(email);
    } else {
      lpErrorMsg.innerText = "Invalid email / password combination";
    }
  }

  function displayDashboard() {
    dashboard(currentEmail);
  }

  function dashboard(email) {
    let local_firstname;
    let local_lastname;
    let local_lists;
    let abWidth;

    const key_firstname = email + "_firstname";
    const key_lastname = email + "_lastname";

    local_firstname = localStorage.getItem(key_firstname);
    local_lastname = localStorage.getItem(key_lastname);
    local_lists = getMetaList(email);

    hidePages();
    dashboardPage.style.display = "block";
    dashboardBanner.style.display = "block";

    document.querySelectorAll(".account-name").forEach(function (element) {
      element.innerText = "Account: " + local_firstname + " " + local_lastname;
    });

    abWidth = (accountNames[0].innerText.length * 10).toString() + "px";

    document.querySelectorAll(".btn-accounts").forEach(function (element) {
      element.style.width = abWidth;
    });

    listsOfLists.style.display = "block";
    listsOfLists.innerText = "";

    for (let i = 0; i < local_lists.length; i++) {
      listsOfLists.innerHTML += "\n<div id='listnum-" + i.toString() + "'>" + local_lists[i] + "</div>";
    }

    if (local_lists.length === 0) {
      listsOfLists.innerText = "No lists found for " + local_firstname + " " + local_lastname + ".";
    }
    currentEmail = email;
  }

  function displayTasks(evt) {
    const targetString = evt.target.id;

    if (targetString === "list-of-lists") {
      return;
    }

    subHeadingId = parseInt(targetString.substring(targetString.lastIndexOf("-") + 1, targetString.length));
    const sHeading = document.getElementById(targetString).innerText;
    document.querySelectorAll(".sub-heading").forEach(function (element) {
      element.innerText = sHeading;
    });
    let targetNum = extractNum(targetString);
    displayTasks2(currentEmail, targetNum);
  }

  function displayTasks2(email, targetNum) {
    hidePages();
    taskListPage.style.display = "block";

    let sub_list_items = getTasks(email, targetNum);
    let checked_items = getTasksChecked(email, targetNum);
    subList.innerHTML = "";

    for (let i = 0; i < sub_list_items.length; i++) {
      subList.innerHTML += "<div class='sublist-row'>\n";
      if (checked_items[i] === true) {
        subList.innerHTML += "<div>" +
            "<img class='check-mark-column' id='check-" + i.toString() +
            "' src='images/checkmark.png' alt='checkmark'/></div>\n";
      } else {
        subList.innerHTML += "<div class='empty-column' id='check-" + i.toString() + "'></div>\n";
      }
      subList.innerHTML += "<div class='subList-item' id='text-" + i.toString() + "'>" + sub_list_items[i] + "</div>\n";
      subList.innerHTML += "</div>\n";
    }

    if (sub_list_items.length === 0) {
      subList.innerHTML = "<div id='sublist-empty'>This list is empty</div>\n";
    }
  }

  function displayNewListPage() {
    hidePages();
    newListPage.style.display = "block";
    nlpListName.value = "";
  }

  function makeHash(saltRounds, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  }

  function verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }

  function addNewList() {
    let newList = nlpListName.value;
    addMetaList(currentEmail, newList);
    newListPage.style.display = "none";
    dashboard(currentEmail);
  }

  function addNewTask() {
    hidePages();
    taskEntryModify.style.display = "block";
  }

  function submitNewTask() {
    addTask(currentEmail, subHeadingId, temTask.value);
    displayTasks2(currentEmail, subHeadingId);
  }

  function hidePages() {
    titlePage.style.display = "none";
    signupPage.style.display = "none";
    loginPage.style.display = "none";
    dashboardPage.style.display = "none";
    newListPage.style.display = "none";
    taskListPage.style.display = "none";
    taskEntryModify.style.display = "none";
    taskModifyPage.style.display = "none";
    modifyMetaListPage.style.display = "none";
    accountEditPage.style.display = "none";
  }

  function getFirstName(email) {
    const key_firstname = email + "_firstname";
    return localStorage.getItem(key_firstname);
  }

  function getLastName(email) {
    const key_lastName = email + "_lastname";
    return localStorage.getItem(key_lastName);
  }

  function getMetaList(email) {
    const key_metalist = email + "_metalist";
    let listArray = JSON.parse(localStorage.getItem(key_metalist));
    if (listArray == null) {
      return [];
    } else {
      return listArray;
    }
  }

  function getTasks(email, metaList_id) {
    const key_tasks = email + "_sublist_" + metaList_id;
    let tempArray = JSON.parse(localStorage.getItem(key_tasks));
    if (tempArray === null) {
      return [];
    } else {
      return tempArray;
    }
  }

  function getTasksChecked(email, metaList_id) {
    const key_checks = email + "_subchecks_" + metaList_id;
    const checks = JSON.parse(localStorage.getItem(key_checks));
    if (checks === null) {
      return [];
    }

    return checks;
  }

  function addMetaList(email, title) {
    const title2 = title.trim();
    if (title2 === "") return false;
    const key_metalist = email + "_metalist";
    let metaList = getMetaList(email);
    if (findDuplicate(metaList, title2) === false) {
      metaList.push(title2);
      localStorage.setItem(key_metalist, JSON.stringify(metaList));
      return true;
    } else {
      return false;
    }
  }

  function addTask(email, metaList_id, task) {
    let task2 = task.trim();
    if (task2 === "") return false;
    // convert double spaces to a single space
    task2 = task2.replace(/ +(?= )/g, '');

    const key_tasks = email + "_sublist_" + metaList_id;
    const key_checks = email + "_subchecks_" + metaList_id;

    let tasks = getTasks(email, metaList_id);
    let checks;

    if (findDuplicate(tasks, task2) === false) {
      tasks.push(task2);
      localStorage.setItem(key_tasks, JSON.stringify(tasks));
      checks = getTasksChecked(email, metaList_id);
      checks.push(false);
      localStorage.setItem(key_checks, JSON.stringify(checks));
    }
  }

  function preModifyMetaList() {
    let email = currentEmail;
    let list_id = subHeadingId;
    let newTitle = modifyMLInput.value;

    modifyMetaList(email, list_id, newTitle);
    dashboard(email);
  }

  function modifyMetaList(email, list_id, newTitle) {
    let metaList;
    let key_metalist;

    newTitle = newTitle.trim();
    if (newTitle === "") return false;
    metaList = getMetaList(email);
    if (findDuplicate(metaList, newTitle) === false) {
      metaList[list_id] = newTitle;
      key_metalist = email + "_metalist";
      localStorage.setItem(key_metalist, JSON.stringify(metaList));
      return true;
    } else {
      return false;
    }
  }

  function dispatchTask(evt) {
    const clicky = evt.target.id;
    let dashLocation = clicky.indexOf("-");
    if (dashLocation < 0) return;

    const clickType = clicky.substr(0, dashLocation);
    const indexNum = parseInt(clicky.substr(dashLocation + 1, clicky.length - 1));
    if (clickType === "check") {
      toggleTask(currentEmail, subHeadingId, indexNum);
    } else {
      if (clickType === "text") {
        showModifyTaskPage(indexNum);
      }
    }
  }

  function toggleTask(email, metaList_id, task_id) {
    const key_checks = email + "_subchecks_" + metaList_id;
    let checks = getTasksChecked(email, metaList_id);
    checks[task_id] = !checks[task_id];
    localStorage.setItem(key_checks, JSON.stringify(checks));
    displayTasks2(email, metaList_id);
  }

  function showModifyTaskPage(indexNum) {
    hidePages();
    let xTasks = getTasks(currentEmail, subHeadingId);
    modifyTaskInput.value = xTasks[indexNum];
    lastIndexNum = indexNum;
    taskModifyPage.style.display = "block";
  }

  function preModifyTask() {
    modifyTask(currentEmail, subHeadingId, lastIndexNum, modifyTaskInput.value);
  }

  function modifyTask(email, metaList_id, task_id, description) {
    const key_tasks = email + "_sublist_" + metaList_id;

    let tasks = getTasks(email, metaList_id);
    if (findDuplicate(tasks, description) === false) {
      tasks[task_id] = description;
      localStorage.setItem(key_tasks, JSON.stringify(tasks));
    }
    displayTasks2(email, metaList_id);
  }


  function findDuplicate(xArray, item) {
    item = item.trim().toLowerCase();
    if (item === "") return -1;
    let yArray = [];

    for (let i = 0; i < xArray.length; i++) {
      yArray[i] = xArray[i].trim().toLowerCase();
    }

    if (yArray.indexOf(item) >= 0) {
      console.log("Duplicate entry found.");
      return true;
    }
    return false;
  }

  function extractNum(xString) {
    return xString.substr(xString.lastIndexOf('_'), xString.length - 1);
  }

  function displayModifyMetaListPage() {
    hidePages();
    let mlArray = getMetaList(currentEmail);

    modifyMLInput.value = mlArray[subHeadingId];
    modifyMetaListPage.style.display = "block";
  }

  function displayAccountInfoPage() {
    hidePages();
    accountEditPage.style.display = "block";
    aeFirstNameInput.value = getFirstName(currentEmail);
    aeLastNameInput.value = getLastName(currentEmail);
    aeEmailText.innerText = currentEmail;
  }

  function modifyAccount() {
    if (validateSettings(aeFirstNameInput, aeLastNameInput, aeEmailText,
        aeOldPassword, aeNewPassword, aeRepeatPassword, aeErrorMsg) === true) {
      currentEmail = aeEmailText.innerText;

      if (aeNewPassword.value != null) {
        saveSettings(aeFirstNameInput, aeLastNameInput, currentEmail, aeNewPassword);
      } else {
        saveSettings(aeFirstNameInput, aeLastNameInput, currentEmail, aeOldPassword);
      }

      modifyClear();
      accountEditPage.style.display = "none";
      dashboard(currentEmail);
    }
  }

  function saveSettings(firstName, lastName, email, password) {

    const id_firstname = email + "_firstname";
    const id_lastname = email + "_lastname";
    const id_password = email + "_password";

    let hashed_password = makeHash(saltRounds, password.value);
    localStorage.setItem(id_firstname, firstName.value);
    localStorage.setItem(id_lastname, lastName.value);
    localStorage.setItem(id_password, hashed_password);
    localStorage.setItem(email, "true");
    currentEmail = email;
  }

  function modifyClear() {
    aeFirstNameInput.value = "";
    aeLastNameInput.value = "";
    aeEmailText.innerText = currentEmail;
    aeOldPassword.value = "";
    aeNewPassword.value = "";
    aeRepeatPassword.value = "";
    aeErrorMsg.innerText = "";
  }

  function renderBody(page) {
    someBody.innerHTML = page;
  }

  alert("Hello");
  renderBody(titlePageBlock);
