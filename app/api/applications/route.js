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

export async function GET() {
  try {
    await connectDB();

    const applications = await Application.find().sort({
      createdAt: -1,
    });

    return Response.json(applications);
  } catch (error) {
    return Response.json(
      {
        message: "Failed to fetch applications",
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(request) {
  try {
    await connectDB();

    const { id } = await request.json();

    const deletedApplication = await Application.findByIdAndDelete(id);

    if (!deletedApplication) {
      return Response.json(
        {
          message: "Application not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Failed to delete application",
      },
      {
        status: 500,
      }
    );
  }
}

//update the application status or adding edit option in ui applicaction
export async function PATCH(request) {
  try {
    await connectDB();

    const { id, company, role, status } = await request.json();

    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      {
        company,
        role,
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedApplication) {
      return Response.json(
        {
          message: "Application not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(updatedApplication);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Failed to update application",
      },
      {
        status: 500,
      }
    );
  }
}