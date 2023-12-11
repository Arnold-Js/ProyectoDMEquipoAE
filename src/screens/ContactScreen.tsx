import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appThemes';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

  const {signIn, authState} = useContext(AuthContext)

  return (
    <View style={styles.marginGlobal}>
        <Text style= {styles.title}>Bienvenido</Text>

        {
          !authState.isLoggedIn && <Button title='Log In' onPress={signIn} />
        }
        
    </View>
  )
}
