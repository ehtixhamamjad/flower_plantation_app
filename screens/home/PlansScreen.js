import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Menu, Divider, BottomNavigation, Text, Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Card, IconButton } from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
export default function PlansScreen() {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Home" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        {/* <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          // anchor={<Button onPress={openMenu} icon={MORE_ICON}></Button>}>
          anchor={<Appbar.Action icon={MORE_ICON} onPress={openMenu} />}>
          <Menu.Item onPress={() => { }} title="Profile" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Settings" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Logout" />
        </Menu>
      </Appbar.Header>
      <Card style={{ marginTop: 50 }}>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
      <Card style={{ marginTop: 10,marginLeft:5,marginRight:5 }}>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
      <Image style={styles.for_image} source={require('../../src/plus.png')} />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'blue',
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  for_image: {
    position: 'absolute',
    bottom: '50%',
    right: '50%',
    marginBottom: -100,
    width: 45,
    height: 45,
  },
});
