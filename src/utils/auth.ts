import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSaltSync(10);
    return await  bcrypt.hash(password, salt);
}
