interface User {
  firstName: string;
  lastName: string;
  points: number;
  goal: number;
  friends: User[];
  profilePicture: string;
  bannerPicture: string;
  conquistas: {
    title: string;
    icon: string;
  }[];
  updates: {
    icon: string;
    title: string;
    points: string;
  }[];
  products: {
    title: string;
    picture: string;
  }[];
}

export default User;
