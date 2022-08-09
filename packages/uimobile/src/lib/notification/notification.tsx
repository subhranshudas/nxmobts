import React from 'react';

import { View, Text } from 'react-native';

export interface NotificationProps {
  title: string;
}

export function Notification(props: NotificationProps) {
  return (
    <View>
      <Text>Welcome to notification! {props.title}</Text>
    </View>
  );
}

export default Notification;
