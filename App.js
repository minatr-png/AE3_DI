/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import { Icon } from 'react-native-elements';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
          <View style={styles.titulo}>
              <Text style={styles.tituloText}>TAKE A LOOK</Text>
              <Text style={styles.tituloText}>TO THIS EVENT</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.sectionMatch}>COPA DEL REY</Text>
            <View style={styles.container}>
              <Image
                style={styles.shield}
                source={{
                  uri:
                    'https://i.ibb.co/TvmNgvz/Valencia.png',
                }}
              />
              <Text style={styles.vs}>vs</Text>
              <Image
                style={styles.shield}
                source={{
                  uri:
                    'https://i.ibb.co/x3Zt0vj/Madrid.png',
                }}
              />
            </View>
          </View>
          <View style={styles.titulo}>
            <Text style={styles.tituloText}>DO YOU FEEL IN</Text>
            <Text style={styles.tituloText}>NEED OF HELP?</Text>
          </View>
          <View style={styles.seccion}>
            <View style={styles.sectionText}>
              <Text style={styles.sectionTextText}>CLICK TO FIND</Text>
              <Text style={styles.sectionTextText}>SOME ASSOCIATIONS</Text>
              <Text style={styles.sectionTextText}>THAT WILL HELP YOU</Text>
            </View>
          </View>  
          <View style={styles.barraMenu}>
            <View style={styles.halfContainer}>
              <Image
                    style={styles.icon}
                    source={{
                      uri:
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F130%2F130188.png&f=1&nofb=1',
                    }}
              />
              <Image
                    style={styles.icon}
                    source={{
                      uri:
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe6%2FHome_Icon.svg%2F1024px-Home_Icon.svg.png&f=1&nofb=1',
                    }}
              />
              <Image
                    style={styles.icon}
                    source={{
                      uri:
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Fdollar-sign-currency-income-omy-money-finance-symbol-44624.png&f=1&nofb=1',
                    }}
              />
            </View>
            <View style={styles.halfContainer}>
              <Text style={styles.bottomBoxText}>Events</Text>
              <Text style={styles.bottomBoxText}>Home</Text>
              <Text style={styles.bottomBoxText}>Bets</Text>
            </View>
          </View>  
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },
  titulo: {
    flex:0.6,
    borderBottomWidth:2,
    backgroundColor: '#F7F0E8',
    borderBottomColor: '#797979',
    fontSize: 12,
    fontWeight: '600',
    height: 90,
  },
  seccion: {
    flex:2,
    borderBottomWidth:2,
    backgroundColor: '#E6D6D3',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    height: 240,
  },  
  barraMenu: {
    flex:0.5,
    backgroundColor: '#F3C1BC',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    height: 10000,
  },
  tituloText: {
    marginTop: 2,
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  sectionText: {
    marginTop: '20%',
  },
  sectionTextText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  sectionMatch: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Comfortaa',
    marginTop: '5%',
  },
  vs: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginTop: '14%',
    fontFamily: 'Comfortaa',
  },
  shield: {
    height: '60%',
    width: '37%',
    marginTop: '5%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  icon: {
    height: '80%',
    width: '7%',
    marginTop: '2%',
    marginLeft: '20%',
  },
  container: {
    flexDirection:'row',
    height: '100%',
    width: '100%',
  },
  halfContainer: {
    flexDirection:'row',
    height: '50%',
    width: '100%',
  },
  bottomBoxText: {
    color: 'black',
    fontFamily: 'Comfortaa',
    marginLeft: '18%',
  }
});

export default App;
