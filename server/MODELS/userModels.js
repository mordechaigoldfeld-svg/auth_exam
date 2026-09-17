export function createUserModel({ email, passwordHash, name }) {

    return {
        email,
        passwordHash,
        name,
        createdAt: new Date().toISOString(),
    }

}


export function returnUserWithoutPass(user) {

    const newUsers = { id: user._id.toString(), username: user.name, email: user.email,createdAt:user.createdAt }
        
    return newUsers
}



