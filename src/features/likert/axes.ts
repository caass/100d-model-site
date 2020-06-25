import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faPeopleCarry,
  faTransgenderAlt,
  faUsersSlash,
  faGavel,
  faDumpsterFire,
  faBaby,
  faSkullCrossbones,
  faMeh,
  faGrinTongueWink,
  faHandPointLeft,
  faHandPointRight,
  faCloud,
  faGlobeAfrica,
  faFemale,
  faMale,
  faMarsDouble,
  faFistRaised,
  faHandsWash,
  faPeopleArrows,
  faUserClock,
  faUserNurse,
  faTransgender,
  faRunning,
  faVenusMars,
  faMercury,
  faExclamationCircle,
  faQuestionCircle,
  faUserSlash,
  faUserShield,
  faSpa,
  faPeace,
  faBomb,
  faBriefcase,
  faPray,
  faUsers,
  faUser,
  faInfinity,
  faFilter,
  faTv,
  faGlasses,
  faFighterJet,
  faDove,
  faGlobe,
  faHome,
  faBan,
  faMoneyBillWave,
  faBabyCarriage,
  faSchool,
  faLandmark,
  faBuilding,
  faSmile,
  faTired,
  faLeaf,
  faIndustry,
  faSyringe,
  faPills,
  faProcedures,
  faKiwiBird,
  faBrain,
  faLaughBeam,
  faSadCry,
  faDragon,
  faFlushed,
  faRobot,
  faRadiation,
  faTimesCircle,
  faJoint,
  faCheckCircle,
  faCheck,
  faTimes,
  faAngry,
  faGrinBeam,
  faSkull,
  faGrinHearts,
  faMehBlank,
  faGrimace,
  faRadiationAlt,
  faTree,
  faEgg,
  faHandPeace,
  faPhone,
  faSignLanguage,
  faHandMiddleFinger,
  faHeartBroken,
  faSoap,
  faBong,
  faSmokingBan,
  faSmoking,
  faBookReader,
  faSnowboarding,
  faCarCrash,
  faBookOpen,
  faGrinBeamSweat,
  faLaughSquint,
  faRecycle,
  faComments,
  faCrosshairs,
  faUserTimes,
  faUserPlus,
  faCouch,
  faMotorcycle,
  faFileAlt,
  faGamepad,
  faUserTie,
  faFlagUsa,
  faRetweet,
  faHeart,
  faPastafarianism,
  faPlaceOfWorship,
  faMapMarked,
  faSeedling,
  faCut,
  faPassport,
  faHandshake,
  faCannabis,
  faChessPawn,
  faChessQueen,
  faSmileBeam,
  faHourglassEnd,
  faHourglassStart,
  faUmbrellaBeach,
  faMeteor,
  faTheaterMasks,
  faShieldAlt,
  faHeadSideVirus,
  faThermometerEmpty,
  faThermometerFull,
  faCompressArrowsAlt,
  faExpandArrowsAlt,
  faDemocrat,
  faHandHoldingUsd,
  faShapes,
  faHeartbeat,
  faFeatherAlt,
  faDrumstickBite,
  faGasPump,
  faHandsHelping,
  faLayerGroup,
  faThumbsUp,
  faSyncAlt,
  faUndoAlt,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faCogs,
  faChalkboardTeacher,
  faStarOfDavid,
  faStarAndCrescent,
  faCommentDots,
  faWalking,
  faCubes,
  faPersonBooth,
  faHandRock,
  faFrog,
  faHorseHead,
  faKeyboard,
  faPencilAlt,
  faIcons,
  faEraser,
  faCompass,
  faMapPin,
  faVoteYea,
  faCrown,
  faDiceD20,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faAccessibleIcon,
  faTwitter,
  faRedditAlien,
  faUnity,
  faDiscord,
  faFacebookF,
  faFortAwesome,
  faCreativeCommonsZero,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

interface SpectrumEndpoint {
  label: string;
  icon: IconDefinition;
}

interface SpectrumAxis {
  shortName: string;
  longName: string;
  description?: string;
  endpoints:
    | [SpectrumEndpoint, SpectrumEndpoint]
    | [SpectrumEndpoint, SpectrumEndpoint, SpectrumEndpoint];
}

interface SpectrumAxisGroup {
  label: string;
  description: string;
  axes: SpectrumAxis[];
}

export const isGroup = (
  a: SpectrumAxis | SpectrumAxisGroup
): a is SpectrumAxisGroup => "axes" in a;

export const axes: Array<SpectrumAxis | SpectrumAxisGroup> = [
  {
    shortName: "economics",
    longName: "Economic Axis",
    description:
      "On the far left, you have communism, where you have eliminated the need for wealth entirely ᵇᵉᶜᵃᵘˢᵉ ᵉᵛᵉʳʸᵇᵒᵈʸ ˢᵗᵃʳᵛᵉᵈ ᵗᵒ ᵈᵉᵃᵗʰ and on the economic far right you have a world where Jeff Bezos has cloned himself ten million times and has just paid everybody to suck his dick. And like, all the pleasure receptors just goes into this big, massive Jeff Bezos brain that just like...orgasms a million times.",
    endpoints: [
      {
        label: "Communism",
        icon: faPeopleCarry,
      },
      {
        label: "Capitalism",
        icon: faAmazon,
      },
    ],
  },
  {
    shortName: "cultural",
    longName: "Cultural Axis",
    description:
      "The cultural left wants to redistribute and kind of like...open up places in culture and society for more kinds of people. Cultural right wants to close up more and more areas and concentrate cultural power within the hands of fewer people. If you think more kinds of people deserve more kinds of equality you're more culturally left, and if you think less (sic) kinds of people deserve less kinds of equality, and you kind of like...balk at the idea of \"equality\", you're probably more culturally right.",
    endpoints: [
      {
        label: "Progressive",
        icon: faTransgenderAlt,
      },
      {
        label: "Traditional",
        icon: faUsersSlash,
      },
    ],
  },
  {
    shortName: "governmental",
    longName: "Governmental Axis",
    description:
      "How do you want your ideals to be enforced? Do you want a state to enforce these ideals, or do you think everybody should just act this way?",
    endpoints: [
      {
        label: "Security",
        icon: faGavel,
      },
      {
        label: "Freedom",
        icon: faDumpsterFire,
      },
    ],
  },
  {
    shortName: "time",
    longName: "The Fourth Spectrum is Time",
    description:
      "Some people will try to tell you that time isn't the fourth dimension. Those people are wrong. You can plot somebody's political direction over time by using the fourth dimension. Imagine you slide the fourth dimensional slider, and you can see how someone's political values change as that slider moves from the beginning of their life to the end of their life. Editor's note: I guess this spectrum is just...your age?",
    endpoints: [
      {
        label: "Baby",
        icon: faBaby,
      },
      {
        label: "Old",
        icon: faSkullCrossbones,
      },
    ],
  },
  {
    shortName: "wacky",
    longName: "Tame/Wacky",
    description:
      "This spectrum dictates how wacky your ideology is. For example, communism and fascism...not that wacky. Posadism, which is communism but we nuke the world in order to bring it about...pretty wacky.",
    endpoints: [
      {
        label: "Tame",
        icon: faMeh,
      },
      {
        label: "Wacky",
        icon: faGrinTongueWink,
      },
    ],
  },
  {
    label: "Accelerationist / Deccelerationist",
    description:
      "The sixth through ninth spectrums are different accelerationist and deccelerationist spectrums.",
    axes: [
      {
        shortName: "tech-accel",
        longName: "Technological",
        description:
          "On the de-acceleration side, you have anarcho-primitivists, who are essentially luddites who want to stop the flow of technology because they think it's damaging to humans as a whole. On the other end, you have trans-humanists, who want to accelerate the progress of technology so they can finally get that robot d*ck they've always wanted.",
        endpoints: [
          {
            label: "Decceleration",
            icon: faHandPointLeft,
          },
          {
            label: "Acceleration",
            icon: faHandPointRight,
          },
        ],
      },
      {
        shortName: "econ-accel",
        longName: "Economic",
        description:
          "There exists economically left-wing accelerationists, who believe in communism, but think the way to do that is to endorse the free market to the point that it collapses, and from the rubble of that collapse, build the communism out of that.",
        endpoints: [
          {
            label: "Decceleration",
            icon: faHandPointLeft,
          },
          {
            label: "Acceleration",
            icon: faHandPointRight,
          },
        ],
      },
      {
        shortName: "cultural-accel",
        longName: "Cultural",
        description:
          '[Jreg] made a video on cultural accelerationism called "The Reverse Ethnostate"',
        endpoints: [
          {
            label: "Decceleration",
            icon: faHandPointLeft,
          },
          {
            label: "Acceleration",
            icon: faHandPointRight,
          },
        ],
      },
    ],
  },
  {
    shortName: "esoteric",
    longName: "Esoteric vs. Materialistic",
    description:
      "Esotericism is about the spirit and non-material things, as opposed to the material things and the real world.",
    endpoints: [
      {
        label: "Esoteric",
        icon: faCloud,
      },
      {
        label: "Worldly",
        icon: faGlobeAfrica,
      },
    ],
  },
  {
    label: "Granular Cultural Spectrums",
    description:
      "Here's a bunch of different spectrums dictating how much power should be given or taken away from certain groups of people.",
    axes: [
      {
        shortName: "matriarchal",
        longName: "Matriarchal / Patriarchal",
        endpoints: [
          {
            label: "Matriarchal",
            icon: faFemale,
          },
          {
            label: "Patriarchal",
            icon: faMale,
          },
        ],
      },
      {
        shortName: "gay",
        longName: "Gay Inclusive / Exclusive",
        endpoints: [
          {
            label: "Gay Exclusive",
            icon: faVenusMars,
          },
          {
            label: "Gay Inclusive",
            icon: faMarsDouble,
          },
        ],
      },
      {
        shortName: "race",
        longName: "Racially Inclusive / Exclusive",
        endpoints: [
          {
            label: "Racially Exclusive",
            icon: faHandsWash,
          },
          {
            label: "Racially Inclusive",
            icon: faFistRaised,
          },
        ],
      },
      {
        shortName: "bi",
        longName: "Bi Inclusive / Exclusive",
        endpoints: [
          {
            label: "Bi Exclusive",
            icon: faMale,
          },
          {
            label: "Bi Inclusive",
            icon: faPeopleArrows,
          },
        ],
      },
      {
        shortName: "age",
        longName: "Age Inclusive / Exclusive",
        endpoints: [
          {
            label: "Age Exclusive",
            icon: faUserClock,
          },
          {
            label: "Age Inclusive",
            icon: faUserNurse,
          },
        ],
      },
      {
        shortName: "trans",
        longName: "Trans Inclusive / Exclusive",
        endpoints: [
          {
            label: "Trans Exclusive",
            icon: faEgg,
          },
          {
            label: "Trans Inclusive",
            icon: faTransgender,
          },
        ],
      },
      {
        shortName: "disabled",
        longName: "Disabled Inclusive / Exclusive",
        endpoints: [
          {
            label: "Disabled Exclusive",
            icon: faRunning,
          },
          {
            label: "Disabled Inclusive",
            icon: faAccessibleIcon,
          },
        ],
      },
      {
        shortName: "enby",
        longName: "Non-Binary Inclusive / Exclusive",
        endpoints: [
          {
            label: "Non-Binary Exclusive",
            icon: faVenusMars,
          },
          {
            label: "Non-Binary Inclusive",
            icon: faMercury,
          },
        ],
      },
      {
        shortName: "queer",
        longName: "Queer Inclusive / Exclusive",
        endpoints: [
          {
            label: "Queer Exclusive",
            icon: faExclamationCircle,
          },
          {
            label: "Queer Inclusive",
            icon: faQuestionCircle,
          },
        ],
      },
      {
        shortName: "exclusive",
        longName: "Inclusive / Exclusive to Exclusive People",
        endpoints: [
          {
            label: "Exclusive Exclusive",
            icon: faUserSlash,
          },
          {
            label: "Exclusive Inclusive",
            icon: faUserShield,
          },
        ],
      },
    ],
  },
  {
    shortName: "extreme",
    longName: "EXTREME axis",
    description:
      "The extreme axis is important because you can be very far to the edges, but still have a relatively non-extreme ideology.",
    endpoints: [
      {
        label: "Mild",
        icon: faSpa,
      },
      {
        label: "Extreme",
        icon: faSnowboarding,
      },
    ],
  },
  {
    shortName: "violence",
    longName: "Personal Political Violence Axis",
    description:
      "The Personal Political Violence Axis dictates how much personal political violence an individual is expected or encouraged to inflict with their ideology.",
    endpoints: [
      {
        label: "No Violence",
        icon: faPeace,
      },
      {
        label: "Lots of Violence",
        icon: faBomb,
      },
    ],
  },
  {
    shortName: "morality",
    longName: "Morality vs. Amorality Spectrum",
    description:
      "This isn't good vs. evil, it's moral vs. amoral -- some ideologies specifically make a claim to morality, but an amoral political ideology completely forgoes morality in general.",
    endpoints: [
      {
        label: "Amoral",
        icon: faBriefcase,
      },
      {
        label: "Moral",
        icon: faPray,
      },
    ],
  },
  {
    shortName: "collectivism",
    longName: "Collectivism vs. Individualism",
    description:
      "You can be a collectivist anarchist, or you could even be an individualist totalitarian.",
    endpoints: [
      {
        label: "Collectivism",
        icon: faUsers,
      },
      {
        label: "Individualism",
        icon: faUser,
      },
    ],
  },
  {
    shortName: "timelines",
    longName: "Likelihood of this ideology to exist in alternate timelines",
    description:
      "Syndicalism might be real in some far-off, weird, uh..alternate universe.",
    endpoints: [
      {
        label: "Unlikely",
        icon: faFilter,
      },
      {
        label: "Likely",
        icon: faInfinity,
      },
    ],
  },
  {
    shortName: "anime",
    longName: "Anime Axis",
    description:
      "On one end of the axis, you have most extremists, who watch a lot of anime. And on the other end of the spectrum you have disdain for weebs.",
    endpoints: [
      {
        label: "Normal",
        icon: faGlasses,
      },
      {
        label: "Weeb",
        icon: faTv,
      },
    ],
  },
  {
    shortName: "military",
    longName: "Foreign Military Policy",
    description:
      "Hawks, on one end of the spectrum, like to use direct military intervention as quick as they can, while doves try to use non-military and more pacifistic approaches.",
    endpoints: [
      {
        label: "Militaristic",
        icon: faFighterJet,
      },
      {
        label: "Pacifistic",
        icon: faDove,
      },
    ],
  },
  {
    shortName: "foreign-affairs",
    longName: "Foreign Affairs (in general)",
    description:
      "How much do you want your country to be involved -- at all -- with things that are happening abroad?",
    endpoints: [
      {
        label: "Uninvolved",
        icon: faHome,
      },
      {
        label: "Very Involved",
        icon: faGlobe,
      },
    ],
  },
  {
    shortName: "billionaires",
    longName: "How Much Tax Should Billionaires Pay",
    endpoints: [
      {
        label: "None",
        icon: faMoneyBillWave,
      },
      {
        label: "A lot",
        icon: faHandHoldingUsd,
      },
    ],
  },
  {
    shortName: "inheritance",
    longName: "Inheritance",
    description:
      "On one end, people's parents can give them all the advantages they could ever want in life. On the other end of the spectrum, all children would be raised communally so everyone grows up in exactly equal conditions.",
    endpoints: [
      {
        label: "High Parental Advantage",
        icon: faBabyCarriage,
      },
      {
        label: "Low Parental Advantage",
        icon: faSchool,
      },
    ],
  },
  {
    shortName: "wealth-control",
    longName: "Control Over Wealth",
    description:
      "Does the state control where the money goes, or does the individual control where the money goes?",
    endpoints: [
      {
        label: "People",
        icon: faUsers,
      },
      {
        label: "State",
        icon: faLandmark,
      },
      {
        label: "Corporations",
        icon: faBuilding,
      },
    ],
  },
  {
    shortName: "regret",
    longName: "Regret",
    description: "How much are believers in this ideology in regret?",
    endpoints: [
      {
        label: "Not at all",
        icon: faSmileBeam,
      },
      {
        label: "Completely",
        icon: faTired,
      },
    ],
  },
  {
    shortName: "environment",
    longName: "Environmental Axis",
    description:
      "You may associate the left with environmental protection, but that's not a rule. This is why you have stuff like eco-fascism.",
    endpoints: [
      {
        label: "F*** the Earth",
        icon: faIndustry,
      },
      {
        label: "Environmentally Conscious",
        icon: faLeaf,
      },
    ],
  },
  {
    label: "eugenics",
    description:
      "On the left, you want these kinds of people to be having more babies. On the right, you want these kinds of people to be having less babies.",
    axes: [
      {
        shortName: "racial-eugenics",
        longName: "Racial Eugenics",
        endpoints: [
          {
            label: "Sterilize",
            icon: faSyringe,
          },
          {
            label: "Fertilize",
            icon: faBaby,
          },
        ],
      },
      {
        shortName: "economic-eugenics",
        longName: "Economic Eugenics",
        endpoints: [
          {
            label: "Sterilize",
            icon: faSyringe,
          },
          {
            label: "Fertilize",
            icon: faBaby,
          },
        ],
      },
      {
        shortName: "abled-eugenics",
        longName: "Abled Eugenics",
        endpoints: [
          {
            label: "Sterilize",
            icon: faSyringe,
          },
          {
            label: "Fertilize",
            icon: faBaby,
          },
        ],
      },
      {
        shortName: "iq-eugenics",
        longName: "IQ Eugenics",
        endpoints: [
          {
            label: "Sterilize",
            icon: faSyringe,
          },
          {
            label: "Fertilize",
            icon: faBaby,
          },
        ],
      },
      {
        shortName: "ideological-eugenics",
        longName: "Ideological Eugenics",
        endpoints: [
          {
            label: "Sterilize",
            icon: faSyringe,
          },
          {
            label: "Fertilize",
            icon: faBaby,
          },
        ],
      },
      {
        shortName: "eugenicist-eugenics",
        longName: "Eugenicist Eugenics",
        endpoints: [
          {
            label: "Sterilize",
            icon: faSyringe,
          },
          {
            label: "Fertilize",
            icon: faBaby,
          },
        ],
      },
      {
        shortName: "me-eugenics",
        longName: "Just fucking euthanize me",
        endpoints: [
          {
            label: "Sterilize",
            icon: faSyringe,
          },
          {
            label: "Fertilize",
            icon: faBaby,
          },
        ],
      },
    ],
  },
  {
    shortName: "natalist",
    longName: "Natalist Spectrum",
    description:
      "How many kids do you think people should be having, in general, across the world at this point in time? On the far left, there's anti-natalists, who think that just being born is a great injustice, and that we shouldn't be doing that to anybody else.",
    endpoints: [
      {
        label: "Anti-Natalist",
        icon: faPills,
      },
      {
        label: "Natalist",
        icon: faProcedures,
      },
    ],
  },
  {
    shortName: "iq",
    longName: "IQ Spectrum",
    description: "How intelligent is the person who believes this ideology?",
    endpoints: [
      {
        label: "Smooth Brain",
        icon: faKiwiBird,
      },
      {
        label: "Wrinkled Brain",
        icon: faBrain,
      },
    ],
  },
  {
    shortName: "sad",
    longName: "Proponent Sadness",
    description: "How sad are the proponents of this ideology?",
    endpoints: [
      {
        label: "Not",
        icon: faLaughBeam,
      },
      {
        label: "Extremely",
        icon: faSadCry,
      },
    ],
  },
  {
    shortName: "anxiety",
    longName: "Anxiety Spectrum",
    description: "How anxious and afraid are followers of this ideology?",
    endpoints: [
      {
        label: "Not",
        icon: faDragon,
      },
      {
        label: "Extremely",
        icon: faFlushed,
      },
    ],
  },
  {
    shortName: "tech-threat",
    longName: "Technological Threat Spectrum",
    description:
      "This spectrum dictates how much of a threat you think technology is to humanity.",
    endpoints: [
      {
        label: "Serious threat",
        icon: faRadiation,
      },
      {
        label: "Not a threat",
        icon: faRobot,
      },
    ],
  },
  {
    shortName: "dimension",
    longName: "Upper-Dimensional Feasibility",
    description:
      "How likely is this ideology to work in one of the upper dimensional possible universes? Where gravity falls up, and there is no technical mass and everything is just a big blob of cosmic force?",
    endpoints: [
      {
        label: "Impossible",
        icon: faTimesCircle,
      },
      {
        label: "Yo lemme hit that",
        icon: faJoint,
      },
    ],
  },
  {
    shortName: "possible",
    longName: "Possible vs. Impossible Spectrum",
    description:
      "For example, we know that neo-liberalism is possible because it's currently the dominant ideology. But something like anti-gravitationalism, which seeks to reverse the flow of gravity upwards, well that's obviously an impossible ideology.",
    endpoints: [
      {
        label: "Possible",
        icon: faCheckCircle,
      },
      {
        label: "Impossible",
        icon: faTimesCircle,
      },
    ],
  },
  {
    shortName: "soviet",
    longName: "Soviet Union Opinion Correctness",
    description:
      "The 48th spectrum is how correct your opinions on the Soviet Union are.",
    endpoints: [
      {
        label: "Incorrect",
        icon: faTimes,
      },
      {
        label: "Correct",
        icon: faCheck,
      },
    ],
  },
  {
    shortName: "truecom",
    longName: 'Has "Real [X]" Been Tried?',
    description:
      'Has the "real" version of your ideology been put into practice?',
    endpoints: [
      {
        label: "No",
        icon: faAngry,
      },
      {
        label: "Yes",
        icon: faGrinBeam,
      },
    ],
  },
  {
    shortName: "will",
    longName: "Will to Live",
    description:
      "This spectrum is your will to live at this point in taking the survey.",
    endpoints: [
      {
        label: "Alt+F4",
        icon: faSkull,
      },
      {
        label: "Halfway done woo!!",
        icon: faGrinHearts,
      },
    ],
  },
  {
    shortName: "blank",
    longName: "",
    endpoints: [
      {
        label: "",
        icon: faMehBlank,
      },
      {
        label: "",
        icon: faMehBlank,
      },
    ],
  },
  {
    shortName: "community",
    longName: "I Think What I Lack Most is Community",
    description:
      "I'm very isolated here. I don't have as many friends as I thought I would. It turns out that being a success doesn't mean anything if you don't have anybody to share it with.",
    endpoints: [
      {
        label: "oof",
        icon: faMehBlank,
      },
      {
        label: "uhh...sorry?",
        icon: faMehBlank,
      },
    ],
  },
  {
    shortName: "utopia",
    longName: "Utopian vs. Dystopian",
    description:
      "Do you want society to progress towards a dystopia or utopia?",
    endpoints: [
      {
        label: "Dystopia",
        icon: faRadiationAlt,
      },
      {
        label: "Utopia",
        icon: faTree,
      },
    ],
  },
  {
    shortName: "oomer",
    longName: "Doomer vs. Bloomer",
    description:
      "Doomer philosophies are built upon the expectation of total societal collapse, whether or not they actually want that collapse. Bloomer philosophies are based on optimistic predictions for the future.",
    endpoints: [
      {
        label: "Doomer",
        icon: faMeteor,
      },
      {
        label: "Bloomer",
        icon: faUmbrellaBeach,
      },
    ],
  },
  {
    shortName: "fuck",
    longName: "Would you?",
    description: "If this ideology was a person, would you f*** them?",
    endpoints: [
      {
        label: "Never in a million years",
        icon: faHandMiddleFinger,
      },
      {
        label: "All day every day",
        icon: faSignLanguage,
      },
    ],
  },
  {
    shortName: "friend",
    longName: "If this ideology was a person, would it be my friend?",
    description:
      "...and if it was my friend, would it come visit me? Would it guide me through problems in life? And call me up sometimes? And the two of us could have chats? Would it tell me that it's ok to be alone, because it's here with me?",
    endpoints: [
      {
        label: "Nope",
        icon: faHandPeace,
      },
      {
        label: "Of course!",
        icon: faPhone,
      },
    ],
  },
  {
    shortName: "help",
    longName: "Why are all [Jreg's] videos cries for help?",
    endpoints: [
      {
        label: "help",
        icon: faHeartBroken,
      },
      {
        label: "help",
        icon: faHeartBroken,
      },
    ],
  },
  {
    shortName: "drugs",
    longName: "Drug Usage",
    description:
      "How likely are proponents of this ideology to be on some kind of intoxicant?",
    endpoints: [
      {
        label: "Sober",
        icon: faSoap,
      },
      {
        label: "F***ed Up",
        icon: faBong,
      },
    ],
  },
  {
    shortName: "smoking",
    longName: "Smoking",
    description: "How likely are proponents of this ideology to smoke?",
    endpoints: [
      {
        label: "Smoke Free",
        icon: faSmokingBan,
      },
      {
        label: "Like a chimney",
        icon: faSmoking,
      },
    ],
  },
  {
    shortName: "theory",
    longName: "Theory Literacy",
    description:
      "The 60th spectrum is how likely proponents of this ideology are to read political theory",
    endpoints: [
      {
        label: "Removed from Reality",
        icon: faBookReader,
      },
      {
        label: "Illiterate",
        icon: faTwitter,
      },
    ],
  },
  {
    shortName: "praxis",
    longName: "PRAXIS AXIS",
    description:
      "Some ideologies are entirely about doing something. For example, anti-fascism isn't really an ideology so much as a thing that you do -- so we could say that anti-fascism is pure praxis. But we could say anarcho-communism, which is often the philosophy that informs anti-fascists, is the...uh..the uh...theory...part...of the praxis-theory thing.",
    endpoints: [
      {
        label: "P R A X I S",
        icon: faCarCrash,
      },
      {
        label: "Theory",
        icon: faBookOpen,
      },
    ],
  },
  {
    shortName: "istjokes",
    longName: "Political Correctness",
    description:
      "This spectrum is the ability to make racist, sexist, and ableist jokes without feeling guilty about it -- more broadly, this is the political correctness spectrum.",
    endpoints: [
      {
        label: "Politically Correct",
        icon: faGrinBeamSweat,
      },
      {
        label: "Shameless",
        icon: faLaughSquint,
      },
    ],
  },
  {
    shortName: "slurs",
    longName: "Why Are You Using That Slur?",
    description:
      "Why are proponents of this ideology using a slur? Are they using it because they're parts of the group that the slur refers to, or just talking about the slur in general, or are they using it to specifically harm the groups that they're targeting?",
    endpoints: [
      {
        label: "In-Group Use / Reclamation",
        icon: faRecycle,
      },
      {
        label: "Free Speech Absolutism",
        icon: faComments,
      },
      {
        label: "Overt Hostility",
        icon: faCrosshairs,
      },
    ],
  },
  {
    shortName: "friends",
    longName: "Friends",
    description:
      "How many friends do proponents of this ideology tend to have?",
    endpoints: [
      {
        label: "0",
        icon: faUserTimes,
      },
      {
        label: "A lot",
        icon: faUserPlus,
      },
    ],
  },
  {
    shortName: "leave",
    longName: "Just Go",
    description:
      "What is your desire to pick up, get the fuck out of this town, and go find some people who care about you.",
    endpoints: [
      {
        label: "I like it here :)",
        icon: faCouch,
      },
      {
        label: "I'm already gone.",
        icon: faMotorcycle,
      },
    ],
  },
  {
    shortName: "memes",
    longName: "Meme Ability",
    description:
      "How good are proponents of this ideology at spreading their ideology via memes?",
    endpoints: [
      {
        label: "Boomer / Leftist",
        icon: faFileAlt,
      },
      {
        label: "Viral",
        icon: faRetweet,
      },
    ],
  },
  {
    shortName: "gamers",
    longName: "Gamers vs. Non-Gamers",
    description: "This is actually the most important spectrum.",
    endpoints: [
      {
        label: "Gamer",
        icon: faGamepad,
      },
      {
        label: "Non-Gamer",
        icon: faUserTie,
      },
    ],
  },
  {
    shortName: "isolation",
    longName: "Isolationism / Globalism",
    description:
      "Isolationists want to cut off ties to all other nations, while globalists have only the best intentions.",
    endpoints: [
      {
        label: "Isolationist",
        icon: faCut,
      },
      {
        label: "(((((((Globalist)))))))",
        icon: faPassport,
      },
    ],
  },
  {
    shortName: "sex",
    longName: "Spectrum 69",
    description:
      "How much do proponents of this ideology smash? How much puss do they crush? That's right -- we're talking about the sex number!",
    endpoints: [
      {
        label: "Virgin",
        icon: faRedditAlien,
      },
      {
        label: "Chad",
        icon: faHeart,
      },
    ],
  },
  {
    shortName: "religion",
    longName: "Religion vs. Secularism",
    description:
      "You may think that this is a simple left-wing right-wing divide, but that's not true. The Nazis, for example, were entirely secular.",
    endpoints: [
      {
        label: "Secular",
        icon: faPastafarianism,
      },
      {
        label: "Pious",
        icon: faPlaceOfWorship,
      },
    ],
  },
  {
    shortName: "colonial",
    longName: "Colonial vs. Decolonial",
    description:
      "Again, you may view this a simple left-right divide, but that's because your brain is as small as a tiny feeble stick.",
    endpoints: [
      {
        label: "Colonial",
        icon: faMapMarked,
      },
      {
        label: "Decolonial",
        icon: faSeedling,
      },
    ],
  },
  {
    shortName: "infighting",
    longName: "Infighting",
    description:
      "This is how likely people within this ideology are to infight with people in the same ideology.",
    endpoints: [
      {
        label: "Unified",
        icon: faUnity,
      },
      {
        label: "Discordant",
        icon: faDiscord,
      },
    ],
  },
  {
    shortName: "warhawk",
    longName: "Jingoism",
    description:
      "How much does your ideology advocate for war in other countries? For example, a high demand for war in other countries leads to jingoism, while a low demand for war leads to cuc- pacifism.",
    endpoints: [
      {
        label: "Pacifism",
        icon: faHandshake,
      },
      {
        label: "Jingoism",
        icon: faFlagUsa,
      },
    ],
  },
  {
    shortName: "dank",
    longName: "Dank vs. Normie",
    endpoints: [
      {
        label: "Dank",
        icon: faCannabis,
      },
      {
        label: "Normie",
        icon: faFacebookF,
      },
    ],
  },
  {
    shortName: "genz",
    longName: "Gen Z Appeal vs. Boomer Appeal",
    description:
      "There is no way to appeal to both simultaneously, and that's a good thing.",
    endpoints: [
      {
        label: "Boomer",
        icon: faHourglassEnd,
      },
      {
        label: "Zoomer",
        icon: faHourglassStart,
      },
    ],
  },
  {
    shortName: "monarchy",
    longName: "Monarchy",
    description:
      "Do these people want a monarchy? And if so, how much power do they want the monarchy to have?",
    endpoints: [
      {
        label: "No Monarchy",
        icon: faChessPawn,
      },
      {
        label: "Absolute Monarchy",
        icon: faChessQueen,
      },
    ],
  },
  {
    shortName: "grimace",
    longName: "That specific face",
    description:
      "How likely are people in this ideology to make the specific face at 26:54 in Jreg's video?",
    endpoints: [
      {
        label: "Not at all",
        icon: faSmile,
      },
      {
        label: "Constantly",
        icon: faGrimace,
      },
    ],
  },
  {
    shortName: "wishywashy",
    longName: "The Wishy-Washy Spectrum",
    description:
      "On one end the spectrum, we have rigid proponents of this ideology who would never change their beliefs no matter what happens. On the other end of the spectrum, we have wishy-washy people who would change their beliefs to any other ideology, probably because they only joined the ideology in the first place because they thought they could find a group of people that would actually like them, but they actually couldn't find that. Because they'll never find that. So they just switch ideologies, looking for a group of people they belong to. And they don't realize that they just don't belong. Period.",
    endpoints: [
      {
        label: "Rigid",
        icon: faFortAwesome,
      },
      {
        label: "Wishy-Washy",
        icon: faTheaterMasks,
      },
    ],
  },
  {
    shortName: "justice",
    longName: "Justice",
    description:
      'On the punitive end of the spectrum, you have people who think that punishments for criminals should be harsh. On the rehabilitative end of the spectrum, you have people with wacky ideas like "Maybe criminals can change" and "Maybe we should be investing more into mental health services for them so they can rehabilitate.',
    endpoints: [
      {
        label: "Punitive",
        icon: faShieldAlt,
      },
      {
        label: "Rehabilitative",
        icon: faHeadSideVirus,
      },
    ],
  },
  {
    shortName: "climate",
    longName: "Climate Change",
    description:
      "Nobody still denies climate change -- it's just levels of thinking about it. On one end of the spectrum you have people who think about it a lot, and on the other end you have people who never think about it.",
    endpoints: [
      {
        label: "No thoughts head empty",
        icon: faThermometerEmpty,
      },
      {
        label: "Constantly in a state of panic",
        icon: faThermometerFull,
      },
    ],
  },
  {
    shortName: "sympathizer",
    longName: "Centrist Sympathizer Spectrum",
    description:
      "On one end of the spectrum you have people who might be extremists themselves, but empathize with the centrists. And of course, the centrists themselves. On the other end of the spectrum, you have anti-centrists.",
    endpoints: [
      {
        label: "Centrist Sympathizer",
        icon: faCompressArrowsAlt,
      },
      {
        label: "Anti-Centrist",
        icon: faExpandArrowsAlt,
      },
    ],
  },
  {
    shortName: "tolerance",
    longName: "Tolerance Towards Opposing Ideas",
    description:
      "Leftists are typically intolerant towards fascist ideas, right-wingers are typically intolerant towards communist ideas, and centrists are typically intolerant towards both.",
    endpoints: [
      {
        label: "Tolerant",
        icon: faDemocrat,
      },
      {
        label: "Intolerant",
        icon: faBan,
      },
    ],
  },
  {
    shortName: "constructivist",
    longName: "Constructivist vs. Essentialist",
    description:
      'Constructivists think that things are how they are because the environment around them shaped them that way. Essentialists think that things are the way they are because they just _are_ that way. For example, constructivists tend to be in favor of rehabilitative justice because a criminal is a criminal because the environment created that criminal, while essentialists think the criminal was born a criminal and we should just throw them in jail forever because they\'re probably never going to change. The same thing goes for broader issues, like capitalism. Constructivists might say "Capitalism is just a byproduct of its environment, and we can remove it." An essentialist might say "Capitalism is there because capitalism needs to be there."',
    endpoints: [
      {
        label: "Constructivist",
        icon: faShapes,
      },
      {
        label: "Essentialist",
        icon: faHeartbeat,
      },
    ],
  },
  {
    shortName: "smallg",
    longName: "genocide Potential",
    description:
      "Small g genocide meaning all the kinds of genocide that aren't ethnically based, such as classicide, politicide, all the other kinds of -cide.",
    endpoints: [
      {
        label: "Murder bad",
        icon: faFeatherAlt,
      },
      {
        label: "Eat the Rich",
        icon: faDrumstickBite,
      },
    ],
  },
  {
    shortName: "bigg",
    longName: "Genocide Potential",
    description:
      "Big G Genocide is the potential for ethnic cleansing on a mass scale.",
    endpoints: [
      {
        label: "nazis???",
        icon: faHandsHelping,
      },
      {
        label: "nazis!!!",
        icon: faGasPump,
      },
    ],
  },
  {
    shortName: "irony",
    longName: "Irony Spectrum",
    description:
      "This spectrum is how ironic the ideology is, or how ironic the person who believes in the ideology is.",
    endpoints: [
      {
        label: "Genuine",
        icon: faThumbsUp,
      },
      {
        label: "Ironic",
        icon: faLayerGroup,
      },
    ],
  },
  {
    shortName: "reactionary",
    longName: "Reactionary vs. Non-Reactionary",
    description:
      "Non-reactionary ideologies exist independently of what's going on with other ideologies, while reactionary ideologies kind of flare up in response to other ideologies gaining strength.",
    endpoints: [
      {
        label: "Reactionary",
        icon: faUndoAlt,
      },
      {
        label: "Non-Reactionary",
        icon: faSyncAlt,
      },
    ],
  },
  {
    shortName: "reactionarykind",
    longName: "What Kind of Reactionary Ideology",
    description:
      'So for example, left-wing reactionary ideologies flare up in response to right-wing ideologies, and right-wing ideologies flare up in response to left-wing ideologies. But what I\'m really concerned about here is the reactionary centrist ideologies. See, reactionary centrists are something that we\'ve really overlooked in our political discourse -- they\'re people who view too much polarization on both sides. They abandon all their morals and all their values and they position themselves in the dead center between two extremes because they view themselves as "mEnDiNg a bRoKeN sYsTeM" and "cReAtInG bIpArTiSaNsHiP cHaNgE" and "kEePiNg pEoPlE tOgEtHeR." These people are the worst of them all. We gotta get rid of \'em.',
    endpoints: [
      {
        label: "Left-Wing Reactionary",
        icon: faLongArrowAltLeft,
      },
      {
        label: "Right-Wing Reactionary",
        // heh, alt-right
        icon: faLongArrowAltRight,
      },
    ],
  },
  {
    shortName: "practical",
    longName: "Practical vs. Idealist",
    description:
      "How practical is this ideology? Is it more a thought experiment that exists better in your head than in the real world?",
    endpoints: [
      {
        label: "Practical",
        icon: faCogs,
      },
      {
        label: "Idealist",
        icon: faChalkboardTeacher,
      },
    ],
  },
  {
    label: "Alignment Chart",
    description:
      "The 90th & 91st spectrums are the good vs. evil and chaotic vs. lawful spectrums. It's literally just a D&D alignment chart.",
    axes: [
      {
        shortName: "goodevil",
        longName: "Good vs. Evil",
        endpoints: [
          {
            label: "Good",
            icon: faDiceD20,
          },
          {
            label: "Evil",
            icon: faDiceD20,
          },
        ],
      },
      {
        shortName: "chaotic",
        longName: "Chaotic vs. Lawful",
        endpoints: [
          {
            label: "Chaotic",
            icon: faDiceD20,
          },
          {
            label: "Lawful",
            icon: faDiceD20,
          },
        ],
      },
    ],
  },
  {
    shortName: "israel",
    longName: "Palestine vs. Israel",
    description: "Remember, there's only one answer.",
    endpoints: [
      {
        label: "Israel",
        icon: faStarOfDavid,
      },
      {
        label: "Palestine",
        icon: faStarAndCrescent,
      },
    ],
  },
  {
    shortName: "code",
    longName: "How Happy I Am Right Now",
    description:
      'This spectrum is how happy I am knowing that even now, on the 93rd spectrum and one thousand five hundred and fifty-sixth line of "code" in this file, just writing down all of these different spectrums, I still have to build literally the entire functionality of this quiz. Disclaimer: it\'s zero.',
    endpoints: [
      {
        label: "",
        icon: faCreativeCommonsZero,
      },
      {
        label: "",
        icon: faCreativeCommonsZero,
      },
    ],
  },
  {
    shortName: "bluster",
    longName: "Talk is Cheap",
    description:
      "This spectrum is how likely proponents of this ideology are to just talk about this ideology instead of doing any actual politics.",
    endpoints: [
      {
        label: "Talk the Talk",
        icon: faCommentDots,
      },
      {
        label: "Walk the Walk",
        icon: faWalking,
      },
    ],
  },
  {
    shortName: "minecraft",
    longName: "Minecraft or Fortnite",
    endpoints: [
      {
        label: "Minecraft",
        icon: faCubes,
      },
      {
        label: "Fortnite",
        icon: faTwitch,
      },
    ],
  },
  {
    shortName: "revolutionary",
    longName: "Revolutionary vs. Non-Revolutionary",
    description:
      "Does your ideology need the current system to collapse entirely in order for it to be built?",
    endpoints: [
      {
        label: "Reform",
        icon: faPersonBooth,
      },
      {
        label: "Revolution",
        icon: faHandRock,
      },
    ],
  },
  {
    shortName: "penis",
    longName: "Metaphorical Penis Size",
    endpoints: [
      {
        label: "Micropenis",
        icon: faFrog,
      },
      {
        label: "Huge Meaty Hog",
        icon: faHorseHead,
      },
    ],
  },
  {
    shortName: "pencil",
    longName: "Pencil Spectrum",
    description: "It's how many pencils the people in the ideology have.",
    endpoints: [
      {
        label: "None",
        icon: faKeyboard,
      },
      {
        label: "A lot",
        icon: faPencilAlt,
      },
    ],
  },
  {
    shortName: "multicultural",
    longName: "Multiculturalism vs. Assimilationism",
    description:
      'On the multiculturalism end of the spectrum we have people who want people to keep their own diverse cultures while integrating with the community, or just in general globally keep their own cultures. Assimilationists want those cultures to merge with the cultures -- for example, if an immigrant comes into America, they want that immigrant to become a staunch red-blooded American with red-blooded American values. A multiculturalist would be like "Ok, well you can still keep your religion, you can keep your language, it\'s ok for you to keep all those things," while an assimilationist would say "You\'re speaking English, you\'re adopting our values, etc."',
    endpoints: [
      {
        label: "Multiculturalism",
        icon: faIcons,
      },
      {
        label: "Assimilationism",
        icon: faEraser,
      },
    ],
  },
  {
    shortName: "unitary",
    longName: "Unitary vs. Federal",
    description:
      "This spectrum dictates where you want power to be concentrated; do you want it to be concentrated more locally or more broadly?",
    endpoints: [
      {
        label: "Federal",
        icon: faCompass,
      },
      {
        label: "Unitary",
        icon: faMapPin,
      },
    ],
  },
  {
    shortName: "democracy",
    longName: "Democracy",
    description:
      "The democracy spectrum dictates who gets a say in determining how the system turns out. In the far authoritarian quadrant (sic) you have maybe just a couple people, maybe just one person deciding everything. On the far left of the spectrum, you have every single individual having a say in what goes on.",
    endpoints: [
      {
        label: "Democracy",
        icon: faVoteYea,
      },
      {
        label: "Authority",
        icon: faCrown,
      },
    ],
  },
];

export type { SpectrumAxis, SpectrumAxisGroup };
