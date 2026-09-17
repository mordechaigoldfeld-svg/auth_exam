import bcrypt from 'bcrypt'


export async function hashPassword(paswword) {
    return bcrypt.hash(paswword,10)
}


export async function comparePassword(paswword,hashPassword) {

    return bcrypt.compare(paswword,hashPassword)
    
}



// console.log(await comparePassword('12345','$2b$10$kanNvK.5jTOegzF4GdR/..N3BPoYhiVJCGKLKTvHQsD6DCslg2Oo.'));
