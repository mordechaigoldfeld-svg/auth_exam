export function createUserModel({ email, passwordHash, name,image }) {

    return {
        email,
        passwordHash,
        name,
        createdAt: new Date().toISOString(),
        image
    }

}


export function returnUserWithoutPass(user) {

    const newUsers = { id: user._id.toString(), username: user.name, email: user.email,createdAt:user.createdAt,image:user.image  }
        
    return newUsers
}



