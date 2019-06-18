/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { IDnowManager} from 'react-native-idnow';

interface Props {}
export default class App extends Component<Props> {
  render() {
    const options = {
      showVideoOverviewCheck: true,
      showErrorSuccessScreen: true,
      companyId: '',
      transactionToken: 'TST-UTUQZ',
      environment: 'TEST',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>react-native-idnow demo</Text>
        <Button
          title="Start video identification"
          onPress={async () => {
            try {
              const resp = await IDnowManager.startVideoIdent(options);
              console.warn('resp', resp);
              Alert.alert(JSON.stringify(resp));
            } catch (e) {
              Alert.alert(JSON.stringify(e));
              console.warn('e', e);
            }
            setTimeout(() => {
              IDnowManager.hide()
            }, 5000);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});