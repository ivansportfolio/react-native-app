import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Link } from 'react-router-native';
import { Button } from 'react-native-paper';
import { useAuth } from '@/app/hooks/useAuth';
import { useAuthContext } from '@/app/context/authContext';

const HomeView = () => {
  const { logout } = useAuth();
  const { user } = useAuthContext();

  return (
    <View>
      <Text variant="titleMedium">Logged User: {user?.email}</Text>
      <Text>Home View</Text>
      <Link to="/home/subpage1">
        <Text>Go to SubPage 1</Text>
      </Link>
      <Link to="/home/subpage2">
        <Text>Go to SubPage 2</Text>
      </Link>
      <Button textColor="red" onPressIn={logout}>
        LOGOUT
      </Button>
    </View>
  );
};

export default HomeView;
