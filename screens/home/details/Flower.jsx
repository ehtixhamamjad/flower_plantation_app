import * as React from "react";
import {  StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Card } from "react-native-paper";

export default function FlowerInYourArea() {

  return (
    <View>
        
        <Card style={{ margin: 10 }}>
          <Card.Cover
            style={{ margin: 10 }}
            source={{ uri: "https://picsum.photos/700" }}
          />
          <Card.Content>
            <Text
              variant="titleLarge"
              style={{ fontWeight: "700", fontSize: 20 }}
            >
              Card title
            </Text>
            {/* <Text variant="bodyMedium">Card content</Text> */}
          </Card.Content>
          <Card.Actions>
            {/* <Button>Ok</Button> */}
            <Button color="#1EA65C">More Deatils</Button>
          </Card.Actions>
        </Card>

    </View>
  );
}
