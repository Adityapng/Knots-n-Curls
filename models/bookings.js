import { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  fullName: {
    type: String,
    required: [true, "Name is required!"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Phone Number is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
  },
  date: {
    type: Date,
    required: [true, "Date is required!"],
  },
  service: {
    type: String,
    required: [true, "Service is required!"],
  },
});

const Booking = models.Booking || model("Booking", BookingSchema);

export default Booking;