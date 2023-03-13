<img src="src/Node.js_logo.svg.png" width=50% height=50%>

# Doc de JS la plus complète :

https://developer.mozilla.org/fr/docs/Web/JavaScript

# Lexique

- Camel case = ecrireCommeÇa
- Pascal case = EcrireCommeÇa

# Raccourci

- « dir chemin » pour afficher le contenu d’un dossier
- « cd chemin » pour se déplacer dans un dossier

# Commande

- pour les commentaires en JS : // ou /* */
- ``...variable`` éclate le contenu de la variable

## Sur les Strings

- ``.toString()`` transforme le type d'une variable en texte
- ``.toLowerCase()`` pour mettre la string en minuscule
- ``.toUpperCase()`` pour mettre en majuscule
- ``.slice(x, y)`` pour afficher seulement les lettres entre les index "x" et "y-1"
- ``.indexOf('texte')`` cherche la dernière occurence du texte dans la string

## Sur les tableaux

- ``.push(x)`` ajoute un élément dans le tableau et renvoie la nouvelle longueur de ce dernier
- ``.lenght`` renvoie la longueur d'un tableau
- ``.splice(x, y)`` Supprime y éléments à partir de l'index x et renvoie ces éléments qui ont été supprimé
- ``.split('string')`` Éclate une chaîne en fonction du paramètre (mettre '' éclate toutes les lettres une par une)
- ``.includes(x)`` Vérifie si la valeur mise en argument est présente dans le tableau
- ``...tableau`` éclate les valeurs du tableau (peut aussi s'utiliser avec un objet)
- ``.map()`` Crée un nouveau tableau avec la transformation mise en argument

# Les bases du JavaScript

JS est un langage de programmation de plus en plus populaire qui est utilisé pour créer des pages web dynamiques et avec de l’interaction.

Les ; sont optionnels en JS car node les ajoutent lui même. Par contre il faut choisir entre en mettre tout le temps et en mettre partout.

Si jamais je veux déclarer un string et écrire sur plusieurs ligne je peux utiliser des `.

# Les variables en JS

En JS, les variables peuvent contenir n’importe quel type de données, que ce soit des nombres, des strings, des booléens, etc.

Pour déclarer une variable on utilise « var » suivi du nom de la variable et de sa valeur : "var maVariable = "Bonjour";"

Les variables sont sensibles à la casse.

Il n'y a qu'un seul type numérique pour les nombres c'est le type "number" (le JS est nul pour les calculs).

Il y a différentes façons de déclarer une variable en JS :

- var = Façon originelle de déclarer des variables. /!\ Il faut les utiliser le moins possible /!\
- let = Permet de déclarer une variable qui sera modifiable. (La variable sera déclaré localement)
- const = Pour déclarer une variable qui ne pourra pas être modifié/réaffecté. (pour créer une constante en soit)

# Les chaines de caractères

Les chaines de caractères stock du texte.

On peut concaténer plusieurs chaines de caractères avec l'opérateur '+'.

Les chaines de caractères sont indexés (et commencent à 0). Exemple :

```javascript
let message = "Hello World"
console.log(message[1]) 

//le résultat dans la console sera la lettre "e"
```

# Les tableaux

Les tableaux permettent de contenir des variables de tout type voir même d'autre tableau.

Il est de très mauvais usage de trop mélanger les types de variables au sein d'un même tableau.

On initialise un tableau avec la forme suivante :

```javascript
const/let myList = [value1, value2, value3, etc.];
```

Les tableaux utilisents des index pour les positions des valeurs.

L'index du premier élément est 0.

# Les structures de contrôle

/!\ pour tester l'égalité en JS on utilise ===  et pour tester la différence on utilise !== /!\

'===' est une comparaison STRICT alors que '==' ne va pas prendre en compte certains paramètres comme le type de la variable
Exemple : 1 == '1' -> True alors que 1 === '1' -> False

## L'opérateur ternaire

L'opérateur ternaire est une autre façon d'écrire la structure if else.
On l'écrit de la façon suivante :

```javascript
condition ? valeurSiVrai : valeurSiFausse;
```

L'opérateur ternaire fait gagner de la place mais peut vite faire perdre en lisibilité.

## Les boucles

### La boucle while

Le code à l'intérieur de la boucle while va se répéter tant que la condition mise en paramètre est vrai.
Elle suit la structure suivante :

```javascript
while (condition) {
    //mettre vos instructions ici
} 
```

Une variante est le do... while qui suit la structure suivante :

```javascript
do {
    //mettre vos instructions ici
} while (condition)
```

La différence est que la boucle do...while s'éxecutera au minimum une fois.

### La boucle for

Le code de la boucle for va se répéter le nombre de fois qui est demandé.
Elle suit la structure suivante :

```javascript
for (variable = valeurDepart; variable </>/<=/>= valeurFin; variable++/variable--){
    //mettre vos instructions ici
}
```

# Les objets

Les objets sont une structure de donnée. Ils suivent la syntaxe suivante :

```javascript
let monObjet = {
    param1 : valeur,
    param2 : valeur,
    param3 : 'valeur',
    param4 : True,
    etc.,
}
```

Cette structure permet de parcourir les clés d'un objet :

```javascript
for (const key in monObjet) {
    const element = monObjet[key];
    console.log(key)
}
```

# Les fonctions

Une fonction est un bloc de code qui peut être appelé et exécuté où on veut dans le programme.
Voici des façons de les déclarer :

```javascript
function nom_fonction(param1, param2, etc.) {
    //mettre les instructions ici
    return résultat;
}
```

```javascript
const nom_fonction = function(param1, param2, etc.) {
    //mettre les instructions ici
    return résultat;
}
```

```javascript
const nom_fonction = (param1, param2) => //mettre une instruction ici
```

```javascript
const nom_fonction = (param1, param2) => {
    //mettre les instructions ici
}
```

Ces deux équivalents s'appellent les fonctions fléchées

Si jamais je n'ai qu'une seule instruction dans ma fonction je n'ai pas besoin de mettre des {}.
Dans ce cas là le return sera mis automatiquement.

Si jamais j'ai plus d'une instruction je dois mettre des {} et un return dans ma fonction.

Je peux mettre une fonction en paramètre d'une fonction.

# Regex (my beloved)

site pour créer des patternes de recherche : https://www.regexpal.com/
