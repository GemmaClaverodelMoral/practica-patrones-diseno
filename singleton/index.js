class UsersRegistry {

    constructor() {
        if (UsersRegistry.instance) {
            
            throw new Error('Use UsersRegistry.getInstance() to get the instance.'); 
        }
        this.users = []; 
    }

    static getInstance(){ //
        if (!UsersRegistry.instance) {
            UsersRegistry.instance = new UsersRegistry()
            //Si no existo, me autocreo. 
        }
        return UsersRegistry.instance; 
        // retorna siempre la misma instancia.
    }

    addUser(user) {
        this.users.push(user);
    }

    getUsers() {
        return this.users;
    }
}

const registry1 = UsersRegistry.getInstance();
registry1.addUser({ name: 'Alice', age: 30 });


const registry2 = UsersRegistry.getInstance();
registry2.addUser({ name: 'Bob', age: 25 });

console.log('registry1:', registry1.getUsers()); 
console.log('registry2:', registry2.getUsers()); 

// Ambos `registry1` y `registry2` son la misma instancia
// Output: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
// Provocamos un error en el caso de que se intente crear una instancia con New


/**
 * How to implement Singleton?
 *
 * STEP 1. Create a static method who calls the private
 *  constructor and save the instance in a static variable
Static method that returns unique created instance or create it

CODIGO CLIENTE
* llamados al metodo estatico de la clase de la que se requiere una sola instancia
    const xxx = Singleton.getInstance();
    const yyy = Singleton.getInstance();
* SIEMPRE xxx === yyy pese a todas las midificaciones que desde xxx o desde yyy se *le puedan hacer a las instancias de Singleton. Afectan siempre el mismo objeto.
