import * as React from "react";
import Box from "@mui/material/Box";
import { AppBar, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container maxWidth="lg">
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, height: "8vh" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 5,
          }}
        >
          <Typography variant="caption">Camila Cittadini</Typography>
          <Typography variant="caption">
            Copyright ©{new Date().getFullYear()}
          </Typography>
          <Typography variant="caption">All rights reserved</Typography>
        </Box>
      </AppBar>
    </Container>
  );
}
