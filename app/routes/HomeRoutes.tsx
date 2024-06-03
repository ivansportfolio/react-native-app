import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Link, Route, Routes, useNavigate } from 'react-router-native';
import HomeView from '../Views/HomeView/HomeView';
import { useAuthContext } from '../context/authContext';

const SubPage1 = () => (
  <View>
    <Text>SubPage 1</Text>
    <Link to="/home">
      <Text>Back</Text>
    </Link>
  </View>
);

const SubPage2 = () => (
  <View>
    <Text>SubPage 2</Text>
    <Link to="/home">
      <Text>Back</Text>
    </Link>
  </View>
);

const HomeRoutes = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  if (!user) {
    navigate('/home/subpage1');
  }
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="subpage1" element={<SubPage1 />} />
      <Route path="subpage2" element={<SubPage2 />} />
    </Routes>
  );
};

export default HomeRoutes;
