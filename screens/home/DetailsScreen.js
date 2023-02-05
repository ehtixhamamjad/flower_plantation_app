import * as React from 'react';
import { Card, Text } from 'react-native-paper';

const MyComponent = ({ navigation }) => (
  <Card style={{marginTop:100}}>
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
);

export default MyComponent;