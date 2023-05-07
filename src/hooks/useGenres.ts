import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import Genre from '../entities/Genre';
import genres from '../data/genres';
const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenres;