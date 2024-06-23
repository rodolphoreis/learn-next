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
  res.status(200).json({ message: "GET" });
}

function POST(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "POST" });
}
