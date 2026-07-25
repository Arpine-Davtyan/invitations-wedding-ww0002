"use client";

import { useState, useTransition } from "react";
import { createGuest } from "@/lib/actions/guests";
import Success from "./Success";

export default function RSVPForm() {
  const [fullName, setFullName] = useState("");
  const [attendance, setAttendance] = useState(true);
  const [guests, setGuests] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        await createGuest({
          full_name: fullName,
          accepted: attendance,
          number: attendance ? guests : 0,
        });

        setSubmitted(true);
      } catch (error) {
        console.error(error);
      }
    });
  };

  if (submitted) {
    return (
      <Success
        attendance={attendance}
      />
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto sm:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-item">
          <label className="form-label">
            Full Name
          </label>

          <input
            type="text"
            name="fullname"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="form-input"
          />
        </div>

        <div className="form-item">
          <p className="form-label">
            Will you attend?
          </p>

          <div className="grid grid-cols-2 gap-4">
            <label
              className={`form-radio-label ${attendance
                ? "bg-dark"
                : "bg-transparent"
                }`}
            >
              <input
                hidden
                type="radio"
                name="attendance"
                checked={attendance}
                onChange={() => setAttendance(true)}
              />

              <span className={`text-sm ${attendance
                ? "text-paper"
                : "text-dark"
                }`}>
                Joyfully accepts
              </span>
            </label>

            <label
              className={`form-radio-label ${!attendance
                ? "bg-dark"
                : "bg-transparent"
                }`}
            >
              <input
                hidden
                type="radio"
                name="attendance"
                checked={!attendance}
                onChange={() => setAttendance(false)}
              />

              <span className={`text-sm ${!attendance
                ? "text-paper"
                : "text-dark"
                }`}>
                Regretfully declines
              </span>
            </label>
          </div>
        </div>

        {attendance && (
          <div className="form-item">
            <label className="form-label">
              Number of Guests
            </label>

            <input
              type="number"
              min={1}
              required
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="form-input input-number"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="btn"
        >
          {isPending ? "Sending..." : "Send RSVP"}
        </button>
      </form>
    </div>
  );
}