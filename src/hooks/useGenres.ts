import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from "../services/apiClient";
import { FetchResponse } from '../services/apiClient';

const apiClient = new APIClient('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres}
});

export default useGenres;
