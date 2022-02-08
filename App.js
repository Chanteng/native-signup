import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <View style={styles.container}>

      <View style={styles.searchbar}>
        <Image style={styles.searchimg} source={require('./assets/5.png')}  />
      </View>

        <View style={styles.imgcont}>

          <View style={styles.imgtext}>
            <Text>Mendy</Text>
            <TextInput placeholder='Human' />
            <TextInput placeholder='29 years Old' />
            <TextInput placeholder='Chelsea GoalKeeper' />
          </View>

          <Image style={styles.img}
            source={require('./assets/1.jpg')} />
        </View>

        <View style={styles.imgcont}>

          <View style={styles.imgtext}>
            <Text>Ziyech</Text>
            <TextInput placeholder='Human' />
            <TextInput placeholder='28 years Old' />
            <TextInput placeholder='Chelsea Midfielder' />
          </View>

          <Image style={styles.img}
            source={require('./assets/2.jpg')} />
        </View>
        <View style={styles.imgcont}>

          <View style={styles.imgtext}>
            <Text>James</Text>
            <TextInput placeholder='Human' />
            <TextInput placeholder='22 years Old' />
            <TextInput placeholder='Chelsea Midfielder' />
          </View>

          <Image style={styles.img}
            source={require('./assets/3.jpeg')} />
        </View>
        <View style={styles.imgcont}>

          <View style={styles.imgtext}>
            <Text>Hudson-Odoi</Text>
            <TextInput placeholder='Human' />
            <TextInput placeholder='21 years Old' />
            <TextInput placeholder='Chelsea Midfielder' />
          </View>

          <Image style={styles.img}
            source={require('./assets/4.jpeg')} />
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    marginTop: 50,
  },

  imgcont: {
    marginLeft: 30
  },

  img: {
    height: 120,
    width: 120,
    borderRadius: 10,
    marginBottom: 20
  },

  imgtext: {
    backgroundColor: "grey",
    width: 200,
    borderRadius: 20,
    paddingLeft: 30,
    position: "absolute",
    left: 100,
    top: 10,

  },

  searchbar: {
    height: 40,
    backgroundColor: "grey",
    marginBottom: 30,
    width: 420,
    alignSelf: "center",
    borderRadius: 20
  },

  searchimg: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginTop: 4,
    color: "white"
  }

});


export default App;
