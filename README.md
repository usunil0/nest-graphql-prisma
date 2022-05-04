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

Airports

```
query airports{
  airports{
    id
    name
  }
}
```

```
mutation CreateAirport($name:String!){
  createAirport(createAirportInput:{name:$name}){
    id
    name
  }
}
```

Planes

```
query Planes{
  planes{
    id
    arrivalAirport{
      name
    }
    departureAirport{
      name
    }
    arrivalTime
    departureTime
  }
}
```

```
mutation CreatePlane(
  $name: String!
  $arrivalAirportId: Int!
  $departureAirportId: Int!
  $arrivalTime: Int!
  $departureTime: Int!
) {
  createPlane(
    createPlaneInput: {
      name: $name
      arrivalAirportId: $arrivalAirportId
      departureAirportId: $departureAirportId
      arrivalTime: $arrivalTime
      departureTime: $departureTime
    }
  ) {
    id
  }
}
```

Tickets

```
query Tickets{
  tickets{
    id
    price
    planeId
    userId
  }
}
```

```
mutation PlaneTicket($price:Int!,$plane:Int!,$user:Int!){
  createTicket(createTicketInput:{price:$price,planeId:$plane,userId:$user}){
    id
  }
}
```
