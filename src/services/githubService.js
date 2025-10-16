import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'Nishanth2501'; // Your GitHub username

export const githubService = {
  // Get user profile information
  async getUserProfile() {
    try {
      const response = await axios.get(`${GITHUB_API_BASE}/users/${USERNAME}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  },

  // Get user repositories
  async getRepositories() {
    try {
      const response = await axios.get(`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=6`);
      return response.data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  },

  // Get repository languages
  async getRepositoryLanguages(repoName) {
    try {
      const response = await axios.get(`${GITHUB_API_BASE}/repos/${USERNAME}/${repoName}/languages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching repository languages:', error);
      return {};
    }
  },

  // Get all languages used across repositories
  async getAllLanguages() {
    try {
      const repos = await this.getRepositories();
      const languagePromises = repos.map(repo => this.getRepositoryLanguages(repo.name));
      const languageData = await Promise.all(languagePromises);
      
      // Combine all languages
      const allLanguages = {};
      languageData.forEach(languages => {
        Object.keys(languages).forEach(lang => {
          allLanguages[lang] = (allLanguages[lang] || 0) + languages[lang];
        });
      });
      
      return allLanguages;
    } catch (error) {
      console.error('Error fetching all languages:', error);
      return {};
    }
  }
};
