import { connectToDB } from "@utils/database";
import Booking from "@models/bookings";

export const POST = async (req) => {
  const { date, phoneNumber, name, email, userID, service, attended } =
    await req.json();

  try {
    await connectToDB();
    const newBooking = new Booking({
      creator: userID,
      fullName: name,
      phoneNumber: phoneNumber,
      email: email,
      date: date,
      service: service,
      attended: attended, //added
    });
    await newBooking.save();

    return new Response(JSON.stringify(newBooking), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new booking", { status: 500 });
  }
};
