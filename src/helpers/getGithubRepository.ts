export const getGithubRepository = async () => {
    const response = await fetch(`https://api.github.com/users/christianldev/repos`);
    const data = await response.json();
  
    const proyects = data.filter((repo: { topics: string; id: number; name: string; description: string; html_url: string; }) => {
      if (repo.name !== 'DevLop-EC') {
        return repo;
      }
      return false;
    });
  
    return proyects;
  };
