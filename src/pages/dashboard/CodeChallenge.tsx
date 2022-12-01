import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import React from "react";
import messagePopup from "../../services/message-popup";

export default function CodeChallenge() {
  const [output, setOutput] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const getLowestPositiveInteger = (arr: any[]) => {
    let lowestNum = 1;
    const sortedArr = arr.sort();
    for (const item of sortedArr) {
      if (item > 0) {
        if (lowestNum < item) {
          return `${lowestNum}`;
        } else {
          lowestNum = item + 1;
        }
      }
    }
    return `${lowestNum}`;
  };
  const handleClickResult = () => {
    if (inputValue) {
      const valArr = inputValue.split(",");
      if (!valArr.some((i) => !Number.isInteger(+i))) {
        const val = getLowestPositiveInteger(valArr.map((item) => +item));
        setOutput(val);
      } else {
        messagePopup("", "Please enter valid input", "error");
      }
    } else {
      messagePopup("", "Please enter number", "error");
    }
  };
  return (
    <div style={{ marginTop: "60px" }}>
      {/* <div className="row" style={{ marginTop: "25px", padding: "15px" }}>
        <div>
          <h3>Code Challenge</h3>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "300px",
            backgroundColor: "#438e74",
          }}
        ></div>
      </div> */}
      <div className="row" style={{ marginTop: "25px", padding: "15px" }}>
        <div style={{ marginBottom: "10px" }}>
          <h3>Data Collection</h3>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-username">Input</InputLabel>
              <Input
                id="standard-username"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <FormHelperText>
                Enter the values with comma(,) seperator eg: 1,2,3,4
              </FormHelperText>
            </FormControl>
          </div>
          <div className="col-sm-4">
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleClickResult}
            >
              Print Result
            </Button>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "25px", padding: "15px" }}>
        <div style={{ marginBottom: "10px" }}>
          <h3>Output</h3>
        </div>
        <div className="row">
          <div
            className="col-sm-3"
            style={{
              textAlign: "center",
              height: "65px",
              backgroundColor: "#438e74",
            }}
          >
            <p style={{ fontSize: "35px", color: "#fff" }}>{output}</p>
          </div>
        </div>
      </div>
      {/* <div className="row" style={{ marginTop: "25px", padding: "15px" }}>
        <div>
          <h3>Note::</h3>
        </div>
        <div
          style={{
            textAlign: "center",
            height: "300px",
            backgroundColor: "#438e74",
          }}
        >
          <p></p>
        </div>
      </div> */}
    </div>
  );
}
