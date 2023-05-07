import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import Genre from '../entities/Genre';
import genres from '../data/genres';
const apiClient = new APIClient<Genre>('/genres');
import ms from 'ms';

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;