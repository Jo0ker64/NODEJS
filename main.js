 // Fonction pour générer un captcha aléatoire
 function generateCaptcha() {
    const captchaLength = 6; // Longueur du captcha
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Caractères autorisés

    let captcha = "";
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }

    return captcha;
  }

  // Fonction pour mettre à jour le contenu du captcha
  function refreshCaptcha() {
    const captchaElement = document.getElementById("captcha");
    const newCaptcha = generateCaptcha();
    captchaElement.textContent = newCaptcha;
  }

  // Initialisation du captcha au chargement de la page
  window.onload = refreshCaptcha;