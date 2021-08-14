import axios from 'axios';
import { GithubUser } from '../types/types';

export const getUsers = async (): Promise<GithubUser[]> => {
    try {
        const url = `https://api.github.com/users`;
        const result = await axios.get(url, {
            headers: { Accept: 'application/vnd.github.v3+json' }
        });
        return result.data;
    } catch (error) {
        console.log(error, JSON.stringify({ error, statys: error.response?.status, message: error.response?.message }))
        return [];
    }
}

export const getUser = async (username: string): Promise<GithubUser> => {
    try {
        const url = `https://api.github.com/users/${username}`;
        const result = await axios.get(url, {
            headers: { Accept: "application/vnd.github.v3+json" },
        });
        return result.data;
    } catch (error) {
        console.log(
            error,
            JSON.stringify({
                error,
                statys: error.response?.status,
                message: error.response?.message,
            })
        );
        return {} as GithubUser;
    }
};