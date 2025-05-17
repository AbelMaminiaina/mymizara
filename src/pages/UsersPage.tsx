import {useUsers} from '../services/useUsers';
import {UserList} from '../components/UserList' ;

export const UsersPage = () => {
    const { users, loading } = useUsers();

    return loading ? <p>Loading...</p> : <UserList users={users} />;
}