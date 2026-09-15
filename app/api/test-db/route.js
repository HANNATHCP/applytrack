import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      message: "MongoDB connected successfully",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);

    return Response.json(
      {
        message: "MongoDB connection failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
