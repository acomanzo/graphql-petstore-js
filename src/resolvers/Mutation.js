/********************** ORDER **********************/
function createOrder(parent, args, context, info) {
    const orders = context.orders;
    const petId = args.petId;
    const quantity = args.quantity;
    const order = {
        id: `order-${orders.length + 1}`,
        petId: petId, 
        quantity: quantity,
        shipDate: "future", 
        status: "PLACED", 
        complete: false
    };
    context.orders.push(order);
    return order;
} 

function deleteOrder(parent, args, context, info) {
    const orders = context.orders;
    const id = args.id;
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        if (order.id === id) {
            orders.splice(i);
            return order;
        }
    }
}

function updatePet(parent, args, context, info) {
    const pets = context.pets;
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        if (pet.id === args.id) {
            pet.name = args.name;
            pet.category = args.id;
            pet.photoUrls = args.photoUrls;
            pet.tags = args.tags;
            pet.status = args.status;
        }
        return pet;
    }
}

function createPet(parent, args, context, info) {
    const pets = context.pets;
    let tags = [];
    for (let i = 0; i < args.tags.length; i++) {
        for (let j = 0; j < context.tags.length; j++) {
            if (args.tags[i] === context.tags[j].id) {
                tags.push(context.tags[j]);
            }
        }
    }
    let category = {};
    for (const item of context.categories) {
        if (item.id === args.category) {
            category = item;
        }
    }
    const pet = {
        id: `pet-${pets.length + 1}`,
        name: args.name,
        category: category, 
        photoUrls: args.photoUrls, 
        tags: tags,
        status: args.status
    };
    pets.push(pet);
    return pet;
}

function deletePet(parent, args, context, info) {
    const pets = context.pets;
    const id = args.id;
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        if (pet.id === id) {
            pets.splice(i);
            return pet;
        }
    }
}

function addPetPhotos(parent, args, context, info) {
    const id = args.id;
    const photos = args.photoUrls;
    const pets = context.pets;
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        if (pet.id === id) {
            pet.photoUrls.concat(photos);
            return pet;
        }
    }
}

function createUser(parent, args, context, info) {
    const users = context.users;
    const user = {
        id: `user-${users.length + 1}`,
        username: args.username,
        firstName: args.firstName, 
        lastName: args.lastName, 
        email: args.email, 
        password: args.password, 
        phone: args.phone,
        userStatus: 0
    };
    users.push(user);
    return user;
}

function createUsers(parent, args, context, info) {
    const newUsers = args.users;
    const users = context.users;
    for (const item of newUsers) {
        const user = {
            id: `user-${users.length + 1}`,
            username: item[0],
            firstName: item[1], 
            lastName: item[2], 
            email: item[3], 
            password: item[4], 
            phone: item[5],
            userStatus: 0
        };
        users.push(user);
    }
    return users;
}

function updateUser(parent, args, context, info) {
    const users = context.users;
    for (user of users) {
        if (user.id === args.id) {
            user.username = args.username;
            user.firstName = args.firstName;
            user.lastName = args.lastName;
            user.email = args.email;
            user.password = args.password;
            user.phone = args.phone;
        }
        return user;
    }
}

function deleteUser(parent, args, context, info) {
    let users = context.users;
    const id = args.id;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === id) {
            users.splice(i);
            return user;
        }
    }
}

function createCategory(parent, args, context, info) {
    let categories = context.categories;
    const category = {
        id: `category-${categories.length + 1}`, 
        name: args.name 
    };
    categories.push(category);
    return category;
}

function createTag(parent, args, context, info) {
    let tags = context.tags;
    const tag = {
        id: `tag-${tags.length + 1}`,
        name: args.name 
    };
    tags.push(tag);
    return tag;
}

module.exports = {
    createOrder,
    deleteOrder,
    updatePet,
    createPet,
    deletePet,
    addPetPhotos,
    createUser,
    createUsers,
    updateUser,
    deleteUser,
    createCategory,
    createTag
}