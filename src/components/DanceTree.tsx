// src/components/DanceTree.tsx

import React, { useState } from "react";
import { DanceNode } from "../data/salsaMoveData";

interface TreeNodeProps {
  node: DanceNode;
}
import {
    Box,
    Text,
    Link,
    Collapse,
    IconButton,
    VStack,
    useDisclosure,
  } from "@chakra-ui/react";
  import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

  const TreeNode: React.FC<{ node: DanceNode }> = ({ node }) => {
    const { isOpen, onToggle } = useDisclosure();
    const hasChildren = node.children?.length;
  
    return (
      <Box ml={4} borderLeft="2px solid #ccc" pl={4}>
        <Box display="flex" alignItems="center" cursor={hasChildren ? "pointer" : "default"}>
          {hasChildren && (
            <IconButton
                icon={isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                variant="ghost"
                aria-label="Toggle"
                size="sm"
                onClick={onToggle}
                mr={2}
                />
          )}
          <Text fontWeight="bold">{node.title}</Text>
        </Box>
        <Text fontSize="sm">{node.description}</Text>
        {node.video && (
          <Link href={node.video} isExternal color="teal.500" fontSize="sm">
            ▶️ Watch Video
          </Link>
        )}
        <Collapse in={isOpen} animateOpacity>
          <VStack align="start" spacing={2} mt={2}>
            {hasChildren &&
              node.children!.map((child, idx) => <TreeNode key={idx} node={child} />)}
          </VStack>
        </Collapse>
      </Box>
    );
  };
  interface DanceTreeProps {
    data: DanceNode;
  }
  
  const DanceTree: React.FC<DanceTreeProps> = ({ data }) => {
    return (
      <div>
        <h2>Dance Moves Decision Tree</h2>
        <TreeNode node={data} />
      </div>
    );
  };

export default DanceTree;
