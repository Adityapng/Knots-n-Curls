"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { PickDate } from "./PickDate";
import { useRouter } from "next/navigation";

const page = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [appointment, setAppointment] = useState({
    date: "",
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
  });

  const services = [
    "Make Up",
    "Hair Coloring",
    "Protein Hair Spa",
    "Hair Fall Treatment",
    "Hair Straigntening",
    "Smoothening",
    "Keratin",
    "Regular Hair Cutting",
    "Trendy Hair Cutting",
    "Clean Up / De-Tan",
    "Gold / Diamond Facial",
    "Acne Skin Facial",
  ];

  const handleDateChange = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${day} ${months[month - 1]} ${year}`;
    setAppointment({ ...appointment, date: formattedDate });
  };

  // select service
  const handleServiceClick = (service) => {
    let updatedServices;
    if (selectedServices.includes(service)) {
      updatedServices = selectedServices.filter((s) => s !== service); // Deselect
    } else {
      updatedServices = [...selectedServices, service]; // Select
    }
    setSelectedServices(updatedServices);
    setAppointment({ ...appointment, service: updatedServices });
  };

  const router = useRouter();

  const createAppointment = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!appointment.service.length) {
      alert("Please select at least one service.");
      setSubmitting(false);
      return; // Exit the function if service is empty
    }

    if (!appointment.date) {
      alert("Please select a date for your appointment.");
      setSubmitting(false);
      return; // Exit the function if date is empty
    }

    try {
      const response = await fetch("/api/appointment/new", {
        method: "POST",
        body: JSON.stringify({
          date: appointment.date,
          phoneNumber: appointment.phoneNumber,
          name: appointment.name,
          email: appointment.email,
          userID: session?.user.id,
          service: appointment.service,
        }),
      });
      if (response.ok) {
        router.push("/");
        setSubmitting(false);
        alert(
          `Your appointment of ${appointment.service.join(", ")} on ${
            appointment.date
          } is confirmed!`
        );
        console.log("test successfull!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {session?.user ? (
        <>
          <section className="flex justify-center pt-20 p-7 md:p-32 ">
            <div className="flex flex-col gap-3 md:gap-6 md:w-2/3 ">
              <div className="w-full ">
                <p className="text-3xl md:text-5xl font-dmsans ">
                  Book an appointment
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xl md:text-3xl">
                    Select one or more service
                  </p>
                </div>
                {/* <br /> */}
                <div className="flex flex-wrap gap-4 ">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className={`md:text-base text-xs rounded-full border ${
                        selectedServices.includes(service)
                          ? "border-sky-500/15 text-blue-300 bg-sky-400/20"
                          : "bg-transparent text-white border-white"
                      } px-3 py-1`}
                      onClick={() => {
                        handleServiceClick(service);
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-3xl ">Pick a date</p>
                <div className="flex flex-col">
                  <PickDate onDateChange={handleDateChange} />
                </div>
              </div>
              <form
                onSubmit={createAppointment}
                className="flex flex-col gap-6"
              >
                <div>
                  <p className="text-3xl ">Your Information</p>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    type="text"
                    id="fullName"
                    value={appointment.name}
                    onChange={(e) =>
                      setAppointment({ ...appointment, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    // placeholder="00000-00000"
                    // pattern="[0-9]{10}"
                    value={appointment.phoneNumber}
                    onChange={(e) =>
                      setAppointment({
                        ...appointment,
                        phoneNumber: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={appointment.email}
                    onChange={(e) =>
                      setAppointment({ ...appointment, email: e.target.value })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full max-w-sm px-3 py-2 bg-black border rounded-md border-muted border-zinc-900"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Next"}
                </button>
              </form>
            </div>
          </section>
        </>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
                <p className="text-3xl text-center ">
                  Sign In to book an appointment
                </p>

                <button
                  className="w-full max-w-sm px-3 py-2 bg-black border rounded-md border-muted border-zinc-900"
                  type="button"
                  id="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default page;
