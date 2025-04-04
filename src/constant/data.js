import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";



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