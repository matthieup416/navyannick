import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

export default function HomepageScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Homepage Screen</Text>
      <Button
        title='aller sur CreateRoadTrip1'
        onPress={() =>
          props.navigation.navigate('Homepage', { screen: 'CreateRoadTrip1' })
        }
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
