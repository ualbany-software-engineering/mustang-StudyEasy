import { Card, TextField } from "@mui/material";
import React from "react";

export default function userporfileToAdmin() {
  return (
    <div>
      <Card>
        <Card item>
          <TextField name="Name" placeholder="full name" />
        </Card>

        <Card item>
          <TextField name="Exam Scorch" placeholder="sat" />
        </Card>

        <Card item>
          <TextField name="GPA" placeholder="scale 0.0 to 4.0 " />
        </Card>

        <Card item>
          <TextField name="email" placeholder="email address" />
        </Card>
        <Card item>
          <TextField name="Awards" placeholder="Awards" />
        </Card>
      </Card>
    </div>
  );
}
