import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Select,
  Button,
  Box,
} from "@chakra-ui/react";

const CreatTable = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("OPEN");
  const timestamp = Date();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Submit form data to server
    const taskData = {
      title,
      description,
      tags,
      status,
      dueDate: new Date().toISOString(),
      timestamp: new Date().toLocaleString(),
    };
    const entries = JSON.parse(localStorage.getItem("entries")) || [];

    // Add new task to entries
    entries.push(taskData);

    // Save updated entries to local storage
    localStorage.setItem("entries", JSON.stringify(entries));

    // navigate to a different route after the form is submitted
    navigate("/taskform");
  };

  const navigate = useNavigate();

  return (
    <div >
    <Box
      w="40%"
      m="auto"
      p="5"
      mt="1.5rem"
      borderRadius="10px"
      boxShadow="rgba(0, 4, 15, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
    >
      <Text fontSize="3xl" fontWeight="600">
        Todo App
      </Text>
      <hr style={{ margin: "10px 0px" }} />
      <form onSubmit={handleSubmit}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Enter task title"
            maxLength={100}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel style={{marginTop:'10px'}}>Description</FormLabel>
          <Textarea
            placeholder="Enter task description"
            maxLength={1000}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormControl>
        <FormControl id="dueDate">
          <FormLabel style={{marginTop:'10px'}}>Due Date</FormLabel>
          <Input
            type="date"
            placeholder="Select due date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </FormControl>
        <FormControl id="tags">
          <FormLabel style={{marginTop:'10px'}}>Tags</FormLabel>
          <Input
            placeholder="Enter tags and press Enter"
            value={tags.join(",")}
            onChange={(event) => setTags(event.target.value.split(","))}
          />
        </FormControl>
        <FormControl id="status" isRequired>
          <FormLabel style={{marginTop:'10px'}}>Status</FormLabel>
          <Select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="OPEN">Open</option>
            <option value="WORKING">Working</option>
            <option value="DONE">Done</option>
            <option value="OVERDUE">Overdue</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" type="submit" mt="4">
          Save
        </Button>
      </form>
    </Box>
    </div>
  );
};

export default CreatTable;
