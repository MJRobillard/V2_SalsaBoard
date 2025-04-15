import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
  Position,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { danceTreeData, DanceNode } from "../data/salsaMoveData";
import { LeafDanceNode } from "./leafDanceNode";

let nodeIdCounter = 0;
const generateId = () => `node_${nodeIdCounter++}`;

interface TreeNodeWithId extends DanceNode {
  id: string;
  parentId?: string;
  expanded?: boolean;
  children?: TreeNodeWithId[];
}

const buildInitialTree = (root: DanceNode): TreeNodeWithId => {
  const id = generateId();
  return {
    ...root,
    id,
    expanded: true,
    children: root.children?.map((child) => buildSubtree(child, id)),
  };
};

const buildSubtree = (node: DanceNode, parentId: string): TreeNodeWithId => {
  const id = generateId();
  return {
    ...node,
    id,
    parentId,
    expanded: false,
    children: node.children?.map((child) => buildSubtree(child, id)),
  };
};

const flattenTreeToFlow = (
  node: TreeNodeWithId,
  nodes: Node[] = [],
  edges: Edge[] = [],
  depth = 0,
  siblingIndex = 0
): { nodes: Node[]; edges: Edge[] } => {
  const isLeaf = !node.children || node.children.length === 0;

  const x = siblingIndex * 300;
  const y = depth * 180;

  nodes.push({
    id: node.id,
    data: {
      label: node.title,
      description: node.description,
      video: node.video,
    },
    position: { x, y },
    type: isLeaf ? "leaf" : undefined,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
    style: {
      border: "1px solid #888",
      padding: 10,
      borderRadius: 8,
      background: "#fffefc",
      width: isLeaf ? 250 : 200,
    },
  });

  if (node.expanded && node.children) {
    node.children.forEach((child, i) => {
      edges.push({ id: `${node.id}->${child.id}`, source: node.id, target: child.id });
      flattenTreeToFlow(child, nodes, edges, depth + 1, i + siblingIndex);
    });
  }

  return { nodes, edges };
};

const SalsaMindMap = () => {
  const [treeRoot, setTreeRoot] = useState<TreeNodeWithId>(() => buildInitialTree(danceTreeData));
  const { nodes: flowNodes, edges: flowEdges } = useMemo(() => flattenTreeToFlow(treeRoot), [treeRoot]);

  const [nodes, setNodes, onNodesChange] = useNodesState(flowNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(flowEdges);

  useEffect(() => {
    setNodes(flowNodes);
    setEdges(flowEdges);
  }, [flowNodes, flowEdges]);

  const toggleNode = useCallback(
    (nodeId: string) => {
      const toggleRecursive = (node: TreeNodeWithId): TreeNodeWithId => {
        if (node.id === nodeId) {
          return { ...node, expanded: !node.expanded };
        }
        return {
          ...node,
          children: node.children?.map(toggleRecursive),
        };
      };
      setTreeRoot((prev) => toggleRecursive(prev));
    },
    [setTreeRoot]
  );

  const onNodeClick = (_: any, node: Node) => toggleNode(node.id);

  const nodeTypes = useMemo(() => ({ leaf: LeafDanceNode }), []);

  return (
    <div style={{ width: "80vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        
      >
        <Background gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default SalsaMindMap;
