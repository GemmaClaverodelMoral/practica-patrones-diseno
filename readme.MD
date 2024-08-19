# APUNTES PATRONES

## SINLGETON
### Tipo Implementacion: 
- Registro de usuarios unica para todo el codigo de la app:
### Descripcion: 
- Estructura de datos como un registro de usuarios que será una lista UNICA (areglo de objetos(nombre y edad)) que será compartida en toda la aplicación.
### ¿Porque sirve?
- Solo puede haber una lista de usuarios y l propósito del patrón Singleton es asegurarse de que una clase tenga solo una instancia y de proporcionar un punto de acceso global a dicha instancia.
### Diagrama
<div align="center">
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-singleton_7c7d85ef-3833-4c3d-b1d3-c1aae1228355.png" alt="Diagrama Patrón Singleton" style="max-width: 60%; height: auto;">
</div>

### Pasos para implementarlo
#### Código de Implementación:

 * STEP 1: Crea un método estático que llame al constructor privado y guarde la instancia en una variable estática. Método estático que devuelve la única instancia creada o la crea.

#### Código de Cliente

- STEP 2: Funciones y llamadas para llamar al método estático de la clase de la que se requiere una sola instancia:


### Claves del como:
- Para mi ejemplo de registro unico de usuarios:
STEP1: 
```javascript
 static getInstance(){ //
        if (!UsersRegistry.instance) {
            UsersRegistry.instance = new UsersRegistry()
            //Si no existo, me autocreo. 
        }
        return UsersRegistry.instance; 
        // retorna siempre la misma instancia.
    }
```
STEP2:
```javascript
    const registry1 = UsersRegistry.getInstance();
```
generalidad de igualdad en todas las instancias
```javascript
    const xxx = Singleton.getInstance();
    const yyy = Singleton.getInstance();
    xxx === yyy = true
```
## FACTORY
### Descripcion: 
- Fabricas de diferentes notificaciones
### ¿Porque sirve?: 
- El patrón Factory Method permite la creación de objetos sin especificar la clase exacta del objeto que se creará ya que tiene como objetivo principal desvincular el código cliente del proceso de creación de instancias de objetos. 
- La verdadera fuerza del patrón Factory Method radica en esa capacidad de manejar la creación de instancias para cada tipo de producto, manteniendo el código cliente aislado de los detalles de la creación.
### Diagrama
<div align="center">
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-factory_30cb9170-3c42-4977-819d-5143abaa7425.png" alt="Diagrama Patrón FACTORY" style="max-width: 60%; height: auto;">
</div>

### Pasos para implementarlo:

#### Código de Implementación:

- STEP 1: Declara la clase/interface base de producto, que será devuelta por la clase de fábrica y sus subclases.

- STEP 2: Implementa las subclases de productos concretos que heredan la clase base de producto.

- STEP 3: Declara la clase base de fábrica que devuelve objetos que coinciden con el producto base, no con los concretos.

- STEP 4: Implementa las subclases de fábricas concretas que heredan la clase base de fábrica. Estas clases devolverán productos concretos en su método de fábrica.

#### Código de Cliente

- STEP 5: Funciones y llamadas para utilizar las clases y fábricas implementadas.

### Claves del como:
- Debemos ver el codigo como dos tipos de codigo: 
  - Codigo de implementacion: Crea las clases de objetos y las clases de fabricas
  - Codigo cliente: Interactua con la creacion de la fabrica pero sin saber que hace especificamente cada tipo de objeto.

#### para mi ejemplo de fabrica de notificaciones


#### CODIGO DE IMPLEMENTACION
- STEP 1 - Declare base product
```javascript
        class Notification {
            send(message) {
                throw new Error('Method not implemented!');
            }}
```
- STEP 2 - Implement concrete products
```javascript
        class EmailNotification extends Notification {
        send(message) {
            console.log(`Enviando correo electrónico con el mensaje: ${message}`);
        }}

        // ---------------------------------------------------
        // ----- aqui pondremos nuevos tipo de notificacion
        // ---------------------------------------------------------
```
- STEP 3 - Declare base factory
```javascript
        class NotificationFactory {
        createNotification() {
            throw new Error('Method not implemented!');
        }}
```
- STEP 4 - Implement concrete factories
```javascript
        class EmailNotificationFactory extends NotificationFactory {
        createNotification() {
            return new EmailNotification();
        }}

        // ---------------------------------------------------
        // ----- aqui pondremos una nueva fabrica
        // ---------------------------------------------------------
```
#### CODIGO CLIENTE

- STEP 5 -  - FUNCTION Y CALLS
```javascript
        function sendNotification(notificationFactory, message) {
            const notification = notificationFactory.createNotification();
            notification.send(message);
        }

        // Uso de las fábricas para enviar notificaciones

        sendNotification(new EmailNotificationFactory(), 'Hola, este es un correo.');

        // ------------------------------------------------------------
        // ----- aqui pondremos un llamado a otro tipo de notificacion 
        // -------------------------------------------------------------
```

## ABSTRACT FACTORY
### Descripcion: 
Se ha elaborado un código que define dos familias de componentes (NeomorphicClass y MinimalistClass) con tres tipos de componentes en cada familia: botones, menús, y tarjetas de producto. El patrón Abstract Factory permite crear estos componentes de manera consistente para cada estilo sin que el código cliente tenga que preocuparse por las implementaciones concretas de cada estilo.
### ¿Porque sirve?:
Porque se desvincula todo el codigo de las diferentes familias del codigo cliente igual que el Patron Factory pero con el extra de poder tener familias donde cada familia tiene cada uno de los objetos independientes con su estilo personal de la familia
### Diagrama:
<div align="center">
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-abstract-factory_34ce8f50-d977-40c3-9111-bafe25f600ed.png" alt="Diagrama Patrón ABSTRACT FACTORY" style="max-width: 60%; height: auto;">
</div>

### Pasos para implementarlo:
#### Para mi ejemplo de botones, cards y menus de dos familias Neomorfismo y Minimalismo
##### Codigo de implementacion: 
Para la explicacion Solo pongo un elemento button en cada STEP. Ver index.js completo con boton, menu y Card
- STEP 1: Declarar clases base para cada producto concreto en el catálogo.(sin familia)
```javascript
        class Button  {render() {throw new Error('Method not implemented!');}}
```
- STEP 2: Implementar clases de productos concretos que heredan  las clases de productos base. El número de productos concretos dependerá del número de familias.
- STEP 2A: Implementar productos concretos para la familia Neomorfismo
```javascript
        class NeomorphicButton extends Button {render() {console.log('Rendering a Neomorphic Button');}}
```
- STEP 2B: Implementar productos concretos para la familia Minimalismo
```javascript
        class MinimalistButton extends Button {render() {console.log('Rendering a Minimalist Button');}}
```
- STEP 3: Declarar la clase de fábrica abstracta que creara los métodos de creación para cada producto base. (sin familias)
```javascript
        class ElementsFactory {
            createButton() {throw new Error('Method not implemented!');}
        }
```
- STEP 4:  Crear fábricas concretas que heredan el comportamiento de la fábrica abstracta e implementan todos los métodos de creación de productos. Una classe para cada familia   
```javascript
        class NeomorphicFactory extends ElementsFactory {
                createButton() {return new NeomorphicButton();}
        }
        class MinimalistFactory extends ElementsFactory {
                createButton() {return new MinimalistButton();}
        }
```
##### Código Cliente: 
Funcion para crear familias de productos usando la fabrica abstracta
```javascript
        function renderElements(factory) {
            const button = factory.createButton();
            button.render();
        }
```
calls: 
```javascript
        console.log('--- Render elements in a Neomorphic Style ---');
        renderElements(new NeomorphicFactory());

        console.log('--- Render elements in a Minimalist Style ---');
        renderElements(new MinimalistFactory());
```
## BUILDER
### Descripcion
### ¿Porque sirve?
### Diagrama
### Pasos para implementarlo
### Claves del como:
## PROTOTYPE
### Descripcion
### ¿Porque sirve?
### Diagrama
### Pasos para implementarlo
### Claves del como:

### Todos los patrones se ejecutan de la siguiente manera:
- cd <directorio donde se encuentra el index> 
- node index.js <ejecuta>
- clear <limpia el terminal>