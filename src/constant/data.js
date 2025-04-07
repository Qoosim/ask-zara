import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarWh}

export const tabTexts = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About Us",
      url: "/about",
    },
    {
      id: 3,
      text: "Resources",
      url: "/resources",
    },
    {
      id: 4,
      text: "Live Chat",
      url: "/chat",
    },
    {
      id: 5,
      text: "Therapist & Doctor",
      url: "/therapist",
    },
    {
      id: 6,
      text: "Support Group",
      url: "/support",
    },
  ];

export const cardComponentInfo = [
  {
    id: 1,
    icon: faShieldHeart,
    title: "A Safe Space Just for You",
    text: "Our platform is built on trust and confidentiality, allowing you to express yourself freely.",
    color: "white"
  },
  {
    id: 2,
    icon: faCircleCheck,
    title: "Accessible Resources",
    text: "Access articles, tips, and guides on stress management, positive habits, and more.",
    color: "other"
  },
  {
    id: 3,
    icon: faUserGroup,
    title: "Peer and Professional Support",
    text: "Connect with others who understand what you’re going through for additional guidance.",
    color: "others"
  }
]

export const moodInfo = [
  {
    id: 1,
    greeting: "Hey there! 👋",
    feeling: "How are you feeling today?",
    img: faFaceFrown,
    expression: "I'm Feeling Sad",
    color: "blue"
  },
  {
    id: 2,
    greeting: "Hey there! 👋",
    feeling: "How are you feeling today?",
    img: faFaceFrownOpen,
    expression: "I'm Feeling Anxious",
    color: "pink"
  },
  {
    id: 3,
    greeting: "Hey there! 👋",
    feeling: "How are you feeling today?",
    img: faFaceSmileBeam,
    expression: "I'm Feeling Okay",
    color: "green"
  },
  {
    id: 4,
    greeting: "Hey there! 👋",
    feeling: "How are you feeling today?",
    img: faFaceSmile,
    expression: "I'm Feeling Happy",
    color: "yellow"
  }
]

export const tipsData = [
  {
    id: 1,
    img: "/assets/stress.jpg",
    title: "All You Need To Know About Coping with Academic Stress",
    content: "Discover the most effective strategies for managing academic pressure and maintaining your mental well-being.",
  },
  {
    id: 2,
    img: "/assets/habit.jpg",
    title: "Building Healthy Habits for Student Life",
    content: "Learn how to create and maintain healthy habits that support your mental and physical health throughout your university journey.",
  },
  {
    id: 3,
    img: "/assets/anxiety.jpg",
    title: "Understanding Anxiety: Signs and Solutions",
    content: "Explore the common signs of anxiety and discover practical solutions to help you cope and thrive in your daily life.",
  },
  {
    id: 4,
    img: "/assets/selfcare.jpg",
    title: "The Importance of Self-Care for Students",
    content: "Find out the significance of self-care and learn easy ways to incorporate it into your busy student schedule for improved well-being.",
  },
]

export const reviewsData = [
  {
    id: 1,
    img: "/assets/review1.jpg",
    title: "Tayo",
    star: faStar,
    msg: "Ask Zara has been a lifesaver for me. The live chat feature is comforting, and having someone to talk to, even anonymously, has really helped me manage my stress. It’s like having a friend who listens without judgment."
  },
  {
    id: 2,
    img: "/assets/review2.jpg",
    title: "Chidimma",
    star: faStar,
    msg: "I never thought mental health support could be so accessible. Ask Zara’s resources have been so helpful—I always find something that resonates with me, whether it’s an article or a conversation with a counselor. This platform is truly a blessing."
  },
  {
    id: 3,
  }
]