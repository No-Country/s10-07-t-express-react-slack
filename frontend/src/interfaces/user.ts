export interface IUser {
    fullName: string,
    email: string,
    password: string,
    confirmPassword?: string;
}

export interface IUserAux {
    fullName: string,
    email: string,
    _id: string
}
