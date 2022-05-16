const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://elnaylon:Nico2901@cluster0.tqu5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'perro', edad: 10 })
    const saveUser = await user.save()
    console.log(saveUser)
}

//  crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

// buscarTodo()

const buscar = async () => {
    const user = await User.find({username: 'perro'})
    console.log(user)
}

// buscar()

const buscarUno = async () => {
    const user = await User.findOne({username: 'chanchito feliz'})
    console.log(user)
}

// buscarUno()

const actualizar = async () => {
    const user = await User.findOne({username: 'gato'})
    console.log(user)
    user.username = 'juan'
    await user.save()
}

// actualizar()

const eliminar = async () => {
    const user = await User.findOne({username: 'chanchito feliz'})
    console.log(user)
    await user.remove()
}

// eliminar()