/********************** ORDER **********************/
function findOrderById(parent, args, context, info) {
    const orders = context.orders;
    for (const order of orders) {
        if (order.id === args.id) {
            return order;
        }
    }
}

function inventory(parent, args, context, info) {
    const pets = context.pets;
    let available = 0;
    let pending = 0;
    let sold = 0;
    for (const pet of pets) {
        switch (pet.status) {
            case "AVAILABLE":
                available++;
                break;
            case "PENDING":
                pending++;
                break;
            case "SOLD":
                sold++;
                break;
        }

    }
    return [`Available: ${available}`, `Pending: ${pending}`, `Sold: ${sold}`];
}

/********************** PET **********************/
function findPetsByStatus(parent, args, context, info) {
    const pets = context.pets;
    const status = args.status;
    let rv = [];
    for (const pet of pets) {
        if (pet.status === status) {
            rv.push(pet);
        }
    }
    return rv;
}

function findPetsByTags(parent, args, context, info) {
    const pets = context.pets;
    const tags = args.tags;
    let rv = [];
    for (const pet of pets) {
        for (const tag of pet.tags) {
            if (tags.includes(tag.id)) {
                rv.push(pet);
            }
        }
        
    }
    return rv;
}

function findPetById(parent, args, context, info) {
    const pets = context.pets;
    const id = args.id;
    for (const pet of pets) {
        if (pet.id === id) {
            return pet;
        }
    }
}

/********************** USER **********************/
function login(parent, args, context, info) {
    const users = context.users;
    const username = args.username;
    const password = args.password;
    for (const user of users) {
        if (user.username === username && user.password === password) {
            return {
                code: 200, 
                message: 'Success'
            };
        }
    }
    return {
        code: 400, 
        message: 'Invalid username/password'
    };
}

function logout(parent, args, context, info) {
    return {
        code: 200, 
        message: 'Success'
    };
}

function findUserByUsername(parent, args, context, info) {
    const users = context.users;
    const username = args.username;
    for (const user of users) {
        if (user.username === username) {
            return user;
        }
    }
}

module.exports = {
    findOrderById,
    inventory, 
    findPetsByStatus, 
    findPetsByTags, 
    findPetById, 
    login, 
    logout, 
    findUserByUsername
}