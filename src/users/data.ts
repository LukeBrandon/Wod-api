import { IScore, IUserLogin, IUser } from "./model";

export const testData: IScore[] = [
    {
        date: 6032019,
        gender: "m",
        score: "3 rounds + 15 reps",
        userId: 1234,
        userName: "Alex Abernathy",
    },
    {
        date: 6032019,
        gender: "f",
        score: "3 rounds + 15 reps",
        userId: 1243,
        userName: "Catherine Nettle",
    },
    {
        date: 6032019,
        gender: "m",
        score: "3 rounds + 15 reps",
        userId: 1334,
        userName: "Luke Brandon",
    },
    {
        date: 6032019,
        gender: "m",
        score: "3 rounds + 15 reps",
        userId: 1442,
        userName: "Jerry Kelly",
    },

    {
        date: 6042019,
        gender: "m",
        score: "2 rounds + 15 reps",
        userId: 1234,
        userName: "Alex Abernathy",
    },
    {
        date: 6042019,
        gender: "f",
        score: "2 rounds + 15 reps",
        userId: 1243,
        userName: "Catherine Nettle",
    },
    {
        date: 6042019,
        gender: "m",
        score: "2 rounds + 15 reps",
        userId: 1334,
        userName: "Luke Brandon",
    },
    {
        date: 6042019,
        gender: "m",
        score: "2 rounds + 16 reps",
        userId: 1442,
        userName: "Jerry Kelly",
    },

    {
        date: 6062019,
        gender: "m",
        score: "1 rounds + 15 reps",
        userId: 1234,
        userName: "Alex Abernathy",
    },
    {
        date: 6062019,
        gender: "f",
        score: "1 rounds + 15 reps",
        userId: 1243,
        userName: "Catherine Nettle",
    },
    {
        date: 6062019,
        gender: "m",
        score: "1 rounds + 15 reps",
        userId: 1334,
        userName: "Luke Brandon",
    },
    {
        date: 6052019,
        gender: "m",
        score: "1 rounds + 15 reps",
        userId: 1442,
        userName: "Jerry Kelly",
    },

];

export const users: IUser[] = [
    { name: "Luke Brandon", signInsThisWeek: 5 },
    { name: "Alex Abernathy", signInsThisWeek: 2 },
    { name: "Jerry Kelly", signInsThisWeek: 3 },
    { name: "Catherine Nettle", signInsThisWeek: 4 },
    { name: "Bailey Kelly", signInsThisWeek: 1 },
];

export const logins: IUserLogin[] = [
    {
        email: "lukebrandon68@gmail.com",
        password: "yes",
        status: "owner",
    },
    {
        email: "yes@gmail.com",
        password: "yes",
        status: "member",
    },
    {
        email: "no@gmail.com",
        password: "yes",
        status: "member",
    },
    {
        email: "yeet@gmail.com",
        password: "yes",
        status: "member",
    },
    {
        email: "tyler@gmail.com",
        password: "yes",
        status: "member",
    },
    {
        email: "adam@gmail.com",
        password: "yes",
        status: "member",
    },

];
