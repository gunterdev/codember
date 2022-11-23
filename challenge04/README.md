# Problema

Un amigo compró 5 BitCoins en 2008. El problema es que lo tenía en un monedero digital... ¡y no se acuerda de la contraseña!
Nos ha pedido ayuda. Y nos ha dado algunas pistas:

- Es una contraseña de 5 dígitos.
- La contraseña tenía el número 5 repetido como mínimo dos veces.
- El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.
  Nos ha puesto algunas ejemplos:

```js
Ejemplo 1:
55678 es correcto lo cumple todo

Ejemplo 2:
12555 es correcto, lo cumple todo

Ejemplo 3:
55555 es correcto, lo cumple todo

Ejemplo 4:
12345 es incorrecto, no tiene el 5 repetido.

Ejemplo 5:
57775 es incorrecto, los números no van de forma creciente
```

Dice que el password está entre los números `11098` y `98123`. ¿Le podemos decir cuantos números cumplen esas reglas dentro de ese rango?

Encuentra número de passwords que cumplen el criterio y el password que está en el índice 55 de la lista de passwords válidos.

Por ejemplo, para 87 resultados y el password 35522 en la posición 55 sería:

```js
Password validas => 87;
Password valida en el indice 55 => 35522;
```
