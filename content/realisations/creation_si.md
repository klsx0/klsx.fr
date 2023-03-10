---
title: Création du SI d'une start-up
picPath: real/cocoricom.jpg
related:
  - /competences/infra
  - /competences/adaptation
  - /competences/gestion_projet
description: "La création du SI d'une start-up est un processus complexe qui nécessite une réflexion approfondie sur les objectifs et les besoins de l'entreprise. Cette réalisation implique la conception et la mise en place de différents outils et systèmes informatiques qui permettront à la start-up de fonctionner efficacement et de se développer"
---


# Contexte


En 2021, j'ai effectué un stage dans la start-up Cocoricom, une jeune entreprise située dans l'Albret, un secteur très rural dans le sud du Lot-et-Garonne. Elle a pour ambition de répondre à toutes les problématiques rencontrées par les entreprises de ce secteur grâce à des méthodes modernes et numériques.

L'entreprise est constituée de trois pôles majeurs : l'imprimerie, la communication et le web.

Mon objectif principal lors de mon intervention dans l'entreprise était de concevoir de A à Z le système d'information (SI) de l'entreprise.

Pour en savoir plus sur le Système d’Information, [voir compétence Infrastructure IT.](/competences/infra)

Lorsque je suis arrivé dans l'entreprise, aucun réseau informatique ou téléphonique n'avait été installé, il a donc fallu tout mettre en place. L'objectif était d'avoir un Système Informatique (SI) adaptable (l'entreprise était vouée à évoluer très rapidement) et opérationnel le plus rapidement possible pour lancer l'entreprise.

Selon Wikipédia, "Le système d'information est un ensemble organisé de ressources qui permet de collecter, stocker, traiter et distribuer de l'information, en général grâce à un réseau d'ordinateurs".

Pour simplifier, le SI est une entité de l'entreprise qui permet d'échanger des informations entre les différents services. Les informations transmises peuvent être matérielles, immatérielles ou humaines.

En général, le SI est composé des sous-systèmes suivants :

- Infrastructure : serveurs, réseaux -> stockent l'information.
- Applications : progiciels (ERP, CRM), site web -> distribuent l'information.
- Utilisateurs : les collaborateurs -> utilisent l'information.
- Administration : gère les problèmes et paramètre l'accès aux informations.


Pour atteindre ces objectifs, j'ai été aidé du gérant de Cocoricom et d'un prestataire de la société IT block, spécialisé dans la création de Système d'Information pour les entreprises de toutes tailles.


# Mise en œuvre

Pour répondre au mieux à cette mission, voici les étapes que j’ai suivies.

## Étude de l’existant


Les locaux étaient déjà équipés de prises murales RJ45. N'ayant pas de plan sous la main ni de testeur de réseau, il m'a fallu identifier le réseau manuellement en branchant mon ordinateur sur chaque prise. Cette étape cruciale pour la création d'une documentation réseau m'a pris une bonne partie de l'après-midi, mais m'a permis d'avoir de bonnes bases pour l'installation.

Pendant les tests réseau, j'ai découvert que plusieurs prises murales RJ45 ne fonctionnaient pas et n'étaient pas reliées à la salle réseau.

En parallèle, j'ai commencé la cartographie du réseau avec un plan réseau simple permettant d'identifier rapidement une prise RJ45, ce qui est très utile notamment en cas de panne réseau. Pour la documentation du réseau, j'ai réutilisé les mêmes outils/techniques que j'ai pu apprendre lors de mon stage en immersion dans le SI d'Intech Agen en mars 2020.

## Architecture Réseau

En lien avec un technicien Coriolis (Fournisseur d'Accès Internet), j'ai dû mettre en place une ligne SDSL. J'ai appris à paramétrer un routeur Cisco. Les connaissances acquises lors des cours Cisco à INTECH m'ont été d'une grande aide pour la configuration. Cette ligne SDSL sera utilisée pour la téléphonie IP.

Une fois les lignes ADSL et SDSL configurées, il a fallu créer des prises RJ45 pour que chaque ordinateur fixe puisse se connecter au réseau en filaire. Une des phases qui a été longue lors de la création de ce réseau était de calculer la longueur de câble RJ45 nécessaire pour relier les différentes pièces de l'entreprise.

J'ai également installé le standard téléphonique. Cette installation a pris environ 2 heures et a permis d'économiser de l'argent à Cocoricom (pas besoin d'intervention d'un technicien sur place). Cela m'a permis d'apprendre comment mettre en place un Centrex IP sur une ligne SDSL.

Un Centrex IP est un système qui permet d'externaliser la gestion de la téléphonie vers un professionnel. Dans notre cas, il s'agit d'un boîtier à brancher à la fois sur une ligne ADSL et SDSL, qui permet de déléguer la gestion de nos services téléphoniques à Coriolis.

Ensuite, pour finaliser l'installation de ce Centrex IP, j'ai relié seul les téléphones sans fil (pour différents services) à la base.

## Infrastructure générale

Depuis le début, le stockage et l'échange de fichiers sont des fonctionnalités très importantes dans l'entreprise, surtout dans le milieu de l'imprimerie où les fichiers de création et d'impression sont très volumineux.

Pour stocker ces différents fichiers, je me suis dirigé vers un NAS (Network Attached Storage) de la marque Synology.

Grâce aux conseils et à l'expérience de la société IT Block, j'ai acquis les bonnes pratiques en matière de sauvegarde et de sécurité des données en entreprise.

J'ai notamment appris à créer un espace de stockage avec plusieurs volumes dédiés en fonction des services. J'ai aussi mis en place un RAID 5.
Il faut savoir qu'un RAID est une technologie logicielle ou matérielle qui permet de dupliquer des données sur plusieurs disques, ce qui a l'avantage d'amoindrir le risque de corruption des informations en cas de panne de disque dur.
Les NAS de la marque Synology sont des machines que j'ai toujours voulu avoir pour mon utilisation personnelle. J'ai été vraiment content de pouvoir travailler avec ce genre de matériel assez onéreux.


## Les applications


Une fois le matériel installé et configuré, j'ai mis en place plusieurs outils très utiles pour gérer les informations en entreprise :

- Un gestionnaire de mot de passe [Passbolt](https://www.passbolt.com/) : pour éviter de stocker les informations des salariés sur un carnet qui est facilement perdu.
- Office 365 : Tout le système de chat et d’e-mails de l’entreprise. [En savoir plus sur office365](/competences/microsoft).
- Les postes utilisateur : il a fallu configurer chaque poste informatique avec une méthodologie particulière et adaptée à chaque besoin.


## Organisation / Formation

J'ai commencé de zéro pour l'organisation au sein de Cocoricom. En collaboration avec la direction, j'ai travaillé à trouver une méthodologie de travail efficace. Pour m'aider dans cette mission, j'ai eu l'opportunité de bénéficier des conseils de Julien MACORIGH, un intervenant externe et développeur web, qui nous a fait part de son expérience en gestion de projet.

Pour la gestion de projet, les outils principaux étaient Trello et Microsoft Teams.

Enfin, pour chaque point, une documentation écrite et accessible à tous a été rédigée. La formation des utilisateurs est vraiment quelque chose de très important. Il est essentiel que chaque outil installé soit parfaitement compris et utilisé par tous les utilisateurs de l'entreprise.

# Mon retour d'expérience

En tant que stagiaire, j'ai eu l'opportunité de mettre en place un système d'information complet pour l'entreprise Cocoricom. L'objectif était de répondre à toutes les problématiques rencontrées par les entreprises de ce secteur grâce à des méthodes modernes et numériques. J'ai été aidé par le gérant de l'entreprise et par un prestataire, IT block, spécialisé dans la création de systèmes d'information pour les entreprises de toutes tailles.

En mettant en œuvre mes compétences techniques, j'ai réussi à mettre en place l'ensemble des éléments du système d'information : l'infrastructure, les applications, les utilisateurs et l'administration. J'ai également assuré la maintenance du SI en résolvant les problèmes et en effectuant les mises à jour nécessaires. Enfin, j'ai élaboré un plan de continuité d'activité et j'ai créé une documentation technique détaillée pour que le SI puisse être facilement géré et maintenu par la suite.

En réfléchissant à ce que j'aurais pu mieux faire, je pense que j'aurais pu être plus proactif dans la recherche de solutions aux problèmes rencontrés. Je me suis parfois un peu trop reposé sur le gérant de l'entreprise ou sur le prestataire, alors que j'aurais pu essayer de trouver des solutions de mon côté avant de solliciter de l'aide. Cela m'aurait permis de développer mon autonomie et ma capacité à résoudre des problèmes de manière autonome.

Ce projet a été pour moi une première expérience dans le monde de l'entreprise. J'ai pu mettre en pratique différentes compétences vues en cours, telles que le paramétrage de matériel Cisco et la sécurité informatique, mais aussi développer de nouvelles compétences humaines comme la communication et la formation d'utilisateurs.

Aujourd'hui, en tant qu'administrateur système et réseau avec 2 ans d'alternance derrière moi, j'ai acquis de nouvelles compétences et de l'expérience qui me permettent de gérer efficacement les systèmes d'information de manière autonome. Je suis également devenu plus proactif dans la recherche de solutions aux problèmes rencontrés, ce qui me permet de m'adapter rapidement aux différentes situations. Cette expérience de stage m'a beaucoup apporté et m'a permis de développer mes compétences en matière de gestion de systèmes d'information, ce qui est un atout précieux dans mon métier actuel.

[Pour voir comment améliorer un système d'information, consultez l'exemple de Fonroche Lighting](/realisation/amelioration_si)