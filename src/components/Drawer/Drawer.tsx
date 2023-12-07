import React, { memo, useCallback } from 'react';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import {Text, View, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import { List } from 'react-native-paper';
import Icon from '@app/components/Icon';
import defaultStyles from './styles';

function Drawer({ navigation }: Partial<DrawerContentComponentProps>) {
  const composeStyles = defaultStyles();

  const handleLogout = useCallback(() => {
    console.log('handleLogout');
    navigation?.navigate('Login');
  }, [navigation]);

  const handleNavigateToDepartmentSite = useCallback(() => {
    Linking.openURL('https://pzas.chdtu.edu.ua');
  }, []);

  return (
    <DrawerContentScrollView contentContainerStyle={composeStyles.root} centerContent={false}>
      <View style={composeStyles.header}>

      </View>
      <View style={composeStyles.content}>
        <List.Item
          title="Profile"
          description="desc"
          titleStyle={composeStyles.listTitle}
          descriptionStyle={composeStyles.listDescription}
          left={({ style }) => (
            <View style={[style, composeStyles.listLeft]}>
              <Icon name="account-circle-outline" style={composeStyles.listLeftIcon} />
            </View>
          )}
          onPress={() => {
            navigation!.closeDrawer();
            navigation!.navigate('Dashboard', {
              screen: 'Profile',
            });
          }}
        />
        <List.Item
          title="logout"
          titleStyle={composeStyles.listTitle}
          descriptionStyle={composeStyles.listDescription}
          titleNumberOfLines={2}
          left={({ style }) => (
            <View style={[style, composeStyles.listLeft]}>
              <Icon name="logout-variant" style={composeStyles.listLeftIcon} />
            </View>
          )}
          onPress={handleLogout}
        />
        <TouchableOpacity
          style={composeStyles.listItem}
          onPress={handleNavigateToDepartmentSite}
        >
          <View style={composeStyles.listLeft}>
            <Icon name="earth" style={composeStyles.listLeftIcon} />
            <Text style={composeStyles.listTitle}>Сайт кафедри</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={composeStyles.footer}>
        <Text style={composeStyles.version}>1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}
export default memo(Drawer);

