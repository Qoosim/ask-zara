import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHandsHoldingCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";


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

export const reviewData = [
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
    img: "/assets/review3.jpg",
    title: "Emmanuel",
    star: faStar,
    msg: "The support group has made a huge difference in my life. Talking to other students who understand what I’m going through has helped me feel less alone. Ask Zara has created a real community, and I’m grateful to be part of it."
  },
  {
    id: 4,
    img: "/assets/review4.jpg",
    title: "Adetunji",
    star: faStar,
    msg: "Ask Zara is a game-changer! Being able to choose my mood before chatting is incredible—it really personalizes the experience and makes me feel understood. I’ve learned so much about myself just by using this platform."
  },
  {
    id: 5,
    img: "/assets/review5.jpg",
    title: "Hammed",
    star: faStar,
    msg: "The therapists and doctors on Ask Zara are amazing. Booking an appointment is easy, and I finally feel like I’m making progress in taking care of my mental health. It’s comforting to know there’s always someone I can reach out to."
  },
  {
    id: 6,
    img: "/assets/review6.jpg",
    title: "Omotola",
    star: faStar,
    msg: "I was hesitant to reach out for support, but Ask Zara made it simple and welcoming. The live chat, resources, and supportive community make it feel like a safe space. I feel empowered and encouraged every time I visit the platform."
  }
]

export const aboutUsCardInfo = [
  {
    id: 1,
    img: faHandsHoldingCircle,
    title: "Empathy",
    content: "We believe that understanding and compassion are essential in creating a supportive mental health community."
  },
  {
    id: 2,
    img: faUserShield,
    title: "Accessibility",
    content: "Our goal is to make mental health resources and support available to all students, regardless of background, location, or financial situation."
  },
  {
    id: 3,
    img: faUniversalAccess,
    title: "Trustworthiness",
    content: "Building trust is at the core of everything we do. We are committed to upholding high standards of professionalism, reliability, and transparency, ensuring that our users can rely on us for safe and trustworthy support."
  },
  {
    id: 4,
    img: faChartLine,
    title: "Innovation",
    content: "We embrace innovation as a pathway to improving mental health care for students. By leveraging technology and actively seeking user feedback, we are committed to enhancing our platform continuously."
  },
]
