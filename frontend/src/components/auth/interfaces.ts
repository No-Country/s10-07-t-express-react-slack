export interface Register {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface Errors {
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}
