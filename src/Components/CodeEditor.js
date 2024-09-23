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
  // { name: "Python", value: "python" },
];

const CodeEditor = ({ codesnippet ,setcompiledcode,Runsampletestcases}) => {
  const [code, setCode] = useState(codesnippet);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const editorRef = useRef();

  const onChange = (value) => {
    setCode(value);
    setcompiledcode(value)
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

  const { setContainer, view } = useCodeMirror({
    container: editorRef.current,
    value: code?.replace(/\\n/g, '\n'), // Convert `\n` to actual newlines
    extensions: getLanguageExtension(),
    theme: dracula,
    onChange: onChange,
  });

  useEffect(() => {
    if (editorRef.current) {
      setContainer(editorRef.current);
    }
  }, [editorRef.current]);

  useEffect(() => {
    if (view) {
      const defaultCode =
        language === "javascript"
          ? codesnippet?.replace(/\\n/g, '\n') // Convert `\n` to newlines
          : '# Write your Python code here\nprint("Hello, World!")';
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: defaultCode },
      });
    }
  }, [language, view, codesnippet]);

  const runCode = async() => {
   
      setcompiledcode(codesnippet)
    await Runsampletestcases()
  
  };

  return (
    <div className="editor-container h-full w-full bg-black rounded-lg overflow-hidden">
      <div className="language-selector flex justify-between items-center mb-4">
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setCode(
              e.target.value === "javascript"
                ? codesnippet?.replace(/\\n/g, '\n') // Convert `\n` to newlines for JS
                : '# Write your Python code here\nprint("Hello, World!")'
            );
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
          className="flex items-center p-2 rounded-lg bg-white mt-2 mr-2 text-black"
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

      
    </div>
  );
};

export default CodeEditor;
