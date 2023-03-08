import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/components/db/dbConnect";
import Content from "@/components/db/ContentSchema";
export default async function MovieOnly(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();

    Content.find({ movieName: "Wednesday" }, function (err: any, users: any) {
      var userMap: any = [];

      users.forEach(function (user: any) {
        userMap.push(user);
      });
      const content = { content: userMap };

      res.status(200).json(content);
    });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
