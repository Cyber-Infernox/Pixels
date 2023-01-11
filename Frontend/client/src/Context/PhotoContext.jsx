import { createContext, useReducer } from "react";
export const PhotosContext = createContext();

export const photosReducer = (state, action) => {
  switch (action.type) {
    case "SET_PHOTO":
      return {
        photos: action.payload,
      };
    case "CREATE_PHOTO":
      return {
        photos: [action.payload, ...state.workouts],
      };
    case "DELETE_PHOTO":
      return {
        photos: state.photos.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const PhotosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(photosReducer, {
    photos: null,
  });

  return (
    <PhotosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PhotosContext.Provider>
  );
};
