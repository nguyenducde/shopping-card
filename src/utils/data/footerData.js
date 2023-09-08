import {
  Facebook,
  Twitter,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from '@material-ui/icons';

// objects footer

export const e = [
  {
    id: 21,
    route: '/products/shirts',
    name: 'Shirts',
  },
  {
    id: 22,
    route: '/cart',
    name: 'My Cart',
  },

  {
    id: 23,
    route: '/products/coats',
    name: 'Coats',
  },
  {
    id: 24,
    route: '/',
    name: 'Tài khoản của tôi',
  },
  {
    id: 25,
    route: '/products/jackets',
    name: 'Jackets',
  },
  {
    id: 26,
    route: '/',
    name: 'Chính sách',
  },

  {
    id: 27,
    route: '/',
    name: 'Trang chủ',
  },
  {
    id: 28,
    route: '/',
    name: 'Terms',
  },
];

export const social = [
  {
    id: 31,
    icon: <Facebook />,
    platform: "Facebook",
    color: "3B5999",
    link: "https://www.facebook.com/ShopAuthenticDaLat",
  },
  {
    id: 32,
    icon: <Twitter />,
    platform: "Tiwtter",
    color: "55ACEE",
    link: "https://www.twitter.com",
  },
  {
    id: 33,
    icon: <Instagram />,
    platform: "Instagram",
    color: "E4405F",
    link: "https://www.instagram.com",
  },
];

export const contact = [
  {
    id: 331,
    icon: <Room style={{ marginRight: "10px" }} />,
    text: "Chung Cư 69 Hùng Vương, Đà Lạt",
    url: "https://osm.org/go/N2AIN--?m=",
  },
  {
    id: 332,
    icon: <Phone style={{ marginRight: "10px" }} />,
    text: "093 324 86 66",
    url: "",
  },
  {
    id: 333,
    icon: <MailOutline style={{ marginRight: "10px" }} />,
    text: "Luongminhhoang3487@gmail.com",
    // url: "mailto:y.kasper@protonmail.com",
  },
];
