# Template Basic React v0.3
## Documentation Basic 
### "Permet d'utiliser React Native Componant '

1.  [X] 

2.  **Document à savoir**
Dans React Native, un **composant** est une partie de code qui représente une partie de l'interface utilisateur. __Les **composants** peuvent être utilisés pour définir la structure, la mise en page et l'apparence de l'interface utilisateur et peuvent être réutilisés dans l'ensemble de l'application.__

React Native dispose de plusieurs __**composants**__ intégrés, tels que View, Text et Image, qui peuvent être utilisés pour créer l'interface utilisateur d'une application. En outre, les développeurs peuvent créer leurs propres __**composants**__ personnalisés à utiliser dans leur application.

Les __**composants**__ dans React Native sont créés à l'aide de classes JavaScript qui étendent la classe Component du paquet react-native. Chaque __**composant**__ a une méthode de rendu qui renvoie une description de ce qui doit être affiché à l'écran.

Par exemple, voici un simple __**composant**__ qui affiche un message à l'écran :

````
import React, { Component } from 'react';
import { Text } from 'react-native';

class MonComposant extends Component {
  render() {
    return (
      <Text>Bonjour, le monde !</Text>
    );
  }
}
````
> Ce __**composant**__ peut être utilisé dans une application React Native comme ceci :
````
import MonComposant from './MonComposant';

// ...

render() {
  return (
    <MonComposant />
  );
}
````
