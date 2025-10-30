const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (requiredRoles) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Accès refusé. Jeton manquant ou mal formaté." });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET);

      req.user = decoded;

      const userRole = decoded.role;

      if (!userRole) {
        return res
          .status(403)
          .json({ error: "Accès interdit. Rôle non défini dans le jeton." });
      }

      if (requiredRoles.includes(userRole)) {
        next();
      } else {
        res.status(403).json({
          error: `Accès interdit. Votre rôle (${userRole}) n'est pas autorisé pour cette action.`,
        });
      }
    } catch (ex) {
      res.status(401).json({ error: "Jeton invalide ou expiré." });
    }
  };
};
