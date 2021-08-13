interface User{
    address: string,
    created_date: string,
    email: string,
    firstname: string,
    id: number,
    lastname: string,
    middlename: string,
    phone: string,
    role: number,
    updated_date: string


}
export { User }

export enum Role{
    SUPER_ADMIN=0,
    ADMIN=1,
    SUBSCRIBER=2

}