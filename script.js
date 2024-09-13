const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}

if (close){
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}
// Sample user data
const users = [
  { username: "kishika", password: "kishika", role: "kishika" },
  { username: "kishikapar", password: "kishikapar", role: "kishikapar" },
  { username: "jhansipar", password: "jhansipar", role: "jhansipar" },
  { username: "nishupar", password: "nishupar", role: "nishupar" },
  { username: "sai muralipar", password: "sai muralipar", role: "sai murlipar" },
  { username: "rashmipar", password: "rashmipar", role: "rashmipar" },
  { username: "umadevipar", password: "umadevipar", role: "umadevipar" },
  { username: "sarithapar", password: "sarithapar", role: "sarithapar" },
  { username: "yashrajtut", password: "yashrajtut", role: "yashrajtut" },
  { username: "ankitatut", password: "ankitatut", role: "ankitatut" },
  { username: "varuntut", password: "varuntut", role: "varuntut" },
  { username: "praveentut", password: "praveentut", role: "praveentut" },
  { username: "shanshanktut", password: "shashanktut", role: "shashanktut" },
  { username: "saitut", password: "saitut", role: "saitut" },
  { username: "majunathtut", password: "manjunathtut", role: "manjunathtut" },
  { username: "ashaytut", password: "akshaytut", role: "akshaytut" },
  { username: "mansistud", password: "mansistud", role: "mansistud" },
  { username: "archanastud", password: "archanastud", role: "archanastud" },
  { username: "sahastrstud", password: "sahastrstud", role: "sahastrstud" },
  { username: "praveenstud", password: "praveenstud", role: "praveenstud" },
  { username: "paramstud", password: "paramstud", role: "paramstud" },
  { username: "ayushstud", password: "ayushstud", role: "ayushstud" },
  // Add more users as needed
];

function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // Find user in the users array
  const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

  if (user) {
    // Redirect based on user's role
    switch (user.role) {
      case "kishika":
        window.location.href = "kishika.html";
      case "kishikapar":
        window.location.href = "kishikapar.html";
        break;
      case "umadevipar":
        window.location.href = "umadevipar.html";
        break;
      case "sai muralipar":
        window.location.href = "sai muralipar.html";
        break;
      case "rashmipar":
        window.location.href = "rashmipar.html";
        break;
      case "sarithapar":
        window.location.href = "sarithapar.html";
        break;
      case "nishupar":
        window.location.href = "nishupar.html";
        break;
      case "jhansipar":
        window.location.href = "jhansipar.html";
        break;
      case "yashrajtut":
        window.location.href = "yashrajtut.html";
        break;
      case "ankitatut":
        window.location.href = "ankitatut.html";
        break;
      case "varuntut":
        window.location.href = "varuntut.html";
        break;
      case "praveentut":
        window.location.href = "praveentut.html";
        break;
      case "shashanktut":
        window.location.href = "shanshanktut.html";
        break;
      case "saitut":
        window.location.href = "saitut.html";
        break;
      case "manjunathtut":
        window.location.href = "manjunathtut.html";
        break;
      case "akshaytut":
        window.location.href = "akshaytut.html";
        break;
      case "mansistud":
        window.location.href = "masnistud.html";
        break;
      case "archanastud":
        window.location.href = "archanastud.html";
        break;
      case "sahastrstud":
        window.location.href = "sahastrstud.html";
        break;
      case "paramstud":
        window.location.href = "paramstud.html";
        break;
      case "praveeenstud":
        window.location.href = "praveenstud.html";
        break;
      case "ayushstud":
        window.location.href = "ayushstud.html";
        break;
      default:
        document.getElementById("message").innerText = "Invalid user role";
    }
  } else {
    document.getElementById("message").innerText = "Invalid username or password";
  }
}
