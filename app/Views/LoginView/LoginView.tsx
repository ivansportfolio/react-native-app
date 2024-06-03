import { useAuth } from '@/app/hooks/useAuth';
import React, { useState } from 'react';
import { View, Pressable, useWindowDimensions } from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import { Color, Font, Spacing } from '../../styles/global';
import FormInput from '../../components/Form/FormInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigate } from 'react-router-native';
import { loginViewStyle } from './loginView.styles';

const LoginView = () => {
  const { width: screenWidth } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(email, password);
  };

  const backToWelcomPageHandler = () => {
    /* TODO */
  };

  const rememberMeHandler = () => {
    /* TODO: Add remember me logic */
    setChecked(!checked);
  };

  const handleRegisterRedirect = () => {
    /* TODO */
  };

  return (
    <View
      style={[
        loginViewStyle.loginPageContainer,
        screenWidth > 600 && { width: 550 },
      ]}
    >
      <View style={loginViewStyle.loginTopContainer}>
        <Pressable
          style={loginViewStyle.loginTextContainer}
          onPress={() => navigate('/')}
        >
          <MaterialCommunityIcons
            name={'chevron-left'}
            color={Color.black}
            size={30}
            style={{ marginLeft: -Spacing.s10, marginBottom: Spacing.s25 }}
          />
          <Text style={{ fontSize: Font.fs20, fontWeight: '600' }}>Login</Text>
        </Pressable>
        <View style={loginViewStyle.loginInputContainer}>
          <FormInput
            value={email}
            onChange={setEmail}
            label="Email"
            iconLabelName="email-outline"
          />
          <FormInput
            value={password}
            onChange={setPassword}
            label="Password"
            iconLabelName="lock-outline"
            secureMode
          />
          <View style={loginViewStyle.extraOptionContainer}>
            <Pressable
              style={loginViewStyle.checkboxContainer}
              onPress={rememberMeHandler}
            >
              <Checkbox status={checked ? 'checked' : 'unchecked'} />

              <Text
                style={{
                  color: checked ? Color.black : Color.darkGrey,
                  fontSize: Font.fs15,
                }}
              >
                Remember me
              </Text>
            </Pressable>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                height: 30,
              }}
            >
              <Pressable>
                <Text style={{ fontWeight: '600', fontSize: Font.fs15 }}>
                  Forgot Password
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={loginViewStyle.loginBottomContainer}>
        <Pressable style={loginViewStyle.loginButton} onPress={handleLogin}>
          <MaterialCommunityIcons
            name="login"
            size={20}
            color={Color.black}
            style={{ position: 'absolute', left: Spacing.s15 }}
          />
          <Text style={loginViewStyle.textButton}>Get In</Text>
        </Pressable>

        <Pressable onPress={handleLogin}>
          <Text style={{ fontWeight: '600' }}>Create an Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginView;
