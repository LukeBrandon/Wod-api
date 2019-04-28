export interface IScore {
    date: number;
    gender: string;
    userId: number;
    userName: string;
    score: string;
}

export interface IUserLogin {
    email: string;
    password: string;
    status: string;
}
