import { useQuery } from '@tanstack/react-query';

import { axiosFetch } from './axiosFetch';

export const useGenericQuery = ({ key, url }: { key: string[] | string; url: string }) => {
  return useQuery({
    queryKey: ['generic', key],
    queryFn: () => axiosFetch({ apiUrl: url }),
  });
};
