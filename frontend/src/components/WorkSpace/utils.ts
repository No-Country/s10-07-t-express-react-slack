export const generateId = (): string => Math.random().toString(36).substr(2, 18)

export const toolbarOptions = {
  toolbar: [
    [{ header: 1 }, { header: 2 }, { header: [3, 4, 5, 6] }, { font: [] }], // custom button values
    [{ size: [] }], // custom dropdown
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    //[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    //[{ direction: 'rtl' }], // text direction
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
  ],
}
