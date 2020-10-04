# POC TestCafe

## Motivación

Existen en la actualidad bastantes frameworks que nos facilitan la automatización de pruebas, tanto para Front-End como para API's, Selenium en el área de pruebas para Front-End es el mas conocido y cuenta con mayor información en la red que nos ayuda a resolver dudas. 

Soy de la idea de revisar y probar las opciones que tengamos a disposición, para cuando tengamos que analizar y establecer la arquitectura del framework de automatización a implementar, podamos seleccionar aquel que se adapte mas a las necesidades y ofrezca las características optimas para el proyecto donde se utilizará.

En la red he visto mencionar bondades sobre el uso de [TestCafe](https://devexpress.github.io/testcafe/), por lo que lo estoy probando para obtener la experiencia y constatar lo mencionado. 

La intención es realizar un POC de los diferentes frameworks y poderlos comparar. Comenzando con [TestCafe](https://devexpress.github.io/testcafe/).

## Prerequisitos

* Installacion de proyecto

```bash
npm install
```

* Opciones de ejecución
```bash
testcafe chrome tests/ (npm install -g testcafe)

npx testcafe chrome tests/

npm test

```

## Características

La documentación es de facil lectura y esta bien organizada y no vale la pena trascribirla, por lo que simplemente enlisto las características, que al momento me parecieron más interesantes y que hay que revisar con mayor detalle para poder comparar con otros frameworks.

* [Specify Test Metadata](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/organize-tests.html#specify-test-metadata)
* [Test Hooks and Fixture Hooks](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/organize-tests.html#initialization-and-clean-up)
* [Select Page Elements](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/select-page-elements.html)
    * Create Selectors
    * Selector Timeout 
    * Debug Selectors
    * Extend Selectors with Custom Properties and Methods 
    * Framework-Specific Selectors
    * Call Selectors from Node.js Callbacks
    * Access Shadow DOM
    * Select Elements With Dynamic IDs
* [Interact with the Page](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/interact-with-the-page.html)
* [Obtain Client-Side Info](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/obtain-client-side-info.html)
* [Debug](https://devexpress.github.io/testcafe/documentation/guides/basic-guides/debug.html)
    * Test Speed
* [Authentication](https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/authentication.html)
* [Browsers](https://devexpress.github.io/testcafe/documentation/guides/concepts/browsers.html)
* [Page Model](https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html)
* [Built-In Wait Mechanisms](https://devexpress.github.io/testcafe/documentation/guides/concepts/built-in-wait-mechanisms.html)

## Conclusión preliminar

En cuestión de minutos se logró comenzar a probar el framework, al tener encapsuladas todas las acciones, es facil e intuitiva su implementación, lo que me parecio mas destacable de sus características fue la forma de usar los "selectores", creo que podría de ser de gran ayuda para las personas que comienzan en el mundo de la automatización de pruebas ya que facilita la localización de los elementos en el DOM y nos ahorra tiempo en buscar otras opciónes con el uso de "Xpath", adicional cuenta con opciones cuando tenemos el caso de elementos con "ID" dinamicos, que hoy en día es un escenario que se presenta con frecuencia.

En cuanto pueda implementar ejemplos adicionales con el framework y revisado otros, actualizare el resultado de la revisión.