import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface formAppointment {
  value: {
    staffID: string;
    serviceID: string;
  };
}
