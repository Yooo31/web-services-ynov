[ ] Refactoriser les endpoints : noms cohérents, verbes HTTP corrects.
[x] Ajouter la pagination sur une ressource.
[x] Introduire un versioning /v1/.
[ ] Ajouter des status codes explicites.

Hateoas implementation for API responses
[ ] Ajouter un champ _link dans les réponses API qui fournit des liens HATEOAS pertinents pour chaque ressource.
[ ] Générer dynamiquement les URLs (ex: self collection related)
[ ] Mettre à jour la documentation API pour inclure les informations HATEOAS.(si plusieurs versions, afficher la dernière)
[ ] Ajouter des tests unitaires pour vérifier la présence et l'exactitude des liens HATEOAS dans les réponses API.

Swagger
[x] Installer swagger-ui-express ou équivalent.
[x] Créer une route /docs affichant Swagger UI.
[x] Générer la documentation OpenAPI automatiquement.
