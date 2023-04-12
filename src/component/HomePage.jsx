import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  useColorModeValue,
  Td,
  Button,
  Input,
} from "@chakra-ui/react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import Modal from "antd/es/modal/Modal";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Pagination } from "antd";

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 30px auto;

  .ant-pagination-item-active {
    background-color: #3182ce;
    border-color: #3182ce;

    a {
      color: white;
    }
  }

  .ant-pagination-item-link {
    color: #3182ce;
  }

  .ant-pagination-next,
  .ant-pagination-prev {
    color: #3182ce;
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-color: #3182ce;
  }
`;

const HomePage = (page) => {
  const textColor = useColorModeValue("gray.700", "white");
  const data = JSON.parse(localStorage.getItem("entries")) || [];

  const [formData, setFormData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(data);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(formData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = formData.slice(startIndex, endIndex);

  const todosPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setFormData(data);
  }, []);

  const handleDelete = (index) => {
    const newData = formData.filter((item, i) => i !== index);
    localStorage.setItem("entries", JSON.stringify(newData));
    setFormData(newData);
  };
  // const [visible, setVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Edit = (id) => {
    setIsModalOpen(true);
    console.log(id);
    // const updatedId = formData.map((item, i) => i===id?setEditText(

    // ));
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [tableData, setTableData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("myTableData"));
    return storedData || [];
  });

  return (
    <Table
      w="80%"
      m="auto"
      marginTop={"30px"}
      variant="simple"
      color={textColor}
    >
      <Thead>
        <Tr my=".8rem" pl="0px" color="black" bgColor="blue.400">
          <Th pl="30px" color="white">
            Title
          </Th>
          <Th color="white">Description</Th>
          <Th color="white">Due Date</Th>
          <Th color="white">Tag</Th>
          <Th color="white">Status</Th>
          <Th color="white">Timestamp</Th>
          <Th color="white">Modify</Th>
          <Th color="white">Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {formData.map((item, index) => (
          <Tr key={index}>
            <Td>{item.title}</Td>
            <Td>{item.description}</Td>
            <Td>{item.dueDate}</Td>
            <Td>{item.tags}</Td>
            <Td>{item.status}</Td>
            <Td>{item.timestamp}</Td>
            <Td>
              <Button
                type="primary"
                onClick={() => {
                  Edit(index);
                }}
              >
                Edit
              </Button>
              <Modal
                title="Basic Details"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Input
                  value={isModalOpen?.title}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, title: e.target.value };
                    });
                    console.log(setIsModalOpen, "setISModalOpen");
                  }}
                />
                <Input
                  value={isModalOpen?.description}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, description: e.target.value };
                    });
                  }}
                />
                <Input
                  value={isModalOpen?.dueDate}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, dueDate: e.target.value };
                    });
                  }}
                />
                <Input
                  value={isModalOpen?.tags}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, tags: e.target.value };
                    });
                  }}
                />
                <Input
                  value={isModalOpen?.status}
                  onChange={(e) => {
                    setIsModalOpen((pre) => {
                      return { ...pre, status: e.target.value };
                    });
                  }}
                />
              </Modal>
            </Td>
            <Td>
              <Button colorScheme="red" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
        <StyledPagination
          pageSize={itemsPerPage}
          total={totalPages}
          onChange={handlePageChange}
        />
      </Tbody>
    </Table>
  );
};

export default HomePage;
