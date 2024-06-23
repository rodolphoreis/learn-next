
function GET(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "GET" });
}

function POST(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "POST" });
}
