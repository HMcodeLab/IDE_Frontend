import React, { useState, useEffect, useRef } from "react";
import { useCodeMirror } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { autocompletion } from "@codemirror/autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const languages = [
  { name: "JavaScript", value: "javascript" },
  { name: "Python", value: "python" },
];

const CodeEditor = () => {
  const [code, setCode] = useState(
    '// Write your JavaScript code here\nconsole.log("Hello, World!");'
  );
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const editorRef = useRef();

  const onChange = (value) => {
    setCode(value);
  };

  const getLanguageExtension = () => {
    switch (language) {
      case "javascript":
        return [javascript(), autocompletion()];
      case "python":
        return [python(), autocompletion()];
      default:
        return [javascript(), autocompletion()];
    }
  };

  const { setContainer } = useCodeMirror({
    container: editorRef.current,
    value: code,
    extensions: getLanguageExtension(),
    theme: dracula,
    onChange: onChange,
  });

  useEffect(() => {
    if (editorRef.current) {
      setContainer(editorRef.current);
    }
  }, [editorRef.current]);

  const runCode = () => {
    try {
      if (language === "javascript") {
        const output = [];
        const originalLog = console.log;

        console.log = (message) => {
          output.push(message);
        };

        new Function(code)();
        console.log = originalLog;
        setOutput(output.join("\n"));
      } else if (language === "python") {
        setOutput("Python execution not implemented.");
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="editor-container h-full w-full bg-black rounded-lg overflow-hidden">
      <div className="language-selector flex justify-between items-center mb-4">
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            if (e.target.value === "javascript") {
              setCode(
                '// Write your JavaScript code here\nconsole.log("Hello, World!");'
              );
            } else if (e.target.value === "python") {
              setCode('# Write your Python code here\nprint("Hello, World!")');
            }
          }}
          className="ml-2 p-1 rounded"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.name}
            </option>
          ))}
        </select>
        <button
          onClick={runCode}
          className="flex items-center p-2  rounded-lg bg-white mt-2 mr-2 text-black "
        >
          <FontAwesomeIcon icon={faPlay} className="" />
        </button>
      </div>

      <div className="editor-section">
        <div
          ref={editorRef}
          style={{ height: "300px", border: "1px solid black" }}
        ></div>
      </div>

      {/* <div className="output-section mt-4 p-4 bg-gray-200 rounded">
        <h3 className="text-lg font-semibold">Code Output:</h3>
        <pre className="p-4 bg-gray-300 rounded">{output}</pre>
      </div> */}
    </div>
  );
};

export default CodeEditor;
