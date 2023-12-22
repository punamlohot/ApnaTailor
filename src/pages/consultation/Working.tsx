import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Working = () => {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [selectedWeekdays, setSelectedWeekdays] = useState([]);
  const [timeRanges, setTimeRanges] = useState({});
  interface weekdayProps {
    weekday: string;
  }

  const handleCheckboxChange = (weekday: weekdayProps) => {
    const newSelectedWeekdays = [...selectedWeekdays];

    const index = newSelectedWeekdays.findIndex(
      (day) => day.weekday === weekday.weekday
    );

    if (index !== -1) {
      newSelectedWeekdays.splice(index, 1);
    } else {
      newSelectedWeekdays.push(weekday);
    }

    setSelectedWeekdays(newSelectedWeekdays);
  };

  const handleTimeChange = (weekday, startTime, endTime) => {
    setTimeRanges((prevTimeRanges) => ({
      ...prevTimeRanges,
      [weekday]: { startTime, endTime },
    }));
  };

  return (
    <Container fluid style={{ marginTop: "150px" }}>
      <div>Working Hours (At Shop)</div>
      <div>Choose the days and timings you prefer to operate</div>
      <div>
        <h2>Select Weekdays and Edit Time Ranges</h2>
        {weekdays.map((weekday) => (
          <div key={weekday}>
            <input
              type="checkbox"
              checked={selectedWeekdays.includes(weekday)}
              onChange={() => handleCheckboxChange(weekday)}
            />
            {weekday}{" "}
            {selectedWeekdays.includes(weekday) && (
              <>
                <input
                  type="text"
                  placeholder="Start Time"
                  value={timeRanges[weekday]?.startTime || ""}
                  onChange={(e) =>
                    handleTimeChange(
                      weekday,
                      e.target.value,
                      timeRanges[weekday]?.endTime || ""
                    )
                  }
                />
                {" to "}
                <input
                  type="text"
                  placeholder="End Time"
                  value={timeRanges[weekday]?.endTime || ""}
                  onChange={(e) =>
                    handleTimeChange(
                      weekday,
                      timeRanges[weekday]?.startTime || "",
                      e.target.value
                    )
                  }
                />
              </>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Working;

export const WorkingHome = () => {
  return (
    <Container fluid style={{ marginTop: "150px" }}>
      <div>Working Hours (At Home)</div>
    </Container>
  );
};
