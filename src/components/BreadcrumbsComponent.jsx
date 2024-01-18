import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const BreadcrumbsComponent = () => {
  return (
    <div className="lg:ml-24 md:ml-4 mt-24">
      <Box>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link
            underline="hover"
            href="#"
            color="inherit"
            display="flex"
            alignItems="center"
          >
            <HomeIcon fontSize="small" />
          </Link>
          <Link underline="hover" href="#" color="inherit">
            Flashcard
          </Link>
          <Link underline="hover" href="#" color="inherit">
            Mathematics
          </Link>

          <Typography fontWeight={600} color="#06286E">
            Relation and Function
          </Typography>
        </Breadcrumbs>
      </Box>
    </div>
  );
};

export default BreadcrumbsComponent;
