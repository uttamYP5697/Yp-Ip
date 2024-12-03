import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TextBlock = () => {
    const editorRef = useRef(null);
    const quillInstance = useRef(null); // Store Quill instance
    const [editorContent, setEditorContent] = useState("");
    useEffect(() => {
        if (!quillInstance.current) {
            // Initialize Quill editor
            quillInstance.current = new Quill(editorRef.current, {
                theme: "snow",
                placeholder: "Write something...",
                modules: {
                    toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        [{ header: [1, 2, 3, false] }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link"],
                        ["clean"],
                    ],
                },
            });

            // Listen to text changes in the editor
            quillInstance.current.on("text-change", () => {
                setEditorContent(quillInstance.current.root.innerHTML);
            });
        }
    }, []);

    const handleSubmit = () => {
        console.log("Submitted HTML Content:", editorContent);
        console.log("Submitted Plain Text:", quillInstance.current.getText());
    };

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow p-4">

            <div ref={editorRef} className="min-h-[200px]"></div>

            <div className="mt-4">
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>

            <div className="mt-2 text-sm text-gray-600">
                Word count: {editorContent.split(/\s+/).filter(Boolean).length}
            </div>
        </div>
    );
};

export default TextBlock;
