---
title: Création du SI d'une startup
description: Création du SI d'une startup
related: 
 - /competences/linux
 - /competences/comunication
 - /competences/gestion_de_projet
 - /competences/infra
picPath: real/si_creation.jpg
---
# Contexte

En 2021, j’ai effectué un stage dans la startup Cocoricom.
Jeune startup située dans l’Albret, secteur très rural dans le Sud du Lot-et-Garonne.  Elle a pour ambition de répondre à toutes les problématiques que rencontrent les entreprises de ce secteur par le biais de méthodes modernes et numériques.

L’entreprise est constituée de 3 pôles majeurs : Imprimerie / Communication  / Web  

L’objectif principal de mon intervention dans l’entreprise était de concevoir de A-Z le système d’information (SI) de l’entreprise.

<aside>
💡 Pour en savoir plus sur le Système d’Information, [voir compétence Infrastructure IT.](https://www.notion.so/Infrastructures-informatiques-e5c97e63e2d641f582cf291a025c4bb4)

</aside>

Quand je suis arrivé dans l’entreprise, le réseau informatique ou téléphonique n’était pas installé, il a fallu tout penser. Le but était d’avoir un Système Informatique (SI) qui soit adaptable (l’entreprise était vouée à évoluer très rapidement ) et opérationnel le plus rapidement possible, pour pouvoir lancer l’entreprise.

> Selon Wikipédia *« Le système d'information est un ensemble organisé de ressources qui permet de collecter, stocker, traiter et distribuer de l'information, en général grâce à un réseau
d'ordinateurs ».*
> 

Si l’on doit simplifier, le SI est une entité de l’entreprise, permettant d’échanger des informations entre les différents services.
Les informations transmises peuvent être matérielles, immatérielles ou bien humaines.

En général, le SI est composé des sous-systèmes suivants :

- L’infrastructure : serveurs, réseaux -> stockent l’information.
- Les applications : progiciels (ERP, CRM), site web -> distribuent l’information.
- Les utilisateurs : les collaborateurs -> utilisent l’information.
- L’administration : gère les problèmes et paramètre l’accès aux informations.

Pour atteindre ces objectifs, j’étais aidé du gérant de Cocoricom et d’un prestataire de la société 
[IT block](https://it-solution.fr/IT-BLOCK/index.html) spécialisé dans la création de Système d’Information pour les entreprises de toutes tailles.

# Mise en œuvre

Pour répondre au mieux à cette mission, voici les étapes que j’ai suivi.

# Etude de l’existant

Les locaux étaient déjà dotés de fiches murales rj45, n’ayant pas de plan sous la main ou de testeur de réseau, il m’a fallu identifier le réseau à la main en branchant mon ordinateur sur chaque prise. Cette étape cruciale pour la création d’une documentation réseau m’a pris une bonne partie de l’après-midi, mais m’a permis d’avoir une de bonnes bases pour l’installation.
Pendant les tests réseau, j’ai découvert que plusieurs fiches murales rj45 ne fonctionnaient pas et n’étaient pas reliées à la salle réseau.
En parallèle, j’ai commencé la cartographie du réseau, avec un plan réseau simple permettant d’identifier rapidement une prise rj45, ce qui est très utile notamment en cas de panne réseau. Pour la documentation du réseau, j’ai réutilisé les mêmes outils/techniques que j’ai pu apprendre lors de mon stage en immersion dans le SI d’Intech Agen en mars 2020.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ed9b8d1-2d45-432a-a42b-83927954f3b9/Untitled.png)

# Architecture Réseau

En lien avec un technicien Coriolis (Fournisseur Accès Internet), j’ai dû mettre en place une ligne SDSL, j’ai appris à paramétrer un routeur Cisco. Les connaissances apprises lors des cours Cisco à INTECH m’ont été d’une grande aide pour la configuration. Cette ligne SDSL sera pour la téléphonie IP.
Les lignes ADSL et SDSL configurées, il a fallu créer des prises rj45 pour que chaque ordinateur fixe puisse se connecter au réseau en filaire. Une des phases qui était longue lors de la création de ce réseau était de calculer la longueur de câble rj45 pour relier les différentes pièces de
l’entreprise.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb9b6ac5-abd5-4a39-9e37-3814016470db/Untitled.png)

J'ai aussi installé le standard téléphonique. Cette installation a pris environ 2 h, et a permis d’économiser de l’argent à Cocoricom (intervention d'un technicien sur place). Cela m'a permis d'apprendre la mise en place d'un Centrex IP sur une ligne SDSL.
Un Centrex IP est un système qui permet d’externaliser la gestion de la téléphonie vers un
professionnel. Dans notre cas il s’agit d’un boitier à brancher à la fois sur une ligne ADSL et
SDSL et qui permet de déléguer la gestion de nos services téléphoniques à Coriolis.
Ensuite pour finaliser l’installation de ce Centrex IP, j’ai relié seul les téléphones sans fil (différents services) à la base.

# Infrastructure générale

Depuis le début, le stockage et l’échange de fichiers sont des fonctionnalités très importantes dans l’entreprise, surtout dans le milieu de l’imprimerie où les fichiers de création et
d’impression, sont très volumineux.

Pour stocker ces différents ficher, je me suis  dirigé vers un NAS (Network Attached System) de la marque Synology. 

Grâce aux conseils et à l’expérience de la société IT Block j’ai eu les bonnes pratiques sur la
sauvegarde et sur la sécurité des données en entreprise.

J’ai notamment appris à créer un espace de stockage avec plusieurs volumes dédiés en fonction des services. J’ai aussi mis en place un Raid5. 
Il faut savoir qu’un raid est une technologie logicielle ou matérielle qui permet de dupliquer
de la donnée sur plusieurs disques, cela à l’avantage d’amoindrir le risque de corruption des
informations à cause d’une panne de disque dur.
Les NAS de la marque Synology sont des machines que j’ai toujours voulu avoir pour mon
utilisation personnelle, j’ai vraiment été content de pouvoir travailler avec ce genre de
matériel assez onéreux.

# Les applications

Une fois le matériel installé et configuré j’ai mis en place plusieurs outils très utiles pour gérer les informations en entreprise.

Un gestionnaire de mot de passe (Passbolt) : pour éviter de stocker les informations des salariés sur un carnet qui est facilement perdu.

Office 365 : Tout le système de chat et d’e-mails de l’entreprise. [En savoir plus sur office365](https://www.notion.so/L-cosyst-me-Microsoft-a815e52abb854701b4a94571db3c2581)

Les postes utilisateur :  il a fallu configurer chaque poste informatique avec une méthodologie particulière et adaptée à chaque besoin.

# L’organisation / formation

Je suis parti de zéro pour l’organisation au sein de Cocoricom.
En lien avec la direction, j’ai travaillé pour trouver une méthodologie de
travail efficace.
Pour m’aider à cette mission j’ai eu l’opportunité d’avoir les conseils de Julien MACORIGH, intervenant externe et développeur web, qui nous a fait part de son expérience en gestion de projet.

Pour la gestion de projet Trello et Microsoft Teams étaient les outils phares.

Enfin, pour chaque point, une documentation écrite et accessible par tout le monde a été rédigée. La formation utilisateur est vraiment quelque chose de très important. Il fallait que chaque outil installé, soit totalement compris et utilisé par tous les utilisateurs de l’entreprise.

# Mon retour sur expérience

En tant que stagiaire, j'ai eu l'opportunité de mettre en place un système d'information complet pour l'entreprise Cocoricom, qui avait pour ambition de répondre à toutes les problématiques rencontrées par les entreprises de son secteur grâce à des méthodes modernes et numériques. J'ai été aidé par le gérant de l'entreprise et par un prestataire, IT block, spécialisé dans la création de systèmes d'information pour les entreprises de toutes tailles.

En mettant en œuvre mes compétences techniques, j'ai réussi à mettre en place l'ensemble des éléments du système d'information, tels que l'infrastructure, les applications, les utilisateurs et l'administration. J'ai également assuré la maintenance du SI en résolvant les problèmes et en effectuant les mises à jour nécessaires. Enfin, j'ai élaboré un plan de continuité d'activité et j'ai créé une documentation technique détaillée pour que le SI puisse être facilement géré et maintenu par la suite.

En réfléchissant à ce que j'aurais pu mieux faire, je pense que j'aurais pu être plus proactif dans la recherche de solutions aux problèmes rencontrés. Je me suis parfois un peu trop reposé sur le gérant de l'entreprise ou sur le prestataire, alors que j'aurais pu essayer de trouver des solutions de mon côté avant de solliciter de l'aide. Cela m'aurait permis de développer mon autonomie et ma capacité à résoudre des problèmes de manière autonome.

Aujourd'hui, en tant qu'administrateur système et réseau avec 2 ans d'alternance derrière moi, j'ai acquis de nouvelles compétences et de l'expérience qui me permettent de gérer efficacement les systèmes d'information de manière autonome. Je suis également devenu plus proactif dans la recherche de solutions aux problèmes rencontrés, ce qui me permet de m'adapter rapidement aux différentes situations. Cette expérience de stage m'a beaucoup apporté et m'a permis de développer mes compétences en matière de gestion de systèmes d'information, ce qui est un atout précieux dans mon métier actuel.

<aside>
💡 Voir amélioration d’un SI, l[e cas Fonroche Lighting](https://www.notion.so/Am-lioration-SI-Fonroche-Lighting-ba1f2b634d394bd6b95b8e9c387b7e14)

</aside>

Ce projet fut pour moi une première expérience dans le monde de l’entreprise. J’ai pu pratiquer différentes compétences vu en cours (paramétrage de matériel Cisco, [sécurité informatique](https://www.notion.so/S-curit-Informatique-d79e2d06afb849ed8f491bc8530a45fc),) mais aussi de nouvelles compétences humaines : [Communication](https://www.notion.so/Gestion-de-projet-29f59f02ca954a8da1d0e60c1d0ef762), [formation utilisateur](https://www.notion.so/Cr-ation-de-formation-a1282fe6e098444181dc80e8a069f300).