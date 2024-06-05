import { Color, Spacing } from '@/app/styles/global';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Text, TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FormInput = ({
  value,
  label,
  iconLabelName,
  onChange,
  secureMode,
}: {
  value: string;
  label?: string;
  iconLabelName?: 'email-outline' | 'lock-outline';
  onChange: (email: string) => void;
  secureMode?: boolean;
}) => {
  /* TODO: Add useFormHook */
  return (
    <View style={styles.inputContainer}>
      {label && (
        <View style={styles.labelContainer}>
          {iconLabelName && (
            <MaterialCommunityIcons
              name={iconLabelName as string}
              color={Color.darkGrey}
              size={20}
              style={{ marginRight: Spacing.s5 }}
            />
          )}

          <Text>{label}</Text>
        </View>
      )}
      <View>
        <TextInput
          theme={{
            roundness: Spacing.s15,
            colors: {
              ...DefaultTheme.colors,
              primary: Color.lemonCream,
              outline: Color.lightGray,
            },
          }}
          style={styles.input}
          value={value}
          mode="outlined"
          onChangeText={onChange}
          secureTextEntry={secureMode}
          right={
            secureMode &&
            value.length > 1 && (
              <TextInput.Icon
                icon={() => (
                  <MaterialCommunityIcons
                    name="eye-outline"
                    color={Color.black}
                    size={25}
                  />
                )}
                color={Color.black}
              />
            )
          }
        />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: Spacing.s25,
    width: '100%',
  },
  input: {
    backgroundColor: Color.white,
    borderRadius: 100,
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.s10,
  },
});
