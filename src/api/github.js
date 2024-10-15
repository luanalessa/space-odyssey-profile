import axios from 'axios';

export const fetchGitHubRepos = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching repositories');
  }
};
