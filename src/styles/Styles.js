import tw from 'twin.macro';

// ================ Forms ================
export const TopWrapper = tw`flex flex-col justify-center items-center h-screen`;
export const FormWrapper = tw`flex flex-col justify-center items-center h-screen`;
export const Label = tw`block text-gray-700 text-sm font-bold`;
export const InputField = tw`shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight
  focus:outline-none focus:shadow-focus`;

// ================ Buttons ================
export const GreenButton = tw`px-2 py-1 rounded-md border-2 border-green-500 text-green-500 shadow hover:bg-green-200
  hover:border-green-600 hover:text-green-600 transition-colors duration-200`;

// ================ Alerts ================
export const RedAlert = tw`p-4 border-2 border-red-500 bg-red-200 text-red-500 rounded-md`;
export const GreenAlert = tw`p-4 border-2 border-green-500 bg-green-200 text-green-500 rounded-md`;

// ================ Menubar ================
export const WhiteMenuBar = tw`w-screen h-8 flex items-center justify-between bg-white shadow-md`;
// ---------------- Menubar_Links ----------------
export const MenuBarLinkGreen = tw`inline-block py-1 px-2 text-green-600 cursor-pointer hover:bg-green-200
  transition-colors duration-200`;
export const MenuBarLinkGreenActive = tw`bg-green-200`;

// ================ Links ================
export const GreyLink = tw`text-gray-700 cursor-pointer`;
export const RedLink = tw`text-red-600 cursor-pointer`;

// ================ Main Menu Entry Card ================
export const MainMenuCard = tw`w-64 h-64 flex flex-col justify-center items-center bg-white rounded-md shadow-lg text-3xl
  text-gray-700 hover:bg-green-200 transition-colors duration-200`;
export const TodosCounter = tw`px-2 bg-green-500 rounded-md`;

// ================ Wrapper ================
export const VerticalFlexWrapper = tw`flex flex-col items-center`;

// ================ Todos ================
export const NewTodoInputField = tw`bg-transparent border-b border-green-400 text-2xl text-gray-700 focus:border-green-600 outline-none`;
export const TodosCard = tw`flex flex-col bg-white w-11/12 md:w-10/12 lg:w-9/12 xl:w-1/2 p-10 rounded-md shadow-lg`;
export const TodoItem = tw`flex items-center justify-between`;
export const TodoItemText = tw`text-2xl text-gray-700`;
export const TodoItemTextDone = tw`text-2xl text-green-500 line-through`;
export const DeleteTodo = tw`text-sm text-red-600 cursor-pointer`;

// ================ Notes ================
export const NoteThumbnail = tw`w-40 h-40 p-4 bg-white rounded-md shadow-md text-lg
text-gray-700 hover:bg-yellow-100 hover:text-gray-800 transition-colors duration-200`;
export const AddNoteButton = tw`w-40 h-40 p-4 flex items-center justify-center rounded-md border-2 border-green-500 shadow-md text-lg text-green-500 hover:bg-green-200
hover:border-green-600 hover:text-green-600 transition-colors duration-200`;
export const NoteCard = tw`flex flex-col items-center bg-yellow-100 rounded-md shadow-lg w-10/12 lg:w-3/4 xl:w-1/2`;
export const NoteTitle = tw`text-3xl text-gray-800`;
export const NoteTitleEditField = tw`text-3xl rounded-md bg-transparent text-gray-800 focus:outline-none focus:shadow-focus text-center w-4/5`;
export const NoteTextarea = tw`w-11/12 mb-8 resize-none min-h-64 rounded-md bg-transparent focus:outline-none focus:shadow-focus`;
export const SaveSuccessfulMessage = tw`text-green-500`;
