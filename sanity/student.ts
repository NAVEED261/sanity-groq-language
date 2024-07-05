export const Student = {
    title: "Student Profile",
    name: "student",
    type: "document",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Student Name",
      },
      {
        name: "age",
        type: "number",
        title: "Student Age",
      },
      {
        name: "gender",
        type: "string",
        title: "Gender",
        options: {
          list: [
            { title: "Male", value: "male" },
            { title: "Female", value: "female" },
            { title: "Transgender", value: "transgender" },
          ],
          layout: "dropdown",
        },
      },
      {
        name: "image",
        type: "image",
        title: "Student Image",
      },
      {
        name: "hobbies",
        type: "array",
        title: "Hobbies",
        of: [{ type: "string" }],
      },
      {
        name: "about",
        type: "array",
        title: "About",
        of: [{ type: "string" }],
        options: {
          layout: "tags",
        },
      },
      {
        name: "dob",
        type: "date",
        title: "Date of Birth",
      },
      {
        name: "documents",
        type: "file",
        title: "Upload File",
      },
      {
        name: "address",
        type: "object",
        title: "Address",
        fields: [
          { name: "houseNumber", type: "string", title: "House Number" },
          { name: "areaName", type: "string", title: "Area Name" },
          { name: "city", type: "string", title: "City" },
        ],
      },
      {
        name: "subjects",
        type: "array",
        title: "Choose Subject",
        of: [{ type: "string" }],
        options: {
          list: [
            { title: "JavaScript", value: "js" },
            { title: "TypeScript", value: "ts" },
            { title: "Next.js", value: "njs" },
            { title: "SQL", value: "sql" },
          ],
        },
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ],
  };
  