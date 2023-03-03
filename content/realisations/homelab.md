---
title: Homelab
picPath: real/homelab.jpg
related:
  - /competences/scripting
  - /competences/conteneurisation
  - /competences/linux
description: "La création d'un homelab consiste à mettre en place un petit environnement informatique chez soi, généralement à des fins de test, d'apprentissage ou de loisir. Cela peut inclure la configuration de serveurs, de réseaux, de stockage et de logiciels de virtualisation."
---

# Contexte

Dans le cadre de ma passion pour l'informatique, j'ai entrepris un projet personnel consistant à créer un environnement de virtualisation efficace et performant pour héberger des machines virtuelles et des conteneurs, tout en garantissant la sécurité des données stockées. L'objectif de ce projet était d'améliorer mon apprentissage de l'informatique en mettant en place un environnement proche du réel pour pratiquer de manière sécurisée.

En effet, je désirais approfondir mes connaissances en informatique et développer mes compétences dans la mise en place de systèmes complexes. La virtualisation m'est apparue comme un outil idéal pour atteindre cet objectif, car elle permet de créer des environnements virtuels indépendants les uns des autres, ce qui facilite grandement la gestion et la maintenance des systèmes.

Dans le cadre de ce projet, j'ai envisagé de virtualiser plusieurs serveurs, tels que Windows Server 2019, des services d'intégration continue comme Gitlab CI, des services de stockage de fichiers d'entreprises, des systèmes d'exploitation basés sur Linux, etc. L'enjeu était donc de mettre en place un environnement de virtualisation performant et sécurisé pour héberger ces différentes machines virtuelles.

Les risques liés à ce projet étaient multiples, notamment en termes de sécurité des données stockées et de stabilité du système de virtualisation. C'est pourquoi j'ai pris le temps d'analyser les besoins de ce projet et de rechercher les solutions les plus adaptées pour y répondre. La suite de cet article présentera les différentes étapes de mise en œuvre de ce projet ainsi que mon retour d'expérience.

# Mise en œuvre

## Analyse des besoins

Avant de commencer la mise en place de mon serveur de virtualisation, j'ai effectué une analyse de mes besoins. Mon objectif était de créer un environnement de virtualisation performant et sécurisé pour héberger des machines virtuelles et des conteneurs, tout en respectant un budget limité d'environ 400 €.

Ainsi, j'ai identifié plusieurs critères importants pour le choix de mon matériel :

- Un processeur à basse consommation mais assez performant pour lancer plusieurs machines virtuelles.
- Une carte mère capable de gérer au minimum 64 Go de RAM pour pouvoir héberger plusieurs machines virtuelles simultanément.
- Un stockage d'au moins 2 To pour pouvoir stocker les données de mes machines virtuelles.
- Un système d'exploitation me permettant de créer des machines virtuelles et des conteneurs Docker.
- Du matériel silencieux, étant donné que le serveur sera dans mon appartement.

Ces critères ont guidé mes choix lors de la sélection du matériel. Il était également important pour moi de trouver un matériel robuste qui puisse tourner 24h/24h sans ralentissement, tout en respectant mon budget limité. C'est pourquoi j'ai décidé d'opter pour une solution de récupération et d'occasion pour certains éléments de mon serveur, tels que la RAM et les disques durs.

Malgré mon budget limité, j'ai pu trouver des composants de qualité qui répondent à mes besoins en termes de performance et de capacité de stockage.

## Recherche

La recherche et l'achat du matériel ont été une étape importante de mon projet personnel. J'ai cherché à trouver du matériel performant et adapté à mes besoins tout en respectant mon budget.

Tout d'abord, j'ai choisi la gamme de processeurs Xeon E5 v4 pour plusieurs raisons. Cette gamme de processeurs est récente, compatible avec une grande quantité de RAM (jusqu'à 1 To), conçue pour les utilisations professionnelles et dispose d'un grand nombre de cœurs, ce qui est avantageux pour la virtualisation. De plus, le prix de ces processeurs a beaucoup baissé depuis leur sortie en 2016, ce qui les rend accessibles à un budget raisonnable. En comparant les prix en 2017 (environ 500 €) et aujourd'hui (à partir de 20 €), il était clair que cette gamme de processeurs offrait un excellent rapport qualité-prix.
[https://www.intel.fr/content/www/fr/fr/products/sku/92984/intel-xeon-processor-e52640-v4-25m-cache-2-40-ghz/specifications.html](https://www.intel.fr/content/www/fr/fr/products/sku/92984/intel-xeon-processor-e52640-v4-25m-cache-2-40-ghz/specifications.html)

Ensuite, j'ai cherché une carte mère compatible avec ce processeur, qui devait être robuste et capable de fonctionner 24 heures sur 24 sans ralentissement. J'ai opté pour une carte mère professionnelle, conçue pour durer dans le temps et dotée de fonctionnalités de gestion à distance pratiques en cas de problème. Ces cartes mères sont difficiles à trouver neuves, donc j'ai opté pour l'achat d'une carte mère d'occasion. J'ai passé en revue tous les sites d'occasion tels que eBay, Leboncoin et même des sites chinois où l'on peut trouver de vieux matériels informatiques. J'ai finalement trouvé une carte mère MW50-SV0 chez un ancien professionnel de l'informatique pour 266 €, alors qu'en 2017, ce type de carte mère coûtait environ 250 €.
[https://www.gigabyte.com/fr/Enterprise/Server-Motherboard/MW50-SV0-rev-10](https://www.gigabyte.com/fr/Enterprise/Server-Motherboard/MW50-SV0-rev-10)

Pour le boîtier, j'ai opté pour un boîtier de récupération classique pour réduire les coûts. J'ai choisi de la RAM ECC DDR4 de 32 Go minimum, une alimentation silencieuse Bequiet de 500 W et un ventilateur énorme pour refroidir le processeur puissant. J'ai également choisi un ventilateur Bequiet pour qu'il soit silencieux. J'ai pu trouver ces composants d'occasion pour un total de 120 € pour le kit RAM DDR4 ECC de 32 Go et le processeur Xeon E5 2620, 110 € pour l'alimentation 500 W et le ventilateur Bequiet, et le boîtier était un boîtier de récupération.

Enfin, j'ai acheté un disque dur neuf Seagate NAS de 4 To pour 100 €, afin de disposer d'un espace de stockage suffisant pour mes besoins de virtualisation.

En résumé, j'ai pu obtenir tous les composants nécessaires pour construire mon serveur de virtualisation en utilisant des composants d'occasion, ce qui m'a permis de respecter mon budget. Au total, j'ai dépensé environ 596 € pour le projet.

Le prix total de la configuration que j'ai choisie a dépassé le budget initial que j'avais fixé. Cependant, j'ai pu bénéficier de performances bien supérieures à mes besoins et j'ai réussi à faire de bonnes affaires en achetant du matériel d'occasion.

## Installation du système d’exploitation Proxmox

Proxmox est une plateforme de virtualisation open source basée sur le noyau Linux. Elle permet de créer et de gérer des machines virtuelles et des conteneurs. J'ai choisi Proxmox pour plusieurs raisons :

1. Elle est open source et gratuite, ce qui est très avantageux pour une utilisation personnelle et pour respecter mon budget.
2. Elle est très facile à installer et à utiliser. La mise en place du système est rapide et intuitive, ce qui a permis d'économiser du temps.
3. La plateforme est très stable et performante, avec un grand nombre de fonctionnalités avancées, comme la migration à chaud des machines virtuelles, la haute disponibilité, la gestion du stockage et de la sauvegarde.
4. Elle supporte une grande variété de systèmes d'exploitation invités, tels que Windows, Linux, FreeBSD, etc. Cela me permet de créer des machines virtuelles et des conteneurs pour mes différents besoins.
5. Il y a une grande communauté d'utilisateurs et de développeurs qui contribuent à l'amélioration de la plateforme.

J'ai choisi d'installer Proxmox sur mon serveur, car j'avais déjà utilisé des solutions concurrentes telles que HyperV ou ESXI lors de mes précédentes expériences en entreprise ou à l'école. Cependant, je trouvais que ces solutions étaient souvent limitées en termes de fonctionnalités et qu'elles nécessitaient des licences coûteuses pour bénéficier de toutes les options disponibles. Proxmox, en revanche, est une solution open-source gratuite qui offre une large gamme de fonctionnalités.
De plus, Proxmox est basé sur Debian, une distribution Linux stable et bien établie, ce qui m'a donné une certaine confiance quant à sa fiabilité.

## **Configuration des services**

J'ai commencé par créer une machine virtuelle Ubuntu sur mon serveur Proxmox, qui me permet de lancer tous mes conteneurs. Les conteneurs sont des instances légères et isolées d'applications qui peuvent être exécutées sur le même système d'exploitation sans avoir besoin d'une machine virtuelle séparée. Cela permet une utilisation plus efficace des ressources du serveur et une meilleure flexibilité pour le déploiement d'applications.

Ensuite, j'ai installé différents conteneurs sur cette machine virtuelle Ubuntu en fonction de mes besoins. L'un des conteneurs les plus importants est Nextcloud, qui est une plateforme de stockage en ligne sécurisée et privée. Elle me permet d'accéder à mes fichiers depuis n'importe quel appareil et de partager des fichiers avec d'autres utilisateurs.

J'ai également installé d'autres conteneurs, tels que Traefik pour la gestion des requêtes HTTP, Portainer pour la gestion des conteneurs, et un serveur GitLab pour le contrôle de version. Ces conteneurs me permettent de gérer et de déployer mes applications de manière efficace sur mon serveur.

[En savoir plus sur la conteneurisation](/competences/conteneurisation)

En ce qui concerne le stockage, j'ai créé un pool de stockage en GFS (Gluster File System). GFS est un système de fichiers distribué qui permet de regrouper plusieurs disques durs en un seul espace de stockage cohérent et redondant. Contrairement à Ext4, qui est le système de fichiers par défaut dans Linux, GFS permet une redondance et une réplication des données pour une meilleure tolérance aux pannes, ainsi qu'une extensibilité facile en ajoutant simplement de nouveaux disques au pool de stockage.

# Mon retour d'expérience

Les résultats obtenus avec mon homelab ont été très satisfaisants. J'ai pu utiliser les différentes machines virtuelles pour tester des configurations et des applications en toute sécurité. J'ai également pu mettre en pratique mes compétences en administration système et en virtualisation.

Pour m'aider, j'ai consulté les ressources suivantes :

- **[Reddit Homelab](https://www.reddit.com/r/homelab/wiki/introduction/)** : une communauté de passionnés d'homelab partageant leurs connaissances et leurs réalisations.
- **[Hayden James Home Lab Beginner's Guide](https://haydenjames.io/home-lab-beginners-guide-hardware/)** : un guide détaillé pour les débutants en homelab, couvrant les aspects matériels et logiciels.
- **[Christian Lempa](https://www.youtube.com/c/ChristianLempa/videos)** : une chaîne YouTube proposant des tutoriels et des démonstrations d'homelab.
- **[Wolfgang's Channel](https://www.youtube.com/watch?v=f5jNJDaztqk&t=45s)** : une chaîne YouTube présentant des projets d'homelab et des tutoriels sur les technologies de l'information.
- **[NetworkChuck](https://www.youtube.com/c/NetworkChuck/videos)** : une chaîne YouTube proposant des tutoriels et des astuces pour les professionnels de l'informatique.

Ces ressources m'ont été très utiles pour trouver des idées et des solutions pour mon propre homelab.

Dans mon métier en entreprise, cette expérience m'a permis de consolider mes compétences et d'acquérir de nouvelles connaissances. J'ai pu mettre en place des architectures similaires en entreprise en utilisant des outils tels que Docker et Gitlab.

J'ai continué à utiliser mon homelab pour tester de nouvelles configurations et pour mener des projets personnels. J'ai également pu travailler à distance sans aucun souci, grâce aux différents outils de gestion à distance mis en place.

En ce qui concerne les projets futurs en lien avec mon homelab, j'ai identifié plusieurs axes de travail. Tout d'abord, j'aimerais approfondir mes connaissances en matière de virtualisation en explorant d'autres solutions comme Kubernetes ou Docker Swarm. Je souhaite également intégrer plus de services à mon homelab tels que la surveillance de réseau et la gestion des logs. De plus, je voudrais étudier la mise en place de solutions de sécurité, telles que des pare-feu et des VPN, pour renforcer la sécurité de mon infrastructure. Enfin, j'aimerais me concentrer sur l'automatisation de mes déploiements, en utilisant des outils tels que Ansible et Terraform pour simplifier la gestion de mes services. Tout cela devrait me permettre d'approfondir mes compétences en matière d'infrastructure informatique et de consolider mon homelab en tant qu'environnement de test et de développement professionnel.

Je pense que ce projet a eu une réelle valeur ajoutée en termes de gestion de projet et de mise en place de l'infrastructure dans mon apprentissage de l'informatique. J'ai également appris à travailler de manière autonome et à résoudre les problèmes qui se sont présentés. Les enseignements que je retire de cette expérience sont que la mise en place d'une infrastructure homelab est un excellent moyen d'apprendre et de consolider ses compétences en informatique, et que cela peut également être très utile pour son travail en entreprise. Enfin, il est important de bien définir ses besoins avant de se lancer dans un tel projet, afin d'optimiser son temps et ses ressources.