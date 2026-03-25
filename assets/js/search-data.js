// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/sambhasana.github.io/";
    },
  },{id: "nav-team",
          title: "team",
          description: "The people behind the research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sambhasana.github.io/team/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications from the Saṁbhāṣaṇa Research Group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sambhasana.github.io/publications/";
          },
        },{id: "nav-join-us",
          title: "join us",
          description: "Interested in working with us?",
          section: "Navigation",
          handler: () => {
            window.location.href = "/sambhasana.github.io/join/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-organized-the-graph-mining-workshop",
          title: 'Organized the Graph Mining workshop.',
          description: "",
          section: "News",},{id: "news-our-work-bhram-il-has-been-accepted-for-publication",
          title: 'Our work “Bhram-il” has been accepted for publication.',
          description: "",
          section: "News",},{id: "news-successfully-organized-the-bhasha-workshop-at-iitb",
          title: 'Successfully organized the Bhasha workshop at IITB.',
          description: "",
          section: "News",},{id: "news-sambhasana-research-group-was-created",
          title: 'Sambhasana Research Group was created.',
          description: "",
          section: "News",},{id: "news-a-warm-welcome-to-the-new-phd-students-joining-us-this-january",
          title: 'A warm welcome to the new PhD students joining us this January!',
          description: "",
          section: "News",},{id: "news-the-group-website-is-now-officially-up-and-running",
          title: 'The group website is now officially up and running!',
          description: "",
          section: "News",},{id: "news-research-talk-presented-at-csa",
          title: 'Research talk presented at CSA.',
          description: "",
          section: "News",},{id: "news-delivered-two-talks-including-a-keynote-at-gujarat-engineering-college-rajkot",
          title: 'Delivered two talks (including a Keynote) at Gujarat Engineering College, Rajkot.',
          description: "",
          section: "News",},{id: "news-talk-delivered-at-the-pre-summit",
          title: 'Talk delivered at the Pre-summit.',
          description: "",
          section: "News",},{id: "news-guest-lectures-and-visit-by-prof-arnab-bhattacharya",
          title: 'Guest lectures and visit by Prof. Arnab Bhattacharya.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/sambhasana.github.io/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/sambhasana.github.io/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/sambhasana.github.io/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%72%69%73%68%69%6B%65%73%68.%72%74@%68%79%64%65%72%61%62%61%64.%62%69%74%73-%70%69%6C%61%6E%69.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=k9aGwEgAAAAJ&hl=en", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
