/* BUILDER --- OJO --- No lo entendi demasiado bien!!!

PASOS IMPLEMENTACION DE BUILDER

* STEP 1. Declarar una clase base para el builder que definirá
*  los pasos generales para construir productos, cada builder debe
*  implementar la funcionalidad para estos pasos.
*
* Builder base:
*  - SandwichBuilder (Línea de Producción de Sandwitches
*
* Pasos de construcción:
*  - set... (con el mensaje de error)
*  - ...
*  - resetSandwitch: Metodo para poder reiniciar el estado del objeto Builder, 
* permitiéndote reutilizar la misma 
* instancia del Builder para crear múltiples sándwiches en una sola ejecución. 
* Sin este método, el Builder mantendría el estado del sándwich
* anterior, lo que podría resultar en mezclas no deseadas de atributos al crear un nuevo sándwich.
*/



// STEP 1 - Clase Gerenal con todos los pasos para hacer un sandwitch de cualquier tipo
class SandwichBuilder {
    setBread(bread)        {throw new Error('Method not implemented!');}
    setVegetables(vegtbls) {throw new Error('Method not implemented!');}
    setSauces(sauces)      {throw new Error('Method not implemented!');}
    resetSandwich()        {throw new Error('Method not implemented!');}
  }
  
/*
* STEP 2. Implementar subclases concretas del builder que ofrezcan diferentes
*  versiones de los pasos de construcción. Estos builders podrían crear
*  productos concretos o productos base. Depende de lo que necesitemos.
*
*  Línea de Producción de Veggie: VeggieSandwichBuilder
*  Línea de Producción de Meat: MeatSandwichBuilder
* Son exactamente iguales a nivel de metodos en este ejemplo
* La diferencia radicara en los ingredientes que se aplicaran a cada clase
*
*/
// STEP 2

class VeggieSandwichBuilder extends SandwichBuilder {
    constructor() {super();   this.resetSandwich();
    }
    setBread(bread)          {this.sandwich.bread   = bread; return this;}
    setVegetables(vegtbls)   {this.sandwich.vegtbls = vegtbls;     return this;}
    setSauces(sauces)        {this.sandwich.sauces  = sauces + ' Veggie Style';      return this;}
    resetSandwich()          {this.sandwich         = new VeggieSandwich();}
    build() {const sandwich = this.sandwich; this.resetSandwich(); return sandwich;}
  }
  
  class MeatSandwichBuilder extends SandwichBuilder {
    constructor() {super();   this.resetSandwich();
    }
    setBread(bread)          {this.sandwich.bread   = bread;       return this;}
    setVegetables(vegtbls)   {this.sandwich.vegtbls = vegtbls;     return this;}
    setSauces(sauces)        {this.sandwich.sauces  = sauces;      return this;}
    resetSandwich()          {this.sandwich         = new MeatSandwich();}
    build() {const sandwich = this.sandwich; this.resetSandwich(); return sandwich;}
  }
  
/*
* 3. Implementar clases de Producto, estas no necesariamente heredan/implementan
*  de la clase/interfaz base.
*
*  Para el problema, haremos que el builder devuelva la clase
*  base del producto.
*
*  Producto base:
*    - Sandwich
*
*  Productos concretos:
*    - VeggieSandwich 
*    - MeatSandwich 
*
*/
// STEP 3
  class Sandwich {
    constructor() {
      this.bread = '';
      this.protein='';
      this.vegtbls = [];
      this.sauces = [];
    }
  }
  
  class VeggieSandwich extends Sandwich {
    constructor() {
      super();
      this.protein = 'Tofu'; // fijo de esta clase
    }
  }
  
  class MeatSandwich extends Sandwich {
    constructor() {
      super();
      this.protein = 'Chicken'; // fijo de esta clase
    }
  }
/*
* 4. Implementar una clase directora, esta conocerá el proceso
*  de construcción para cada producto, así podemos crear configuraciones
*  específicas para los productos.
*  CLase directora: SandwichDirector 
*
*  Representaciones de productos
*  constructVeggieDelight
*  constructChickenClassic
*/
// STEP 4
  class SandwichDirector {
    setSandwichBuilder(builder) {
      this.builder = builder;
    }
  
    constructVeggieDelight() {
      this.builder
        .setBread('Whole Grain')
        .setVegetables(['Lettuce', 'Tomato', 'Cucumber'])
        .setSauces(['Mustard', 'Mayo']);
    }
  
    constructChickenClassic() {
      this.builder
        .setBread('Italian')
        .setVegetables(['Lettuce', 'Tomato', 'Pickles'])
        .setSauces(['Ranch', 'Mayo']);
    }
  }

/*
 *Función principal que gestiona el proceso de construcción de los diferentes tipos de sándwiches utilizando el patrón Builder.
*/

function sandwichApp(director) {
    console.log('--- [JS] Calling sandwichApp ---\n');

// Verifica si se ha proporcionado un objeto director. Si no, termina
    if (!director) { 
        console.log('--- No director provided ---');
        return;
    }
// Construcción de un Sándwich Vegetariano:  
// Se crea una instancia de VeggieSandwichBuilder, que es un Builder específico para sándwiches vegetarianos.
    const veggieSandwichBuilder = new VeggieSandwichBuilder();
// El director recibe el Builder vegetariano (veggieSandwichBuilder) a través del método setSandwichBuilder.
    director.setSandwichBuilder(veggieSandwichBuilder);
//El director utiliza el Builder vegetariano para construir un sándwich específico llamado Veggie Delight mediante el método constructVeggieDelight.
    director.constructVeggieDelight();
//Luego, se construye el sándwich invocando el método build del Builder vegetariano, y el resultado se almacena en la variable veggieDelight.
    const veggieDelight = veggieSandwichBuilder.build();

    console.log('--- Veggie Delight Sandwich ---\n');
    console.log(veggieDelight);

// Construcción de un Sándwich de Carne: Idem
    const meatSandwichBuilder = new MeatSandwichBuilder();
    director.setSandwichBuilder(meatSandwichBuilder);
    director.constructChickenClassic();
    const chickenClassic = meatSandwichBuilder.build();
    console.log('\n--- Chicken Classic Sandwich ---\n');
    console.log(chickenClassic);
}

sandwichApp(new SandwichDirector());
  