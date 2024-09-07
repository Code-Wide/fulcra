// HERO SLIDER IMAGES
import firstfullimage from "../../assets/images/webp/Main-Media.webp";
import firstfullimage2 from "../../assets/images/webp/halfCircle.webp";
import firstimage from "../../assets/images/svg/Media1.svg";
import secondimage from "../../assets/images/svg/Media2.svg";
import thirdimage from "../../assets/images/svg/Media3.svg";
import fourthimage from "../../assets/images/svg/Media4.svg";
import fifthimage from "../../assets/images/svg/Media5.svg";

// OFFERNING SLIDER IMAGES
import sliderLogoImg from "../../assets/images/webp/sliderlogo.webp";
import grillimg from "../../assets/images/webp/chrill.webp";
import almostComplete from "../../assets/images/webp/almostCompleteCircle.webp";
import dom from "../../assets/images/webp/Dom.webp";
import skateBoard from "../../assets/images/webp/skateboard.webp";
import halfCircle from "../../assets/images/webp/halfCircle.webp";
import mach from "../../assets/images/webp/Mach.webp";
import headphone from "../../assets/images/webp/headphone.webp";
import fullCircle from "../../assets/images/webp/completeCircle.webp";
import vr from "../../assets/images/webp/Veerdom.webp";
import vrBoy from "../../assets/images/webp/VRimg.webp";

// SIDERBAR DATA IMAGE
import fitness_watch from "../../assets/images/png/fitness_watch.png";
import offer_bag from "../../assets/images/png/offer-bag.png";
import {
  FaceBookIcon,
  Instagram,
  Linkdin,
  Tiktok,
  Twiter,
  PopupFbIcon,
  PopupTwitterIcon,
  PopupInstaIcon,
  PopupLinkedInIcon,
  PopupRedditIcon,
} from "./Icons";

//  HERO SLIDER DATA
export const HeroSliderData = [
  {
    sliderImage: firstimage,
    fullImage: firstfullimage,
    isVideo: true,
  },
  {
    sliderImage: secondimage,
    fullImage: firstfullimage,
    isVideo: false,
  },
  {
    sliderImage: thirdimage,
    fullImage: firstfullimage,
    isVideo: false,
  },
  {
    sliderImage: fourthimage,
    fullImage: firstfullimage,
    isVideo: false,
  },
  {
    sliderImage: fifthimage,
    fullImage: firstfullimage,
    isVideo: false,
  },
];

// OFFERNING SLIDER
export const OfferSlider = [
  {
    id: 1,
    sliderLogo: sliderLogoImg,
    heading1: "Spark Grills",
    heading2: "Austin, TX, USA",
    mainheading: "Spark Grills: Precision Charcoal Grilling",
    usagePlace: "Cooking & Kitchen",
    usagePlace2: "Home & Garden",
    sliderimg: grillimg,
    percentCircle: almostComplete,
    percentage: "94%",
    days: "Days Left",
    numberDay: "24",
    totalmessage: "482",
    totalLikes: "2.1k",
    sliderbtn: "Back Spark Grills",
  },
  {
    id: 2,
    sliderLogo: dom,
    heading1: "Rob Dyrdek Machine",
    heading2: "Los Angeles, CA, USA",
    mainheading: "Rob Dyrdek: Giant Mega Super Skateboard",
    usagePlace: "Sports & Outdoors",
    usagePlace2: "Action Sports",
    sliderimg: skateBoard,
    percentCircle: halfCircle,
    percentage: "67%",
    days: "Days Left",
    numberDay: "10",
    totalmessage: "321",
    totalLikes: "823",
    sliderbtn: "Back Spark Grills",
  },
  {
    id: 3,
    sliderLogo: mach,
    heading1: "Mach III",
    heading2: "New York City, NY, USA",
    mainheading: "Mach III: Rhodium HiFi AOC Headphones",
    usagePlace: "Technology",
    usagePlace2: "Audio",
    sliderimg: headphone,
    percentCircle: fullCircle,
    percentage: "",
    days: "Days Left",
    numberDay: "27",
    totalmessage: "5.7k",
    totalLikes: "23k",
    sliderbtn: "Back Spark Grills",
  },
  {
    id: 4,
    sliderLogo: vr,
    heading1: "Vreedom VR",
    heading2: "Charlotte, NC, USA",
    mainheading: "Vreedom VR: Graphene Metaverse Goggles",
    usagePlace: "Technology",
    usagePlace2: "VR",
    sliderimg: vrBoy,
    percentCircle: fullCircle,
    percentage: "",
    days: "Days Left",
    numberDay: "27",
    totalmessage: "10.4k",
    totalLikes: "56k",
    sliderbtn: "Back Spark Grills",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const sideBarData = [
  {
    sidebarHead: "Your Watchlist",
    statusList: [
      {
        heading: "Status",
        name: "Live Campaign",
      },
      {
        heading: "Time Remaining",
        name: "28 Days",
      },
      {
        heading: "Raised",
        name: "$450,000",
      },
    ],
    estimated: [
      {
        title: "Estimated delivery: Aug 2023",
        img: fitness_watch,
        brandName: "Eigen Fitness",
        productName: "Wearable Weightlifting Nodes",
        price: "$160",
        discount: "-43%",
        totalPrice: "$92",
      },
    ],
  },
  {
    statusList: [
      {
        heading: "Status",
        name: "Live Campaign",
      },
      {
        heading: "Time Remaining",
        name: "7 Days",
      },
      {
        heading: "Raised",
        name: "$85,000",
      },
    ],
    estimated: [
      {
        title: "Estimated delivery: May 2023",
        img: offer_bag,
        brandName: "Bolstr",
        productName: "Small Carry 3.0",
        price: "$68",
        discount: "-25%",
        totalPrice: "$51",
      },
    ],
  },
];

// share campaign pop up
export const shareCampaignPopupData = [
  {
    socialIcon: <PopupFbIcon />,
    IconName: "Facebook",
    title: "Share a Post",
    socialIconBoxColor: "bg-[#1877F2]",
  },
  {
    socialIcon: <PopupTwitterIcon />,
    IconName: "Facebook",
    title: "Share a Post",
    socialIconBoxColor: "bg-[#1D9BF0]",
  },
  {
    socialIcon: <PopupInstaIcon />,
    IconName: "Facebook",
    title: "Share a Post",
    socialIconBoxColor: "bg-[#000000]",
  },
  {
    socialIcon: <PopupLinkedInIcon />,
    IconName: "Facebook",
    title: "Share a Post",
    socialIconBoxColor: "bg-[#0A66C2]",
  },
  {
    socialIcon: <PopupRedditIcon />,
    IconName: "Facebook",
    title: "Share a Post",
    socialIconBoxColor: "bg-[#FF4500]",
  },
];
// eslint-disable-next-line react-refresh/only-export-components
export const socialIcon = [
  {
    Icon: <FaceBookIcon />,
    url: "https://www.facebook.com",
  },
  {
    Icon: <Instagram />,
    url: "https://www.instagram.com",
  },
  {
    Icon: <Twiter />,
    url: "https://www.twitter.com",
  },
  {
    Icon: <Tiktok />,
    url: "https://www.tiktok.com",
  },
  {
    Icon: <Linkdin />,
    url: "https://www.linkedin.com",
  },
];
export const footerData = [
  {
    GetTOKnowData: [
      { footerTitle: "Get to Know" },
      { a: "Fulcra Join" },
      { a: "   About Fulcra" },
      { a: " Careers" },
      { a: " Blog" },
      { a: " Press" },
    ],
  },
  {
    GetTOKnowData: [
      { footerTitle: "Make Money on Fulcra" },
      { a: "Launch a Campaign" },
      { a: " Sell on Marketplace" },
      { a: " Sell on Marketplace +" },
      { a: "Partner with Fulcra" },
      { a: "Raise on Fulcra" },
      { a: "Advertise" },
    ],
  },
  {
    GetTOKnowData: [
      { footerTitle: "Let Fulcra Help" },
      { a: "Your Orders" },
      { a: "Pro Guarantee" },
      { a: " Shipping & Returns" },
      { a: " Help" },
    ],
  },
  {
    GetTOKnowData: [{ footerTitle: "Sign Up" }],
  },
  {
    GetTOKnowData: [{ footerTitle: "Login" }],
  },
];
