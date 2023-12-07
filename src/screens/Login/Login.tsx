import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationProps} from '@app/navigation';

function Login() {
  const navigation = useNavigation<NavigationProps>();
    const isDarkMode = useColorScheme() === 'dark';

    const chatData = [
        {sender: 'User', message: 'Привіт! Як ви сьогодні?'},
        {sender: 'Friend', message: 'Привіт! Все гаразд, дякую.'},
        {sender: 'User', message: 'Чим займаєтеся сьогодні?'},
        {sender: 'Friend', message: 'Працюю над проектом.'},
    ];

  const handleLogin = useCallback(() => {
    console.log('handleLogin');
    navigation.navigate('Dashboard');
  }, []);

  return (
      <SafeAreaView style={{flex: 1 }}>
          <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={Colors.darker}
          />
          <Button title="Login" onPress={handleLogin} />
          <ScrollView contentContainerStyle={styles.chatContainer}>
              {chatData.map((message, index) => (
                  <View
                      key={index}
                      style={[
                          styles.message,
                          {
                              alignSelf: message.sender === 'User' ? 'flex-end' : 'flex-start',
                              backgroundColor: message.sender === 'User' ? '#007bff' : '#ECECEC',
                              borderWidth: 1,
                              borderRadius: 12,
                              borderColor: 'transparent',
                              borderBottomColor: message.sender === 'User' ? '#007bff' : '#ECECEC',
                          },
                      ]}
                  >
                      <View style={styles.messageContent}>
                          <Image
                              style={styles.profileImage}
                              source={
                                  message.sender === 'User'
                                      ? require('../../assets/images/1Series.jpg')
                                      : require('../../assets/images/1Series.jpg')
                              }
                          />
                          <Text style={[styles.messageText, { color: message.sender === 'User' ? 'white' : 'black' }]}>
                              {message.message}
                          </Text>

                      </View>
                  </View>

              ))}
          </ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    chatContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    message: {
        padding: 8,
        marginVertical: 4,
        maxWidth: '70%',
    },
    messageContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    messageText: {
        fontSize: 16,
    },
});

export default Login;
