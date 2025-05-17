import {useEffect, useState} from 'react';
import {getUsers} from '../api/user.api';
import type {User} from '../models/user' ; 

export const useUsers= ()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getUsers().then(data=>{   
                setUsers(data?.$values ?? []);
                setLoading(false);  
 
        }).catch((error) => {
            console.error("Erreur de chargement des utilisateurs :", error);
            setUsers([]); // fallback en cas d’erreur
          });
    }, []) ;
    
    return {users, loading};
};