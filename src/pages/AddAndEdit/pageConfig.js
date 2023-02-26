import defaultPhoto from "../../images/profile_image.png";
import earthPhoto from "../../images/earth-11530975450jod29w76lc.png";

export const addCountry = {     
  pageTopTitle: "Add new country...",
  inputs: [
    { id: "input_12asd", type: "text", special: "countryName", placeholder: "Enter country name", name: "name", label: "Country name", autoFocus: true },
    { id: "input_12sjd", type: "text", placeholder: "Enter capital name", name: "capital", label: "Capital name" },
    { id: "input_1983j", type: "text", placeholder: "Enter region name", name: "region", label: "Region name" },
    { id: "input_1sdjf", type: "number", placeholder: "Enter country population", name: "population", label: "Population" },
  ],
  initialData: {
    name: {common: ""},
    flags: {png: ""},
    region: "",
    capital: "",
    population: "",
  },
  btnText: "Add country",
  defaultPhoto: earthPhoto
};

export const editCountry = {     
  pageTopTitle: "Edit country...",
  inputs: [
    { id: "input_12asd", type: "text", special: "countryName", placeholder: "Enter country name", name: "name", label: "Country name", autoFocus: true },
    { id: "input_12sjd", type: "text", placeholder: "Enter capital name", name: "capital", label: "Capital name" },
    { id: "input_1983j", type: "text", placeholder: "Enter region name", name: "region", label: "Region name" },
    { id: "input_1sdjf", type: "number", placeholder: "Enter country population", name: "population", label: "Population" },
  ],
  initialData: {
    name: {common: ""},
    flags: {png: ""},
    region: "",
    capital: "",
    population: "",
  },
  btnText: "Update country",
  defaultPhoto: earthPhoto
};

export const addUser = {
  pageTopTitle: "Add new user...",
  defaultPhoto, 
  inputs: [
    { id: "input_1212", type: "text", placeholder: "Enter username", name: "displayName", label: "Username", autoFocus: true },
    { id: "input_1we23", type: "email", placeholder: "Enter email address", name: "email", label: "Email address" },
    { id: "input_12asd2", type: "password", placeholder: "Enter password", name: "password", label: "Password" }
  ],
  initialData: {
    displayName: "",
    email: "",
    password: "",
    photoURL: "",
  },
  btnText: "Add user"
};

export const editUser = {
  pageTopTitle: "Edit user...",
  defaultPhoto, 
  inputs: [
    { id: "input_1212", type: "text", placeholder: "Enter username", name: "displayName", label: "Username", autoFocus: true },
    { id: "input_1we23", type: "email", placeholder: "Enter email address", name: "email", label: "Email address" },
    { id: "input_12asd2", type: "password", placeholder: "Enter password", name: "password", label: "Password" }
  ],
  initialData: {
    displayName: "",
    email: "",
    password: "",
    photoURL: "",
  },
  btnText: "Update user"
};