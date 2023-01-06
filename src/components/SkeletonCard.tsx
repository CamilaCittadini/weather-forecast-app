import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonCard({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <Stack spacing={1} sx={{ paddingLeft: "30px", paddingTop: "30px" }}>
      <Skeleton variant="rectangular" width={width} height={height} />
    </Stack>
  );
}
