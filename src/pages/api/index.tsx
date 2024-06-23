import { NextApiRequest, NextApiResponse } from "next";

interface User {
  nome: string;
  email: string;
}

const users: User[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    POST(req, res);
  } else {
    GET(req, res);
  }
}

function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send("GET");
}

function POST(req: NextApiRequest, res: NextApiResponse) {
  const user = JSON.parse(req.body);
  users.push(user);
  res.status(200).send(users);
}
