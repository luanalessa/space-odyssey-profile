import React, { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '../../../api/github';

import * as S from './styles';
import ProjectBox from '../../../components/atoms/projectBox';
import Title from '../../../components/atoms/title';

const username = 'luanalessa';
const principalProjects = [
  'simple-rest-api ',
  'alphaflix-frontend',
  'alphaflix-backend',
  'day-n-night-toggle',
  'on36-ijs-xodobank',
  'javacado',
  'simple-chat-uol',
  'driven-eats',
  'resume',
];
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const repoData = await fetchGitHubRepos(username);
        const formattedProjects = repoData
          .filter((repo) => principalProjects.includes(repo.name)) 
          .map((repo) => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description, 
            tecnologies: repo.language 
          }));
        setProjects(formattedProjects);
      } catch (err) {
        console.error('Error fetching repos:', err);
      }
    };

    loadRepos();
  }, []);
  return (
    <S.Content id="ProjectsTag">
      <Title>Projects</Title>
      <S.Box>
        {projects.slice(0, 8).map((p) => (
          <ProjectBox
            href={p.url}
            rel="noreferrer"
            target="_blank"
            key={p.name}
            title={p.name}
            description={p.description}
            tecnologies={p.tecnologies}
          />
        ))}
      </S.Box>

      <S.More>see all repositories</S.More>
    </S.Content>
  );
}
