import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Menu, Divider, BottomNavigation, Text, Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Card } from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function ViewAllFlowers() {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Home" />
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
      {/* <Icon name="heart" size={30} color="#900" /> */}
      <ScrollView>
      <Card style={{margin:10}}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Cover style={{margin:10}} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          {/* <Button>Ok</Button> */}
          <Button >More Deatils</Button>
        </Card.Actions>
      </Card>
      <View style={{marginTop:100}}></View>
      </ScrollView>
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
});
