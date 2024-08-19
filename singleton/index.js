class UsersRegistry {
    static instance = undefined;
    constructor() {
        if (UsersRegistry.instance) {
            return UsersRegistry.instance;
        }
        UsersRegistry.instance = this
        this.users = []; // Inicializa una lista vacía de usuarios
    }
    
    addUser(user) {
        this.users.push(user);
    }

    getUsers() {
        return this.users;
    }
}

function appUsersRegistry(register) {
    const registry = new UsersRegistry();
    registry.addUser(register);
    return registry
}

const registry1 = appUsersRegistry({ name: 'Alice', age: 30 })
const registry2 = appUsersRegistry({ name: 'Bob', age: 25 })

// Ambos `registry1` y `registry2` son la misma instancia
console.log(registry1.getUsers()); // Output: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
console.log(registry2.getUsers()); // Output: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]


