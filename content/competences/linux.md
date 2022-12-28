---
title: 'Linux'
level: "Expert"
tags: 'technique'
picPath: comp/linux.jpg
related:
  - /realisations/amelioration_si
  - /competences/scripting
  - /competences/containerisation
  - /competences/securite_info
description: "Linux <3"
---
# Contexte

Linux n’est pas un système d’exploitation, il s’agit uniquement d’un noyau (ou Kernel en anglais) crée en 1991 par Linus Torvald.

Il permet de faire le relais entre le matériel physique de l’ordinateur et la
partie logiciel du système.Le code de ce noyau est accessible librement en lecture et à la modification ce qui a notamment permis son ascension rapide.Un système d’exploitation basé sur le noyau Linux est appelé une distribution,
il en existe des milliers, gratuites, libres, ou payantes.

Pour découvrir de nouvelles distribution linux : [DistroWatch.com](https://distrowatch.com/)

Dans le monde professionnel, Windows reste toujours le plus
utilisé pour les ordinateurs de bureaux et les serveurs (70% du marché).
Cependant les systèmes basés sur Linux sont très utilisés sur les services
Cloud et l’embarqué [(environ 90%)](https://frameboxxindore.com/fr/android/your-question-what-percentage-of-cloud-workloads-run-on-linux.html).
Depuis le début de mon apprentissage en informatique, j'utilise des distributions Linux. 
J'ai eu l’occasion d'utiliser cette compétence à la fois dans un contexte professionnel et personnel.

Dans l'entreprise [Fonroche Lighting](notion://www.notion.so/b4e23e4f437c46a9b65eb84c96b0d6f5?v=cd30a11b9e8d41a2bb579b4df8137324&p=80a8db42db714a629a4ea7c837503b26), où j'ai fait une alternance, environ 75 % des services étaient déployés sur des environnements Linux. Ce fut pour moi l’opportunité d'utiliser cette compétence quotidiennement dans un contexte professionnel.

# Mes expériences

Dans ce contexte, j'ai par exemple migré un serveur Debian 8 ( 2018) vers un Debian 11 (2021), tout en le gardant opérationnel car utilisé en production. Faire une mise à jours dans se contexte n'était pas une chose aisée, car de nombreux paquets (= services) étaient obsolètes, et la moindre erreur, pouvait corrompre les applications installées.
Afin de mettre à jours simplement, j’ai créé un script Linux me permettant d’échelonner le passage des trois versions. Ce script à tout simplement mis à jours les paquets un par un et versions par versions, tout en s’assurant qu’il soit fonctionnel au fur et à mesure.
Sur une vingtaine de paquets, deux paquets étaient fonctionnels mais avaient perdus toutes leurs configurations. Il a fallu reconfigurer ces paramètres à la main. Pour éviter ça,  mon script aurait du sauvegarder et copier les configurations des paquets à mettre à jours.
Grâce à ce script nous avons gagné une journée sur la migrations des versions des services utilisés.
Sans des compétences en Linux je n’aurais pas pu réaliser ce script.
La création de script Linux est aussi une partie de la compétence [Automatisation](https://www.notion.so/Scripting-616aec03343947b198709db5d5824477).

*[En savoir plus sur mon utilisation de Linux pour l’amélioration du SI  de l’entreprise Fonroche Lighting](https://www.notion.so/Am-lioration-SI-Fonroche-Lighting-ba1f2b634d394bd6b95b8e9c387b7e14)*

Mon projet ["HomeLab"](notion://www.notion.so/b4e23e4f437c46a9b65eb84c96b0d6f5?v=cd30a11b9e8d41a2bb579b4df8137324&p=80a8db42db714a629a4ea7c837503b26) m'a permis de développer énormément cette compétence. Il s'agit d'un serveur informatique physique installé à la maison, basé uniquement sur des environnements Linux. Cet environnement a été utilisé comme socle pour apprendre différentes compétences, ([Infra](notion://www.notion.so/b4e23e4f437c46a9b65eb84c96b0d6f5?v=cd30a11b9e8d41a2bb579b4df8137324&p=80a8db42db714a629a4ea7c837503b26), [Container](notion://www.notion.so/b4e23e4f437c46a9b65eb84c96b0d6f5?v=cd30a11b9e8d41a2bb579b4df8137324&p=80a8db42db714a629a4ea7c837503b26), [Automatisation](notion://www.notion.so/b4e23e4f437c46a9b65eb84c96b0d6f5?v=cd30a11b9e8d41a2bb579b4df8137324&p=80a8db42db714a629a4ea7c837503b26)).
Avant d’avoir un hyperviseur de type 1 (un système de virtualisation aussi sous linux) au sein du projet Homelab, la machine qui me permettrai d’avoir un environnement pour apprendre expérimenter Linux était sous la distribution Ubuntu. J’ai expérimenté beaucoup de distributions, de plusieurs base différentes (ArchLinux, Fedora, Debian) mais je suis restés sur Ubuntu. Pour un usage serveur des distributions légères et maintenus à jours sont souvent favorisées (Debian, openSUSE). Cependant Ubuntu est basé sur Debian et a l’avantage d’avoir une version serveur allégée mais avec beaucoup de paquets préinstallés par défaut. Le principal avantage d’avoir un Ubuntu Serveur plutôt qu’un Debian est d’avoir les toutes les dernières versions des services, ce qui est très utile quand on est en apprentissage d’une technologie.
Ubuntu propose nativement “cloud-init”, un service permettant la configuration automatique du système. Finis la corvée de l’installation où il faut manuellement paramétrer le système d’exploitation. C’est un outil dont je me sert souvent  dès que j’ai besoin de configurer très rapidement un système, il me suffit de fournir les informations propres à la machine dans un fichier et cloud-init s’occupe de l’installation. Cloud-Init est très utilisé dans le monde professionnel lors de l’approvisionnement de machine virtuelles dans le cloud.
L’utilisation d’Ubuntu m’a alors permis d’en apprendre un peu sur les manières “automatiques” que les professionnels ou datacenter utilise pour déployer rapidement des machines sous Linux.

[En savoir plus sur mon HomeLab](https://www.notion.so/HomeLab-1be8fb65829d43deb041ea5459b05f94).

# Autocritique

J'utilise Linux depuis le début de mon apprentissage en informatique. Vers mes 15 ans j’ai commencé à créer des machines virtuelles pour tester des distributions Linux. Au début, je naviguais uniquement avec l’interface graphique, puis petit à petit, je suis passé totalement en ligne de commande.

Pour progresser, je regardais au début beaucoup des vidéos YouTube sur Linux, souvent en Anglais.
Puis j’ai commencé à m’intéresser à la communauté Linux et Open source.

Actuellement j’effectue beaucoup de veille technologique sur [Reddit](https://www.reddit.com/r/linux/).

Voici quelques liens que j’affectionne :

- [Documentation de la distribution Ubuntu](https://doc.ubuntu-fr.org/)
- [DistroTube (youtube, en anglais)](https://www.youtube.com/c/DistroTube)
- [LinuxExperiment (youtube en anglais)](https://www.youtube.com/c/TheLinuxExperiment/videos)
- [Reddit Linux](https://www.reddit.com/r/linux/)

Vraiment passionné par la technologie que j’ai voulu transmettre cette passion. Avant de rejoindre l’école In tech du Groupe-Aen, j’ai animé plusieurs sessions de découverte de Linux, et d’installation de la distribution Arch-Linux (connue pour être compliquée à installer).

Pour apprendre Linux je n’ai pas opté pour la manière la plus simple et la plus rapide, je suis passé par une longue phase d’apprentissage, cependant, j’ai pu prendre le temps et voir naitre une vraie passion pour ce sujet.

# Conclusion

A travers de nombreux projets, notamment la gestion de serveurs Linux dans un cadre professionnel ou la réalisation d’un environnement d’apprentissage, je pense avoir un bon niveau dans cette compétence.

De plus elle constitue un socle de base pour d’autres technologies que j’affectionne particulièrement comme la [Containerisation](https://www.notion.so/Containerisation-6cb3120167674870ab47a5a80285886a), [Ci/Cd](https://www.notion.so/Scripting-616aec03343947b198709db5d5824477) ou la [Sécurité informatique](https://www.notion.so/S-curit-Informatique-d79e2d06afb849ed8f491bc8530a45fc), apprendre Linux en premier m’a alors été vraiment utile car elle m’a permit de les appréhender plus rapidement.

En regardant beaucoup de vidéo américaine sur le sujet, j’ai découvert la  qualification [CompTIA Linux+](https://www.comptia.org/certifications/linux)  qui est très demandée aux Etats-Unis et en Europe.  Elle est vraiment intéressante et permet d’avoir un niveau reconnu très satisfaisant. 
Passer cette certification est mon prochain objectif afin d’être reconnu dans cette technologie.

Mon utilisation de Linux et de plus en plus tournée vers l’approche “devops”, qui est une manière d’automatiser les déploiements de services. Pour ce faire j’ai ensuite commencer à apprendre d’[écrire des scripts (Bash, Python)](https://www.notion.so/Scripting-616aec03343947b198709db5d5824477) et utiliser la [containerisation](https://www.notion.so/Containerisation-6cb3120167674870ab47a5a80285886a).