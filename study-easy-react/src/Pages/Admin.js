import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
// import LoadingButton from "@mui/lab/LoadingButton";
// import LoadingButton from "@mui/lab/LoadingButton";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
// import Stack from "@mui/material/Stack";
export default function Admin() {
  //   let navigate = redirect();
  return (
    // style={{ padding: 20 }}
    <div>
      <Grid
        container
        justify="flex-end"
        spacing={8}
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        // style={{ minHeight: "100" }}
        // sx={{ width: "100%" }}
      >
        <Grid item></Grid>
        <Grid>
          <Link to="/viewstu">
            {" "}
            <Button>View Students profile</Button>
          </Link>
        </Grid>

        {/* Empty Grid */}

        <Grid item> </Grid>
        <Grid sx={{ bgcolor: "purple" }} item xs justify="space-around">
          <Link to="/UpdateDeleteMajor">
            <Button
              color="secondary"
              variant="contained"
              size="large"
              // onClick={() => {
              //   // useNavigate("/UpdateDeleteMajor");
              //   redirect("/UpdateDeleteMajor");
              // }}
            >
              UAlbany Admin Update
            </Button>
          </Link>
          <Link to="/AddMajors">
            <Button
              size="large"
              variant="contained"
              color="secondary"
              // onClick={() => navigate("AddMajors")}
            >
              UAlbany Admin Add
            </Button>
          </Link>
        </Grid>

        <Grid sx={{ bgcolor: "darkred" }} item xs justify="flex-end">
          <Link to="/AdminUpdateOrDelete">
            <Button
              size="large"
              variant="outlined"
              sx={{ color: "white", borderColor: "black" }}
              color="error"
              //   onClick={() => navigate("AdminUpdateOrDelete")}
            >
              {" "}
              Stony brook Admin Update
            </Button>
          </Link>
          <Link to="/AdminAdd">
            <Button
              size="large"
              sx={{ color: "white", borderColor: "black" }}
              variant="outlined"

              //   onClick={() => navigate("AdminAdd")}
            >
              Stony brook Admin Add
            </Button>
          </Link>
        </Grid>

        <Grid item sx={{ bgcolor: "white" }}>
          <Grid container direction={"row"} justify="flex-end" spacing={2}>
            <Grid item>
              <Typography item>More Admin Will come ... </Typography>
            </Grid>
            <Grid item>
              <LoadingButton
                loading
                // loading

                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
              >
                Loading more Admins
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
}
