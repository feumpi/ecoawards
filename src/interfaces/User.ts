interface User {
  firstName: string;
  lastName: string;
  points: number;
  goal: number;
  friends: User[];
  bgClass: string;
}

export default User;
