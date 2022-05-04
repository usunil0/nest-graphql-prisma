Queries:

Get all Users

```
query Users{
  users{
    id
    email
    name
  }
}
```

```
query user($id:Int!){
  user(id:$id){
    id
    name
    email
  }
}
```

Mutations:

Create User

```
mutation CreateUser($email:String!,$name:String!){
  createUser(createUserInput:{
    email:$email,
    name:$name
  }){
    id
  }
}
```

Update User

```
mutation UpdateUser($email:String,$name:String,$id:Int!){
  updateUser(updateUserInput:{email:$email,name:$name,id:$id}){
  	id
    name
    email
  }
}
```

Remove user

```
mutation RemoveUser($id:Int!){
  removeUser(id:$id){
    id
  }
}
```
