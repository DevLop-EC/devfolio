import { useEffect, useState } from 'react';

import { getGithubRepository } from '../helpers/getGithubRepository';

export const useFetchRepository = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGithubRepository().then((repo) => {
      setState({
        data: repo,
        loading: false,
      });
    });
  }, []);

  return state;
};
