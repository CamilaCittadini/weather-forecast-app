import * as React from "react";
import { AppBar, Box, Container, Typography } from "@mui/material";

function Footer() {
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

export { Footer };
