# Problema

Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

```js
Ejemplo 1:
input: "109105100117"
output: "midu"

Ejemplo 2:
input: "9911110010110998101114"
output: "codember"

Ejemplo 3:
input: "9911110010110998101114 109105100117"
output: "codember midu"

Ejemplo 4:
input: "11210897121 116101116114105115"
output: "play tetris"
```

Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos https://codember.dev/encrypted.txt

## Pistas

- Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
- Parece que los números tienen algo que ver con el código ASCII.
- Los espacios en blanco parece que son simplemente espacios...
