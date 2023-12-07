import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/photo.jpg')} // Додайте шлях до своєї фотографії
        style={styles.image}
      />
      <Text style={styles.name}>Величко Дмитро</Text>
      <Text style={styles.info}>
        Про себе: Навчаюсь в Черкаському державному технологічному університеті на 4 курсі по спеціальності 121 "Інженерія програмного забезпечення", група ПЗС-2144
      </Text>
      <Text style={styles.contact}>
        Контактна інформація: velychko2023@gmail.com, +380737737175
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  contact: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
});

export default Profile;

