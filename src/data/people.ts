export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  role: "admin" | "user" | "guest";
  isOnline: boolean;
}

export const people: Person[] = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    role: "admin",
    isOnline: true,
  },
  {
    id: 2,
    name: "Bob",
    age: 34,
    email: "bob@example.com",
    role: "user",
    isOnline: true,
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    role: "guest",
    isOnline: false,
  },
  {
    id: 4,
    name: "Diana",
    age: 45,
    email: "diana@example.com",
    role: "user",
    isOnline: true,
  },
  {
    id: 5,
    name: "Ethan",
    age: 30,
    email: "ethan@example.com",
    role: "admin",
    isOnline: false,
  },
  {
    id: 6,
    name: "Fiona",
    age: 26,
    email: "fiona@example.com",
    role: "user",
    isOnline: true,
  },
  {
    id: 7,
    name: "George",
    age: 29,
    email: "george@example.com",
    role: "guest",
    isOnline: true,
  },
  {
    id: 8,
    name: "Hannah",
    age: 33,
    email: "hannah@example.com",
    role: "user",
    isOnline: false,
  },
  {
    id: 9,
    name: "Ian",
    age: 40,
    email: "ian@example.com",
    role: "admin",
    isOnline: true,
  },
  {
    id: 10,
    name: "Jane",
    age: 27,
    email: "jane@example.com",
    role: "user",
    isOnline: true,
  },
];
