import { useEffect, useState } from 'react';

import { getGithubRepository } from '../helpers/getGithubRepository';

export const useFetchRepository = () => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getGithubRepository().then((repo) => {
      setState({
        data: repo,
      });
    });

    //cleanup
    return () => {
      setState({
        data: [],
      });
    };
  }, []);

  return state;
};