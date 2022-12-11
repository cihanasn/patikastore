import React from "react";
import {Dimensions, TextInput, Image, SafeAreaView, View, Text, Button, FlatList, StyleSheet, ScrollView} from 'react-native';
import data from './data.json'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.search} placeholder="Ara..." />
      
      <FlatList  data={data} renderItem={(item) => 
          <View style={styles.item}>
            <Image style={styles.image} source={{uri: item.item.imgURL,}} />
            <Text style={styles.product_title}>{item.item.title}</Text>
            <Text style={styles.price}>{item.item.price}</Text>
            {item.item.inStock ? null : <Text style={styles.stock}>STOKTA YOK</Text> }
            <Text style={styles.price}>{item.item.inStock}</Text>
          </View>
      
      } numColumns={2} />

    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  stock: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  product_title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#808080',
  },
  container: {
    flex: 1,
    width: windowWidth,
    padding: 10,
  },
  item: {
    position: 'relative',
    width: '49%',
    backgroundColor: '#eceff1',
    padding:10,
    marginTop:10,
    marginRight:10,
    borderRadius: 10,
  },
  title: {
    color: '#800080',
    fontSize: 35,
    fontWeight: 'bold',
  },
  search: {
    backgroundColor: '#eceff1',
    borderRadius: 15,
    fontSize: 15,
    paddingLeft: 20,
  },
  image: {
    height: windowHeight / 4,
    width: '100%',
  }
})

export default App;
