import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>

      <Avatar urlImage="https://github.com/mateus1999.png"/>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Fala,
          </Text>
          
          <Text style={styles.username}>
            Mateus
          </Text>
        </View>

        <Text style={styles.message}>
          Bora jogar? 
        </Text>
      </View>

    </View>
  )

}