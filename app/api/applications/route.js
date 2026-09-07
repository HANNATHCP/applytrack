import connectDB from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const application = await Application.create({
      company: body.company,
      role: body.role,
      status: body.status,
    });

    return Response.json(application, {
      status: 201,
    });
  } catch (error) {
    return Response.json(
      {
        message: "Failed to create application",
      },
      {
        status: 500,
      }
    );
  }
}