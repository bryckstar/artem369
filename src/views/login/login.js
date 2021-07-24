import React, {useState} from 'react';
import {SafeAreaView, View, Image, ImageBackground} from 'react-native';
import {LoginStyles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useForm, Controller} from 'react-hook-form';
import {Button, Input, Text} from 'react-native-elements';
export const Login = ({navigation}) => {
  const {
    control,
    formState: {errors},
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ImageBackground
      style={LoginStyles.imageBackground}
      source={{uri: 'https://mdl.artvee.com/sftb/519627ld.jpg'}}>
      <View style={LoginStyles.formWrapper}>
        <View
          style={{
            flexGrow: 2,
            height: '100%',
          }}>
          <Image
            style={{
              width: '100%',
              flexGrow: 1,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            resizeMode="cover"
            source={{
              uri: 'https://i.imgur.com/I5IiAgN.png',
            }}
          />
        </View>
        <View style={LoginStyles.dataWrapper}>
          <Text h3 style={{textAlign: 'center', marginTop: '1%'}}>
            Iniciar Sesión
          </Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                style={{marginTop: '5%'}}
                errorMessage={errors.email ? 'Campo requerido' : ''}
                placeholder="Usuario/Correo electronico"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                leftIcon={<Icon name="envelope-o" size={24} color="black" />}
              />
            )}
            name="email"
            rules={{required: true}}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                errorMessage={errors.password ? 'Campo requiro' : ''}
                secureTextEntry={!showPassword}
                placeholder="Contraseña"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                leftIcon={
                  <Icon
                    name="unlock-alt"
                    size={24}
                    color="black"
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                }
                rightIcon={
                  showPassword ? (
                    <Icon
                      name="eye-slash"
                      size={24}
                      color="black"
                      onPress={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  ) : (
                    <Icon
                      name="eye"
                      size={24}
                      color="black"
                      onPress={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  )
                }
              />
            )}
            name="password"
            rules={{required: true}}
            defaultValue=""
          />
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}
            buttonStyle={LoginStyles.boton}
            loading={isLoading}
            title="Iniciar Sesión"
          />
          <Text style={LoginStyles.registerLink}>
            ¿No tienes cuenta? Crear Cuenta.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
