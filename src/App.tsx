/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Alert, SafeAreaView, ScrollView, Text } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apollo-client/apolloclient';

function App(): JSX.Element {

  useEffect(() => {
    // Alert.alert("STATUS" + JSON.stringify(apolloClient()));
  }, []);

  return (
    <ApolloProvider client={apolloClient("Token")}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>vinayagam</Text>
        </ScrollView>
      </SafeAreaView>
    </ApolloProvider>
  );
}

export default App;
