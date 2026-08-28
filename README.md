# Suivi Formation — page hébergée

Ce dépôt ne sert qu'à une chose : héberger la page de l'outil **Suivi Formation & Sécurité
Alimentaire**, pour que le navigateur puisse proposer de l'installer sur le Bureau. Cette
proposition exige que la page soit servie en HTTPS — un fichier ouvert en double-clic n'y a pas
droit.

Le développement se fait ailleurs. Ce qui est ici est une copie construite, pas une source.

## Ce que contient le dépôt

| Fichier | À quoi ça sert |
| --- | --- |
| `index.html` | L'outil, en un seul fichier. Tout est embarqué. |
| `manifest.json` | Décrit l'application au navigateur (nom, icônes, couleurs) |
| `sw.js` | Service worker minimal, exigé par Chrome pour autoriser l'installation |
| `icons/` | Les icônes de l'application, de 48 à 512 px |

## Confidentialité

**Aucune donnée d'équipe ne transite par ce site.** L'export Excel est lu directement dans le
navigateur, sur la machine de celui qui l'ouvre. Le site ne sert que la page ; il ne reçoit rien,
n'enregistre rien, et n'a pas de serveur applicatif derrière lui.

La page porte un `noindex` : elle n'est pas destinée à être trouvée par les moteurs de recherche.

---

Outil conçu et développé par **Guillaume Van Maele** — McDonald's Tournai.

© 2026 Guillaume Van Maele. Usage interne. Toute copie, redistribution ou modification sans
autorisation écrite de l'auteur est interdite.
