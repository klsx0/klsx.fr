---
title: Infrastructures informatiques
description: Réalisation de l'infra.
level: autonome
tags: technique
related: 
 - /realisations/creation_si
 - /realisations/amelioration_si
 - /competences/gestion_de_projet
picPath: real/si_creation.jpg
---

# Contexte

*L’infrastructure informatique* regroupe l’ensemble des équipements matériels (postes de travail, serveurs, routeurs, périphériques…) et des logiciels (ERP, CRM, messagerie, réseau…) d’une entreprise.

Elle représente l’agencement entre : les différentes applications, le service de stockage et le réseau d’entreprise. Tous ces éléments, qui sont connectés entre eux, forment l’infrastructure informatique. On parle également de Système Informatique (SI) ou d’architecture informatique.

Le rôle de l’architecture informatique est de donner aux collaborateurs et aux collaboratrices d’une entreprise un accès aisé, continu et sécurisé aux applications et aux données de l’entreprise.

Les équipements qui la composent supposent une installation et une maintenance bien gérées pour que l’entreprise puisse les exploiter au mieux.

D’un point de vue pratique, l’infrastructure informatique peut être hébergée :

- Physiquement, dans les locaux de l’entreprise: on parle alors de solution *On-premise ou auto-hebergée.*
- À distance, dans un *data center / cloud, c’est au prestataire de s’assurer du bon fonctionnement du matériel.*

Dans le monde professionnel, avoir une bonne infrastructure informatique est essentiel à une entreprise. Cela permettra par la suite d’avoir une utilisation cohérente des logiciels / outils métiers (logiciels de gestion de stocks, de comptabilité, partage de fichiers,…).

Une infrastructure informatique est unique pour chaque entreprise, les besoins sont différents d’une société à l’autre. Le but est de répondre aux besoins des utilisateurs avec l’outil informatique,tout en ayant une possibilité d’évolution.

## Les expériences

Ma première expérience, remonte à mon premier stage en informatique dans la start-up Cocoricom.
Quand je suis arrivé le premier jour, l’entreprise venait d’avoir les locaux. Il y avait une box informatique de particulier et peu de câblage dans les bureaux.
Le but de mon stage était de trouver une solution pour intégrer l’informatique dans l’entreprise, j’avais carte blanche. Avant de commencer la technique, la première chose était de récolter les besoins. Cocoricom est une agence de communication / imprimerie avec 5 employés.

Dans l’imprimerie, les fichiers d’impressions et de design sont assez énormes (un projet unique pouvait faire une centaine de gigas facilement). Il fallait trouver de nombreuses solutions pour répondre à cette problématique. Un exemple de choses que j’ai pu mettre en place était le système de partage de fichiers.
J’ai réussi à monter un partage de fichiers (SAMBA) sur un NAS Synology (système de stockage en réseau).
Pour cela, j’ai dû trouver le bon modèle avec assez d’espace de stockage (15 TO de disque dur spécial NAS) et bien configuré (Raid 5).

À la fin de mon stage, j’ai réussi à mettre en place un SI répondant au besoin de l’entreprise.
Cela constitue une base dont je suis fier et dont les gérants de l’entreprise peuvent améliorer, suivants leurs besoins.

[En savoir plus sur la création du SI de Cocoricom](https://www.notion.so/Cr-ation-SI-Cocoricom-7488745c322f477f90abb98004c86bf3)

Fonroche Lighting est une PME de 200 salariés dont le produit unique est le lampadaire solaire autonome et connecté. J’ai passé 2 ans durant mon alternance à travailler dans le service Infrastructure de l’entreprise.
La plupart des services sont auto-hébergés sur les serveurs présents dans les locaux.

L’infrastructure était déjà présente, cependant, elle était destinée pour une cinquantaine de personnes en 2017. Le but de mes interventions était d’optimiser et de faire évoluer le SI. Il m’a été aussi demandé de revoir et optimiser le système de partage de fichier, cette fois le serveur de fichier était virtualisé et tournait sur un Windows Serveur 2016 avec le service SMB.
Ce genre de serveur n’était pas trop optimisé et était assez lent pour les utilisateurs.
Après décision par le RSI, j’ai migré la totalité des fichiers sur un NAS, mais cette fois de la marque QNAP. Migrer 5 To de données sans couper les services était assez long.
Grâce à la commande Windows Robocopy que j’ai réussi à mettre en service (commande en arrière-plan) cela aura pris 5 jours.

(mettre photo  script) 

L’avantage des NAS par rapport à un serveur Windows 2016, c’est que le NAS fait uniquement serveur de fichier, ce qui permet d’étaler la charge de travail.

Migrer ces fichiers, était une tâche compliquée, car il ne fallait pas par perdre de la donnée importante pour les utilisateurs. Les utilisateurs et le RSI sont contents d’avoir un serveur de fichier qui fonctionne bien maintenant. Je suis très fier de cette expérience, car toutes les améliorations/services apportés par mes soins sont directement utilisés et appréciés par les utilisateurs.
[En savoir plus sur l’amélioration du SI de Fonroche](https://www.notion.so/Am-lioration-SI-Fonroche-Lighting-ba1f2b634d394bd6b95b8e9c387b7e14)

## Retours

L’architecture informatique est une compétence qui est très vaste. Elle est pour moi composé de qualités techniques mais aussi humaines (gestion du besoin, gestion du budget, adaptation).

Le but est de créer des solutions qui répondent aux besoins d’une entreprise. Ce qui en fait une compétence très importante dans la vie d’un ingénieur en Système d’Information, voir la plus importante à mon goût, car le but essentiel d’un ingénieur est de répondre au mieux à une problématique.

Je suis encore au tout début de ma carrière donc la maîtrise de cette compétence se développera au fil du temps en pratiquant. Grâce aux plusieurs expériences en entreprises et à la liberté que j’ai eu pour répondre aux missions, je pense avoir pratiqué l’architecture d’un SI.

Si je dois donner un conseil pour les années à venir, c’est de ne jamais s’arrêter d’apprendre, d’expérimenter et d’être ouvert. Souvent, c’est en discutant avec les personnes de l’entreprise que je trouvais les meilleures solutions ou des idées pour me débloquer des situations bloquantes.

Mon prochain objectif est l’apprentissage du cloud. J’ai toujours expérimenté des infrastructures dont les serveurs sont en local ou dédiés chez des hébergeurs classiques. Le cloud est de plus en plus répandu dans l’informatique et à de nombreux avantages (disponibilité, prix, puissance, évolution).

Pour m’aider à atteindre cet objectif, j’aimerais commencer avec une formation sur l’utilisation du cloud AWS d’Amazon car étant la plus généraliste et certifiante.

“Architecting on AWS” est une certification qui me permettrait d’avoir les bases sur l’architecture informatique dans le cloud.