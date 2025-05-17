import axios from 'axios';
import type {ApiRepUser} from  '../models/ApiRepUser';

//const API_URL = 'https://localhost:44345/api';

export const getUsers = async () => {
    try {
      const response = await axios.get<ApiRepUser>('https://localhost:44345/api/Utilisateur');
      return response.data;
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs', error);
    }
    
}