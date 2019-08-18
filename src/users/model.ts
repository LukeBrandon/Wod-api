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

export interface IUser {
    name: string;
    signInsThisWeek: number;
    age?: number;
}
