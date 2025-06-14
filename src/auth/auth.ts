export interface User {
  username: string;
  password: string;
  role: "admin" | "user";
  personId: number; // id della persona collegata
}

// Dati fittizi (di solito vengono da un database)
export const users: User[] = [
  { username: "admin", password: "adminpass", role: "admin", personId: 1 },
  { username: "bob", password: "bobpass", role: "user", personId: 2 },
];
