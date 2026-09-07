import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      message: "MongoDB connected successfully",
    });
  } catch (error) {
    return Response.json(
      {
        message: "MongoDB connection failed",
      },
      {
        status: 500,
      }
    );
  }
}