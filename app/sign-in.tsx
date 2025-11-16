import { useAuthState } from '@/utils/useAuthState';
import { Formik } from 'formik';
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});



interface Values {
  email: string;
  password: string;
}


export default function SignIn() {
  const { login } = useAuthState();

  const onSubmit = (data: Values) => {
    if (data.email.length > 0 && data.password.length > 0) {
      login();
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Formik initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <Text style={styles.label}>
              Email:
            </Text>
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
            />
            {errors.email && <Text style={styles.errorText}>
              {errors.email}
            </Text>}
            <Text style={styles.label}>
              Password:
            </Text>
            <TextInput
              autoCapitalize="none"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('email')}
              value={values.password}
              style={{ ...styles.input}}
            />
            {errors.password && <Text style={styles.errorText}>
              {errors.password}
            </Text>}
            <Button onPress={(d) => handleSubmit(d as any)} title="Submit" />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5
  }
});
