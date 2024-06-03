import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { Text } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

const WelcomeView = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Text>Welcome Page</Text>
      <Button textColor="red" onPress={() => navigate('/login-page')}>
        Go to login
      </Button>
    </View>
  );
};

export default WelcomeView;
