# Artem369


## Firmar la aplicación

Para firmar la aplicación deberás pedir el accesos al archivo .keystore que se usó para firmar la aplicación. Luego deberás incluirlo dentro de la carpeta `android/app/`.

Luego puedes ir a la carpeta android y generar el app bundle
`cd android`
`./gradlew bundleRelease`

Luego el app bundle se generará en la carpeta `android/app/build/ouputs/bundle/release/`.
