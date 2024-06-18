import React from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

function Error404Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-16 bg-gray-100">
      <div className="w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography
            variant="h1"
            color="primary"
            className="mt-2 text-center text-4xl font-extrabold leading-tight tracking-tight md:text-7xl md:leading-none"
          >
            404
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            className="mt-4 text-center text-lg font-medium tracking-tight md:text-xl"
          >
            The page you requested could not be found.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          className="mt-6"
        >
          <Link to="/">
            <Button variant="contained" color="primary" size="large">
              Go Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Error404Page;
