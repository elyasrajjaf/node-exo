import express from "express";

const app = express();
const port = 3000;

// Utilisation de Pug comme moteur de templates
app.set("view engine", "pug");

// Route pour la page d'accueil
app.get("/", (req, res) => {
  const menuItems = [
    { path: "/", title: "Home", isActive: true },
    { path: "/about-me", title: "About", isActive: false },
    { path: "/references", title: "References", isActive: false },
    { path: "/contact-me", title: "Contact", isActive: false },
  ];

  res.render("index", { menuItems });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
