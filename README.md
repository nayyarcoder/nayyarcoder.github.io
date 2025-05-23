# Personal Portfolio Website

[![Deploy to GitHub Pages](https://github.com/nayyarcoder/nayyarcoder.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/nayyarcoder/nayyarcoder.github.io/actions)

This repository contains the source code for my personal portfolio website, showcasing my projects, skills, and professional experience.

## Features

- Responsive design
- Project showcase
- Skills section
- Contact information
- Professional experience

## Technologies Used

- Jekyll
- HTML5/Liquid Templates
- Tailwind CSS
- GitHub Pages
- Font Awesome Icons

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nayyarcoder/nayyarcoder.github.io.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nayyarcoder.github.io
   ```
3. Open `index.html` in your browser to view the site locally

## Project Structure

```
├── _config.yml
├── index.html
├── _data/
│   ├── skills.yml
│   ├── technologies.yml
│   ├── experiences.yml
│   ├── projects.yml
│   └── contact.yml
├── _includes/
│   ├── skills.html
│   ├── projects.html
│   ├── experience.html
│   └── other components
├── _layouts/
├── assets/
│   └── css/
└── README.md
```

## Deployment

The website is automatically deployed through GitHub Pages when changes are pushed to the main branch.

## License

MIT License - Feel free to use this project as a template for your own portfolio.

## Configuration

### Skills Section
The skills section is configured through YAML files in the `_data` directory:

1. `skills.yml` - Contains core competencies and technical skills with their proficiency percentages:
```yaml
core_competencies:
  - name: Skill Name
    percentage: 85

technical_skills:
  - name: Skill Name
    percentage: 90
```

2. `technologies.yml` - Lists technologies and frameworks with their icons:
```yaml
technologies:
  - name: Technology Name
    icon: fa-icon-name
    icon_color: text-blue-500
```

The progress bars and technology tags are automatically generated from these configurations.

## Local Development

1. Install Ruby and Jekyll:
   ```bash
   gem install bundler jekyll
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Start the local development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

Changes to any files will automatically trigger a rebuild of the site.
