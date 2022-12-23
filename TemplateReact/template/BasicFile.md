# Template Basic React v0.3
## Documentation Basic File & Folder 
### "Permet de conaitre l'utilité de chaque Dossier/Fichier '

0.  [X] 

1.  **Document à savoir**
-----
- **node_modules :**

***'node_modules'*** est un répertoire qui contient toutes les dépendances de votre projet React. Lorsque vous installez un paquet npm (Node Package Manager) avec la commande npm install, le paquet est téléchargé et placé dans le répertoire ***'node_modules'***. 
>Les paquets dans node_modules peuvent être importés dans votre code React et utilisés pour ajouter des fonctionnalités ou des bibliothèques utiles à votre application.

***Il est important de noter que node_modules ne doit pas être versionné dans votre code source***, car il peut être facilement reconstruit en utilisant les informations de dépendance dans votre fichier package.json. Au lieu de cela, il est recommandé d'inclure ***'node_modules'*** dans votre fichier ***'.gitignore'*** *afin de ne pas encombrer votre dépôt Git avec des fichiers inutiles.*

>En résumé, node_modules est un répertoire qui contient toutes les dépendances de votre projet React et est essentiel pour le bon fonctionnement de votre application.
------
- **répertoire public :**

Dans un projet React, le ***'répertoire public'*** contient des fichiers qui sont accessibles directement par le navigateur lorsque votre application est en cours d'exécution. Ces fichiers sont généralement utilisés pour les ressources statiques de votre application, comme les images, les polices et les fichiers de style.

>Le fichier ***'index.html'*** qui se trouve dans le ***'répertoire public'*** est le point d'entrée de votre application et est chargé par le navigateur lorsque l'utilisateur accède à votre site. Il est important de noter que le fichier ***'index.html'*** n'est pas généré dynamiquement par React, mais est plutôt un fichier statique qui est servi tel quel par le serveur.

Le ***'répertoire public'*** est également utile pour les fichiers de configuration de votre application, comme le fichier ***'manifest.json'***, *qui décrit les caractéristiques de votre application et comment elle doit être gérée par le navigateur.*

>En résumé, le répertoire public contient des fichiers statiques qui sont accessibles directement par le navigateur lorsque votre application React est en cours d'exécution. Il est utilisé pour stocker les ressources statiques de votre application, ainsi que les fichiers de configuration et le point d'entrée de votre application.


- **robot.txt :**


Le fichier ***'robots.txt'*** est un fichier de configuration utilisé par les moteurs de recherche pour indiquer quelles pages ou parties d'un site Web doivent être indexées. *Il s'agit d'un moyen de contrôler l'accès des robots de recherche aux pages de votre site.*

Dans le contexte de React, le fichier ***'robots.txt'*** n'a pas d'utilité particulière. Cependant, si vous utilisez React pour créer un site Web qui sera indexé par les moteurs de recherche, vous pouvez utiliser le fichier ***'robots.txt'*** pour indiquer aux *'robots'* de recherche quelles pages de votre site doivent être indexées et lesquelles doivent être ignorées.

>Il est important de noter que le fichier robots.txt n'est pas un moyen de sécuriser votre site Web ou de protéger les informations confidentielles. Les moteurs de recherche sont libres d'ignorer les instructions du fichier ***'robots.txt'*** et de continuer à indexer votre site. Il ne doit donc pas être utilisé comme mécanisme de sécurité principal, *mais plutôt comme un outil de gestion de l'indexation de votre site par les moteurs de recherche.* 
---
1. ***répertoire src :***

Dans un projet *React*, le  ***répertoire src*** *(source)* contient le code source de votre application. C'est là que vous écrirez la plupart du code de votre application, y compris les composants React, les styles et les fonctionnalités de votre application.

Le répertoire ***'src'*** peut être organisé de différentes manières, mais une structure courante est de diviser le code en différents répertoires en fonction de leur fonction. Par exemple, vous pouvez avoir un répertoire *'components'* pour les *'composants React'*, un répertoire styles pour les feuilles de style et un répertoire utils pour les fonctions utilitaires.

Le  ***répertoire src*** est également souvent utilisé pour stocker les données de test et les fichiers de configuration de votre application, comme les fichiers de traduction ou les variables d'environnement.

>En résumé, le répertoire src est le cœur de votre projet React et contient le code source de votre application. C'est là que vous écrirez la plupart du code de votre application et où vous organiserez le code en fonction de sa fonction.

2. ***App.js :***

Dans un projet *React*, le fichier ***App.js*** est généralement utilisé pour définir le composant principal de votre application, qui est souvent appelé le composant "racine" de votre application. 
>Il s'agit du composant qui est chargé en premier lorsque votre application est exécutée et qui contient généralement d'autres composants enfants qui forment l'interface utilisateur de votre application.

3. ***index.js :***

Le fichier ***index.js***, quant à lui, est généralement utilisé pour configurer et lancer votre application *React*. Il importe le composant principal de votre application **(défini dans App.js)** et le rend dans l'élément de la page Web qui a l'identifiant *'root'*. Le fichier ***index.js*** peut également être utilisé pour configurer d'autres choses, comme les middlewares ou les routes de votre application.

>En résumé, le fichier App.js est utilisé pour définir le composant principal de votre application et le fichier index.js est utilisé pour configurer et lancer votre application React. Ces fichiers jouent un rôle clé dans la structure de votre projet React et sont essentiels pour le bon fonctionnement de votre application.

4. ***reportWebVitals.js*** & ***setupTests.js :***

>Le fichier ***reportWebVitals.js*** et le fichier ***setupTests.js*** sont généralement inclus dans un projet React pour permettre de suivre et d'améliorer les performances de votre application.

- ***reportWebVitals.js :***

Le fichier ***reportWebVitals.js*** est utilisé pour suivre les métriques de performance clés de votre application, telles que le temps de chargement de la page et la fréquence d'actualisation de l'écran. Ces métriques sont importantes pour comprendre comment votre application se comporte pour les utilisateurs et pour déterminer où vous pouvez apporter des améliorations.

- ***setupTests.js :***

Le fichier ***setupTests.js*** est utilisé pour configurer les tests unitaires de votre application. Il peut être utilisé pour effectuer des opérations de configuration avant que les tests ne soient exécutés, comme l'enregistrement de Mock Components ou la configuration de l'environnement de test.

>En résumé, le fichier ***reportWebVitals.js*** et le fichier ***setupTests.js :*** sont utilisés pour suivre et améliorer les performances de votre application *React* en mesurant les métriques de performance clés et en configurant les tests unitaires de votre application.
---
5. ***.gitignore :***

Le fichier ***.gitignore*** est utilisé pour indiquer à **Git** quels *fichiers ou répertoires doivent être ignorés lors de la publication ou du suivi des modifications de votre projet.* Cela est utile pour éviter de versionner des fichiers qui ne sont pas essentiels au fonctionnement de votre application, comme les fichiers de build ou les fichiers de configuration de l'environnement de développement.

Dans un projet *React*, il est courant d'inclure le répertoire ***node_modules*** dans le fichier ***.gitignore***, car il contient toutes les dépendances de votre projet et peut être facilement reconstruit en utilisant les informations de dépendance dans votre fichier ***package.json***. Cela permet de ne pas encombrer votre dépôt **Git** avec des fichiers inutiles et de faciliter le partage de votre projet avec d'autres développeurs.

>En résumé, le fichier ***.gitignore*** est utilisé pour indiquer à **Git** quels fichiers ou répertoires doivent être ignorés lors de la publication ou du suivi des modifications de votre projet. Dans un projet *React*, il est courant d'inclure le répertoire ***node_modules*** dans le fichier .  ***gitignore*** pour éviter de versionner des fichiers inutiles.
---
6. ***package-lock.json & package.json***

Dans un projet *React*, les fichiers ***package-lock.json et package.json*** sont utilisés pour gérer les dépendances de votre projet.

- ***package.json :***

Le fichier ***package.json*** contient des informations sur votre projet, comme son nom, sa version et ses dépendances. Il est utilisé par npm (Node Package Manager) pour gérer les paquets que vous installez dans votre projet. Vous pouvez utiliser la commande npm install pour télécharger et installer les paquets que vous avez déclarés comme dépendances dans votre fichier ***package.json***.

- ***package-lock.json :***

Le fichier ***package-lock.json***, quant à lui, est généré automatiquement par npm lorsque vous installez des *paquets* dans votre projet. Il contient des informations détaillées sur les *paquets* que vous avez installés, y compris leurs versions exactes et les versions de leurs dépendances. Le fichier ***package-lock.json*** permet de garantir que les dépendances de votre projet sont installées de manière reproductible, ce qui est important lorsque vous partagez votre projet avec d'autres développeurs ou lorsque vous déployez votre application.

>En résumé, les fichiers ***package-lock.json*** et ***package.json*** sont utilisés pour gérer les dépendances de votre projet *React*. Le fichier ***package.json*** contient des informations sur votre projet et est utilisé par npm pour gérer les *paquets* installés dans votre projet, tandis que le fichier  ***package-lock.json*** contient des informations détaillées sur les *paquets installés* et garantit que les dépendances de votre projet sont installées de manière reproductible.