import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import blog1 from "../images/blog1.png";

function Blog() {
  return (
    
      <Card className=" relative flex flex-col text-gray-700 bg-white shadow-md w-3/12 rounded-xl bg-clip-border " >
        <CardHeader  className=" relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src={blog1}
            alt="Blog1"
            style={{ maxWidth: "300px", height: "350px" }}
          />
        </CardHeader>
        <CardBody className="p-6">
          <Typography variant="h5" color="blue-gray" className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal" >
            How to Vape with Eskobar
          </Typography>
          <Typography className="block font-sans text-base antialiased font-light leading-relaxed text-inherit" >
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="p-6 pt-0">
          <Button style={{ backgroundColor: "#F14F14" }}>Read More</Button>
        </CardFooter>
      </Card>
     
  );
}

export default Blog;
