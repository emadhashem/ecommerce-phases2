import { Button, TextField } from "@mui/material";
import React, { useState, useRef } from "react";

function SettingsPage() {
  const [imgFile, setimgFile] = useState<any>();
  const chooseFileRef = useRef<HTMLInputElement>(null);
  async function onFileChoosen(eve: React.ChangeEvent<HTMLInputElement>) {
    eve.stopPropagation();
    eve.preventDefault();
    const objectURL = await readBlob(eve.target.files![0]);
    setimgFile(objectURL);
  }
  function onClickBtn() {
    if (chooseFileRef.current) chooseFileRef.current.click();
  }
  async function readBlob(blob: File) {
    const objectURL = URL.createObjectURL(blob);
    return objectURL;
  }
  return (
    <div>
      <div className="img-container" style={{ height: 300, width: "100%" }}>
        <Button onClick={onClickBtn}>choose file</Button>
        <img style={{ width: "50%", height: "80%" }} src={imgFile} />
        <input
          ref={chooseFileRef}
          type={"file"}
          style={{ display: "none" }}
          onChange={onFileChoosen}
        />
      </div>
      <div className="input-container">
        <TextField placeholder="name" />
        <TextField placeholder="phone" />
        <TextField placeholder="email" />
        <TextField placeholder="password" />
        <TextField placeholder="confirm password" />
        <TextField placeholder="location" />
      </div>
      <div>
        <Button>Update</Button>
      </div>
    </div>
  );
}
export default SettingsPage;
