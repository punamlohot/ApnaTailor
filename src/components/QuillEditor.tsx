import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Quillprops {
  code: any;
  setCode: React.Dispatch<React.SetStateAction<any>>;
}

function QuillEditor({ code, setCode }: Quillprops) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const handleProcedureContentChange = (content: string) => {
    setCode(content);
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
        style={{ height: "100px" }}
        placeholder="Description : Describe the features , specifications of the product. Can add customization details"
      />
    </>
  );
}

export default QuillEditor;
