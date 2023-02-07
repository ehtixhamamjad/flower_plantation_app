import { Touchable, View } from "react-native";
import { Checkbox } from "react-native-paper";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Card } from "react-native-paper";
import {
  Button,
  Menu,
  Divider,
  BottomNavigation,
  Text,
  Appbar,
} from "react-native-paper";

const Nursery = ({}) => {
  const [completed, setCompleted] = useState();
  return (
    <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <Card.Content>
        <Text variant="titleLarge" style={{ fontWeight: "700", fontSize: 20 }}>
          Nursery
        </Text>
        <Text variant="bodyMedium">Islamabad</Text>
      </Card.Content>
    </Card>
  );
};

export default Nursery;
