import React, { useState } from "react";
import "./style.scss";

const CreateProjectModal = ({ isOpen, onClose, saveProject }) => {
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [competitors, setCompetitors] = useState([]);
  const [competitorInput, setCompetitorInput] = useState("");
  const [clientLogo, setClientLogo] = useState(null);

  const addCompetitor = () => {
    if (competitorInput.trim() !== "") {
      setCompetitors([...competitors, competitorInput]);
      setCompetitorInput("");
    }
  };

  const removeCompetitor = (index) => {
    setCompetitors(competitors.filter((_, i) => i !== index));
  };

  const handleClientLogoChange = (e) => {
    const file = e.target.files[0];
    setClientLogo(file);
  };

  const handleSaveProject = () => {
    saveProject({
      name: projectName,
      clientLogo,
      clientName,
      competitors,
    });
    clearState();
  };

  const clearState = () => {
    setProjectName("");
    setClientName("");
    setCompetitors([]);
    setCompetitorInput("");
    setClientLogo(null);
  };

  const handleClose = () => {
    clearState();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <span>Create a New Project</span>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <label>
            Project Name:
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>
          <label>
            Client Logo:
            <input type="file" accept="image/*" onChange={handleClientLogoChange} />
          </label>
          <label>
            Client Name:
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </label>
          <label>
            Competitor Names:
            <div className="competitor-input">
              <input
                type="text"
                value={competitorInput}
                onChange={(e) => setCompetitorInput(e.target.value)}
              />
              <button onClick={addCompetitor}>Add</button>
            </div>
            <ul>
              {competitors.map((name, index) => (
                <li key={index}>
                  {name}{" "}
                  <button onClick={() => removeCompetitor(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </label>
        </div>
        <div className="modal-footer">
          <button className="cta-btn" onClick={handleSaveProject}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
