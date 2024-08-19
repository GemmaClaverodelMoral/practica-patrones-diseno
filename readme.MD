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
```
    const registry1 = UsersRegistry.getInstance();
```
generalidad de igualdad en todas las instancias
```
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
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-abstract-factory_34ce8f50-d977-40c3-9111-bafe25f600ed.png" alt="Diagrama Patrón FACTORY" style="max-width: 60%; height: auto;">
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
```
  class Notification {
    send(message) {
        throw new Error('Method not implemented!');
    }}
```
- STEP 2 - Implement concrete products
```
class EmailNotification extends Notification {
send(message) {
    console.log(`Enviando correo electrónico con el mensaje: ${message}`);
}}

// ---------------------------------------------------
// ----- aqui pondremos nuevos tipo de notificacion
// ---------------------------------------------------------
```
- STEP 3 - Declare base factory
```
class NotificationFactory {
createNotification() {
    throw new Error('Method not implemented!');
}}
```
- STEP 4 - Implement concrete factories
```
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
```
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
### Descripcion
### ¿Porque sirve?
### Diagrama
### Pasos para implementarlo
### Claves del como:
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