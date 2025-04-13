import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Habip",
  lastName: "Akyol",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mathematician",
  avatar: "/images/avatar.png",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Turkish", "English","Deutsch"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/habipakyol",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/habip-akyol-600295200/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/wayklroffical",
  },
  {
    name: "Email",
    icon: "email",
    link: "habipakyol003@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mathematician and Data Scientist</>,
  subline: (
    <>
      I'm Habip, a mathematician and aspiring software developer,
<br /> crafting smart solutions with C# and a passion for AI.
<br /> After hours, I build unique projects that blend sports, learning, and technology.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/habip-akyol-8jnbaa/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Habip is an Istanbul-based mathematician and software developer
with a passion for transforming real-world challenges into smart, practical solutions.
His work spans algorithm design, educational platforms, and the intersection of sports and AI.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SmartPro",
        timeframe: "2023 - 2025",
        role: "Software Developer & Instructor",
        achievements: [
          <>
            Delivered foundational software development courses in C# and Python, helping over 50 students 
            gain practical coding skills.
          </>,
          <>
            Designed interactive lessons and exercises, increasing student engagement and course completion rate by 30%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpeg",
            alt: "SmartPro Training Program",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance Projects",
        timeframe: "2020 - 2023",
        role: "Mathematics and Software Development Consultant",
        achievements: [
          <>
            Designed and implemented custom software solutions for various clients, improving operational
            efficiency by up to 30%.
          </>,
          <>
            Created a personalized tutoring platform to enhance student engagement and learning outcomes,
            leading to a 20% increase in user retention.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Mimar Sinan Fine Arts University",
        description: <>Studied Mathematics with a strong emphasis on statistics, linear algebra, and algorithmic thinking — foundational skills for data science and machine learning.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python & Machine Learning",
        description: <>Experienced in Python for data science workflows using libraries like NumPy, pandas, scikit-learn, and TensorFlow. Proficient in building, training, and evaluating ML models.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpeg",
            alt: "Machine Learning Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "SQL",
        description: <>Skilled in using SQL for querying, cleaning, and managing structured data — a critical part of data preprocessing and exploration in data science projects.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpeg",
            alt: "SQL Data Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  }
  ,
};

const blog = {
  label: "Blog",
  title: "Writing ML&AI and Maths...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
