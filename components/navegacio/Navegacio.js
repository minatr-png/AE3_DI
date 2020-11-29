import { Icon, Button } from './node_modules/react-native-elements';
import React, { Component } from './node_modules/react';
import { View, StyleSheet } from 'react-native';

export class Navegacio extends Component
{
    render(){
        return(
        <View style={styles.barraMenu}>
            <View style={styles.container}>
                <Button  
                    icon={
                        <Icon 
                            name='home'
                            size={20}
                            color='black'
                        />
                    }
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    title="Home"
                />
                <Button  
                    icon={
                        <Icon 
                            name='home'
                            size={20}
                            color='black'
                        />
                    }
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    title="Home"
                />
                <Button  
                    icon={
                        <Icon 
                            name='home'
                            size={20}
                            color='black'
                        />
                    }
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    title="Home"
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F3C1BC',        
    },
    buttonText: {
        color: 'black'
    },
    barraMenu: {
      flex:0.5,
      backgroundColor: '#F3C1BC',
      fontSize: 12,
      fontWeight: '600',
      textAlign: 'left',
      height: 10000,
    },
    container: {
      flexDirection:'row',
      textAlign: 'center',
      height: '100%',
      width: '100%',
    },
    icon: {
        flex: 1,
    },
});