import type { userRole }  from './userRole'

export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    userRoles : {
        $id: string;
        $values: userRole[];
    }
}