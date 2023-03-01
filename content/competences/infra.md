---
title: 'Infrastructure informatiques'
level: "autonome"
tags: 'technique'
picPath: comp/infra.jpg
related:
  - /realisations/creation_si
  - /realisations/homelab
  - /realisations/amelioration_si
description: "Dans un monde en constante évolution, il est crucial de concevoir des infrastructures informatiques évolutives pour répondre aux besoins spécifiques de chaque service d'une entreprise et être compétitif. Ainsi, cette compétence est essentielle pour assurer la durabilité et la performance des systèmes informatiques."
---

# Contexte

*L'infrastructure informatique* regroupe l'ensemble des équipements matériels (postes de travail, serveurs, routeurs, périphériques...) et des logiciels (ERP, CRM, messagerie, réseau...) d'une entreprise.

Elle représente l'agencement entre : les différentes applications, le service de stockage et le réseau d'entreprise. Tous ces éléments, qui sont connectés entre eux, forment l'infrastructure informatique. On parle également de Système Informatique (SI) ou d'architecture informatique.

Le rôle de l'architecture informatique est de donner aux collaborateurs et collaboratrices d'une entreprise un accès aisé, continu et sécurisé aux applications et aux données de l'entreprise.

Les équipements qui la composent supposent une installation et une maintenance bien gérées pour que l'entreprise puisse les exploiter au mieux.

D'un point de vue pratique, l'infrastructure informatique peut être hébergée :

- Physiquement, dans les locaux de l'entreprise : on parle alors de solution *On-premise ou auto-hébergée.*
- À distance, dans un *data center / cloud, c'est au prestataire de s'assurer du bon fonctionnement du matériel.*

Dans le monde professionnel, avoir une bonne infrastructure informatique est essentiel à une entreprise. Cela permettra par la suite d'avoir une utilisation cohérente des logiciels / outils métiers (logiciels de gestion de stocks, de comptabilité, partage de fichiers,...).

Une infrastructure informatique est unique pour chaque entreprise, les besoins sont différents d'une société à l'autre. Le but est de répondre aux besoins des utilisateurs avec l'outil informatique, tout en ayant une possibilité d'évolution.

# Les expériences

Ma première expérience remonte à mon premier stage en informatique dans la start-up Cocoricom. Lorsque je suis arrivé le premier jour, l’entreprise venait d'emménager dans ses locaux. Il y avait un ordinateur personnel et peu de câblage dans les bureaux. Le but de mon stage était de trouver une solution pour intégrer l’informatique dans l’entreprise, j’avais carte blanche. Avant de commencer la technique, la première chose était de recueillir les besoins. Cocoricom est une agence de communication/imprimerie avec 5 employés.

Dans l’imprimerie, les fichiers d’impression et de design sont assez volumineux (un projet unique pouvait facilement atteindre une centaine de gigaoctets). Il fallait trouver de nombreuses solutions pour répondre à cette problématique. Un exemple de chose que j’ai pu mettre en place était le système de partage de fichiers. J’ai réussi à mettre en place un partage de fichiers (SAMBA) sur un NAS Synology (système de stockage en réseau). Pour cela, j’ai dû trouver le bon modèle avec suffisamment d’espace de stockage (15 To de disque dur spécial NAS) et bien configuré (RAID 5).

À la fin de mon stage, j’ai réussi à mettre en place un SI répondant aux besoins de l’entreprise. Cela constitue une base dont je suis fier et que les gérants de l’entreprise peuvent améliorer selon leurs besoins.

[En savoir plus sur la création du SI de Cocoricom](/realisations/creation_si)

Fonroche Lighting est une PME de 200 salariés dont le produit unique est le lampadaire solaire autonome et connecté. J'ai passé 2 ans durant mon alternance à travailler dans le service Infrastructure de l'entreprise. La plupart des services sont auto-hébergés sur les serveurs présents dans les locaux.

L'infrastructure était déjà en place, cependant, elle était destinée à une cinquantaine de personnes en 2017. Le but de mes interventions était d'optimiser et de faire évoluer le SI. Il m'a également été demandé de revoir et d'optimiser le système de partage de fichiers. Cette fois-ci, le serveur de fichiers était virtualisé et tournait sur un Windows Serveur 2016 avec le service SMB. Ce genre de serveur n'était pas très optimisé et était assez lent pour les utilisateurs.

Après décision du RSI, j'ai migré la totalité des fichiers sur un NAS de la marque QNAP. Migrer 5 To de données sans couper les services a été assez long. Grâce à la commande Windows Robocopy que j'ai réussi à mettre en service (commande en arrière-plan), cela a pris 5 jours.


L'avantage des NAS par rapport à un serveur Windows 2016 est que le NAS ne sert que de serveur de fichiers, ce qui permet de répartir la charge de travail. La migration de ces fichiers était une tâche compliquée, car il ne fallait pas perdre de données importantes pour les utilisateurs. Les utilisateurs et le RSI sont satisfaits d'avoir un serveur de fichiers qui fonctionne bien maintenant. Je suis très fier de cette expérience, car toutes les améliorations et services que j'ai apportés sont directement utilisés et appréciés par les utilisateurs.
[En savoir plus sur l’amélioration du SI de Fonroche](/realisations/amelioration_si)

# Retours

L'architecture informatique est une compétence très vaste qui, à mon avis, est composée de qualités techniques mais aussi humaines (gestion des besoins, des budgets, adaptation).

Le but est de créer des solutions qui répondent aux besoins d'une entreprise, ce qui en fait une compétence très importante dans la vie d'un ingénieur en systèmes d'information - voire la plus importante - car l'objectif fondamental d'un ingénieur est de répondre au mieux à une problématique.

Je suis encore au tout début de ma carrière, donc la maîtrise de cette compétence se développera au fil du temps grâce à la pratique. J'ai pratiqué l'architecture d'un SI grâce à plusieurs expériences en entreprise et à la liberté que j'ai eue pour répondre aux missions.

Si je devais donner un conseil pour les années à venir, ce serait de ne jamais arrêter d'apprendre, d'expérimenter et d'être ouvert. Souvent, c'est en discutant avec les personnes de l'entreprise que je trouvais les meilleures solutions ou des idées pour me débloquer des situations bloquantes.

Mon prochain objectif est l'apprentissage du cloud. J'ai toujours travaillé avec des infrastructures dont les serveurs étaient en local ou dédiés chez des hébergeurs classiques. Le cloud est de plus en plus répandu dans l'informatique et offre de nombreux avantages (disponibilité, prix, puissance, évolutivité).

Pour m'aider à atteindre cet objectif, j'aimerais commencer par suivre une formation sur l'utilisation du cloud AWS d'Amazon, car c'est la plus généraliste et la plus reconnue. "[Architecting on AWS](https://aws.amazon.com/fr/training/classroom/architecting-on-aws/)" est une certification qui me permettrait d'acquérir les bases de l'architecture informatique dans le cloud.