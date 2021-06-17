# API Module
Click [here](https://petstore3.swagger.io/) for API details.
## Instructions
1. Install node.js on your computer 
2. Clone the repo
3. Navigate to project root
4. Install dependencies: `npm install`
5. Type `node src/index.js` in your terminal 
6. Go to `localhost:4000`
## Sample queries
### findOrderById
```
query {
  findOrderById(id: "order-1") {
    id
  }
}
```
### inventory
```
query {
  inventory 
}
```
### findPetsByStatus
```
query {
  findPetsByStatus(status: AVAILABLE) {
    id
  }
}
```
### findPetsByTags
```
query {
  findPetsByTags(tags: ["tag-1"]) {
    id
  }
}
```
### findPetById
```
query {
  findPetById(id: "pet-1") {
    id 
    name
  }
}
```
### login
```
query {
  login(username: "acomanzo", password: "password") {
    code 
    message
  }
}
```
### logout
```
query {
  logout(id: "user-1") {
    code
    message
  }
}
```
### findUserByUsername
```
query {
  findUserByUsername(username: "acomanzo") {
    id
    username
  }
}
```
## Sample mutations
### createOrder
```
mutation {
  createOrder(petId: "pet-1", quantity: 1) {
    id 
    petId
    quantity
    shipDate
    status
    complete
  }
}
```
### deleteOrder
```
mutation {
  deleteOrder(id: "order-2") {
    id
  }
}
```
### updatePet
```
mutation {
  updatePet(id: "pet-1", name: "Mr. Fluffy", category: "category-1", photoUrls: ["google.com", "twitter.com"], tags: ["tag-1"], status: AVAILABLE) {
    id
    name 
    photoUrls
  }
}
```
### createPet
```
mutation {
	createPet(name: "Mr. Mittens", category: "category-1", photoUrls: ["google.com"], tags: ["tag-1"], status: AVAILABLE) {
    id
    name
    category {
      id
      name
    }
    photoUrls
    tags {
      id
      name
    }
    status
  }
}
```
### deletePet
```
mutation {
  deletePet(id: "pet-2") {
    name
  }
}
```
### addPetPhotos
```
mutation {
  addPetPhotos(id: "pet-1", photoUrls: ["facebook.com"]) {
    id
    name
    photoUrls
  }
}
```
### createUser
```
mutation {
  createUser(username: "acomanzo", firstName: "Tony", lastName: "Comanzo", email: "tcomanzo@jahnelgroup.com", password: "password", phone: "1232131321") {
    id
    username
    firstName
    lastName
    email
    password
    phone
    userStatus
  }
}
```
### createUsers
```
mutation {
  createUsers(users: [["mcheung", "Matt", "Cheung", "mcheung@jahnelgroup.com", "password", "123213213"]]) {
    id
    username
  }
}
```
### updateUser
```
mutation {
  updateUser(id: "user-1", username: "tcomanzo", firstName: "Tony", lastName: "Comanzo", email: "tcomanzo@jahnelgroup.com", password: "password", phone: "12323213") {
    id
    username
  }
}
```
### deleteUser
```
mutation {
  deleteUser(id: "user-2") {
    id 
    username
  }
}
```
### createCategory
```
mutation {
  createCategory(name: "Cat") {
    id
    name
  }
}
```
### createTag
```
mutation {
  createTag(name: "Cat") {
    id
    name
  }
}
```