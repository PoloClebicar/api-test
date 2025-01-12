// This should be a real class/interface representing a user entity
export type User = {
    id: number,
    email: string,
    password: string,
};

export abstract class UsersRepo {
    abstract getByEmailWithPassword(email: string): Promise<User | null>
}