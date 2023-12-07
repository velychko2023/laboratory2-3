import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DepartmentInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Кафедра «Програмне забезпечення автоматизованих систем»</Text>
      <Text style={styles.info}>
        Кафедра «Програмного забезпечення автоматизованих систем» створена у 1998 році в результаті реорганізації
        кафедри «Обчислювальної техніки» та організації факультету ФІТІС, якому вона належить.
        Кафедра є випусковою зі спеціальності 121– «Інженерія програмногозабезпечення».
      </Text>
      <Text style={styles.info}>
        Контакти

        18006, м. Черкаси, бул. Шевченка 460, ауд. 605 першого корпусу.

        Тел. +380 93 191 0416
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
});

export default DepartmentInfo;
