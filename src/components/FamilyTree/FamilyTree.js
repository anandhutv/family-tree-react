import React from 'react';
import './FamilyTree.css';

const FamilyMember = ({ member }) => {
  return (
    <div className="family-member">
      <img className="profile-pic" src={member.profile_picture} alt={member.name} />
      <p>{member.name}</p>
      {member.spouse && member.spouse.length > 0 && (
        <div className="spouse">
          {member.spouse.map((sp) => (
            <div key={sp.id} className="family-member">
              <img className="profile-pic" src={sp.image} alt={sp.name} />
              <p>{sp.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FamilyNode = ({ data }) => {
  return (
    <div className="family-node">
      <FamilyMember member={data} />
      {data.children && data.children.length > 0 && (
        <div className="children">
          {data.children.map((child) => (
            <FamilyNode key={child.id} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const FamilyTree = ({ data }) => {
  return (
    <div className="family-tree">
      <FamilyNode data={data} />
    </div>
  );
};

export default FamilyTree;