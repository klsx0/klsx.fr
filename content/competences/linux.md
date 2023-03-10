---
title: 'Linux'
level: "Expert"
tags: 'technique'
picPath: comp/linux.jpg
related:
  - /realisations/amelioration_si
  - /realisations/homelab
description: "Découvrez comment j'ai développé mes compétences en Linux pour résoudre des problèmes informatiques complexes, automatiser des tâches et optimiser mon quotidien professionnel."
---

# Contexte

Linux n'est pas un système d'exploitation, il s'agit uniquement d'un noyau (ou Kernel en anglais) créé en 1991 par Linus Torvald.

Il permet de faire le relais entre le matériel physique de l'ordinateur et la partie logicielle du système.
Le code de ce noyau est accessible librement en lecture et à la modification, ce qui a notamment permis son ascension rapide. Un système d'exploitation basé sur le noyau Linux est appelé une distribution. Il en existe des milliers, gratuites, libres ou payantes.

Pour découvrir de nouvelles distributions Linux : [DistroWatch.com](https://distrowatch.com/)

Dans le monde professionnel, Windows reste toujours le plus utilisé pour les ordinateurs de bureau et les serveurs (70 % du marché). Cependant, les systèmes basés sur Linux sont très utilisés sur les services Cloud et l'embarqué (environ la moitié) [(source)](https://www.redhat.com/en/resources/state-of-linux-in-public-cloud-for-enterprises).
Depuis le début de mon apprentissage en informatique, j'utilise des distributions Linux.
J'ai eu l'occasion d'utiliser cette compétence à la fois dans un contexte professionnel et personnel.

Dans l'entreprise Fonroche Lighting, où j'ai effectué une alternance, environ 75 % des services étaient déployés sur des environnements Linux. Ce fut pour moi l'opportunité d'utiliser cette compétence quotidiennement dans un contexte professionnel.

# Mes expériences

Dans ce contexte, j'ai par exemple migré un serveur Debian 8 (2018) vers un Debian 11 (2021), tout en le gardant opérationnel car il était utilisé en production. Faire une mise à jour dans ce contexte n'était pas une chose aisée, car de nombreux paquets (= services) étaient obsolètes, et la moindre erreur pouvait corrompre les applications installées.

Afin de mettre à jour simplement, j'ai créé un script Linux me permettant d'échelonner le passage des trois versions. Ce script a simplement mis à jour les paquets un par un et versions par versions, tout en s'assurant qu'il soit fonctionnel au fur et à mesure.

Sur une vingtaine de paquets, deux paquets étaient fonctionnels mais avaient perdu toutes leurs configurations. Il a fallu reconfigurer ces paramètres à la main. Pour éviter cela, mon script aurait dû sauvegarder et copier les configurations des paquets à mettre à jour.

Grâce à ce script, nous avons gagné une journée sur la migration des versions des services utilisés. Sans compétences en Linux, je n'aurais pas pu réaliser ce script. La création de script Linux fait également partie de la compétence [Automatisation](/competences/automatisation).

*[En savoir plus sur mon utilisation de Linux pour l'amélioration du SI de l'entreprise Fonroche Lighting](/realisations/amelioration_si/)*

Mon projet ["HomeLab"](/realisations/homelab/) m'a permis de développer énormément cette compétence. Il s'agit d'un serveur informatique physique installé à la maison, basé uniquement sur des environnements Linux. Cet environnement a été utilisé comme socle pour apprendre différentes compétences (Infra, Container, Automatisation).

Avant d'avoir un hyperviseur de type 1 (un système de virtualisation également sous Linux) dans le cadre du projet Homelab, la machine qui me permettait d'avoir un environnement pour apprendre et expérimenter Linux était sous la distribution Ubuntu. J'ai expérimenté de nombreuses distributions, de plusieurs bases différentes (ArchLinux, Fedora, Debian), mais je suis resté sur Ubuntu. Pour un usage serveur, des distributions légères et maintenues à jour sont souvent privilégiées (Debian, openSUSE).

Cependant, Ubuntu est basé sur Debian et a l'avantage d'avoir une version serveur allégée mais avec beaucoup de paquets préinstallés par défaut. Le principal avantage d'avoir un serveur Ubuntu plutôt qu'un serveur Debian est d'avoir toutes les dernières versions des services, ce qui est très utile lorsqu'on apprend une technologie. Ubuntu propose nativement "cloud-init", un service permettant la configuration automatique du système. Finie la corvée de l'installation où il faut paramétrer manuellement le système d'exploitation. C'est un outil dont je me sers souvent dès que j'ai besoin de configurer très rapidement un système. Il me suffit de fournir les informations propres à la machine dans un fichier et l’outil s'occupe de l'installation. Cloud-Init est très utilisé dans le monde professionnel lors de l'approvisionnement de machines virtuelles dans le cloud.

L'utilisation d'Ubuntu m'a alors permis d'en apprendre un peu sur les méthodes "automatiques" que les professionnels ou les data centers utilisent pour déployer rapidement des machines sous Linux.

[En savoir plus sur mon Homelab](/realisations/homelab/).

# Autocritique

Depuis le début de mon apprentissage en informatique, j'utilise Linux. À l'âge de 15 ans, j'ai commencé à créer des machines virtuelles pour tester différentes distributions Linux. Au début, j'utilisais exclusivement l'interface graphique, puis petit à petit, je suis passé en mode ligne de commande.

Pour progresser, j'ai regardé beaucoup de vidéos YouTube sur Linux, souvent en anglais. Puis, je me suis intéressé à la communauté Linux et Open source.

Actuellement, je suis très actif dans la veille technologique sur [Reddit](https://www.reddit.com/r/linux/).

Voici quelques liens que j'apprécie :

- [Documentation de la distribution Ubuntu](https://doc.ubuntu-fr.org/)
- [DistroTube (youtube, en anglais)](https://www.youtube.com/c/DistroTube)
- [LinuxExperiment (youtube en anglais)](https://www.youtube.com/c/TheLinuxExperiment/videos)
- [Reddit Linux](https://www.reddit.com/r/linux/)

Je suis vraiment passionné par la technologie et j'ai voulu transmettre cette passion. Avant de rejoindre l'école In tech du Groupe-Aen, j'ai animé plusieurs sessions de découverte de Linux et d'installation de la distribution Arch-Linux, connue pour être difficile à installer.

Pour apprendre Linux, je n'ai pas opté pour la méthode la plus simple et la plus rapide, j'ai plutôt choisi une longue phase d'apprentissage. Cependant, cela m'a permis de prendre le temps et de développer une véritable passion pour ce sujet.

# Conclusion

À travers de nombreux projets, notamment la gestion de serveurs Linux dans un cadre professionnel ou la réalisation d’un environnement d’apprentissage, je pense avoir acquis un bon niveau dans cette compétence.

De plus, elle constitue une base solide pour d’autres technologies que j’affectionne particulièrement, telles que la [conteneurisation](/competences/containerisation), le CI/CD ou la [sécurité informatique](/competences/secu_info). Apprendre Linux en premier m’a été très utile car cela m’a permis de les appréhender plus rapidement.

En regardant beaucoup de vidéos américaines sur le sujet, j’ai découvert la qualification [CompTIA Linux+](https://www.comptia.org/certifications/linux), très demandée aux États-Unis et en Europe. Elle est vraiment intéressante et permet d’avoir un niveau reconnu très satisfaisant. Mon prochain objectif est donc de passer cette certification pour être reconnu dans cette technologie.

Mon utilisation de Linux est de plus en plus tournée vers l’approche "devops", qui consiste à automatiser les déploiements de services. Pour ce faire, j’ai commencé à apprendre à écrire des scripts (Bash, Python) et à utiliser la conteneurisation.