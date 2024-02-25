"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countries } from "@/app/Config/countries";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { categories } from "@/app/Config/category";
import { Textarea } from "../ui/textarea";

const AddHomeForm = () => {
  const [content, setContent] = useState("");

  const handleButtonClick = (action) => {
    // Implement your toolbar button actions here
    // For example: handle bold, italic, underline, etc.
    // Update the content accordingly
  };

  return (
    <div className="mx-auto w-full">
      <form>
        <div className="flex justify- space-x-11">
          <div>
            <Label htmlFor="title">Title:</Label>
            <Input
              type="text"
              placeholder="Enter title"
              className="lg:min-w-80 min-w-28"
              id="title"
              name="title"
            ></Input>
          </div>
          <div>
            <Label htmlFor="countries">Countries:</Label>
            <Select>
              <SelectTrigger className=" lg:min-w-80 min-w-28  ">
                <SelectValue placeholder="Countries" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((e, i) => (
                  <SelectItem key={i} value={e.value}>
                    {e.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify- space-x-11">
          <div>
            <Label htmlFor="title">City:</Label>
            <Input
              type="text"
              placeholder="Enter city"
              className="lg:min-w-80 min-w-28 "
              id="city"
              name="city"
            ></Input>
          </div>
          <div>
            <Label htmlFor="title">State:</Label>
            <Input
              type="text"
              placeholder="Enter state"
              className="lg:min-w-80 min-w-28 "
              id="state"
              name="state"
            ></Input>
          </div>
        </div>
        <div className="flex justify- space-x-11">
          <div>
            <Label htmlFor="title">Price:</Label>
            <Input
              type="text"
              placeholder="Enter price"
              className="lg:min-w-80 min-w-28 "
              id="city"
              name="city"
            ></Input>
          </div>
          <div>
            <Label htmlFor="title">Image:</Label>
            <Input
              type="file"
              placeholder="state"
              className="lg:min-w-80 min-w-28 "
              id="state"
              name="state"
            ></Input>
          </div>
        </div>
        <div>
          <Label>Description:</Label>
          <div className="relative">
            <Textarea
              placeholder="Enter your description here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 text-base border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <Label>Categories:</Label>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 ">
          {categories.map((e) => (
            <div key={e.id} className="space-x-2">
              <Checkbox id={e.name} />
              <label htmlFor={e.name} className="text-sm font-medium">
                {e.title}
              </label>
            </div>
          ))}
        </div>
        <Button className="w-full my-4">Submit</Button>
      </form>
    </div>
  );
};

export default AddHomeForm;
