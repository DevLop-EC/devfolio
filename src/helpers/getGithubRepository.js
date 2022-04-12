export const getGithubRepository = async () => {
  const response = await fetch(`https://api.github.com/users/DevLop-EC/repos`);
  const data = await response.json();

  const proyects = data.filter((repo) => {
    if (repo.topics !== '') {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
      };
    }
    return false;
  });

  return proyects;
};
