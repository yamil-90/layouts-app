import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const App = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.banner}
          source={require('./assets/bg.jpg')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>What to do in Paris</Text>
        <ScrollView
          horizontal
        >
          <View>
            <Image
              style={styles.city}
              source={require('./assets/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/actividad4.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.city}
              source={require('./assets/actividad5.jpg')}
            />
          </View>
        </ScrollView>
        <Text style={styles.title}>Accommodations</Text>
        <View>
          <View>
            <Image
              style={styles.accomodationImage}
              source={require('./assets/mejores1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.accomodationImage}
              source={require('./assets/mejores2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.accomodationImage}
              source={require('./assets/mejores3.jpg')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Accomodations in LA</Text>
          <View style={styles.listing}>
            <View style={styles.listingItem}>
              <Image
                style={styles.accomodationImage}
                source={require('./assets/hospedaje1.jpg')}
              />
            </View>
            <View style={styles.listingItem}>
              <Image
                style={styles.accomodationImage}
                source={require('./assets/hospedaje2.jpg')}
              />
            </View>
            <View style={styles.listingItem}>
              <Image
                style={styles.accomodationImage}
                source={require('./assets/hospedaje3.jpg')}
              />
            </View>
            <View style={styles.listingItem}>
              <Image
                style={styles.accomodationImage}
                source={require('./assets/hospedaje4.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex:1

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  container: {
    marginHorizontal: 10
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  accomodationImage: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listing:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  listingItem:{
    flexBasis:'49%',

  }
})
