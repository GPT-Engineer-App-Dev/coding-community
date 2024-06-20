import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";

const Discussion = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("/api/topics");
        setTopics(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopics();
  }, []);

  const handleNewTopicSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/topics", { content: newTopic });
      setTopics([...topics, response.data]);
      setNewTopic("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Discussion Board</Heading>
      <form onSubmit={handleNewTopicSubmit}>
        <VStack spacing={4}>
          <FormControl id="new-topic">
            <FormLabel>New Topic</FormLabel>
            <Textarea value={newTopic} onChange={(e) => setNewTopic(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">Post Topic</Button>
        </VStack>
      </form>
      <VStack spacing={4} mt={6}>
        {topics.map((topic) => (
          <Box key={topic.id} p={4} borderWidth={1} borderRadius="lg" width="full">
            <Text>{topic.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Discussion;