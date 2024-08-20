# APUNTES PATRONES
Voy a desarollar los apuntes de la clase, incluyendo el codigo de las implementaciones personales.
el repositorio con todas las implementaciones completas de los patrones esta en el siguiente link:

[Repositorio del proyecto](https://github.com/GemmaClaverodelMoral/practica-patrones-diseno)

## SINLGETON

### Descripcion:
- Estructura que permite una sola instancia de una clase para toda la app. 
### Diagrama
<div align="center">
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-singleton_7c7d85ef-3833-4c3d-b1d3-c1aae1228355.png" alt="Diagrama Patrón Singleton" style="max-width: 40%; height: auto;">
</div>

### Mi implementación:
- Estructura de datos que contiene un registro de usuarios que será una lista UNICA (areglo de objetos(nombre y edad)) que será compartida en toda la aplicación.
### ¿Porque sirve?
- Solo puede haber una lista de usuarios y el propósito del patrón Singleton es asegurarse de que una clase tenga solo una instancia y de proporcionar un punto de acceso global a dicha instancia.

### Pasos para implementarlo
#### Código de Implementación:

 * STEP 1: Crea un método estático que llame al constructor privado y guarde la instancia en una variable estática. Método estático que devuelve la única instancia creada o la crea.
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

#### Código de Cliente

- STEP 2: Funciones y llamadas para llamar al método estático de la clase de la que se requiere una sola instancia:
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
- El patrón Factory Method permite la creación de objetos sin especificar la clase exacta del objeto que se creará ya que tiene como objetivo principal desvincular el código cliente del proceso de creación de instancias de objetos. 
- La verdadera fuerza del patrón Factory Method radica en esa capacidad de manejar la creación de instancias para cada tipo de producto, manteniendo el código cliente aislado de los detalles de la creación.
### Diagrama
<div align="center">
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-factory_30cb9170-3c42-4977-819d-5143abaa7425.png" alt="Diagrama Patrón FACTORY" style="max-width: 40%; height: auto;">
</div>

### Mi implementacion:
- Fabrica de tipos de notificaciones. Se va a usar para crear diferentes tipos de notificaciones
### Porque sirve?:
- El codigo de cliente esta desvinculado de la implementacion de las clases concretas que definen cada tipo de objeto  
### Claves del como:
- Debemos ver el codigo como dos tipos de codigo: 
  - Codigo de implementacion: Crea las clases de objetos y las clases de fabricas
  - Codigo cliente: Interactua con la creacion de la fabrica pero sin saber que hace especificamente cada tipo de objeto.

### Pasos para implementarlo:

#### Código de Implementación:

- STEP 1: Declara la clase/interface base de producto, que será devuelta por la clase de fábrica y sus subclases.
```javascript
        class Notification {
            send(message) {
                throw new Error('Method not implemented!');
            }}
```
- STEP 2: Implementa las subclases de productos concretos que heredan la clase base de producto.
```javascript
        class EmailNotification extends Notification {
        send(message) {
            console.log(`Enviando correo electrónico con el mensaje: ${message}`);
        }}

        // ---------------------------------------------------
        // ----- aqui pondremos nuevos tipo de notificacion
        // ---------------------------------------------------------
```
- STEP 3: Declara la clase base de fábrica que devuelve objetos que coinciden con el producto base, no con los concretos.
```javascript
        class NotificationFactory {
        createNotification() {
            throw new Error('Method not implemented!');
        }}
```
- STEP 4: Implementa las subclases de fábricas concretas que heredan la clase base de fábrica. Estas clases devolverán productos concretos en su método de fábrica.
```javascript
        class EmailNotificationFactory extends NotificationFactory {
        createNotification() {
            return new EmailNotification();
        }}

        // ---------------------------------------------------
        // ----- aqui pondremos una nueva fabrica
        // ---------------------------------------------------------
```
#### Código de Cliente

- STEP 5: Funciones y llamadas para utilizar las clases y fábricas implementadas.
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
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-abstract-factory_34ce8f50-d977-40c3-9111-bafe25f600ed.png" alt="Diagrama Patrón ABSTRACT FACTORY" style="max-width: 40%; height: auto;">
</div>

### Mi implementacion:
Muchas aplicaciones tienen botones, cards, menus que trabajan de forma similar pero en cada web, tienen estilos diferentes. Se crean dos familias/estilos de elementos a renderizar Neomorfismo y Minimalismo.
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
### Descripcion: 
Patron para construir paso a paso objetos complejos o cuando tienen muchas bifurcaciones en su creacion. Configura el objeto a medida que se construye. Es adecuado para la creación de objetos complejos y altamente configurables, donde el proceso de creación en sí mismo es una parte importante del diseño.

### Mi Implementacion:
Vamos a hacer un sandwitch pero paso a paso y pos separado. Al final, se concatenan todos los metodos de cada paso del sandwitch. Solo ponemos pan y proteina. En index.js, el resto de pasos. La proteina sera especial para cada tipo de sandwitch Veggie o Meat

### Diagrama
<div align="center">
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-builder_97f5a1f1-2aea-4a15-b246-cc35d1b40bec.png" alt="Diagrama Patrón BUILDER" style="max-width: 40%; height: auto;">
</div>

### Pasos para implementarlo:

- STEP 1: Clase Constructora Gerenal con los procesos para hacer un sandwitch de cualquier tipo. 
```javascript
        class SandwichBuilder {
            setBread(bread)        {throw new Error('Method not implemented!');}
            resetSandwich()        {throw new Error('Method not implemented!');}
        }
```
- STEP 2: Implementar subclases concretas del builder que ofrezcan diferentes versiones de los pasos de construcción.
```javascript
        class VeggieSandwichBuilder extends SandwichBuilder {
            constructor() {super();   this.resetSandwich();
            }
            setBread(bread)          {this.sandwich.bread   = bread;       return this;}
            resetSandwich()          {this.sandwich         = new VeggieSandwich();}
            build() {const sandwich = this.sandwich; this.resetSandwich(); return sandwich;}
        }
        class MeatSandwichBuilder ...
```
- STEP 3: Inicializar Clase de Producto general y las variaciones que son fijas.
```javascript
        class Sandwich {constructor() {
            this.bread = ''; // se concreta en el constructor: constructVeggieDelight
            this.protein=''; // se concreta en la variacion del Sandwich: VeggieSandwich
        }
        class VeggieSandwich extends Sandwich {constructor() {super(); 
            this.protein = 'Tofu';} //fija
        }
        class MeatSandwich extends Sandwich {constructor() {super();
            this.protein = 'Chicken';} //fija
        }

```
- STEP 4: Implementar una clase directora, esta conocerá el proceso de construcción para cada producto, así podemos crear configuraciones específicas para los productos.
```javascript
        class SandwichDirector {
            setSandwichBuilder(builder) {
            this.builder = builder;
            }
        
            constructVeggieDelight() {
            this.builder.setBread('Whole Grain')
            }
        
            constructChickenClassic() {
            this.builder.setBread('Italian')
            }
        }
```

## PROTOTYPE
### Descripcion:

### Mi implementacion:

### Diagrama:

<div align="center">
  <img src="https://static.platzi.com/media/public/uploads/diagrama-patron-diseno-creacional-builder_97f5a1f1-2aea-4a15-b246-cc35d1b40bec.png" alt="Diagrama Patrón PROTOTYPE" style="max-width: 40%; height: auto;">
</div>

### Pasos para implementarlo:
- STEP 1.	
```javascript

```
- STEP 2.	

```
- STEP 3.	
```javascript

```
- STEP 4.	
```javascript

```
### Claves del como:

### Todos los patrones se ejecutan de la siguiente manera:
- cd <directorio donde se encuentra el index.js del patron> 
- node index.js <ejecuta>
- clear <limpia el terminal>