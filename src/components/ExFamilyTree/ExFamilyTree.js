import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import './ExFamilyTree.css';

const renderNode = (node) => (
  <div className="styled-node">
    <div className="node-content">
      <img className="styled-img" src={node.profile_picture || node.image} alt={node.name} />
      <span className="name">{node.name}</span>
      <span className="more-button">...</span>
    </div>
  </div>
);

const CoupleNode = ({ person, spouse }) => (
  <div className="couple-container">
    {renderNode(person)}
    {spouse && renderNode(spouse)}
  </div>
);

const FamilyTreeNode = ({ node }) => {
  const spouse = node.spouse && node.spouse[0];
  const children = node.children || [];

  return (
    <TreeNode label={<CoupleNode person={node} spouse={spouse} />}>
      {children.map((child) => (
        <FamilyTreeNode key={child.id} node={child} />
      ))}
    </TreeNode>
  );
};

const ExactFamilyTree = ({ data }) => {
  return (
    <div className="family-tree-container">
      <h1 className="family-tree-title">Family tree</h1>
      <div className="controls">
        <span>Show inheritance</span>
        <input type="checkbox" />
        <span>Update your position</span>
      </div>
      <Tree
        lineWidth={'2px'}
        lineColor={'rgb(204, 204, 204)'}
        lineBorderRadius={'10px'}
        lineHeight={'30px'}
        nodePadding={'5px'}
      >
        <FamilyTreeNode node={data} />
      </Tree>
    </div>
  );
};

export default ExactFamilyTree;